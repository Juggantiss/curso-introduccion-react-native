import { Text } from "react-native";

export default function Saludar({ name = "Juan Martinez" }) {
  return <Text>Hola {name}</Text>;
}
