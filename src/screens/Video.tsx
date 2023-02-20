import React, {useRef, useState} from 'react';
import VideoPlayer, {OnProgressData} from 'react-native-video';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  useDeviceOrientationChange,
  OrientationType,
} from 'react-native-orientation-locker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlay, faPause, faExpand} from '@fortawesome/free-solid-svg-icons';

export default function Video() {
  const player = useRef<VideoPlayer | null>(null);
  const [paused, setPaused] = useState(true);
  const [end, setEnd] = useState(false);

  const defaultProggressState = {
    currentTime: 0,
    playableDuration: 0,
    seekableDuration: 0,
  };
  const [progress, setProgress] = useState<OnProgressData>(
    defaultProggressState,
  );

  const progressBar =
    Math.ceil((progress.currentTime / progress.playableDuration) * 100 + 1) ||
    0;

  useDeviceOrientationChange((o: OrientationType) => {
    if (o === 'LANDSCAPE-RIGHT' || o === 'LANDSCAPE-LEFT') {
      player.current?.presentFullscreenPlayer();
    } else {
      player.current?.dismissFullscreenPlayer();
    }
  });

  const restart = () => {
    player.current?.seek(0);
    setPaused(false);
  };

  const handlePlayPause = () => (end ? restart() : setPaused(!paused));
  const handleFullScreen = () => player.current?.presentFullscreenPlayer();

  return (
    <ScrollView style={styles.container}>
      <View>
        <VideoPlayer
          onProgress={p => setProgress(p)}
          onFullscreenPlayerDidDismiss={() => setPaused(true)}
          onFullscreenPlayerDidPresent={() => setPaused(false)}
          onEnd={() => {
            setPaused(true);
            setProgress(defaultProggressState);
            setEnd(true);
          }}
          ref={player}
          style={styles.player}
          controls={false}
          resizeMode="cover"
          paused={paused}
          source={{
            type: 'video/mp4',
            uri: 'https://media.istockphoto.com/id/1339457362/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B1%D0%B5%D0%B7%D1%88%D0%BE%D0%B2%D0%BD%D0%B0-%D0%BF%D0%B5%D1%82%D0%BB%D1%8F-%D1%81%D0%B8%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE-%D1%96-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B3%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA%D1%83-%D0%BF%D1%83%D1%87%D0%BA%D1%96%D0%B2-%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%BA-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B8%D0%B9-%D0%BF%D0%BE%D1%82%D1%96%D0%BA-%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.mp4?s=mp4-640x640-is&k=20&c=DY0dsG3dDdnR6IaOkyb6cKPwNiW2TJwCuP7pDiKMeKM=',
          }}
        />
        <View style={styles.controls}>
          <TouchableOpacity onPress={handlePlayPause}>
            <FontAwesomeIcon icon={paused ? faPlay : faPause} size={24} />
          </TouchableOpacity>
          <View style={styles.bar}>
            <View style={[styles.proggressBar, {width: progressBar + '%'}]} />
          </View>
          <TouchableOpacity onPress={handleFullScreen}>
            <FontAwesomeIcon icon={faExpand} size={24} />
          </TouchableOpacity>
        </View>
      </View>
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
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    padding: 8,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255,  0.4)',
    zIndex: 10,
  },
  bar: {
    position: 'relative',
    width: '70%',
    height: 4,
    backgroundColor: '#191919',
    borderRadius: 16,
  },
  proggressBar: {
    width: '100%',
    position: 'absolute',
    height: 4,
    backgroundColor: 'red',
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
