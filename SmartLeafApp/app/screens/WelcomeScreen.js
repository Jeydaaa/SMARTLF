import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")} // replace with your logo file
        style={styles.logo}
      />
      <Text style={styles.title}>SmartLeaf</Text>
      <Text style={styles.subtitle}>Mango Leaf Disease Detection</Text>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.tagline}>Detect Early, Protect Naturally.</Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="arrow-forward-circle" size={50} color="#2e7d32" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8f3dc",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1b5e20",
  },
  subtitle: {
    fontSize: 14,
    color: "#388e3c",
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1b5e20",
  },
  tagline: {
    fontSize: 16,
    color: "#388e3c",
    marginTop: 5,
    marginBottom: 50,
  },
  nextButton: {
    marginTop: 20,
  },
});
