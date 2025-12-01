import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

const Welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper showPattern={true} bgOpacity={0.5}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center'}}>
          <Typo color={colors.white} size={43} fontWeight={'900'}>Bubbly</Typo>
        </View>
      <Animated.Image 
        entering={FadeIn.duration(700).springify()}
        style={styles.welcomeImage}
        resizeMode={"contain"}
        source={require('@/assets/images/welcome.png')}
      />
      <View>
        <Typo color={colors.white} size={33} fontWeight={'800'} style={{ textAlign: 'center' }}>
          Stay Connected
        </Typo>
        <Typo color={colors.white} size={33} fontWeight={'800'} style={{ textAlign: 'center' }}>
          with your friends 
        </Typo>
        <Typo color={colors.white} size={33} fontWeight={'800'} style={{ textAlign: 'center' }}>
          and family
        </Typo>
      </View>
      
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: spacingX._20,
    marginVertical: spacingY._10,
   
  },
  background: {
     backgroundColor: colors.neutral900,
  },
  welcomeImage:{
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: 'center',
  }
})

export default Welcome
