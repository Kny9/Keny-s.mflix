import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Text, FlatList, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';

const ilmlesmieuxnotés = ({ navigation }) => {
  const API_KEY = '0e4f595e21df030ae208acbc86a5a227';
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR`;
  const [movies, setMovies] = useState([]);
  const image = { uri: 'https://media.istockphoto.com/id/1472539099/fr/vectoriel/dégradé-de-couleurs-éclatantes-sur-fond-noir-bannière-abstraite-violet-bleu-bleu-bleu.jpg?s=612x612&w=0&k=20&c=5EVQIk4-daNS2sKlbbUhVOmLwXREMbsaB_TfiU88njY=' };

  const [searchQuery, setSearchQuery] = useState('');
  const searchMovies = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=fr-FR`)
     .then(response => response.json())
     .then(data => setMovies(data.results))
     .catch(error => console.error(error));
   };

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  const getVoteAverageColor = (vote) => {
    if (vote >= 7) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setSearchQuery(text);
          searchMovies(text);
        }}
        value={searchQuery}
        placeholder="recherche..."
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <FlatList
          data={movies}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Detail', {
                  title: item.title,
                  img: item.poster_path,
                  overview: item.overview,
                  releaseDate: item.release_date,
                });
                console.log(`${item.title} pressed`);
              }}>
                <Image 
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={styles.poster}
                />
              </TouchableOpacity>
              <Text style={[styles.vote_average, { color: getVoteAverageColor(item.vote_average) }]}>
              note: {item.vote_average.toFixed(1)}/10
              </Text>
            </View>
          )} 
          showsHorizontalScrollIndicator={false}
        />
        <Button 
          title="Films populaire"
          color="#923829"
          onPress={() => {
             navigation.navigate('Liste film populaire')
          }}
        />
                <Button
          title="Film a venir"
          color="#923829"
          onPress={() => {
             navigation.navigate('Liste film a venir')
          }}
        />
                <Button
          title="Film du moment"
          color="#923829"
          onPress={() => {
             navigation.navigate('Liste film du moment')
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    width: 250,
    height: 450,
    borderWidth: 2,
    borderColor: "#E4571F",
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  poster: {
    width: 227,
    height: 350,
    borderRadius: 10,
  },
  movieTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  vote_average: {
    fontSize: 29,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    height: 100,
    color: '#000000',
    fontSize: 19,
    fontWeight: 'bold'
  }
});

export default ilmlesmieuxnotés;