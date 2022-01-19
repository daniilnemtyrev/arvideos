import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroVideo,
  ViroConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const [x, setX] = useState(-3);

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('ЯША КУСОК МЯСА ДЕРЬМАС ЭЛВИК ПИДАР');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  const onClick = () => {
    console.log(x);
    if (x < 6) {
      setX(x + 1);
    } else {
      setX(x - 1);
    }
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroVideo
        source={require('./video/2D.WebM.mp4')}
        loop={true}
        position={[x, -1, -2]}
        onClick={onClick}
        scale={[2, 3, 0]}
        dragPlane={{
          maxDistance: 10,
          planePoint: [-3, -2, -1, 0, 1, 2, 3],
          planeNormal: [-3, -2, -1, 0, 1, 2, 3],
        }}
        dragType={'FixedToWorld'}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
