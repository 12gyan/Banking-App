import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

const MainScreen = ({ navigation }) => {
    const handleTransferPress = () => {
        navigation.navigate('TransferScreen')
    };       

    const handleMomoPress = () => {
        // Handle Momo button press
        navigation.navigate('MomoScreen')

    };

    const handleBillsPress = () => {
        // Handle Bills button press
        navigation.navigate('BillsScreen')
    };

    const handleHistoryPress = () => {
        navigation.navigate('HistoryScreen')
        // Handle History button press
    };

    const handleExchangePress = () => {
        navigation.navigate('ExchangeScreen')

        // Handle Exchange button press
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Balance</Text>
                <Text style={styles.balanceAmount}>$ 1000.64</Text>
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={handleTransferPress}>
                    <Image source={require('./assets/transfer.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleMomoPress}>
                    <Image source={require('./assets/momo.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Momo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleBillsPress}>
                    <Image source={require('./assets/bills.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Bills</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleHistoryPress}>
                    <Image source={require('./assets/history.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleExchangePress}>
                    <Image source={require('./assets/exchange.png')} style={styles.iconImage} />
                    <Text style={styles.iconText}>Exchange</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.additionalContainer}>
                <TouchableOpacity style={styles.additionalButton}>
                    <Image source={require('./assets/pro.png')} style={styles.additionalIcon} />
                    <Text style={styles.additionalText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.additionalButton}>
                    <Image source={require('./assets/help.png')} style={styles.additionalIcon} />
                    <Text style={styles.additionalText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.additionalButton}>
                    <Image source={require('./assets/3524335.png')} style={styles.additionalIcon} />
                    <Text style={styles.additionalText}>About</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    balanceContainer: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    balanceLabel: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    balanceAmount: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    iconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    iconButton: {
        alignItems: 'center',
        marginBottom: 20,
        width: '48%', // Adjust the width to fit two icons on each line with some spacing
    },
    iconImage: {
        width: 80, // Adjust the desired width
        height: 80, // Adjust the desired height
        marginBottom: 10,
    },
    iconText: {
        color: '#222',
        fontSize: 16,
        fontWeight: 'bold',
    },
    additionalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 40,
    },
    additionalButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    additionalIcon: {
        width: 30,
        height: 30,
        marginBottom: 10,
    },
    additionalText: {
        color: '#222',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default MainScreen;
