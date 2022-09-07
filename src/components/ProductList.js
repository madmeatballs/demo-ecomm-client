import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Center, Text, Button, FlatList, VStack, Spinner } from 'native-base';
import axios from 'axios';
import Config from "react-native-config";
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/slice/productsSlice';
import { ProductCard } from './ProductCard';
import { ProductListHeader } from './ProductListHeader';

export const ProductList = ({ navigation }) => {
    //flastlist of products

    const [ loading, setLoading ] = useState(true);

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const getProducts = async () => {
        // console.log(Config.API_URL)
        axios.get(`${Config.API_URL}/api/products/`)
            .then((res) => {
                //set product in redux toolkit
                // console.log(res.data)
                dispatch(setProducts(res.data))
                setLoading(false)
            })
    }

    useEffect(() => {
        getProducts();
    }, [])

    // useEffect(() => {

    // },[products])

    return (
        <View style={{
            width: '80%',
            height: '95%',
            alignSelf: 'center',
            justifyContent: 'center',
        }}>
            {loading 
            ?   
                <Center>
                    <VStack>
                        <Text>Loading...</Text>
                        <Spinner />
                    </VStack>
                </Center>
            :   
                <FlatList
                    ListHeaderComponent={() => <ProductListHeader />}
                    data={products}
                    renderItem={({ item }) => {
                        // console.log(item.name)
                        return (
                            <ProductCard
                                details={item}
                            />
                        )
                    }}
                />
            }
        </View>
    )
};

const styles = StyleSheet.create({

});