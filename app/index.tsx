import { colors } from '@/constants/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SpalshScreen
 = () => {
  return (
    <View style={styles.container}>
      <Text>SpalshScreen
        
      </Text>
    </View>
  )
}

export default SpalshScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.neutral900

    }
})