import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../constants/images';

export default function Onboarding1({navigation}) {
  return (
    <View style={styles.container}>
      {/* Image of hands forming a heart */}
      <View style={styles.handsContainer}>
        <Image
          source={IMAGES.handHeart} // Use your hands image path here
          style={styles.handsImage}
        />
      </View>

      {/* Heart Drawing */}
      <View style={styles.heartContainer}>
        <Image
          source={IMAGES.handDrawing} // Use your heart drawing image here
          style={styles.heartImage}
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Find your travel partner</Text>
        <Text style={styles.subtitle}>
          Connect with fellow travelers who share your interests and adventures! Our platform makes it easy to find travel buddies, join group trips, and share experiences.
        </Text>
      </View>

      {/* Explore Button */}
      <TouchableOpacity style={styles.exploreButton}
      onPress={() => navigation.replace('Onboarding2')}>
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
  handsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
  },
  handsImage: {
    width: 430,
    height: 293,
    resizeMode: 'contain',
  },
  heartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImage: {
    width: 338,
    height: 312,
    resizeMode: 'contain',
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
    fontFamily: 'Cursive', // Choose a font close to the one in the image
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'start',
    lineHeight: 22,
    paddingHorizontal: 20,
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
