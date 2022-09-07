import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Center, Text, Button } from 'native-base';
import { ProductList } from '../components/ProductList';
import { BaseTemplate } from '../components/Templates/BaseTemplate';

export const HomeScreen = ({ navigation }) => {
    return (
        <BaseTemplate>
            <ProductList />
            <Button onPress={() => navigation.navigate('Cart')}>
                Go to Cart
            </Button>
        </BaseTemplate>
    );
};