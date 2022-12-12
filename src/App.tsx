/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import LottieView from 'lottie-react-native';
import { FC, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App: FC = () => {
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current?.reset();
        lottieRef.current?.play();
      }, 100);
    }
  }, [lottieRef.current]);

  return (
    <View style={styles.container}>
      <LottieView
        ref={lottieRef}
        source={require('./assets/lottie/lottie_box_ani.json')}
        loop
        style={{
          height: 90,
          borderStyle: 'solid',
          borderWidth: 1,
        }}
        colorFilters={[
          {
            keypath: 'box_clip',
            color: '#00c3ff',
          },
        ]}
      />
    </View>
  );
};

export default App;
