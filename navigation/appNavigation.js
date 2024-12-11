import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../project-root/screens/home';
import Bookmark from '../project-root/components/bookmark';
import WelcomeScreen from '../project-root/screens/WelcomeScreen';
import LoginScreen from '../project-root/screens/LoginScreen';
import SignUpScreen from '../project-root/screens/SignUpScreen';
import AIEngineer from '../project-root/screens/details/ai-engineer';
import ContentWriter from '../project-root/screens/details/content-writer';
import CraftsAndHobbies from '../project-root/screens/details/content-writer';
import DataAnalyst from '../project-root/screens/details/data-analyst';
import Freelancing from '../project-root/screens/details/freelancing';
import FullStackDeveloper from '../project-root/screens/details/fullstack-developer';
import GraphicDesigner from '../project-root/screens/details/graphic-designer';
import Journalist from '../project-root/screens/details/journalist';
import SalesAndMarketing from '../project-root/screens/details/sales-and-marketing';
import VideoEditor from '../project-root/screens/details/video-editor';
import VirtualAssistant from '../project-root/screens/details/virtual-assistant';
import WebDesignerDetails from '../project-root/screens/details/web-designer';
import WebDeveloper from '../project-root/screens/details/web-developer';
import Logout from '../project-root/screens/Logout';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Bookmark" options={{ headerShown: false }} component={Bookmark} />
        <Stack.Screen name="Settings" options={{ headerShown: false }} component={Logout} />

        {/* ----- Job List ----- */}
        <Stack.Screen
          name="AIEngineer"
          component={AIEngineer}
          options={{
            title: "AI Engineer Details",
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
            },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ContentWriter"
          component={ContentWriter}
          options={{
            title: "Content Writer Details",
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
            },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CraftsAndHobbies"
          component={CraftsAndHobbies}
          options={{
            title: "Crafts and Hobbies Details",
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
            },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DataAnalyst"
          component={DataAnalyst}
          options={{
            title: "Data Analyst Details",
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Freelancing"
          component={Freelancing}
          options={{
            title: "Freelancing Details", 
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
            },
            headerTintColor: '#000',
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="FullStackDeveloper"
          component={FullStackDeveloper}
          options={{
            title: "Full-Stack Developer Details", 
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center', 
              alignSelf: 'center', 
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="GraphicDesigner"
          component={GraphicDesigner}
          options={{
            title: "Graphic Designer Details", 
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center', 
              alignSelf: 'center', 
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="Journalist"
          component={Journalist}
          options={{
            title: "Journalist Details", 
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center', 
              alignSelf: 'center', 
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="SalesAndMarketing"
          component={SalesAndMarketing}
          options={{
            title: "Sales and Marketing Details",
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="VideoEditor"
          component={VideoEditor}
          options={{
            title: "Video Editor Details", 
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center', 
              alignSelf: 'center', 
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
            name="VirtualAssistant"
            component={VirtualAssistant}
            options={{
            title: "Virtual Assistant Details", 
              headerTransparent: true,
              headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center', 
              alignSelf: 'center', 
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="WebDesignerDetails"
          component={WebDesignerDetails}
          options={{
            title: "Web Designer Details", 
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center', 
              alignSelf: 'center', 
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="WebDeveloper"
          component={WebDeveloper}
          options={{
            title: "Web Developer Details", 
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center', 
              alignSelf: 'center', 
            },
            headerTintColor: '#000', 
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;