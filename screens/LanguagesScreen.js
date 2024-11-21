import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LanguagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Мои языки программирования:</Text>
      <Text style={styles.language}>- JavaScript</Text>
      <Text style={styles.language}>- Python</Text>
      <Text style={styles.language}>- C++</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  language: {
    fontSize: 16,
  },
});

export default LanguagesScreen;
