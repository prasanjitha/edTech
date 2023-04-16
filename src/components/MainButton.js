import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import CustomColors from '../config/CustomColors';

function MainButton({ onPress, btnText = 'Next', textColor = CustomColors.white, btnColor = CustomColors.primary }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: btnColor }]}>
            <Text style={[styles.btnText, { color: textColor }]}>{btnText}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnText: {
        fontSize: 16.0,
        color: CustomColors.white,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        height: 50.0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20.0,
    },
});

export default MainButton;