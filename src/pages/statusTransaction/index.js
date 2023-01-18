import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const StatusTransaction=({navigation})=>{
  return (
   <View style={styles.Container}>
    <View style={styles.ContainerBlueBackgrund}>

    </View>
        <Text>HAI</Text>
   </View>
  )
}

export default StatusTransaction
const styles=StyleSheet.create({
    Container:{
        backgroundColor:'#EFEFEF',
        flex:1
    },
    ContainerBlueBackgrund:{
        backgroundColor:'#2075F3',
        flex:5
    }
})