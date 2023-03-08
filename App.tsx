import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ButtonGrid } from "./src/components/ButtonGrid/ButtonGrid";
import { BluetoothSheet } from "./src/components/BluetoothSheet/BluetoothSheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

const Container = styled.View`
  background-color: #010101;
`;

function App() {
  return (
    <Container>
      <ButtonGrid />
      <BluetoothSheet />
      <StatusBar style="auto" />
    </Container>
  );
}

export default gestureHandlerRootHOC(App);
