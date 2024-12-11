import React, { useState, useEffect } from "react";
import { FlatList, Text, TextInput, View, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

//----- Image Declarations -----//
const Image1 = require("../../assets/crafts-and-hobbies.png");
const Image2 = require("../../assets/customer-service.png");
const Image3 = require("../../assets/freelancing.png");
const Image4 = require("../../assets/icon.png");
const Image6 = require("../../assets/sales-and-marketing.png");
const Image7 = require("../../assets/virtual-assistant.png");
const Image8 = require("../../assets/web-designer.png");


const HomeScreen = ({ navigation }) => {

  //----- Declarations -----//
  const [activeTab, setActiveTab] = useState("All Jobs");
  const [findyouJob, setFindyourJob] = useState("Find your Great Job!");
  const [searchTerm, setSearchTerm] = useState('');
  const [activeScreen, setActiveScreen] = useState('Home'); // Track active screen

  //----- For Search bar -----// 
  const jobTitles = [
    "Virtual Assistant", "Graphic Designer", "Web Developer", "Data Analyst", "Content Writer",
    "Web Designer", "Freelancing", "Crafts and Hobbies", "Sales and Marketing", "AI Engineer",
    "Journalist", "Video Editor", "Full-Stack Developer"
  ];
//----------------------------//

  //----- Other Array -----//
  const popularJobs = [
    "Virtual Assistant",
    "Graphic Designer",
    "Web Developer",
    "Data Analyst",
    "Content Writer",
  ];
  const popularJobsImages = [Image7, Image8, Image3, Image2, Image1];

  const jobList = [
    "Web Designer",
    "Freelancing",
    "Crafts and Hobbies",
    "Sales and Marketing",
    "AI Engineer",
    "Journalist",
    "Video Editor",
    "Full-Stack Developer",
  ];
  const jobListImages = [
    Image8,
    Image3,
    Image1,
    Image6,
    Image7,
    Image6,
    Image2,
    Image8,
  ];
  const jobListSalary = [700, 500, 600, 500, 1000, 700, 400, 200];
  //-----------------------//


  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  //----- Handle search submission -----//
  const handleSearchSubmit = (event) => {
    const foundJob = jobTitles.find(job => job.toLowerCase() === searchTerm.toLowerCase());

    if (foundJob) {
      navigateToJobPage(foundJob);
    } else {
      Alert.alert("Job Not Found", `No details available for ${searchTerm}`);
    }
  };

  //----- Job List Navigation -----//
  const navigateToJobPage = (job) => {
    switch (job) {
      case "Virtual Assistant":
        navigation.navigate("VirtualAssistant");
        break;
      case "Graphic Designer":
        navigation.navigate("GraphicDesigner");
        break;
      case "Web Developer":
        navigation.navigate("WebDeveloper");
        break;
      case "Data Analyst":
        navigation.navigate("DataAnalyst");
        break;
      case "Content Writer":
        navigation.navigate("ContentWriter");
        break;
      case "Web Designer":
        navigation.navigate("WebDesignerDetails");
        break;
      case "Freelancing":
        navigation.navigate("Freelancing");
        break;
      case "Crafts and Hobbies":
        navigation.navigate("CraftsAndHobbies");
        break;
      case "Sales and Marketing":
        navigation.navigate("SalesAndMarketing");
        break;
      case "AI Engineer":
        navigation.navigate("AIEngineer");
        break;
      case "Journalist":
        navigation.navigate("Journalist");
        break;
      case "Video Editor":
        navigation.navigate("VideoEditor");
        break;
      case "Full-Stack Developer":
        navigation.navigate("FullStackDeveloper");
        break;
      default:
        Alert.alert("Navigation", `No details available for ${job}`);
    }
  };

  //----- Filter jobs based on the active tab -----//
  const filterJobs = () => {
    if (activeTab === "All Jobs") {
      return jobList.map((job, index) => ({
        job,
        image: jobListImages[index],
        salary: jobListSalary[index],
      }));
    } else if (activeTab === "Designer") {
      const designerJobs = ["Web Designer", "Crafts and Hobbies", "Video Editor"];
      return jobList
        .map((job, index) => ({
          job,
          image: jobListImages[index],
          salary: jobListSalary[index],
        }))
        .filter((jobData) => designerJobs.includes(jobData.job));
    } else if (activeTab === "Entrepreneurial") {
      const entrepreneurialJobs = ["Freelancing", "Sales and Marketing"];
      return jobList
      .map((job, index) => ({
        job,
        image: jobListImages[index],
        salary: jobListSalary[index]
      }))
      .filter((jobData) => entrepreneurialJobs.includes(jobData.job));
    } else if (activeTab === "Sales") {
      const salesJobs = ["Sales and Marketing"];
      return jobList
      .map((job, index) => ({
        job,
        image: jobListImages[index],
        salary: jobListSalary[index]
      }))
      .filter((jobData) => salesJobs.includes(jobData.job));
    } else if (activeTab === "Developer") {
      const develoeprJobs = ["AI Engineer", "Full-Stack Developer"];
      return jobList
      .map((job, index) => ({
        job,
        image: jobListImages[index],
        salary: jobListSalary[index]
      }))
      .filter((jobData) => develoeprJobs.includes(jobData.job));
    }

    return [];
  };

  useEffect(() => {
    // Update activeScreen based on the current route
    const currentRoute = navigation.getState().routes[navigation.getState().index].name;
    setActiveScreen(currentRoute); // Update state based on the current route
  }, [navigation]);

  const handleIconPress = (screen) => {
    setActiveScreen(screen); // Set the active screen based on icon pressed
    if (screen === 'Home') {
      navigation.navigate('Home');
    } 
    else if (screen === "Bookmark") {
      navigation.navigate("Bookmark");
    }
    else if (screen === "Settings") {
      navigation.navigate("Settings");
    }
  };

  const renderContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.contentHeaderContainer}>
          <View style={styles.textContainer}>
              <Text style={styles.header1}>Hello, User</Text>
              <Text style={styles.header2}>Find Your Great Job!</Text>
          </View>
            <TouchableOpacity style={styles.contentHeaderIcon} onPress={() => handleIconPress('Settings')}>
              <Icon name="account-circle" size={55} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <View style={styles.searchBoxContainer}>
              <Icon name="search" size={24} color="#ccc" style={styles.icon} onPress= {() => handleIconPress('Settings')} />
              <TextInput
                style={styles.searchBox}
                placeholder="Search a Job"
                placeholderTextColor="#ccc"
                value={searchTerm}
                onChangeText={handleSearchChange}
                onSubmitEditing={handleSearchSubmit}
              />
            </View>
          </View>

          <Text style={styles.mostpopularTitle}>Most Popular</Text>
          <FlatList
            data={popularJobs}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.mostpopularContainer}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  //----- Navigation logic for tapping on a job -----//
                  if (item === "Virtual Assistant") {
                    navigation.navigate("VirtualAssistant");
                  } else if (item === "Graphic Designer") {
                    navigation.navigate("GraphicDesigner");
                  } else if (item === "Web Developer") {
                    navigation.navigate("WebDeveloper");
                  } else if (item === "Data Analyst") {
                    navigation.navigate("DataAnalyst");
                  } else if (item === "Content Writer") {
                    navigation.navigate("ContentWriter");
                  } else {
                    Alert.alert("Navigation", `No details available for ${item}`);
                  }
                }}
                style={styles.mostpopularContainerContent}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={popularJobsImages[index]}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.mostpopularText}>{item}</Text>
                <Text style={styles.mostpopularTextLocation}>TIP - Cubao, QC</Text>
                <View style={styles.mostpopularTextRequirementsContainer}>
                  <Text style={styles.mostpopularTextRequirements}>Full Time</Text>
                  <Text style={styles.mostpopularTextRequirements}>Remote</Text>
                  <Text style={styles.mostpopularTextRequirements}>Senior</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.jobFilterContainer}>
              <TouchableOpacity
                style={[
                  styles.jobFilterContent,
                  activeTab === "All Jobs" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("All Jobs")}
              >
                <Text
                  style={[
                    styles.jobFilterText,
                    activeTab === "All Jobs" && styles.activeText,
                  ]}
                >
                  All Jobs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.jobFilterContent,
                  activeTab === "Designer" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("Designer")}
              >
                <Text
                  style={[
                    styles.jobFilterText,
                    activeTab === "Designer" && styles.activeText,
                  ]}
                >
                  Designer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.jobFilterContent,
                  activeTab === "Entrepreneurial" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("Entrepreneurial")}
              >
                <Text
                  style={[
                    styles.jobFilterText,
                    activeTab === "Entrepreneurial" && styles.activeText,
                  ]}
                >
                  Entrepreneurial
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.jobFilterContent,
                  activeTab === "Sales" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("Sales")}
              >
                <Text
                  style={[
                    styles.jobFilterText,
                    activeTab === "Sales" && styles.activeText,
                  ]}
                >
                  Sales
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.jobFilterContent,
                  activeTab === "Developer" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("Developer")}
              >
                <Text
                  style={[
                    styles.jobFilterText,
                    activeTab === "Developer" && styles.activeText,
                  ]}
                >
                  Developer
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <FlatList
            data={filterJobs()}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.job === "Web Designer") {
                    navigation.navigate("WebDesignerDetails");
                  } else if (item.job === "Freelancing") {
                    navigation.navigate("Freelancing");
                  } else if (item.job === "Crafts and Hobbies") {
                    navigation.navigate("CraftsAndHobbies");
                  } else if (item.job === "Sales and Marketing") {
                    navigation.navigate("SalesAndMarketing")
                  } else if (item.job === "AI Engineer") {
                    navigation.navigate("AIEngineer")
                  } else if (item.job === "Journalist") {
                    navigation.navigate("Journalist")
                  } else if (item.job === "Video Editor") {
                    navigation.navigate("VideoEditor")
                  } else if (item.job === "Full-Stack Developer") {
                    navigation.navigate("FullStackDeveloper")
                  } else {
                    Alert.alert("Navigation", `No Navigating to details for ${item.job}`);
                  }
                }}
                style={styles.jobListContainer}
              >
                <View style={styles.iconContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={item.image}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                </View>
                <Text style={styles.jobListText}>{item.job}</Text>
                <Text style={styles.jobListLocation}>TIP - Cubao, QC</Text>
                <Text style={styles.salaryText}>{`₱${item.salary}k`}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
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
              color= 'gold'
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
  mainContainer: {
    flex: 1,  // This allows the container to take the full screen height
    position: 'relative', // Positioning for the "Apply Now" button
  },
  buttonContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '7%',
      padding: 30,
      backgroundColor: '#35340F',
      alignItems: 'center',
      justifyContent: 'center'
  },
  container: {
    backgroundColor: '#785C04',
    maxHeight: '100%',
    paddingBottom: '10%',
    position: 'static',
    flexGrow: 1,
    padding: 20,
  },
  contentContainer: {
    paddingTop: 20,
    flexGrow: 1,
    paddingBottom: '10%',
  },
  contentHeaderContainer: {
    flexDirection: 'row', // Align elements horizontally
    justifyContent: 'space-between', // Space between text and icon
    alignItems: 'center', // Vertically align the items
  },
  contentHeaderIcon: {
    flexDirection: 'column',
  },
  textContainer: {
    flexDirection: 'column', // Stack the text vertically
  },

  imageContainer: { 
    backgroundColor: "#FFBD59", 
    borderRadius: 10, 
    width: 70,
    height: 70,
    marginBottom: 5, 
    overflow: 'hidden',
    }, 
  image: { 
    width: '100%', 
    height: '100%', 
  },
  activeTab: {
    backgroundColor: '#FFBD59',
    color: "black"
  },
  activeText: {
      color: 'white'
  },

  // Header
  header1: {
    fontSize: 17,
    fontWeight: "medium",
    paddingTop: 40,
    color: '#FFFFFF'
  },
  header2: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  searchBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    height: 50,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
  searchBox: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
  filterIcon: {
    marginLeft: 10,
  },

  // Most Popular Section
  mostpopularContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
  },
  mostpopularContainerContent: {
    padding: 10,
    marginRight: 15,
    backgroundColor: "#35340F",
    borderRadius: 10,
    width: 'auto',
    height: 'auto',
    justifyContent: "center",
  },
  mostpopularTitle: {
    paddingTop: 20,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  mostpopularText: {
    color: "#FFBD59",
    fontSize: 15,
    textAlign: "left",
  },
  mostpopularTextLocation: {
    color: "#FFBD59",
    fontSize: 12,
    textAlign: "left",
    paddingTop: 5,
  },
  mostpopularTextRequirementsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  mostpopularTextRequirements: {
    color: "white",
    fontSize: 10,
    backgroundColor: "#FFBD59",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  // Job Filter
  jobFilterContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: "row",
    marginHorizontal: 1,
    flexGrow: 1
  },
  jobFilterContent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#35340F",
    borderRadius: 15,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  jobFilterText: {
    color: "#FFFFFF",
    fontSize: 13,
    textAlign: "center",
  },

  // Job List
  listContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexGrow: 1
  },
  iconContainer: {
    justifyContent: 'space-around'
  },
  jobListContainer: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#35340F",
  },
  jobListText: {
    color: "#FFBD59",
    fontSize: 13,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobListLocation: {
    color: "#FFBD59",
    fontSize: 12,
    textAlign: "left",
    marginBottom: 5,
  },
  salaryText: {
    color: "#FFFFFF",
    fontSize: 11,
    textAlign: "left",
  },
});

export default HomeScreen;
