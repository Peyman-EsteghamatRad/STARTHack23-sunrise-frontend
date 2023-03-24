import React from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Logo from '../assets/MySportsLogo.png';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        height: 80,
        width: 400,
        color: '#020E18',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain',
        flex: 0.75,
    }
})
