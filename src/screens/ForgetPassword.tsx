import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import IMAGES from '../constants/images'; // Assuming you have flag and background images

const ForgotPassword = ({navigation}) => {
  const [isEmail, setIsEmail] = useState(true); // Toggling between Email and Mobile
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    // Handle input validation if needed
    navigation.navigate('Verification', {screenType: 'ForgetPassword'});
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image source={IMAGES.beachRelax} style={styles.topImage} />

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>

        {/* Toggle Email/Mobile */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, isEmail && styles.activeButton]}
            onPress={() => setIsEmail(true)}>
            <Image source={IMAGES.emailIcon} style={styles.iconImage} />
            <Text style={styles.toggleButtonText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleButton, !isEmail && styles.activeButton]}
            onPress={() => setIsEmail(false)}>
            <Image source={IMAGES.mobileIcon} style={styles.iconImage} />
            <Text style={[styles.toggleButtonText, {color: '#D74A46'}]}>
              Mobile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Field */}
        {isEmail ? (
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            placeholderTextColor="#7A8C99"
            value={inputValue}
            onChangeText={setInputValue}
          />
        ) : (
          <View style={styles.mobileInputContainer}>
            <Image source={IMAGES.indianFlag} style={styles.flagIcon} />
            <TextInput
              style={styles.mobileInput}
              placeholder="Enter Mobile Number"
              placeholderTextColor="#7A8C99"
              keyboardType="phone-pad"
              value={inputValue}
              onChangeText={setInputValue}
            />
          </View>
        )}

        {/* Send Button */}
        <TouchableOpacity
          style={[styles.sendButton, {opacity: inputValue ? 1 : 0.5}]} // Change opacity based on input
          onPress={handleSend}
          disabled={!inputValue} // Disable if inputValue is empty
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

        {/* Back to Sign In */}
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.backToSignInText}>Back to sign in</Text>
        </TouchableOpacity>

        {/* Social Media Login */}
        <View style={styles.socialContainer}>
          <Text style={styles.orText}>or</Text>
          <View style={styles.socialIcons}>
            <Image source={IMAGES.googleIcon} style={styles.socialIconImage} />
            <Image
              source={IMAGES.facebookIcon}
              style={[styles.socialIconImage, styles.socialIcon]}
            />
            <Image
              source={IMAGES.twitterIcon}
              style={[styles.socialIconImage, styles.socialIcon]}
            />
          </View>
        </View>

        <Text style={styles.signUpText}>
          Do you have an account?
          <TouchableOpacity>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E6E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: 400, // Adjust as per the image's height
    resizeMode: 'cover',
    top: 30,
  },
  formContainer: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 50, // Rounded corners at the top
    borderTopRightRadius: 50,
    paddingTop: 50, // Adjust for space between the image and form
    height: '70%',
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#D74A46',
  },
  toggleButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#FFF',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: '#7A8C99',
    borderWidth: 1,
  },
  mobileInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#7A8C99',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  mobileInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  sendButton: {
    backgroundColor: '#D74A46',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backToSignInText: {
    color: '#000',
    fontSize: 14,
    marginVertical: 20,
  },
  socialContainer: {
    alignItems: 'center',
  },
  orText: {
    color: '#000',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  socialIcon: {
    marginLeft: 20,
  },
  signUpText: {
    color: '#000',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  signInLink: {
    color: '#D74A46',
    fontWeight: 'bold',
    position: 'absolute',
    top: 4,
    left: 4,
  },
});

export default ForgotPassword;
