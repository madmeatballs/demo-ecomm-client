import React from 'react';
import { View, StatusBar } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export const BaseTemplate = ({ children }) => {

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={{
                height: '100%',
            }}>
                {children}
            </View>
        </SafeAreaView>
    )
};