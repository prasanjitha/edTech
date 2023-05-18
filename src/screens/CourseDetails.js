import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Screen from '../components/Screen';
import CustomColors from '../config/CustomColors';
import BackButton from '../components/BackButton';
import MainButton from '../components/MainButton';

function CourseDetails(props) {
    return (
        <Screen style={styles.screen}>
            <ScrollView>

                <View style={styles.appContainer}>
                    <BackButton />
                    <Text style={styles.appTitle}>Html</Text>
                    <View />
                </View>
                <Image style={styles.image} source={require('../images/course_details_img.png')} />
                <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>$ 50</Text>
                </View>
                <Text style={styles.courseTitleContainer}>About the course</Text>
                <Text style={styles.courseDescription}>You can launch a new career in web develop-ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.</Text>
                <Text style={styles.duration}>Duration</Text>
                <Text style={styles.time}>1h 30 min</Text>
                <View style={styles.addToCartBtn}>
                    <MainButton
                        btnText='Add to cart'
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}
const styles = StyleSheet.create({
    appContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    appTitle: {
        alignSelf: 'center',
        fontSize: 24.0,
        fontWeight: 'bold',
        color: CustomColors.darkGrey,
    },
    addToCartBtn: {
        position: 'absolute',
        bottom: 0.0,
        width: '100%',
        alignSelf: 'center',
    },
    btnContainer: {
        alignSelf: 'flex-end',
        borderRadius: 20.0,
        backgroundColor: CustomColors.lightBlue,
    },
    btnText: {
        paddingHorizontal: 20.0,
        paddingVertical: 5.0,
        fontWeight: 'bold',
        color: CustomColors.white,
    },
    courseDescription: {
        fontSize: 14.0,
        color: CustomColors.grey,
        marginTop: 10.0,
    },
    courseTitleContainer: {
        fontSize: 24.0,
        fontWeight: 'bold',
        color: CustomColors.darkGrey,
    },
    duration: {
        fontSize: 24.0,
        fontWeight: 'bold',
        color: CustomColors.darkGrey,
        marginTop: 20.0,
    },
    image: {
        alignSelf: 'center',
        marginTop: 20.0,
    },
    screen: {
        padding: 20.0,
    },
    time: {
        fontSize: 14.0,
        color: CustomColors.grey,
    },
});

export default CourseDetails;