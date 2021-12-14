import React from 'react'
import { Image, Text, View } from 'react-native'
import { HomeHeaderStyles } from './HomeHeaderStyles'
import { GlobalStyles } from '../../../styles/GlobalStyles';

export const HomeHeader = () => {
    return (
        <View style={{ ...GlobalStyles.row, ...HomeHeaderStyles.container }}>
            <Image
                style={HomeHeaderStyles.image}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZ0t3mv1a0sCa9w3pIbtbnpfMhdhGaHuE0g&usqp=CAU' }}>
            </Image>

            <Text style={GlobalStyles.title}>Home</Text>
        </View>
    )
}
