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
import BackButton from '../components/BackButton';

function SignUpScreen(props) {
    const navigation = useNavigation();
    return (
        <Screen style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton />
                <Image resizeMode='contain' style={styles.loginImage} source={require('../images/signup_image.png')} />
                <View>
                    <Text style={styles.title}>Sign up</Text>
                    <Text style={styles.subTitle}>Create your account</Text>
                </View>
                <LableTextField placeholder='Name' />
                <LableTextField placeholder='Email' />
                <IconTextField />
                <MainButton btnText='Sign up' onPress={() => navigation.navigate('IntroTwo')} />
                <MainButton textColor={CustomColors.grey} btnColor={CustomColors.white} btnText='Log in' onPress={() => navigation.navigate('IntroTwo')} />
            </ScrollView>
        </Screen>
    );
}
const styles = StyleSheet.create({
    loginImage: {
        width: '100%',
        height: 180.0,
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
    },
    subTitle: {
        color: CustomColors.grey,
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 10.0,

    },
    title: {
        marginTop: 10.0,
        color: CustomColors.darkGrey,
        fontSize: 24.0,
        fontWeight: 'bold',
        paddingBottom: 10.0,
        textAlign: 'center',
    },
});

export default SignUpScreen;