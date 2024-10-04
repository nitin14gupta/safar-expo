import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../constants/images';

export default function Onboarding3({navigation}) {
  return (
    <View style={styles.container}>
      
      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Flights, Tickets, and More</Text>
        <Text style={styles.subtitle}>
          Book flights, manage tickets, and explore exciting destinations all in one place. Enjoy real time updates, personalized recommendations, and exclusive deals that make traveling a breeze. 
          Adventure awaits--- let's take off together.
        </Text>
      </View>

      {/* Image of the travelers */}
      <View style={styles.imageContainer}>
        <Image
          source={IMAGES.coupleFlight}  // Update with your own image path from constants folder
          style={styles.travelersImage}
        />
      </View>

      {/* Explore Button */}
      <TouchableOpacity style={styles.exploreButton}
      onPress={() => navigation.replace('WelcomeBack')}>
        <Text style={styles.buttonText}> > </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FC9DB', // Same background color as the image
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Cursive', // Match the font style
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'start',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  travelersImage: {
    width: 430,
    height: 465,
    resizeMode: 'contain',
  },
  exploreButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    backgroundColor: '#00BFFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
