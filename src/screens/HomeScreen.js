import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Center, Text, Button } from 'native-base';
import { ProductList } from '../components/ProductList';

export const HomeScreen = ({ navigation }) => {
    return (
        <Center>
            <Text>Home Screen</Text>
            <ProductList />
            <Button onPress={() => navigation.navigate('Cart')}>
                <Text>Go to Cart</Text>
            </Button>
        </Center>
    );
};