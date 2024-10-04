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

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Check if all fields are filled
  const isFormValid = email && username && password;

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <Image source={IMAGES.beachRelax} style={styles.topImage} />

      {/* Form Section */}
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>New Account</Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Image source={IMAGES.cameraIcon}/>
            <Text style={styles.uploadText}>Upload picture</Text>
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image source={IMAGES.emailIcon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#777"
          />
        </View>

        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Image source={IMAGES.usernameIcon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#777"
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
            placeholderTextColor="#777"
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.signUpButton, {opacity: isFormValid ? 1 : 0.5}]}
          onPress={() => {
            if (isFormValid) {
              navigation.navigate('Verification', {screenType: 'SignUp'}); // Navigate to VerificationNew
            }
          }}
          disabled={!isFormValid} // Disable if the form is not valid
        >
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Bottom Text */}
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C4CC',
    justifyContent: 'flex-start',
  },
  topImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: -50,
    top: -40,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  uploadButton: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 10,
  },
  uploadText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D74A46',
    marginBottom: 10,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
  },
  signUpButton: {
    backgroundColor: '#D74A46',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomText: {
    fontSize: 14,
    color: '#777',
  },
  signInText: {
    fontSize: 14,
    color: '#D74A46',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default SignUp;
