import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import IMAGES from '../constants/images'; // Assuming you have an image file

const PasswordCreate = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      // Handle successful password match logic here
      console.log('Password confirmed and submitted');
      // Navigate to the next screen
      navigation.navigate('Dashboard');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image source={IMAGES.beachRelax} style={styles.topImage} />

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>New Password</Text>

        {/* New Password Input */}
        <Text style={styles.label}>Enter New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="At least 6 digits"
          placeholderTextColor="#000000"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        {/* Confirm Password Input */}
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Re-enter the Password"
          placeholderTextColor='#000000'
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
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
    height: 350,
    resizeMode: 'cover',
  },
  formContainer: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    height: '60%',
    top:70,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#B4D0D1',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: '#7A8C99',
    borderWidth: 1,
    opacity:0.7,
  },
  submitButton: {
    backgroundColor: '#D74A46',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop:30,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordCreate;
