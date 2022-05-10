import { StyleSheet, Text, View } from "react-native";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar firstname="Itzel" lastname="Ruiz" />
      <Saludar firstname="Miguel Angel" lastname="Toledo" />
      <Saludar firstname="Alexis" lastname="Regalado" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
