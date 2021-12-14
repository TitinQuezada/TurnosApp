import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { TurnCard } from '../../components/TurnCard/TurnCard'
import { HomeNavigatorParamList } from '../../navigators/homeNavigator/HomeNavigatorParamList'
import { homeRoutes } from '../../navigators/homeNavigator/HomeRoutes'

interface Props extends StackScreenProps<HomeNavigatorParamList, 'Home'> { }

export const HomeScreen = ({ navigation }: Props) => {

    const prueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 20 }}>

                {
                    prueba.map((item, index) => {
                        return (

                            <View key={index}>
                                <TurnCard></TurnCard>
                                <View style={{ height: 10 }}></View>
                            </View>
                        )
                    }
                    )
                }

            </ScrollView>
        </SafeAreaView>

    )
}
