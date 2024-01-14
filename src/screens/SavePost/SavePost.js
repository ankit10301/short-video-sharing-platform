import { View, Image, } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useEffect, useState } from "react";

import styles from "./styles";
import { WINDOW_WIDTH } from "../../constants";

const SavePost = props => {

  const [videoStatus, setVideoStatus] = useState({});
  const [shouldVideoStart, setShouldVideoStart] = useState(false);
  const [thumbnail, setThumbnail] = useState('')

  useEffect(() => {
    if(props.route){
      // console.log(props.route.params);
    }
  }, [props.route])

  return (
    <View style={styles.container}>
      <Image style={{height: 200, width: 200}} src={props.route.params.sourceThumb} />
      <Video
        //ref={e => videoRefs.current[index] = e}
        style={{ width: WINDOW_WIDTH, height: 300 }}
        source={{
          uri: props.route.params.source
          //uri: videoData.sources,
        }}
        onLoad={(status) => {
          if (status.isLoaded) {
            setShouldVideoStart(true);
          }
        }}
        shouldPlay={shouldVideoStart}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        //usePoster
        onPlaybackStatusUpdate={status => setVideoStatus(() => status)}
      />
    </View>
  )
}

export default SavePost;