import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import CustomColors from '../config/CustomColors';

function CourseCard({
    image = require('../images/Cool_Kids_Discussion.png'),
    price = '$ 50',
    duration = '3 h 30 min',
    courseTitle = 'UI',
    description = 'Advanced mobile interface design',
    imageBackgroundColor = CustomColors.lightPink,
}) {
    return (
        <View style={styles.container}>
            <View style={[styles.imageContainer, { backgroundColor: imageBackgroundColor }]} >
                <Image source={image} />
                <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>{price}</Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.time}>{duration}</Text>
                <Text style={styles.title}>{courseTitle}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: CustomColors.lightBlue,
        borderRadius: 20.0,
        paddingHorizontal: 20.0,
        paddingVertical: 5.0,
        position: 'absolute',
        bottom: 10.0,
        right: 10.0,
    },
    btnText: {
        color: CustomColors.white,
        fontWeight: 'bold',
    },
    container: {
        marginTop: 20.0,
        width: '100%',
        height: 300,
        borderRadius: 20.0,
        borderColor: CustomColors.grey,
        borderWidth: 0.5,
    },
    description: {
        color: CustomColors.darkGrey,
        fontSize: 14.0,
        fontWeight: '800',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 190,
        borderTopLeftRadius: 20.0,
        borderTopRightRadius: 20.0,
    },
    textContainer: {
        padding: 20.0,
    },
    time: {
        color: CustomColors.lightGreen,
        fontSize: 12.0,
        fontWeight: '800',
    },
    title: {
        color: CustomColors.darkGrey,
        fontSize: 24.0,
        fontWeight: 'bold',
    },
});
export default CourseCard;