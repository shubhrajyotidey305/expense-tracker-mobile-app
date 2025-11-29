import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "./src/app/pages/Login";
import { NavigationContainer } from "@react-navigation/native";


function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
