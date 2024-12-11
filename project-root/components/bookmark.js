import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";


const Bookmark = ({ navigation }) => {
  const [bookmarkedPages, setBookmarkedPages] = useState([]);
  const [activeScreen, setActiveScreen] = useState('Bookmark');

  // Fetch bookmarks from AsyncStorage
  useEffect(() => {
    const fetchBookmarks = async () => {
        try {
            // Fetch the bookmarks from AsyncStorage
            const bookmarks = JSON.parse((await AsyncStorage.getItem("bookmarks")) || "[]");
            setBookmarkedPages(bookmarks);
        } catch (error) {
            console.error("Failed to fetch bookmarks:", error);
        }
    };

    // Re-fetch bookmarks when the page is focused
    const unsubscribe = navigation.addListener("focus", fetchBookmarks);

    // Cleanup the listener when the component unmounts
    return unsubscribe;
}, [navigation]);



  const renderContent = ({ item }) => (
    <View style={styles.bookmarkedContentContainer}>
      <Text style={styles.bookmarkedText}>{item}</Text>
    </View>
  );

  const handleIconPress = (screen) => {
    setActiveScreen(screen);
    if(screen === 'Home') {
      navigation.navigate('Home')
    }
    else if(screen === 'Bookmark') {
      navigation.navigate('Bookmark');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarkedPages}
        keyExtractor={(item) => item}
        renderItem={renderContent}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No List of Bookmarks.</Text>
        }
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
              color= 'gold'
            />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButtonIcon}
              onPress= {() => handleIconPress('settings')}
            >
              <Icon
                name="settings"
                size={40}
                color= 'gray'
              />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  bottomButtonIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
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
  container: {
    backgroundColor: "#785C04",
    padding: 20,
    flexGrow: 1,
    position: 'relative'
  },
  bookmarkedContentContainer: {
    margin: 5,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#35340F",
  },
  bookmarkedText: {
    color: "#FFBD59",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Bookmark;
