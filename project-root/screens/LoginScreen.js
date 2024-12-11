import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const staticEmail = 'account@gmail.com';
    const staticPassword = 'login123';

    if (email === staticEmail && password === staticPassword) {
      // Correct navigation to Home screen after login
      navigation.navigate("Home");  // Ensure 'Home' is the name of the screen
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Log In</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          padding: 16,
          backgroundColor: '#f0f0f0',
          width: '100%',
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{
          padding: 16,
          backgroundColor: '#f0f0f0',
          width: '100%',
          borderRadius: 8,
          marginBottom: 24,
        }}
      />
      {errorMessage ? <Text style={{ color: 'red', marginBottom: 16 }}>{errorMessage}</Text> : null}
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 8,
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
