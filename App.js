import HomeScreen from "./screens/Home";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import Streams from "./screens/Streams";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {
let [fontsLoaded]= useFonts({
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
});

  if (!fontsLoaded) {
    return (
    <AppLoading/>
    )
  }

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