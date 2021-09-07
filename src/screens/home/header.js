import React from 'react';
import {View, Image, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../../assets';

import {AppStyle, colors} from '../../theme';
import Styles from './style';

const Header = () => {
  return (
    <View style={Styles.headerContainer}>
      <View style={[AppStyle.centerAlignedRow, Styles.headerRow]}>
        <MaterialIcons name="menu" size={25} color={colors.white} />
        <Image style={Styles.logoStyle} source={Images.appLogo} />
        <MaterialCommunityIcons name="bell" size={25} color={colors.white} />
      </View>
      <View style={[AppStyle.centerAlignedRow, Styles.searchContainer]}>
        <MaterialIcons name="search" size={25} color={colors.black} />
        <TextInput
          style={Styles.searchInputStyle}
          placeholder="Search products..."
          placeholderTextColor="rgba(0,0,0,0.5)"
        />
      </View>
    </View>
  );
};

export default Header;
