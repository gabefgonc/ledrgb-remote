import { PermissionsAndroid, Platform } from "react-native";
import { useMemo, useState } from "react";
import { BleManager, Device } from "react-native-ble-plx";
import * as ExpoDevice from "expo-device";

export interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  scanForPeripherals(): void;
  allDevices: Device[];
  connectDevice: (device: Device) => Promise<void>;
  connectedDevice: Device | null;
}

export function useBLE(): BluetoothLowEnergyApi {
  const bleManager = useMemo(() => new BleManager(), []);

  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: "Permissão para escanear dispositivos bluetooth",
        message:
          "Esse app requer permissão para escanear dispositivos bluetooth",
        buttonPositive: "OK",
      }
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Permissão para conectar à dispositivos bluetooh",
        message:
          "Esse app requer permissão para se conectar com dispositivos bluetooth",
        buttonPositive: "OK",
      }
    );

    const accessFineLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Permissão para acessar localização",
        message: "Esse app requer permissão para acessar localização",
        buttonPositive: "OK",
      }
    );

    return (
      bluetoothScanPermission === "granted" &&
      bluetoothConnectPermission === "granted" &&
      accessFineLocationPermission === "granted"
    );
  };

  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão para bluetooth",
            message: "Esse app requer permissão para bluetooth",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const isAndroid31PermissionsGranted =
          await requestAndroid31Permissions();
        return isAndroid31PermissionsGranted;
      }
    } else {
      return true;
    }
  };

  const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
    devices.includes(nextDevice);

  const scanForPeripherals = async () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log("error:", error.message);
      }
      if (device && !isDuplicateDevice(allDevices, device)) {
        setAllDevices([...allDevices, device]);
      }
    });
  };

  const connectDevice = async (device: Device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id);
      setConnectedDevice(deviceConnection);
      await deviceConnection.discoverAllServicesAndCharacteristics();
      bleManager.stopDeviceScan();
    } catch (e) {
      console.log("error in connection", e);
    }
  };

  return {
    scanForPeripherals,
    requestPermissions,
    allDevices,
    connectDevice,
    connectedDevice,
  };
}
