import React from 'react';
import { StyleSheet, View, Text, FlatList, movies, Image, image } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { title, img, overview, releaseDate } = route.params;
  const image = { uri: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials.jpg' };



  return (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${img}` }}
        style={styles.poster} 
      />
      <Text style={styles.movieTitle}>{title}</Text>
      <Text style={styles.overview}>{overview}</Text>
      <Text style={styles.release_date}>{releaseDate}</Text>

    </View>   
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
    borderColor: "#E4571F",
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