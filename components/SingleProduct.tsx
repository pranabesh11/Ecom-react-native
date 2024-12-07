import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SingleProduct = ({data}) => {
  return (
    <SafeAreaView>
        <View style={styles.card_view}>
            <View  style={styles.image_view}>
                <Image
                    style={styles.image}
                    source={{ uri: `${data.image}` }}
                />
            </View>
            <Text style={{fontSize:17,fontWeight:'500',paddingLeft:10,}}>{data.title.slice(0,21)}</Text>
            <Text style={{fontSize:17,fontWeight:'500',paddingLeft:10, backgroundColor:'#D7C3F1', width:'60%', borderColor:'#C8A1E0',borderWidth:3, borderRadius:4,marginLeft:8,marginTop:5}}>$ {data.price}</Text>
            <View style={styles.start_count}>
                <Image source={require('../assets/icons/fill_star.png')} style={styles.star_img}/>
                <Text style={{marginLeft:4}}>({data.rating.count})</Text>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default SingleProduct

const styles = StyleSheet.create({
    buttons:{
        height:10,
        width:40
    },
    card_view:{
        shadowColor: 'red',
        backgroundColor:'white',
        borderColor:'gery',
        borderRadius:10,
        borderWidth:1,
        width: 160,
        margin:5
    },
    image_view :{
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
    },
    image:{
        height:140,
        width:'90%',
        borderBlockColor:"black",
        margin:3,
        borderRadius:10,
        objectFit:'contain',
        aspectRatio:'1/1',
    },
    star_img:{
        height:20,
        width:20
    },
    start_count:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:8,
        marginBottom:5,
        marginLeft:5,

    }
})