import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Center, Text, Button } from 'native-base';

export const CartScreen = ({ navigation }) => {
    return (
        <Center>
            <Text>Cart Screen</Text>
            <Button onPress={() => navigation.navigate('Home')}>
                <Text>Go to Home</Text>
            </Button>
        </Center>
    );
}