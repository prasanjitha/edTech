import React from 'react';

import Screen from '../components/Screen';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconTextField from '../components/IconTextField';
import CustomColors from '../config/CustomColors';
import CourseCard from '../components/CourseCard';

function SearchScreen(props) {
    return (
        <Screen style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../images/back_rounded.png')} />
                    <IconTextField
                        right={4.0}
                        width='90%'
                        iconName='magnify'
                        borderRadius={10.0}
                        placeholder='Search course'
                    />
                </View>
                <Text style={{ fontSize: 24.0, fontWeight: 'bold', color: CustomColors.darkGrey, }}>2 Results</Text>
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
    screen: {
        padding: 20.0,
    }
});
export default SearchScreen;