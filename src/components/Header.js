import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? Colors.primary : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    color: Platform.OS === 'ios' ? Colors.primary : 'white'
  }
});

export default Header;
