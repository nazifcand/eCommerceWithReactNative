/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../styles/contants';

const Category = ({title, selected, ...args}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={{
        ...styles.category,
        backgroundColor: selected ? '#000' : COLORS.grey,
      }}
      {...args}>
      <Text
        style={{
          ...styles.categoryText,
          color: selected ? '#fff' : '#000',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginVertical: 15,
    paddingLeft: 15,
  },
  category: {
    marginLeft: 5,
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 12,
  },
});
