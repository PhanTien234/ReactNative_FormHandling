import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("USA");

  const handleLogin = () => {
    if (validateInputs()) {
      // Add your form handling logic here (e.g., API calls for login).
      const message = `Email: ${email}\nPassword: ${password}\nCountry: ${selectedCountry}`;
      Alert.alert("Login Information", message);
    }
  };

  const validateInputs = () => {
    // Basic email format validation using a regular expression.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      Alert.alert("Error", "Email, password, and country are required.");
      return false;
    } else if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Picker
        style={styles.picker}
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
      >
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="UK" value="UK" />
        <Picker.Item label="Australia" value="Australia" />
      </Picker>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  picker: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default LoginScreen;