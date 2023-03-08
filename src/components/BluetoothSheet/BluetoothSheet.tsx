import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useBLE } from "../../hooks/useBLE";
import { Button, Text, ToastAndroid, View } from "react-native";
import { ScanButton } from "./styles";
import { useEffect } from "react";

export function BluetoothSheet() {
  const { allDevices, requestPermissions, scanForPeripherals } = useBLE();

  const connect = () => {
    ToastAndroid.show("Conectar", ToastAndroid.BOTTOM);
  };

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  return (
    <BottomSheet
      index={0}
      snapPoints={["10%", "60%"]}
      handleStyle={{ backgroundColor: "#1b1b1b" }}
      handleIndicatorStyle={{ backgroundColor: "#a297a7" }}
    >
      <BottomSheetScrollView style={{ backgroundColor: "#1b1b1b" }}>
        <Text style={{ fontSize: 32, color: "#ffffff" }}>
          Dispositivos Bluetooth
        </Text>
        <ScanButton onPress={scanForDevices}>
          <Text style={{ color: "#a297a7" }}>Escanear</Text>
        </ScanButton>
        {allDevices.map((device) => (
          <View>
            <Text style={{ color: "#ffffff" }}>{device.id}</Text>
            <Button title="connect" onPress={connect} />
          </View>
        ))}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}
