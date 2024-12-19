import { View, Text, StyleSheet } from 'react-native';

interface TextComponentProps {
  text: string;
  color: string;
}

const TextComponent = (props: TextComponentProps) => {
  const { text, color } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: color ?? '#333' }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default TextComponent;
