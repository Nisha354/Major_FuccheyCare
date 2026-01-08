import {useRouter} from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>FuchheyCare</Text>
        <Text style={styles.tagline}>Smart Childcare Management</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Manage childcare with ease</Text>

        <Text style={styles.title}>More care for children.</Text>
        <Text style={styles.title}>Less work on paperwork.</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Admin / Director →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Staff / Caregiver →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Parent / Guardian →</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Already registered?</Text>
        <Text style={styles.linkText}>Login to your center</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A67D8',
  },
  header: {
    paddingTop: 70,
    alignItems: 'center',
  },
  appName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  tagline: {
    fontSize: 14,
    color: '#E0E7FF',
    marginTop: 5,
  },
  content: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  subtitle: {
    color: '#E0E7FF',
    fontSize: 14,
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 34,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 18,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#4C51BF',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 28,
    color: '#E0E7FF',
  },
  linkText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
