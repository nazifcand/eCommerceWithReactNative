/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {COLORS} from '../styles/contants';
import {fetchProducts} from '../services/product.service';
import {fetchCategories} from '../services/category.service';
import Product from '../components/Product';
import Category from '../components/Category';

// icons
import Logo from '../icons/Logo';
import BellIcon from '../icons/BellIcon';
import FilterIcon from '../icons/FilterIcon';

const HomeScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | number>(
    '*',
  );
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({
    total: 100,
    skip: 0,
    limit: 30,
    products: [],
  });

  const filteredProducts = useMemo(() => {
    const regex = new RegExp(searchText, 'gi');
    return products.products.filter(item => item.title.match(regex));
  }, [products.products, searchText]);

  useEffect(() => {
    (async () => {
      const [errs, results] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ])
        .then(res => [null, res])
        .catch(err => [err]);

      if (errs) {
        return;
      }
      // set products
      const [productsErr, productsData] = results[0];
      setProducts(productsData);

      // set categories
      const [categoriesErr, categoriesData] = results[1];
      setCategories([
        {id: '*', title: 'All'},
        ...categoriesData.map((item: any) => ({id: item, title: item})),
      ]);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* header */}
      <View style={styles.header}>
        <Logo />
        <TouchableOpacity activeOpacity={0.75} style={styles.bellWrapper}>
          <BellIcon />
          <View style={styles.bellBadge}>
            <Text style={styles.bellBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* header end */}

      {/* search */}
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search anything..."
          value={searchText}
          onChangeText={setSearchText}
          autoComplete="off"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.searchButton}
          activeOpacity={0.75}
          onPress={() => alert(searchText)}>
          <FilterIcon width="18" height="13" color="#fff" />
        </TouchableOpacity>
      </View>
      {/* search end */}

      {/* categories */}
      <View>
        <FlatList
          style={styles.categoriesWrapper}
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
            <Category
              title={item.title}
              selected={item.id === selectedCategory}
              onPress={() => setSelectedCategory(item.id)}
            />
          )}
        />
      </View>
      {/* categories end */}

      {/* list products */}
      <FlatList
        data={searchText ? filteredProducts : products.products}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item, index}) => (
          <Product
            {...item}
            onPress={() => navigation.push('_productDetail', {product: item})}
          />
        )}
      />
      {/* list products end */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    // backgroundColor: 'pink',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
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
  searchWrapper: {
    marginHorizontal: 20,
    gap: 10,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: COLORS.grey,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  searchButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 6,
  },
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
  productList: {
    paddingHorizontal: 20,
    gap: 20,
  },
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
