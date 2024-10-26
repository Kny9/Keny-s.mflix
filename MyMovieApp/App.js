import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './page/HomeSreen';
import DetailScreen from './page/DetailScreen';
import ListedeFilms from './page/ListedeFilms';
import filmavenir  from './page/filmavenir';
import filmlesmieuxnotés from './page/filmlesmieuxnotés';
import fildumoment from './page/filmdumoment';



const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Liste film populaire" component={ListedeFilms} />
        <Stack.Screen name="Liste film a venir" component={filmavenir} />
        <Stack.Screen name="Liste film les mieux notés" component={filmlesmieuxnotés} />
        <Stack.Screen name="Liste film du moment" component={fildumoment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}