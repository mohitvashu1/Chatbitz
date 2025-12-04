import { colors } from '@/constants/theme'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const BackButton = ({
    style, 
    iconSize=26,
    color=colors.white
}:BackButtonProps) => {

    const router=useRouter();
  return (
    <TouchableOpacity onPress={()=>router.back()} style={[styles.button,style]}>
      <Text>BackButton</Text>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({})