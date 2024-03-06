import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../stack/Home";
import Search from "../stack/Search";
import Profile from "../stack/Profile";
import { Icon } from "@rneui/base";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        return (
                            <Icon name={iconName} type={iconType} size={size} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                    headerShown: true,
                    headerTitle: route.name,
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home" }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{ title: "Search" }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: "Profile" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const getIconName = (routeName, focused) => {
    let iconName = "";
    let iconType = "material-community";
    switch (routeName) {
        case "Home":
            iconName = focused ? "home" : "home-outline";
            break;
        case "Search":
            iconName = focused ? "magnify" : "magnify";
            break;
        case "Profile":
            iconName = focused ? "account" : "account-outline";
            break;
    }
    return { iconName, iconType };
};
