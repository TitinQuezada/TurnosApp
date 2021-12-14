import React from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/Home/HomeScreen';
import { ScreenOptionsProps } from '../../interfaces/screenOptionsProps';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { CommentsScreen } from '../../screens/Comments/CommentsScreen';
import { HomeNavigatorParamList } from './HomeNavigatorParamList';
import { homeRoutes } from './HomeRoutes';

const Stack = createStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
    const screenOptions = (props: ScreenOptionsProps): StackNavigationOptions => {
        return {
            header: props.route.name == homeRoutes.home ? () => HomeHeader() : undefined,
            headerStyle: { height: 50 },
            headerTitleAlign: 'center'
        };
    }

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={homeRoutes.home} component={HomeScreen} />
            <Stack.Screen name={homeRoutes.comments} component={CommentsScreen} />
        </Stack.Navigator>
    );
}