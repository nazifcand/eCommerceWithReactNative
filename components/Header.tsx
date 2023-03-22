import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackIcon from '../icons/BackIcon';
import BellIcon from '../icons/BellIcon';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.75} onPress={e => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.75} style={styles.bellWrapper}>
        <BellIcon />
        <View style={styles.bellBadge}>
          <Text style={styles.bellBadgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bellWrapper: {
    position: 'relative',
  },
  bellBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 15,
    height: 15,
    backgroundColor: '#000',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bellBadgeText: {
    color: '#fff',
    fontSize: 10,
  },
});
