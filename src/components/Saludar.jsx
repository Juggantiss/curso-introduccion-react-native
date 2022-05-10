import { Text } from "react-native";

export default function Saludar({ firstname = "Juan", lastname = "Martinez" }) {
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}
