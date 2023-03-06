import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 980,
    image: '/assests/hot.jfif'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 20,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 30,
    image: 'https://via.placeholder.com/150'
  }
];

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image style={styles.cardImage} source={{ uri: product.image }} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{product.name}</Text>
        <Text style={styles.cardDescription}>{product.description}</Text>
        <Text style={styles.cardPrice}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handleProductSelect(item)} />
        )}
      />
      {selectedProduct && (
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
          <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
          <Text style={styles.modalPrice}>${selectedProduct.price}</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setSelectedProduct(null)}
          >
            <Text style={styles.modalButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  cardImage: {
    width: 100,
    height: 100,
    marginRight: 16
  },
  cardInfo: {
    flex: 1
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  cardDescription: {
    marginBottom: 8
  },
  cardPrice: {
    fontWeight: 'bold'
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  modalDescription: {
    marginBottom: 8
  },  modalPrice: {
    fontWeight: 'bold',
    marginBottom: 16
  },
  modalButton: {
    backgroundColor: '#0080ff',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-end'
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default Catalog;