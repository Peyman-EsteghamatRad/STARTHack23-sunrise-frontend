import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import image from '../assets/LandingBackground.png';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        
      </View>
      <ImageBackground source={image} style={styles.image}>
      <Button
      title='login'
      onPress={() => navigation.navigate("login")}/>

      <Button 
      title='register'
      onPress={() => navigation.navigate("register")}/>
      <StatusBar style="auto" />
      <Text style={styles.headText}>Seems like you are not logged in...</Text>
      <Text style={styles.baseText}>Log in now or create a new account to start watching your favourite teams live!</Text>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041522',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 500,
    height: 500,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  bottomText: {
    
  },
  navBar: {

  }

});
