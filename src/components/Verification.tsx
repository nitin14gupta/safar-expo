import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IMAGES from '../constants/images';

export default function Verification({route, navigation}) {
  const {screenType} = route.params; // Getting the screen type (signup, signin, or forget password)

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image
        source={IMAGES.beachRelax} // Replace with your actual image path
        style={styles.topImage}
      />

      {/* Verification Title */}
      <Text style={styles.verificationTitle}>Verification</Text>

      {/* Verification Code Input */}
      <View style={styles.codeInputContainer}>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
          defaultValue="7"
        />
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
          defaultValue="5"
        />
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
          defaultValue="5"
        />
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
          defaultValue="7"
        />
      </View>

      {/* Resend Text */}
      <Text style={styles.resendText}>
        If you didn’t receive a code,
        <Text style={styles.resendLink}> Resend</Text>
      </Text>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate(screenType)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Social Media Icons */}
      <Text style={styles.orText}>or</Text>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity>
          <FontAwesome name="google" size={40} color="#EA4335" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={40} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={40} color="#1DA1F2" />
        </TouchableOpacity>
      </View>

      {/* Account Info */}
      <Text style={styles.accountText}>Do you have an account?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    padding: 20,
  },
  topImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  verificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#C9EAF0',
    textAlign: 'center',
    fontSize: 24,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  resendText: {
    color: '#333',
    fontSize: 14,
    marginBottom: 20,
  },
  resendLink: {
    color: 'red',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#FF4C4C',
    padding: 15,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 20,
  },
  accountText: {
    fontSize: 14,
    color: '#333',
  },
});
