import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import DetailsComponents from "../../components/detailsComponents";

const Image8 = require("../../../assets/web-designer.png");
const Image9 = require("../../../assets/cah.jpg");

const Web_Designer = () => {

  const [activeTab, setActiveTab] = useState("Description");

  const scrollContent = () => {

    return (
      <>
        <View style={styles.container}>
          <View style={styles.coverPhotoContainer}>
            <Image source={Image9} style={styles.coverPhoto} />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <View style={styles.imageContainer}>
                <Image source={Image8} style={styles.image} resizeMode="cover" />
              </View>
              <View style={styles.headerContainer2}>
                <Text style={styles.headerTextTitle}>Web Designer</Text>
                <Text style={styles.headerTextLocation}>TIP - Cubao, QC</Text>
                <View style={styles.headerRequirementsContainer}>
                  <Text style={styles.headerrTextRequirements}>Full Time</Text>
                  <Text style={styles.headerrTextRequirements}>Remote</Text>
                  <Text style={styles.headerrTextRequirements}>Senior</Text>
                </View>
              </View>
            </View>

            <View style={styles.switchBoxContainer}>
              {/* Description Tab */}
              <TouchableOpacity
                style={[
                  styles.switchBox,
                  activeTab === "Description" && styles.activeTab, // Apply active style
                ]}
                onPress={() => setActiveTab("Description")} // Set active tab
              >
                <Text
                  style={[
                    styles.switchBoxText,
                    activeTab === "Description" && styles.activeText, // Change text color if active
                  ]}
                >
                  Description
                </Text>
              </TouchableOpacity>

              {/* Company Tab */}
              <TouchableOpacity
                style={[
                  styles.switchBox,
                  activeTab === "Company" && styles.activeTab, // Apply active style
                ]}
                onPress={() => setActiveTab("Company")} // Set active tab
              >
                <Text
                  style={[
                    styles.switchBoxText,
                    activeTab === "Company" && styles.activeText, // Change text color if active
                  ]}
                >
                  Company
                </Text>
              </TouchableOpacity>
            </View>

            {/* When Description is pressed */}
            {activeTab === "Description" && (
              <View>
                <Text style={styles.info}>Job</Text>
                <Text style={styles.infoContent}>
                  Virtual assistant jobs in the Philippines involve providing 
                  remote support to businesses and professionals. Common responsibilities 
                  include managing emails, scheduling appointments, handling customer 
                  service inquiries, and managing social media accounts.
                </Text>
                
                <Text style={styles.info}>Requirements</Text>
                <Text style={styles.infoContent}>
                  <Text style={{ color: 'white', fontSize: 15 }}>{"\u2022"}</Text> Basic Computer Skills: Proficiency in using computers and navigating the internet is essential. {"\n"}{"\n"}
                  <Text style={{ color: 'white', fontSize: 15 }}>{"\u2022"}</Text> Communication Skills: Strong verbal and written communication skills in English{"\n"}{"\n"}
                  <Text style={{ color: 'white', fontSize: 15 }}>{"\u2022"}</Text> Organizational and Time Management Skills: The ability to manage tasks efficiently, prioritize responsibilities, and meet deadlines is vital for success in a virtual assistant role.{"\n"}{"\n"}
                  <Text style={{ color: 'white', fontSize: 15 }}>{"\u2022"}</Text> Adaptability and Willingness to Learn: A willingness to learn new technologies and adapt to different software tools and platforms is important, as the virtual assistant landscape is constantly evolving.
                </Text>
                </View>
            )}

            {/* When Company is pressed */}
            {activeTab === "Company" && (
              <View>
                <Text style={styles.info}>About</Text>
                <Text style={styles.infoContent}>
                  We craft visually stunning, user-friendly websites tailored to your unique 
                  vision and goals. Our team combines creativity with cutting-edge technology
                  to deliver exceptional web designs that elevate your brand and captivate 
                  your audience. From startups to established businesses, we ensure your 
                  online presence stands out in a crowded digital landscape.
                </Text>
              </View>
            )}
          </View>
          


        </View>
      </>
    );
  }

  return (
    <View style={styles.mainContainer}>
        <FlatList
            data={[{ key: "content" }]}
            keyExtractor={(item) => item.key}
            renderItem={() => scrollContent()}
            contentContainerStyle={{ flexGrow: 1 }}
        />
        {/* DetailsComponents button always at the bottom */}
        <View style={styles.buttonContainer}>
            <DetailsComponents pageKey="Web Design"/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  mainContainer: {
    flex: 1,  // This allows the container to take the full screen height
    position: 'relative', // Positioning for the "Apply Now" button
},
buttonContainer: {
    position: 'static',
    bottom: 0,
    width: '100%',
    height: '7%',
    padding: 30,
    backgroundColor: '#785C04',
},
  container: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  coverPhotoContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentContainer: {
    marginTop: -80,
    paddingTop: 35, 
    paddingHorizontal: 20, 
    backgroundColor: '#35340F',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5, 
    minHeight: '100%',
    paddingBottom: 20,
  },
  
  //----- Header -----//
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12
  },
  headerContainer2: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: "center"
  },
  imageContainer: {
    backgroundColor: "#FFBD59",
    borderRadius: 10,
    width: 60,
    height: 60,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  headerTextTitle: {
    color: '#FFBD59',
    fontSize: 20,
    textAlign: "left"
  },
  headerTextLocation: {
    color: '#FFBD59',
    fontSize: 15,
    textAlign: "left"
  },
  headerRequirementsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  headerrTextRequirements: {
    color: "white",
    fontSize: 12,
    backgroundColor: "#FFBD59",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  //----- Description and Company -----//
  switchBoxContainer: {
    flexDirection: "row",
    backgroundColor: "#FFBD59",
    borderRadius: 5,
    padding: 5,
    marginTop: 20, // Add margin to separate from the header
  },
  switchBox: {
    flex: 1, // Make the tabs take equal width
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: "#35340F", // Highlight color for the active tab
  },
  switchBoxText: {
    color: "white",
    fontSize: 13,
  },
  activeText: {
    color: "#FFFFFF", // Text color for the active tab
  },
      
  //----- infoContent -----//
  info: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: 'medium',
    paddingTop:20
  },
  infoContent: {
    color: "#FFBD59",
    fontSize: 13,
    paddingBottom: 10,
    paddingTop: 10
  },

})

export default Web_Designer;