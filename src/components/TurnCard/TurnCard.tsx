import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../../../styles/GlobalStyles';
import { HomeNavigatorParamList } from '../../navigators/homeNavigator/HomeNavigatorParamList';
import { homeRoutes } from '../../navigators/homeNavigator/HomeRoutes';
import { TurnCardStyles } from './TurnCardStyles';

export const TurnCard = () => {
    const navigator = useNavigation<NavigationProp<HomeNavigatorParamList>>();

    return (
        <View style={{ ...GlobalStyles.row, ...TurnCardStyles.container }}>
            <Text style={{ color: 'black' }}>Nombre</Text>

            <TouchableOpacity style={{ ...TurnCardStyles.actionButton, marginLeft: 'auto' }} onPress={() => navigator.navigate(homeRoutes.comments)}>
                <Icon name='chatbubble-ellipses-outline' size={30} color='blue'></Icon>
            </TouchableOpacity>

            <TouchableOpacity style={{ ...TurnCardStyles.actionButton }}>
                <Icon name='trash-outline' size={30} color='red'></Icon>
            </TouchableOpacity>
        </View>
    )
}
