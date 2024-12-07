import { ScrollView, StyleSheet,FlatList, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import SingleProduct from './SingleProduct';


const ProductList = ({ navigation }) => {
  const [category, setCategory] = useState([]);
  const [allproduct , setAllProduct] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('https://fakestoreapi.com/products/categories');
      setCategory(data.data);
    };
    fetchData();

    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((data)=>{setAllProduct(data)})
    // console.log("this is all data",allproduct);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.maintitle}>
        <Text style={styles.title}>MY STORE</Text>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {category.map((data, index) => (
            <Text key={index} style={styles.each_cat}>{data}</Text>
          ))}
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
          <FlatList
            data={allproduct}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) =>item? <TouchableOpacity onPress={() => navigation.navigate('details',{item:item.id})}><SingleProduct data={item}/></TouchableOpacity>:null}
            numColumns={2}
            contentContainerStyle={styles.mylist}
          />
      </View>
      
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  mylist: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  each_cat: {
    backgroundColor: '#3B1E54',
    height: 50,
    margin: 10,
    color: '#EEEEEE',
    textAlign: 'center',
    paddingTop: 15,
    borderRadius: 7,
    padding: 10,
    fontWeight: 'bold',
  },
  maintitle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    height: 40,
    width: '100%',
    margin: 10,
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 40,
    fontFamily: 'cursive',
    color: 'brown',
  },
});
