import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View, Center, Text, Button, VStack } from 'native-base';

export const ProductCard = (props) => {
//product card for product list showing product name, price, category, and add to cart button
    const { details } = props;

    return (
        <VStack>
            <Text>
                {details.name}
            </Text>
            <Text>
                {details.price}
            </Text>
            <Text>
                {details.category}
            </Text>
            <Button>
                Add To Cart
            </Button>
        </VStack>
    )
};