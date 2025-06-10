import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import SubMovieCard from '../components/SubMovieCard';
import {COLORS, SPACING} from '../theme/theme';
import InputHeader from '../components/InputHeader';
import {baseImagePath, searchMovies} from '../api/apicalls';

const SeacrhScreen = ({navigation}: any) => {
  const [searchList, setSearchList] = useState([]);
  const [loading, setLoading] = useState(false);

  const {width} = Dimensions.get('window');

  const searchMoviesFunction = async (name: string) => {
    try {
      setLoading(true);
      const resp = await fetch(searchMovies(name));
      const json = await resp.json();
      setSearchList(json.results);
      
    } catch (error) {
      console.log('something went wroung in SearchMovies function');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} autoFocus={true} />
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            style={styles.lodingContainer}
            size="large"
            color={COLORS.Orange}
          />
        </View>
      ) : (
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          numColumns={2}
          contentContainerStyle={styles.centerContainer}
          renderItem={({item, index}) => (
            <SubMovieCard
              shouldMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieid: item.id});
              }}
              title={item.original_title}
              cardWidth={width / 2 - SPACING.space_12 * 2}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      )}
    </View>
  );
};

export default SeacrhScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.Black,
  },
  InputHeaderContainer: {
    display: 'flex',
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
    marginBottom: SPACING.space_28 - SPACING.space_12,
  },
  centerContainer: {
    alignItems: 'center',
  },
  loadingContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.Black,
  },
  lodingContainer: {
    flex: 1,
  },
});
