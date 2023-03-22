import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../styles/contants';

// icons
import HeartIcon from '../icons/HeartIcon';
import {FavoritesContext} from '../contexts/favorites.context';

const Product = ({id, title, thumbnail, description, price, ...args}: any) => {
  const favoritesContext = useContext(FavoritesContext);

  const handleFavorite = () => {
    favoritesContext.setFavorites((favorites: any) => {
      if (favorites.includes(id)) {
        return favorites.filter(item => item !== id);
      }
      return [...favorites, id];
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.productWrapper}
      {...args}>
      <Image source={{uri: thumbnail}} style={styles.productThumbnail} />
      <Text style={styles.productName}>{title}</Text>
      <Text style={styles.productDescription}>{description}</Text>
      <Text style={styles.productPrice}>{price.toFixed(2)}TL</Text>
      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.favoriteWrapper}
        onPress={() => handleFavorite()}>
        {favoritesContext.favorites.includes(id) ? (
          <HeartIcon
            width="16"
            height="16"
            fillColor={COLORS.primary}
            strokeWidth={1}
          />
        ) : (
          <HeartIcon width="16" height="16" strokeWidth={1} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  productWrapper: {
    width: (Dimensions.get('screen').width - 50) / 2,
    gap: 8,
    position: 'relative',
  },
  productThumbnail: {
    width: '100%',
    height: 125,
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  productName: {
    fontWeight: '600',
    fontSize: 16,
  },
  productDescription: {
    fontSize: 12,
    lineHeight: 15,
  },
  productPrice: {
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  favoriteWrapper: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
});
