import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useFetch} from '../hooks/useFetch';
import {Categories, Category} from '../interfaces/ICategories';

const CategoriesScreen = () => {
  const {data, loading, error} = useFetch<Categories>(
    'https://api.audioboom.com/categories',
  );

  return (
    <ScrollView
      style={{
        marginTop: 50,
      }}>
      <Text style={styles.title}>Categories </Text>
      <View style={styles.container}>
        {data?.body.map((category: Category) => {
          return (
            <View style={styles.categorycard}>
              <TouchableOpacity>
                <Text style={styles.category} key={category.id}>
                  {category.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  category: {
    fontSize: 17,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    left: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  categorycard: {
    marginVertical: 10,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default CategoriesScreen;
