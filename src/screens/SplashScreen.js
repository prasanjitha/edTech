import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import CustomColors from '../config/CustomColors';

function SplashScreen(props) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/cool_kids.png')} />
            <Text style={styles.text}>CodeFactory</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingTop: 20.0,
        color: CustomColors.darkGrey,
        fontWeight: 'bold',
        fontSize: 40,
    }
});

export default SplashScreen;