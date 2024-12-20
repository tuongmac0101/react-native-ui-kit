/* eslint-disable react-native/no-inline-styles */
import { Text, StyleSheet } from 'react-native';
import type { CTextCom } from './model';

const TextComponent: CTextCom = (props) => {
  const {
    text,
    color,
    styleTxt,
    fontFamily,
    bold,
    underline,
    capitalize,
    lineThrough,
    isItalic,
  } = props;
  return (
    <Text
      {...props}
      style={[
        styles.text,
        color && { color: color },
        fontFamily && { fontFamily: fontFamily },
        bold && { fontWeight: 'bold' },
        underline && {
          textDecorationLine: 'underline',
        },
        lineThrough && {
          textDecorationLine: 'line-through',
        },
        capitalize && {
          textTransform: 'capitalize',
        },
        isItalic && { fontStyle: 'italic' },
        styleTxt,
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default TextComponent;
