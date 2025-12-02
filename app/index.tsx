import Typo from '@/components/Typo';
import { colors } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(auth)/Welcome");
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <LinearGradient
        colors={['#0f172a', '#1e293b', '#0ea5e9']}
        style={styles.container}
      >
        <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />

        <Animated.Image
          source={require('@/assets/images/splashImage.png')}
          entering={FadeInDown.duration(800).springify()}
          style={styles.logo}
          resizeMode="contain"
        />

        <Animated.View
          entering={FadeInUp.duration(800).delay(300)}
          style={{ marginTop: 20 }}
        >
          <Typo
            color={colors.white}
            size={38}
            fontWeight={'800'}
            style={{ textAlign: 'center', letterSpacing: 1 }}
          >
            Chatbitz
          </Typo>
        </Animated.View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "38%",
    aspectRatio: 1,
  },
});

export default SplashScreen;
