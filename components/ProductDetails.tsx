import { StyleSheet, Text, View ,Image, ActivityIndicator} from 'react-native'
import React, { useState,useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProductDetails = () => {
  const route = useRoute()
  const id = route.params?.item
  const [details , setDetails] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); // Loading state
  useEffect(() => {
    // Fetch product details when the component mounts
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setIsLoading(false); // Set loading state to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setIsLoading(false); // Set loading state to false in case of error
      });
  }, [id]);
  if (isLoading) {
    return (
      <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <ActivityIndicator size="large" color="grey" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <Image source={{ uri: details?.image }} resizeMode="contain" height={350}  width={350}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.price}>{details.price}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text>{details?.rating.rate}</Text>
        <Text>{details?.rating.count}</Text>
        <Text>{details?.category}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{details.description}</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  ratingContainer: {
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
  },
});