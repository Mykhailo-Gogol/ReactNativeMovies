import React, {useRef} from 'react';
import VideoPlayer from 'react-native-video';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {
  useDeviceOrientationChange,
  OrientationType,
} from 'react-native-orientation-locker';

export default function Video() {
  const player = useRef<VideoPlayer | null>(null);

  useDeviceOrientationChange((o: OrientationType) => {
    if (o === 'LANDSCAPE-RIGHT' || o === 'LANDSCAPE-LEFT') {
      player.current?.presentFullscreenPlayer();
    } else {
      player.current?.dismissFullscreenPlayer();
    }
  });

  return (
    <ScrollView style={styles.container}>
      <VideoPlayer
        ref={player}
        style={styles.player}
        resizeMode="cover"
        source={{
          type: 'video/mp4',
          uri: 'https://media.istockphoto.com/id/1339457362/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B1%D0%B5%D0%B7%D1%88%D0%BE%D0%B2%D0%BD%D0%B0-%D0%BF%D0%B5%D1%82%D0%BB%D1%8F-%D1%81%D0%B8%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE-%D1%96-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B3%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA%D1%83-%D0%BF%D1%83%D1%87%D0%BA%D1%96%D0%B2-%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%BA-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B8%D0%B9-%D0%BF%D0%BE%D1%82%D1%96%D0%BA-%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.mp4?s=mp4-640x640-is&k=20&c=DY0dsG3dDdnR6IaOkyb6cKPwNiW2TJwCuP7pDiKMeKM=',
        }}
      />
      <Text style={styles.title}>Video Test</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        sapiente harum voluptatibus fugiat dolore similique nihil aperiam dicta
        voluptate neque, enim id et animi adipisci possimus pariatur optio
        nesciunt. Quibusdam nisi architecto dolorem voluptatem beatae, ratione
        reprehenderit inventore eligendi expedita similique, incidunt
        praesentium voluptas quasi quod excepturi ducimus corrupti quisquam!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  player: {
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 18,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    paddingBottom: 32,
  },
});
