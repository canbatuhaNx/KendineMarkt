import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Products from "./pages/Products";
import Detail from "./pages/Detail";

const Stack = createStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title: "KendineMarkt",
          headerStyle: {backgroundColor: "#34c74f"},
          headerTitleStyle: {color: "white"}
        }} />
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title: "Detay",
          headerStyle: {backgroundColor: "#34c74f"},
          headerTitleStyle: {color: "white"},
          headerTintColor: "white",
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;