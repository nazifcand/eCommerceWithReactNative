/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../styles/contants';

const ProductGallery = ({images}: {images: string[]}) => {
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = (event: any) => {
    const scrollOffsetX = event.nativeEvent.contentOffset.x;

    setActiveIndex(scrollOffsetX / width);
  };

  return (
    <View style={styles.gallery}>
      {/* list images */}
      <FlatList
        data={images}
        keyExtractor={item => String(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.1}
        snapToInterval={width}
        onScroll={handleOnScroll}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={styles.galleryItem}
            resizeMode="contain"
          />
        )}
      />
      {/* list images end */}

      {/* lines */}
      {/* TODO: efekt tam uygulandiktan sonra calisiyor, burasi icin bir sey bulabilirim. */}
      <View style={styles.lines}>
        {images.map((item: any, index: number) => (
          <Animated.View
            key={index}
            style={[
              styles.line,
              activeIndex === index && {
                backgroundColor: COLORS.primary,
                opacity: 1,
              },
            ]}
          />
        ))}
      </View>
      {/* lines end */}
    </View>
  );
};

export default ProductGallery;

const styles = StyleSheet.create({
  gallery: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  galleryItem: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: '#f5f5f5',
  },
  lines: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  line: {
    width: Dimensions.get('window').width / 10,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#fff',
    opacity: 0.5,
  },
});
