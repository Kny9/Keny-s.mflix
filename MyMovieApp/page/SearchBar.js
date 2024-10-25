import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, number } from 'react-native';

 

export default function SearchBar() {
    const [searchText, setSearchText] = useState('');
    const [filteredMovies, setFilteredMovies] = useState();
    const searchMovies = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
         .then(response => response.json())
         .then(data => setMovies(data.results))
         .catch(error => console.error(error));
       };

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = movies.filter(movies => 
            movies.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredArticles(filtered);
    };

    return (
        <View style={styles.container}> 
            <Text style={styles.headerText}>The Movies of The Season</Text>
            <TextInput
            style={styles.input}
            onChangeText={searchMovies}
            value={number}
            placeholder="useless placeholder"
            keyboardType=""
            />
                <FlatList
                    data={filteredMovies}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchBar: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    item: {
        padding: 8,
        fontSize: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    
});
