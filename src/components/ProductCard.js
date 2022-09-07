import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View, Center, Text, Button, VStack, HStack } from 'native-base';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export const ProductCard = (props) => {
//product card for product list showing product name, price, category, and add to cart button
    const { details } = props;

    // console.log('PC', details.category.name)

    return (
        <HStack style={styles.container}>
            <VStack style={styles.details}>
                <Text>
                    Name: {details.name}
                </Text>
                <Text>
                    Price: ${details.price}
                </Text>
                <Text>
                    Category: {details.category.name}
                </Text>
            </VStack>
            <Button>
                <Text style={styles.text}>Add to Cart</Text>
            </Button>
        </HStack>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: responsiveHeight(15),
        width: '80%',
        alignSelf: 'center',
    },
    details: {
        width: '60%',
        alignSelf: 'center',
    }
});