import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomColors from '../config/CustomColors';


function IconTextField({ right, width = '100%', borderRadius = 20.0, placeholder = 'Password', iconName = 'eye' }) {
    return (
        <View style={[styles.container, { right: right }]}>
            <TextInput style={[styles.input, { borderRadius: borderRadius, width: width }]} placeholder={placeholder} />
            <MaterialCommunityIcons size={20} color={CustomColors.grey} style={styles.icon} name={iconName} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20.0,
    },
    icon: {
        position: 'absolute',
        right: 20,
    },
    input: {
        paddingLeft: 20.0,
        borderWidth: 1.0,
        borderColor: CustomColors.grey,
        height: 45.0,
    },
});

export default IconTextField;