import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
import { Routes } from '../navigation/Routes';

export const Providers = () => {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }} >
                <NativeBaseProvider>
                    <ReduxProvider store={store}>
                        <Routes />
                    </ReduxProvider>
                </NativeBaseProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
};