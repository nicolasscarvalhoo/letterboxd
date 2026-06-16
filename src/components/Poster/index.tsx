import React from 'react';
import { Image, ImageStyle, StyleProp, TouchableOpacity } from 'react-native';
import styles from './style';

interface PosterProps {
  uri: string;
  style?: StyleProp<ImageStyle>; 
}

const Poster: React.FC<PosterProps> = ({ uri, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Image source={{ uri }} style={[styles.poster, style]} />
    </TouchableOpacity>
  );
};

export default Poster;