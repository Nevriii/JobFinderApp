import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = () => {
        // Example validation logic
        if (!email || !password) {
            setErrorMessage('Please fill in all required fields.');
            return; // Stop further execution
        }

        // If validation passes, navigate to the Login page
        navigation.navigate('Login');
    };
    
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.backButtonContainer}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <ArrowLeftIcon size="30" color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/images/logo1.png')} 
                style={styles.logo} />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Enter Your Full Name'
            />
            <Text style={styles.label}>Email Address</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder='Enter Your Email Address'
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={[styles.input, styles.passwordInput]}
                secureTextEntry
                placeholder='Enter Password'
            />
            
            {/* Error message display */}
            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            
            <TouchableOpacity
                style={styles.signupButton}
                onPress={handleSignUp}>
                <Text style={styles.signupButtonText}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.orText}>
            Or
        </Text>
        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../assets/icons/google.png')} 
                    style={styles.socialIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35340F',
  },
  safeArea: {
    flex: 1,
  },
  backButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backButton: {
    padding: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 550,
    height: 180,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#785C04',
    paddingHorizontal: 32,
    paddingTop: 32,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    color: '#000',
    marginLeft: 8,
    marginBottom: 4,
  },
  input: {
    padding: 16,
    backgroundColor: '#f1f1f1',
    color: '#333',
    borderRadius: 30,
    marginBottom: 12,
  },
  passwordInput: {
    marginBottom: 28,
  },
  errorMessage: {
    color: '#FF0000',
    marginBottom: 8,
  },
  signupButton: {
    paddingVertical: 12,
    backgroundColor: '#FFBD59',
    borderRadius: 30,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  orText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  socialButton: {
    padding: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  loginText: {
    color: '#555',
    fontWeight: '600',
  },
  loginLink: {
    fontWeight: '600',
    color: '#FFBD59',
  },
});

export default SignUpScreen;
