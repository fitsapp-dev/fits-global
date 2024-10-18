import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { LandingPage } from "./LandingPage";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Landing"
            screenOptions={{
                headerShown: false,
            }}
        >
            <StackNavigator.Screen
                name="Landing"
                component={LandingPage}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);