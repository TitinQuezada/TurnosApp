import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { TurnCardStyles } from './TurnCardStyles';

export const TurnCard = () => {
    const [state, setstate] = useState(false);

    return (
        <View style={{ ...GlobalStyles.row, ...TurnCardStyles.container, marginHorizontal: 20 }}>
            <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold' }}>1.</Text>

            <CheckBox
                onCheckColor='red'
                tintColors={{ true: 'red', false: 'red' }}
                disabled={false}
                value={state}
                onValueChange={(value) => setstate(value)}
            />

            <Text>Nombre</Text>
        </View>
    )
}
