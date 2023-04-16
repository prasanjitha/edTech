import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomColors from '../config/CustomColors';


function IconTextField(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Password' />
            <MaterialCommunityIcons size={20} color={CustomColors.grey} style={styles.icon} name='eye' />
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
        borderRadius: 20.0,
        borderWidth: 1.0,
        borderColor: CustomColors.grey,
        width: '100%',
        height: 45.0,
    },
});

export default IconTextField;