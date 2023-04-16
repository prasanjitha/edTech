import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Screen from '../components/Screen';
import SkipText from '../components/SkipText';
import CustomColors from '../config/CustomColors';
import MainButton from '../components/MainButton';

function IntroOne(props) {
    const navigation = useNavigation();
    return (
        <Screen style={styles.screen}>
            <SkipText />
            <Image source={require('../images/intro_one.png')} />
            <View>
                <Text style={styles.title}>Learn anytime{'\n'}and anywhere</Text>
                <Text style={styles.subTitle}>Quarantine is the perfect time to spend your day learning something new, from anywhere!</Text>
            </View>
            <Image source={require('../images/Pagination_one.png')} />
            <MainButton onPress={() => navigation.navigate('IntroTwo')} />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 20.0,
        justifyContent: 'space-between'
    },
    subTitle: {
        color: CustomColors.grey,
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
    },
    title: {
        color: CustomColors.darkGrey,
        fontSize: 24.0,
        fontWeight: 'bold',
        paddingBottom: 20.0,
        textAlign: 'center',
    },
});

export default IntroOne;