import React from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Screen from '../components/Screen';
import CustomColors from '../config/CustomColors';
import CourseCard from '../components/CourseCard';
import IconTextField from '../components/IconTextField';

const data = [
    { key: '1', text: '#CSS' },
    { key: '2', text: '#UX' },
    { key: '3', text: '#Swift' },
    { key: '4', text: '#UI' },
    { key: '5', text: '#Java' },
];

function CoursesScreen(props) {
    const renderItem = ({ item }) => (
        <View style={{ width: 80, height: 40, backgroundColor: CustomColors.lightBlue, borderRadius: 20.0, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: CustomColors.white, fontWeight: 'bold', }}>{item.text}</Text>
        </View>
    );
    return (
        <Screen style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainTitle}>
                    <View>
                        <Text style={styles.gretText}>Hello</Text>
                        <Text style={styles.nameText}>Juana Antonieta</Text>
                    </View>
                    <Image source={require('../images/notification.png')} />
                </View>
                <IconTextField
                    iconName='magnify'
                    borderRadius={10.0}
                    placeholder='Search course'
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14.0, fontWeight: '700', color: CustomColors.darkGrey, }}>Category : </Text>
                    <FlatList
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.key}
                    />
                </View>
                <CourseCard
                    image={require('../images/Cool_Kids_Discussion.png')}
                    price='$ 50'
                    duration='3 h 30 min'
                    courseTitle='UI'
                    description='Advanced mobile interface design'
                />
                <CourseCard
                    image={require('../images/Cool_Kids_Alone_Time.png')}
                    price='$ 150'
                    duration='3 h 30 min'
                    courseTitle='UI'
                    description='Advanced mobile interface design'
                    imageBackgroundColor={CustomColors.shineBlue}
                />
            </ScrollView>
        </Screen>
    );
}
const styles = StyleSheet.create({
    gretText: {
        fontSize: 16.0,
        color: CustomColors.grey,
        fontWeight: '600',
    },
    mainTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20.0,
    },
    nameText: {
        fontSize: 28.0,
        fontWeight: 'bold',
        color: CustomColors.darkGrey,
    },
    screen: {
        padding: 20.0,
    }
});

export default CoursesScreen;