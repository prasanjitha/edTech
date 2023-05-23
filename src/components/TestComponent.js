import React from 'react';
import { View } from 'react-native';

function TestComponent(props) {
    return (
        <View>
            <Button title="Click me"></Button>
            <Button title="Click"></Button>
            <Button title="Click me again"></Button>
        </View>
    );
}

export default TestComponent;