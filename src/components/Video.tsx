import React from 'react';
import VideoPlayer from 'react-native-video';
import {StyleSheet, View} from 'react-native';

export default function Video() {
  return (
    <View>
      <VideoPlayer
        source={{
          uri: 'https://media.istockphoto.com/id/1339457362/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B1%D0%B5%D0%B7%D1%88%D0%BE%D0%B2%D0%BD%D0%B0-%D0%BF%D0%B5%D1%82%D0%BB%D1%8F-%D1%81%D0%B8%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE-%D1%96-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B3%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA%D1%83-%D0%BF%D1%83%D1%87%D0%BA%D1%96%D0%B2-%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%BA-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B8%D0%B9-%D0%BF%D0%BE%D1%82%D1%96%D0%BA-%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.mp4?s=mp4-640x640-is&k=20&c=DY0dsG3dDdnR6IaOkyb6cKPwNiW2TJwCuP7pDiKMeKM=',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    height: 300,
  },
});
