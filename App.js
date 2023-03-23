import HomeScreen from "./screens/Home";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home"
          component={HomeScreen}
          options={{title: "MySpace"}}
        />
        <Stack.Screen 
          name="login"
          component={LogIn}
        />
        <Stack.Screen 
          name="register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}