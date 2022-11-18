import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieAnimationComponent from './LottieAnimationComponent';

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
      <LottieAnimationComponent />
    </View>
  );
};

export default App;
