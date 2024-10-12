import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text , View } from "react-native";

import First from "./First";
import Second from "./Second";
import UserProvider from "./Context/Provider";

const Tab = createBottomTabNavigator()

function App(){
  return (
    <UserProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FirstScreen" component={First}/>
        <Tab.Screen name="SecondScreen" component={Second}/>
      </Tab.Navigator>
    </NavigationContainer>
    </UserProvider>
  )
}

export default App;