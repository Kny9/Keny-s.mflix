import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const image = { uri: 'https://i.pinimg.com/736x/07/f7/47/07f74717d4f5296bcf45f7d4ff9cb96a.jpg' };

  const startLoading = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 12;
        if (nextProgress >= 100) {
          clearInterval(interval);
          navigation.navigate('Liste film populaire');
          return 100;
        }
        return nextProgress;
      });
    }, 300);z
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Keny_mtr sur snap !</Text>
        <Button
          title="Listes de films"
          color="#923829"
          onPress={startLoading}
        />
        <View style={styles.ChargementBarContainer}>
          <View style={[styles.ChargementBar, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.ChargementText}>{progress}%</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: '#938F8F',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ChargementBarContainer: {
    height: 20,
    width: '80%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  ChargementBar: {
    height: '100%',
    backgroundColor: '#923829',
  },
  ChargementText: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
