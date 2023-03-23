import HomeScreen from "./screens/Home";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import Streams from "./screens/Streams";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="login"
          component={LogIn}
        />
        <Stack.Screen 
          name="register"
          component={Register}
        />
        <Stack.Screen 
          name="streams"
          component={Streams}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}