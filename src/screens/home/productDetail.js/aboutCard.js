import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Styles from './style';

const AboutCard = ({data}) => {
  const {width} = useWindowDimensions();
  const source = {
    html: data ? data : '',
  };
  return (
    <View style={Styles.cardContainer}>
      <Text style={Styles.productCardtitle}>About Product</Text>
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
};

export default AboutCard;
