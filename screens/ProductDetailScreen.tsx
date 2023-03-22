/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchProductById} from '../services/product.service';
import {COLORS} from '../styles/contants';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import StarIcon from '../icons/StarIcon';
import CartIcon from '../icons/CartIcon';

const ProductDetailScreen = ({route, navigation}: any) => {
  const [product, setProduct] = useState({images: []});

  useEffect(() => {
    (async () => {
      const [err, result] = await fetchProductById(route.params.product.id);

      if (err) {
        return alert('urun detayi gelmedi!');
      }

      setProduct(result);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* TODO: header'a bilerek navigation geciyorum ama bunu global'e tasimam
        gerekiyor. */}
      <Header navigation={navigation} />
      <FlatList
        ListFooterComponent={<ProductDetailFooter product={product} />}
      />
      {/* sticky footer */}
      <View style={styles.stickyFooter}>
        <View>
          <Text style={{color: '#777'}}>Price</Text>
          <Text style={styles.price}>{product.price}TL</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.addBtn}
          onPress={() => alert('Sepete ekle')}>
          <CartIcon color="#fff" />
          <Text style={{color: '#fff', fontWeight: '600'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      {/* sticky footer start */}
    </SafeAreaView>
  );
};

const ProductDetailFooter = ({product}: any) => {
  return (
    <>
      {/* product images */}
      {product?.images?.length > 0 && (
        <ProductGallery images={product.images} />
      )}
      {/* product images end */}

      <View style={{paddingHorizontal: 20}}>
        {/* title */}
        <Text style={styles.title}>{product.title}</Text>
        {/* title start */}

        {/* brand */}
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.brand}
          onPress={() => alert('marka sayfasina yonlendir')}>
          <Text style={{color: '#fff'}}>{product.brand}</Text>
        </TouchableOpacity>
        {/* brand start */}

        {/* category */}
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.category}
          onPress={() => alert('kategori sayfasina yonlendir')}>
          <Text style={{color: COLORS.primary}}>{product.category}</Text>
        </TouchableOpacity>
        {/* category start */}

        {/* rating */}
        <View style={styles.rating}>
          <StarIcon />
          <Text style={styles.ratingText}>{product.rating} / 5</Text>
          <Text style={styles.reviews}>(45 reviews)</Text>
        </View>
        {/* rating start */}

        {/* description */}
        <Text style={styles.description}>{product.description}</Text>
        {/* description start */}
      </View>
    </>
  );
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  brand: {
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: COLORS.primary,
    marginRight: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    color: '#fff',
  },
  category: {
    fontSize: 14,
    marginBottom: 15,
  },
  rating: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
  },
  reviews: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#555',
  },
  description: {
    lineHeight: 23,
    color: '#555',
    marginBottom: 20,
    fontSize: 16,
  },
  stickyFooter: {
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 23,
    paddingVertical: 18,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
