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
        backgroundColor: 'rgb(61, 0, 80)',
      }}>
      <Text style={styles.title}>Categories </Text>
      <View style={styles.container}>
        {data?.body.map((category: Category) => {
          return (
            <TouchableOpacity>
              <View style={styles.categorycard}>
                <Text style={styles.category} key={category.id}>
                  {category.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  category: {
    fontSize: 17,
    color: 'white',
    paddingHorizontal: 8,
  },
  title: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    left: 20,
    alignItems: 'center',
  },
  container: {
    flexWrap: 'wrap',
    width: '80%',
    marginHorizontal: '10%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  categorycard: {
    borderRightColor: 'white',
    borderRightWidth: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,

    width: '100%',
    height: 30,
    marginVertical: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
