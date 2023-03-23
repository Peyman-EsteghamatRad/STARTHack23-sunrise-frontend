import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.image}>

            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: '#020E18',
        justifyContent: 'space-between',
    },
    image: {
        alignSelf: 'left',
    }


})