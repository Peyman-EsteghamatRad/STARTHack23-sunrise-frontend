import HomeScreen from "./screens/Home";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import Streams from "./screens/Streams";
import VideoView from "./screens/VideoView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
let [fontsLoaded]= useFonts({
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-lightitalic': require('./assets/fonts/Poppins-LightItalic.ttf'),

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
          options={{headerShown: false}}

        />
        <Stack.Screen 
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="streams"
          component={Streams}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="videoView"
          component={VideoView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}