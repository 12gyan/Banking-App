import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const handleSignupPress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleSignInPress = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.bottomHalf}>
                    <TextInput style={styles.input} placeholder="First Name" />
                    <TextInput style={styles.input} placeholder="Last Name" />
                    <TextInput style={styles.input} placeholder="Date of Birth" />
                    <TextInput style={styles.input} placeholder="Phone Number" />
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Gh Card Number" />
                    <TextInput style={styles.input} placeholder="Address" />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                    <TouchableOpacity style={styles.signupButton}>
                        <Text style={styles.signupButtonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
                        <Text style={styles.signInText}>Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    bottomHalf: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 20,
    },
    input: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
    },
    signupButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    signupButtonText: {
        color: '#222',
        fontWeight: 'bold',
    },
    signInButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    signInText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SignupScreen;
