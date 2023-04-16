import React from 'react';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';

import CustomColors from '../config/CustomColors';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: CustomColors.white,
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    }
});

export default Screen;