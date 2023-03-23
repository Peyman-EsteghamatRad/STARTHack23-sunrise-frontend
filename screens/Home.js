import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import image from '../assets/LandingBackground.png';
import Header from '../components/header';
import { TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Header/>
      </View>
      <ImageBackground source={image} style={styles.image}>
      
      <View style={{alignContent: 'center'}}>
        <Text style={styles.headText}>
          Seems like you are not logged in yet...
        </Text>
        <View style={{ flexDirection:"row", alignContent: 'center', justifyContent: 'center', gap: 30}}>
            <TouchableOpacity style={styles.buttonStyleLogin} onPress={() => navigation.navigate("login")}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyleRegister} onPress={() => navigation.navigate("register")}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>

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
    resizeMode: 'contain',
    justifyContent: 'center',
    backgroundColor: '#041522'
  },
  headText: {
    paddingTop: 200,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 30,
    fontFamily: 'poppins-bold',
  },
  buttonStyleLogin: {
    width: 95,
    height: 60,
    padding: 20,
    backgroundColor: '#FF8515',
    borderRadius: 20,
  },
  buttonStyleRegister: {
    width: 100,
    height: 60,
    padding: 20,
    backgroundColor: '#7C15FF',
    borderRadius: 20,
    
  },
  buttonText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'poppins-bold',
  }
  

});
