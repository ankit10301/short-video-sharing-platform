import React, { useRef, useState } from "react";
import { Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import styles from "./styles";
import AIcon from "react-native-vector-icons/AntDesign";

const Profile = props => {

  const posts = new Array(50).fill('post');

  return(
    <View style={styles.profileContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>myusername_1</Text>
        <AIcon name="bars" size={25} color='white' />
      </View>

      <View style={styles.userDataContainer}>
        <View style={styles.userData}>
          <Image style={styles.profileImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJQnPp2ThbD6ojDNRe_6FiDloTbpXP5c8x_8G7g_o9mgSxGqJLjBZ6cv36Q7ZoQvrGY0&usqp=CAU"></Image>
          <Text style={{...styles.userDataText, ...styles.displayName}}>John Doe</Text>
        </View>
        <View style={styles.userData}>
          <Text style={styles.userDataText}>{posts.length}</Text>
          <Text style={styles.userDataText}>POSTS</Text>
        </View>
        <View style={styles.userData}>
          <Text style={styles.userDataText}>12.4k</Text>
          <Text style={styles.userDataText}>Followers</Text>
        </View>
        <View style={styles.userData}>
          <Text style={styles.userDataText}>120</Text>
          <Text style={styles.userDataText}>Following</Text>
        </View>
      </View>

      <ScrollView style={styles.postContainerScrollView}>
        <View style={styles.postContainer}>
          {posts.map(data => (
            <View key={Math.random()} style={styles.posts}>
              <Text style={styles.userDataText}>{data}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile