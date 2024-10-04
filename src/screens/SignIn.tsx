import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IMAGES from '../constants/images';

const SignIn = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Check if both username and password are filled
  const isFormValid = username !== '' && password !== '';

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <Image source={IMAGES.beachRelax} style={styles.topImage} />

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome back</Text>
        </View>

        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Image source={IMAGES.usernameIcon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#000"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Image source={IMAGES.passwordIcon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#000"
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        {/* Sign In Button - Disable when form is incomplete */}
        <TouchableOpacity
          style={[styles.signInButton, !isFormValid && styles.disabledButton]}
          onPress={() =>
            navigation.navigate('Verification', {screenType: 'SignIn'})
          }
          disabled={!isFormValid} // Disable the button when form is incomplete
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Social Sign-In Section */}
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.socialIcons}>
          <Image source={IMAGES.googleIcon} style={styles.socialIconImage} />
          <Image
            source={IMAGES.facebookIcon}
            style={[styles.socialIconImage, styles.socialIcons]}
          />
          <Image
            source={IMAGES.twitterIcon}
            style={[styles.socialIconImage, styles.socialIcons]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C4CC', // Background color for the top part
    justifyContent: 'flex-start',
  },
  topImage: {
    width: '100%',
    height: 400, // Adjust as per the image's height
    resizeMode: 'cover',
    marginBottom: -50, // Overlap the form slightly
    top: -30,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light grey background as shown
    borderTopLeftRadius: 50, // Rounded corners at the top
    borderTopRightRadius: 50,
    padding: 20,
    paddingTop: 50, // Adjust for space between the image and form
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // Shadow effect for Android
    marginTop: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D74A46', // Red underline
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24, // Set your icon size
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  forgotPasswordText: {
    color: '#D74A46',
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#D74A46', // Red background for the sign-in button
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#cccccc', // Gray background when button is disabled
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    color: '#000',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center', // Align icons in the center
    marginVertical: 20,
  },
  socialIconImage: {
    width: 40, // Increased icon size
    height: 40,
    resizeMode: 'contain',
    marginHorizontal: 15, // Space between icons
  },
});

export default SignIn;
