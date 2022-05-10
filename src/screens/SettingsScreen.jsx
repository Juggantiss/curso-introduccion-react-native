import { View, Text, Button } from "react-native";

export default function SettingsScreen({ navigation }) {
  const goToHome = () => navigation.navigate("Home");

  return (
    <View>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button onPress={goToHome} title="Ir a Ajustes" />
    </View>
  );
}
