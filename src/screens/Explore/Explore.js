import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Explore = props => {

  const [searchText, setSearchText] = useState('');

  const category = ['Featured', 'Art and Craft', 'Dance', 'Beauty', 'Cooking', 'Travelling and Adventure']

  return(
    <View style={styles.exploreContainer}>
      <View style={styles.searchInputContainer}>
        <Icon name="search" size={20} color='white'/>
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearchText}
          value={searchText}
          cursorColor="#fff"
          inputMode="text"
          placeholder="Search..."
          placeholderTextColor='#fff'
        />
      </View>
      <View style={styles.recommendationContainer}>
        <ScrollView>
          {
            category.map(data => (
              <View key={Math.random()} style={styles.categoryContainer}>
                <View style={styles.category}>
                  <View style={styles.categoryTitleContainer}>
                    <Text style={styles.categoryTitle}>{data}</Text>
                  </View>
                  <View style={styles.tilesContainer}>
                    {
                      [1,2,3,4].map(tilesData => (
                        <View key={Math.random()} style={styles.tilesData}>
                          <Text>{tilesData}</Text>
                        </View>
                      ))
                    }
                  </View>
                </View>
              </View>
            ))
        }
        </ScrollView>
      </View>
    </View>
  )
}

export default Explore;