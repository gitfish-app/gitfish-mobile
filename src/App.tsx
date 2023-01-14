import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  useFonts as useNotoSans,
  NotoSansJP_400Regular,
  NotoSansJP_700Bold,
} from '@expo-google-fonts/noto-sans-jp';
// import * as SplashScreen from 'expo-splash-screen';
import { FC, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const DAILY_GOAL = 2000;

// SplashScreen.preventAutoHideAsync();

const App: FC = () => {
  const [montserratLoaded] = useMontserrat({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  const [notoSansLoaded] = useNotoSans({
    NotoSansJP_400Regular,
    NotoSansJP_700Bold,
  });

  const [amountOfWater, setAmountOfWater] = useState(1200);

  const drink = () => {
    setAmountOfWater(amountOfWater + 200);
  };

  // const onLayoutRootView = useCallback(async () => {
  // if (montserratLoaded && notoSansLoaded) {
  // await SplashScreen.hideAsync();
  // }
  // }, [montserratLoaded, notoSansLoaded]);

  if (!(montserratLoaded && notoSansLoaded)) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{amountOfWater}</Text>
      <Text onPress={drink}>Drink!</Text>
    </View>
  );
};

export default App;
