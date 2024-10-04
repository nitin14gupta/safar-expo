import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import IMAGES from '../constants/images';

const WelcomeBack = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Background color */}
      <View style={styles.backgroundContainer} />
      
      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Image
          source={IMAGES.palmTree} // Add the palm tree image to your assets folder
          style={styles.palmTree}
        />

        <Text style={styles.headerText}>Enjoy the trip with us!</Text>

        <Image
          source={IMAGES.beachRelax} // Add the beach chairs image to your assets folder
          style={styles.chairsImage}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton}
          onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00C4CC', // Background color as seen in the image
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#00C4CC',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      top:60,
    },
    palmTree: {
      width: 252, // Adjusted palm tree width
      height: 400, // Adjusted palm tree height
      position: 'absolute',
      top: 50, // Positioned similarly to the image
      left: -15, // Moved slightly to the left side
      resizeMode: 'contain',
      zIndex: 1,
    },
    headerText: {
      fontSize: 28, // Match font size
      color: '#000', // Darker text color
      marginBottom: 50, // Margin to separate from the image
      fontWeight: 'bold', // Emphasize text
      fontFamily: 'Cochin', // Use the appropriate font
      bottom: 100,
    },
    chairsImage: {
      width: 532,
      height: 401,
      resizeMode: 'contain', // Make sure the chairs stay within aspect ratio
      marginBottom: 20, // Space between image and buttons
    },
    buttonsContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    signUpButton: {
      backgroundColor: '#D74A46', // Red background for "Sign up"
      paddingVertical: 12,
      paddingHorizontal: 100, // Wide button as seen in the image
      borderRadius: 25,
      marginBottom: 15, // Space between the buttons
    },
    signInButton: {
      backgroundColor: '#F6F6F6', // Grey background for "Sign in"
      paddingVertical: 12,
      paddingHorizontal: 100,
      borderRadius: 25,
    },
    buttonText: {
      color: '#000', // Text color for both buttons
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default WelcomeBack;
