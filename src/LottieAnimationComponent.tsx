import { PureComponent } from 'react';
import { Text } from 'react-native';

export default class LottieAnimationComponent extends PureComponent {
  render() {
    return <Text>test</Text>;
    // return <LottieView source={require('./animation.json')} autoPlay loop />;
  }
}
