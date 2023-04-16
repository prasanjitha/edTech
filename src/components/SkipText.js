import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomColors from '../config/CustomColors';

function SkipText() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.skip} >Skip</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
    },
    skip: {
        color: CustomColors.darkGrey,
        fontSize: 16.0,
        fontWeight: 'bold',
        paddingBottom: 20.0,
    },
});

export default SkipText;