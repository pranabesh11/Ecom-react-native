import { StyleSheet, Text, View ,Image, ActivityIndicator} from 'react-native'
import React, { useState,useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';


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
      <View style={{backgroundColor:'white',alignItems:'center'}}>
        <Image source={{ uri: details?.image }} resizeMode="contain" height={350}  width={350} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{details.title}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <View style={{backgroundColor:'green' , flexDirection:'row',alignItems:'center',padding:5,borderRadius:5,height:30,}}>
          <Text style={{width:30, color:'white',}}>{details?.rating.rate}</Text>
          <Image source={require('../assets/icons/fill_star.png')} style={{width:15,height:15}}/>
        </View>
        <Text style={{margin:5,fontSize:20,color:'grey'}}>{`(${details?.rating.count})`}</Text>
        <Text style={{fontSize:18,fontWeight:500,backgroundColor:'#FADA7A', borderColor:'#F29F58',borderWidth:3,borderRadius:7,padding:3}}>{details?.category}</Text>
      </View>
      <View>
        <Text style={styles.price}>{`$${details.price}`}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <ScrollView style={{height:150,padding:9}}>
          <Text style={styles.descriptionText}>{details.description}</Text>
        </ScrollView>
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
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  },
  price: {
    marginLeft:10,
    fontWeight:800,
    fontSize: 20,
    color: 'black',
  },
  ratingContainer: {
    flexDirection:'row',
    width:'100%',
    marginBottom: 5,
    marginLeft:10,
    alignItems:'center'
  },
  descriptionContainer: {
    
  },
  descriptionTitle: {
    fontWeight: 700,
    marginLeft:10,
    fontSize:17,
    marginTop:5
  },
  descriptionText: {
    margin:10,
    fontSize: 16,
    color: 'gray',
  },
});