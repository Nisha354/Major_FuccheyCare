import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#FFA726', '#FFB74D', '#FDD835', '#C5E1A5', '#94C94A']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.appName}>FuchheyCare</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Enriching children,</Text>
        <Text style={styles.title}>Empowering parents.</Text>

        <Image
          source={require('../../assets/images/girls-friendship-cartoon.jpg')}
          style={styles.illustration}
        />

        <LinearGradient
          colors={['#E91E63', '#D81B60', '#C2185B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonGradient}
        >
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/auth/register')}
          >
            <Text style={styles.buttonTextWhite}>Caregiver →</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#FF9800', '#FB8C00', '#F57C00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonGradient}
        >
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/auth/register')}
          >
            <Text style={styles.buttonTextWhite}>Parent →</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity 
          style={styles.linkContainer}
          onPress={() => router.push('/auth/signup')}
        >
          <Text style={styles.linkText}>Login to your center</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 80,
    alignItems: 'center',
    marginBottom: 40,
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#D81B60',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  content: {
    paddingHorizontal: 32,
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  buttonGradient: {
    borderRadius: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  button: {
    paddingVertical: 18,
  },
  buttonTextWhite: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  linkContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  linkText: {
    color: '#D81B60',
    fontWeight: '700',
    fontSize: 16,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  illustration: {
    width: '100%',
    height: 280,
    marginVertical: 32,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});