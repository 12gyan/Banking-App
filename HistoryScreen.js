import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryScreen = () => {
    const transactionData = {
        amount: "100.00",
        recipient: "[account number / wallet number / name]",
        reference: "[reference]",
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>History</Text>
            </View>
            <View style={styles.content}>
                 <Text style={styles.details}>
                    Established in 1990, HQ Bank has been a trusted financial institution serving customers with excellence for over three decades. With a strong commitment to customer satisfaction and innovation, HQ Bank has consistently adapted to the evolving banking landscape to provide cutting-edge financial solutions.

                    Throughout its history, HQ Bank has been at the forefront of technological advancements in the banking industry. In the early 2000s, the bank introduced one of the first online banking platforms, revolutionizing the way customers manage their finances. This groundbreaking innovation laid the foundation for HQ Bank's digital transformation journey.
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

export default HistoryScreen;
