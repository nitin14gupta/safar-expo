import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../constants/images';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={IMAGES.logo} // Replace with your logo asset
          style={styles.logo}
        />
      </View>
      <View style={styles.pathContainer}>
        <Image
          source={IMAGES.airplaneHeart} // Replace with your airplane path asset
          style={styles.path}
        />
      </View>

      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => navigation.replace('Onboarding1')} // Navigate to OnboardingScreen
      >
        <Text style={styles.exploreText}>EXPLORE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FC9DB', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280, // Adjust size as necessary
    height: 280,
    resizeMode: 'contain',
  },
  pathContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  path: {
    width: 523, // Adjust size as necessary
    height: 231,
    resizeMode: 'contain',
  },
  exploreButton: {
    backgroundColor: '#E0E0E0', // Light gray color
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 50,
  },
  exploreText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
