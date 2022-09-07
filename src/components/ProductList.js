import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Center, Text, Button, FlatList } from 'native-base';
import axios from 'axios';
import Config from "react-native-config";

export const ProductList = ({ navigation }) => {
    //flastlist of products

    const getProducts = async () => {
        // console.log(Config.API_URL)
        axios.get(`${Config.API_URL}/api/products/`)
            .then((res) => {
                console.log(res.data)
            })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <View>
            <Text>Product List</Text>
        </View>
    )

};