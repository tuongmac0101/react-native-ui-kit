import ComponentScreen from 'example/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ComponentScreen />
    </SafeAreaProvider>
  );
};

export default App;
