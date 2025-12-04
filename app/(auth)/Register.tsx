import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { View } from 'react-native-reanimated/lib/typescript/Animated'

const Register = () => {
  return (  
    <KeyboardAvoidingView
    style={{flex:1}} 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScreenWrapper>
        <View>
          
        </View>
    </ScreenWrapper>
    </KeyboardAvoidingView>
    
  )
}

export default Register

const styles = StyleSheet.create({})