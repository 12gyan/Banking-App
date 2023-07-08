import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleSignupPress = () => {
        navigation.navigate('Signup');
    };

    const handleLoginPress = () => {
        navigation.navigate('MainScreen');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topHalf}>
                <Image source={require('./assets/banklogo.jpg')} style={styles.bankImage} />
                <Text style={styles.appName}>HQMobile Banking</Text>
            </View>
            <View style={styles.bottomHalf}>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
                    <Text style={styles.signupButtonText}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
    topHalf: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bankImage: {
        width: 180, // Adjust the desired width
        height: 180, // Adjust the desired height
    },
    bottomHalf: {
        flex: 1,
        backgroundColor: 'lightblue',
        borderTopLeftRadius: 120,
        padding: 20,
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
    },
    forgotPassword: {
        marginTop: 10,
        textAlign: 'left',
        color: 'white',
    },
    loginButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: '#222',
        fontWeight: 'bold',
    },
    signupButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    signupButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
