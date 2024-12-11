import React, { useState } from  'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from  'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Logout = ({ navigation }) => {
    const [activeScreen, setActiveScreen] = useState('Bookmark');

    const handleIconPress = (screen) => {
        setActiveScreen(screen);
        if(screen === 'Home') {
            navigation.navigate('Home');
        }
        else if (screen === 'Bookmark') {
            navigation.navigate('Bookmark');
        }
        else if (screen === 'Settings') {
            navigation.navigate('Settings');
        }
        else if (screen === 'Login') {
            navigation.navigate('Login');
        }
    };

    const renderContent = () => {
        return (
            <View style={styles.logoutContentContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => handleIconPress('Login')}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    };
    

    return(
        <View style={styles.container}>
        <FlatList
            data={[{ key: "content" }]} // Dummy data for FlatList
            keyExtractor={(item) => item.key}
            renderItem={renderContent}
            contentContainerStyle={{ flexGrow: 1 }}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.bottomButtonNavigator}>
            <TouchableOpacity
                style={styles.bottomButtonIcon}
                onPress= {() => handleIconPress('Home')}
            >
                <Icon
                name="home"
                size={40}
                color= 'gray'
            />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.bottomButtonIcon}
                onPress= {() => handleIconPress('Bookmark')}
            >
                <Icon
                name="bookmark"
                size={40}
                color= 'gray'
                />
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.bottomButtonIcon}
                onPress= {() => handleIconPress('Settings')}
                >
                <Icon
                    name="settings"
                    size={40}
                    color= 'gold'
                />
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    bottomButtonNavigator: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        zIndex: 1,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '112%',
        height: '7%',
        padding: 30,
        backgroundColor: '#35340F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomButtonIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    buttonText: {
        fontSize: 18,
        color: "#35340F",
        fontWeight: "bold",
    },
    container: {
        backgroundColor: "#785C04",
        padding: 20,
        flexGrow: 1,
        position: 'relative'
    },
    logoutContentContainer: {
        flex: 1, // Takes full space
        alignItems: "center", // Centers horizontally
        justifyContent: "center", // Centers vertically
        paddingTop: "70%"
    },
    logoutButton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: "#FFBD59", // Button color
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        color: "#35340F",
        fontWeight: "bold",
    },
});

export default Logout;