/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import LottieView from 'lottie-react-native';
import { FC } from 'react';
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
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/lottie/lottie_box_ani.json')}
        autoPlay
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
