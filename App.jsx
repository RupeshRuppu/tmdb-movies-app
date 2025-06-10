import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigators';
import MovieDetails from './src/screens/MovieDetailsScreen';
import SeatBooking from './src/screens/SeatBookingScreen';
import {SearchContextProvider} from './src/customHooks/SearchHook';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SearchContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{animation: 'default'}}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="SeatBooking"
            component={SeatBooking}
            options={{animation: 'slide_from_bottom'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchContextProvider>
  );
};

export default App;
