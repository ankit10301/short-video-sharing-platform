import React, { useRef, useState, useEffect } from "react";
import { Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import styles from "./styles";
import AIcon from "react-native-vector-icons/AntDesign";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BOTTOM_NAVIGATION_HEIGHT, LOCAL_FALLBACK_IMAGE } from "../../constants";

const Profile = props => {

  const [profileImageError, setProfileImageError] = useState(false);
  const insets = useSafeAreaInsets();
  const localFallback = LOCAL_FALLBACK_IMAGE;
  const remoteProfImageUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJQnPp2ThbD6ojDNRe_6FiDloTbpXP5c8x_8G7g_o9mgSxGqJLjBZ6cv36Q7ZoQvrGY0&usqp=CAU';
  const posts = new Array(50).fill('post');

  useEffect(() => {
    Image.prefetch(remoteProfImageUri)
      .then(() => setProfileImageError(false))
      .catch(() => {
        console.log('Image prefetch failed — using local fallback');
        setProfileImageError(true);
      });
  }, [remoteProfImageUri]);

  return(
    <View style={styles.profileContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>myusername_1</Text>
        <AIcon name="bars" size={25} color='white' />
      </View>

      <View style={styles.userDataContainer}>
        <View style={styles.userData}>
          <Image
            style={styles.profileImage}
            source={profileImageError ? localFallback : {uri: remoteProfImageUri}}
            onError={(e) => {
              console.log("Profile image load error:", e.nativeEvent);
              setProfileImageError(true);
            }}
            onLoad={() => console.log("Profile image loaded")}
          />
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

      <ScrollView
        style={styles.postContainerScrollView}
        contentContainerStyle={{ paddingBottom: insets.bottom + BOTTOM_NAVIGATION_HEIGHT }}
      >
        <View style={styles.postContainer}>
          {posts.map((data, idx) => (
            <View key={idx} style={styles.posts}>
              <Text style={styles.userDataText}>{data}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile