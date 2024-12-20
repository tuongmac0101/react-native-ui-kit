import TextScreen from './Text/TextScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const ComponentScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <TextScreen />
    </SafeAreaView>
  );
};

export default ComponentScreen;
