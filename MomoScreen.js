import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MomoScreen = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('Bank to MOMO');
    const highlightPosition = useRef(new Animated.Value(0)).current;

    const handleVerifyPress = () => {
        // Handle Verify button press
    };

    const handleSendPress = () => {
        navigation.navigate('TransactionCompleteScreen'); // Navigate to TransactionCompleteScreen
    };

    const handleToggle = (option) => {
        setSelectedOption(option);
        Animated.spring(highlightPosition, {
            toValue: option === 'Bank to MOMO' ? 0 : 1,
            useNativeDriver: false,
        }).start();
    };

    const highlightStyle = {
        transform: [
            {
                translateX: highlightPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 210], // Adjust the value as per your requirement
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>MoMO</Text>
            </View>
            <View style={styles.toggleContainer}>
                <TouchableOpacity
                    style={[styles.toggleItem, selectedOption === 'Bank to MOMO' && styles.selectedToggle]}
                    onPress={() => handleToggle('Bank to MOMO')}
                >
                    <Text
                        style={[
                            styles.toggleText,
                            selectedOption === 'Bank to MOMO' && styles.selectedToggleText,
                        ]}
                    >
                        Bank to MOMO
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleItem, selectedOption === 'MOMO to Bank' && styles.selectedToggle]}
                    onPress={() => handleToggle('MOMO to Bank')}
                >
                    <Text
                        style={[
                            styles.toggleText,
                            selectedOption === 'MOMO to Bank' && styles.selectedToggleText,
                        ]}
                    >
                        MOMO to Bank
                    </Text>
                </TouchableOpacity>
                <Animated.View style={[styles.highlight, highlightStyle]} />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Amount</Text>
                    <TextInput style={styles.input} placeholder="Enter account name" />
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Wallet Number / Account No.</Text>
                    <TextInput style={styles.input} placeholder="Enter Wallet/Account No" />
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Reference</Text>
                    <TextInput style={styles.input} placeholder="Enter your reference" keyboardType="numeric" />
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'lightblue',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20, // Add horizontal padding for space
        marginTop: 20,
        marginBottom: 20,
    },
    toggleItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 25,
        
    },
    selectedToggle: {
        backgroundColor: 'lightblue',
    },
    toggleText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    selectedToggleText: {
        color: 'white',
    },
    highlight: {
        position: 'absolute',
        width: '50%', // Adjust the value as per your requirement
        height: '100%',
        backgroundColor: 'rgba(135, 206, 250, 0.2)', // Light blue color with opacity
        borderRadius: 25,
    },
    formContainer: {
        padding: 20,
    },
    formElement: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: 'lightgray',
    },
    sendButton: {
        backgroundColor: 'lightblue',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MomoScreen;
