import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

import CustomColors from '../config/CustomColors';

function LableTextField({ placeholder }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10.0,
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

export default LableTextField;