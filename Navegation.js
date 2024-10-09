import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import FeedScreen from "./pantallas/FedScreens";
import VideoScreen from "./pantallas/videoscreens";
import ButtonsScreen from "./pantallas/ButtonScreen";
import StackScreen from "./pantallas/StackScrens";

// Iconos
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="inicio"
        >
        <HomeStackNavigator.Screen
            name="noticias"
            component={FeedScreen}
        />
        <HomeStackNavigator.Screen
            name="Stack"
            component={StackScreen}
            options={{
                headerBackTitleVisible: false,
            }}
        />

        </HomeStackNavigator.Navigator>
    )
}   

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: "green",
            }}
        >
            <Tab.Screen 
                name="inicio" 
                component={MyStack}
                options={{
                    tabBarLabel: 'inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home-filled" size={24} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
            <Tab.Screen 
                name="video" 
                component={VideoScreen}
                options={{
                    tabBarLabel: 'video',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="ondemand-video" size={24} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
            <Tab.Screen 
                name="botones" 
                component={ButtonsScreen}
                options={{
                    tabBarLabel: 'botones',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="gesture-tap-button" size={24} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}