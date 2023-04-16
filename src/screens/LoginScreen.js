import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Screen from '../components/Screen';
import CustomColors from '../config/CustomColors';
import MainButton from '../components/MainButton';
import IconTextField from '../components/IconTextField';
import LableTextField from '../components/LableTextField';

function LoginScreen(props) {
    const navigation = useNavigation();
    return (
        <Screen style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image resizeMode='contain' style={styles.loginImage} source={require('../images/login.png')} />
                <View>
                    <Text style={styles.title}>Log in</Text>
                    <Text style={styles.subTitle}>Login with social networks</Text>
                    <Image style={styles.socialIcon} source={require('../images/Social_buttons.png')} />
                </View>
                <LableTextField placeholder='Email' />
                <IconTextField />
                <MainButton btnText='Log in' onPress={() => navigation.navigate('IntroTwo')} />
                <MainButton textColor={CustomColors.grey} btnColor={CustomColors.white} btnText='Sign up' onPress={() => navigation.push('SignUp')} />
            </ScrollView>
        </Screen>
    );
}
const styles = StyleSheet.create({
    loginImage: {
        width: '100%',
        height: 200,
    },
    screen: {
        alignItems: 'center',
        padding: 20.0,
        justifyContent: 'space-between'
    },
    skip: {
        color: CustomColors.darkGrey,
        fontSize: 16.0,
        fontWeight: 'bold',
        paddingBottom: 20.0,
        alignSelf: 'flex-end'
    },
    socialIcon: {
        marginBottom: 20.0,
        alignSelf: 'center',
    },
    subTitle: {
        color: CustomColors.grey,
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 10.0,

    },
    title: {
        color: CustomColors.darkGrey,
        fontSize: 24.0,
        fontWeight: 'bold',
        paddingBottom: 10.0,
        textAlign: 'center',
    },
});

export default LoginScreen;