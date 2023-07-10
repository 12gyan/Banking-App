import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BillsScreen = () => {
    const navigation = useNavigation();
    const [selectedType, setSelectedType] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleVerifyPress = () => {
        // Handle Verify button press
    };

    const handleSendPress = () => {
        navigation.navigate('TransactionCompleteScreen'); // Navigate to TransactionCompleteScreen
    };

    const handleToggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSelectType = (type) => {
        setSelectedType(type);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bills</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Type</Text>
                    <TouchableOpacity style={styles.input} onPress={handleToggleDropdown}>
                        <Text style={styles.dropdownValue}>{selectedType || 'Select Type'}</Text>
                    </TouchableOpacity>
                    {dropdownVisible && (
                        <View style={styles.dropdown}>
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => handleSelectType('Electricity')}
                            >
                                <Text style={styles.dropdownItemText}>Electricity</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => handleSelectType('Dstv')}
                            >
                                <Text style={styles.dropdownItemText}>Dstv</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => handleSelectType('Water')}
                            >
                                <Text style={styles.dropdownItemText}>Water</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>ID Number</Text>
                    <TextInput style={styles.input} placeholder="Enter ID" />
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.label}>Amount</Text>
                    <TextInput style={styles.input} placeholder="Enter amount" keyboardType="numeric" />
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
                    <Text style={styles.sendButtonText}>Pay</Text>
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
        justifyContent: 'center',
    },
    dropdownValue: {
        fontSize: 16,
        color: 'black',
    },
    dropdown: {
        marginTop: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    dropdownItemText: {
        fontSize: 16,
        color: 'black',
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

export default BillsScreen;
