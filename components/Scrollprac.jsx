import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Scrollprac = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.child_container}>
                <Text style={styles.text}>Hello</Text>
            </View>
        </ScrollView>
    </View>
    
  )
}

export default Scrollprac

const styles = StyleSheet.create({
    container:{
        borderColor:'red',
        width:'100%',
        paddin:10,
        margin:10,
        borderWidth:6
    },
    child_container:{

    },
    text:{
        height:40,
        width:'90%',
        backgroundColor:'black',
        color:'white',
    }
})