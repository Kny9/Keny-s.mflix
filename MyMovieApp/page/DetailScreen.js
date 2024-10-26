import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

const DetailScreen = ({ route}) => {
  const { title, img, overview, releaseDate } = route.params;
  const image = { uri: 'https://www.mairie-millas.fr/wp-content/uploads/2024/04/submit_1920x1080-1.jpg' };



  return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.card}>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${img}` }}
        style={styles.poster} 
      />
      <Text style={styles.movieTitle}>{title}</Text>
      <Text style={styles.overview}>{overview}</Text>
      <Text style={styles.release_date}> date de sortie : {releaseDate}</Text>

    </View>   
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
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    width: 250,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    margin: 79,
    padding: 10,
  },
  poster: {
    width: 227,
    height: 350,
    borderRadius: 10,
  },
  movieTitle: {
    color: '#000000',
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  overview: {
    fontSize: 13,
    textAlign: 'center',
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  release_date: {
    textAlign: 'center',
    fontSize: 17,
    ontWeight: 'bold'


  }
});

export default DetailScreen;