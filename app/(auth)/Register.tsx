import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import * as Icons from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'


const Register = () => {
   const router = useRouter()
  const nameRef = useRef("")
  const emailRef = useRef("")
  const passwordRef = useRef("")
   const [isLoading, setIsLoading] = useState(false)
  return (  
    <KeyboardAvoidingView
    style={{flex:1}} 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScreenWrapper showPattern={true}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton iconSize={33} ></BackButton>
          <Typo size={17} color={colors.white}>
            Need some help ?
          </Typo>
          </View>
            
          <View style={styles.content}>
            <ScrollView
              contentContainerStyle={styles.form} 
              showsVerticalScrollIndicator={false}
              >
                <View style={{ gap: spacingY._10, marginBottom: spacingY._15}}>
                   <Typo size={28} color={colors.black} fontWeight={'600'}>
                    Getting Started
                  </Typo>
                  <Typo color={colors.neutral600}>
                    Create an account to continue
                  </Typo>
                </View>   
                      <Input placeholder='Enter your Name' 
                        onChangeText={(value:string) => nameRef.current= value}
                        icon={<Icons.User
                        size={verticalScale(26)} color={colors.neutral600}
                            />
                              }
                        />
                        <Input placeholder='Enter your Email' 
                        onChangeText={(value:string) => emailRef.current= value}
                        icon={<Icons.User
                        size={verticalScale(26)} color={colors.neutral600}
                            />
                              }
                        />
                        <Input placeholder='Create a Password' 
                        onChangeText={(value:string) => passwordRef.current= value}
                        icon={<Icons.User
                        size={verticalScale(26)} color={colors.neutral600}
                            />
                              }
                        />
              </ScrollView>

          </View>
        </View>
    </ScreenWrapper>
    </KeyboardAvoidingView>
    
  )
}

export default Register

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._15,
    paddingBottom: spacingY._25,
  },
  content: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: radius._20,
    borderTopRightRadius: radius._50,
    borderCurve: 'continuous',
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._20,
  },
  form: {
    gap: spacingY._20,
    marginTop: spacingY._20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  button: {
    // Add any button-specific styles here
  }
})