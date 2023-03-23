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
        height: 60,
        width: 375,
        color: '#020E18',
    },
    image: {
        width: 140,
        height: 40,
        flex: 1,
        resizeMode: 'center',
    }
})
