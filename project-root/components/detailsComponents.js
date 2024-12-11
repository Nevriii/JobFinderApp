import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsComponents = ({ pageKey }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const handleApplyNow = () => {
        Alert.alert(
            "Application Successfull",
            "Successfully applied for this Job!",
            [
                {
                    text: "OK",
                    onPress: () => console.log("Tapped OK"),
                },
            ]
        );
    };

    useEffect(() => {
        const loadBookmarkStatus = async () => {
            try {
                const bookmarks = JSON.parse((await AsyncStorage.getItem("bookmarks")) || "[]");
                setIsBookmarked(bookmarks.includes(pageKey)); // Check if `pageKey` is in the bookmarks
            } 
             catch (error) {
                console.error("Failed to load bookmark status:", error);
            }
        };

        loadBookmarkStatus();
    }, [pageKey]);

    const toggleBookmark = async () => {
        try {
            const newStatus = !isBookmarked;
            setIsBookmarked(newStatus);
    
            // Gets the current bookmarks
            let bookmarks = JSON.parse((await AsyncStorage.getItem("bookmarks")) || "[]");
    
            if (newStatus) {
                // Add the page key to the bookmarks if not already present
                if (!bookmarks.includes(pageKey)) {
                    bookmarks.push(pageKey);
                }
            } else {
                // Removes the page key from the bookmarks if it exists
                bookmarks = bookmarks.filter((key) => key !== pageKey);
            }
    
            // Save the updated bookmarks back to AsyncStorage
            await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    
            console.log(`Updated bookmarks: ${JSON.stringify(bookmarks)}`);
        } catch (error) {
            console.error("Failed to toggle bookmark status:", error);
        }
    };
    
    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.applyButton} onPress={handleApplyNow}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bookmarkButton} onPress={toggleBookmark}>
                <Icon 
                    name="bookmark"
                    size={40} 
                    color={isBookmarked ? "gold" : "gray"}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 20,
        zIndex: 1,
        paddingBottom: 10,
        marginLeft: 40
    },
    applyButton: {
        backgroundColor: "#FFBD59",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    applyButtonText: {
        fontSize: 18,
        color: "#35340F",
        fontWeight: "bold",
    },
    bookmarkButton: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
});

export default DetailsComponents;
