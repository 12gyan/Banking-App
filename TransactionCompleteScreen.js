import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionCompleteScreen = () => {
    const transactionData = {
        amount: "100.00",
        recipient: "[account number / wallet number / name]",
        reference: "[reference]",
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Transfer</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Transaction Complete</Text>
                <Text style={styles.details}>
                    You have sent ${transactionData.amount} to {transactionData.recipient} with reference {transactionData.reference}.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'lightblue',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    details: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default TransactionCompleteScreen;
