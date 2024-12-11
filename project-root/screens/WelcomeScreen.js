import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Import StyleSheet
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function App() {
    const navigation = useNavigation(); // Get the navigation object

    return (
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={[styles.logoContainer, { justifyContent: 'flex-start', paddingTop: 100 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image source={require("../../assets/images/logo.png")} style={{ width: 400, height: 500 }} />
            </View>
          </View>
        </View>
  
        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.title}>
            Join Us & Explore Thousands of <Text style={styles.highlight}>Great Jobs</Text>
          </Text>
  
          {/* Button */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('SignUp')} // Navigate to SignUpScreen
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
  
          {/* Pagination */}
          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#785C04", // Main background color
    justifyContent: "center",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#35340F", // Header background
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  logoContainer: {
    alignItems: "center",
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 27,
    textAlign: "center",
    color: "#fff",
    marginBottom: 25,
  },
  highlight: {
    fontWeight: "bold",
    color: "#ffb74a",
  },
  button: {
    backgroundColor: "#ffb74a",
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 20,
    marginTop: 60,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  pagination: {
    flexDirection: "row",
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 3,
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: "#ffb74a",
    opacity: 1,
  },
});