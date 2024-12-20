import type React from 'react';
import type { StyleProp, TextProps, TextStyle } from 'react-native';

interface Props extends TextProps {
  fontFamily?: string;
  bold?: boolean;
  text: string;
  color?: string;
  styleTxt?: StyleProp<TextStyle>;
  underline?: boolean;
  capitalize?: boolean;
  lineThrough?: boolean;
  isItalic?: boolean;
}

export type CTextCom = React.FC<Props>;
