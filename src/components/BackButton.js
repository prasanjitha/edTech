import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

function BackButton(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
            <Image source={require('../images/back_rounded.png')} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-start',
        color: 'white'
    }
});

export default BackButton;