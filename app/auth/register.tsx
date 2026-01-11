import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const [role] = useState<"parent" | "caregiver">("parent");

  return (
    <LinearGradient
      colors={['#FFA726', '#FFB74D', '#FDD835', '#C5E1A5', '#94C94A']}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.appName}>FuchheyCare</Text>
          <Text style={styles.tagline}>
            {role === "parent" ? "Parent Registration" : "Caregiver Registration"}
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />

          {role === "parent" && (
            <>
              <View style={styles.divider} />
              <Text style={styles.sectionTitle}>Child Details</Text>

              <TextInput
                placeholder="Child Name"
                placeholderTextColor="#999"
                style={styles.input}
              />

              <TextInput
                placeholder="Child Age"
                placeholderTextColor="#999"
                keyboardType="numeric"
                style={styles.input}
              />

              <TextInput
                placeholder="Grade / Class"
                placeholderTextColor="#999"
                style={styles.input}
              />

              <TextInput
                placeholder="Allergies / Medical Notes (optional)"
                placeholderTextColor="#999"
                multiline
                numberOfLines={3}
                style={[styles.input, styles.multiline]}
              />
            </>
          )}

          {role === "caregiver" && (
            <>
              <View style={styles.divider} />
              <Text style={styles.sectionTitle}>Professional Details</Text>

              <TextInput
                placeholder="Center / Daycare Name"
                placeholderTextColor="#999"
                style={styles.input}
              />

              <TextInput
                placeholder="Role (Caregiver)"
                placeholderTextColor="#999"
                style={styles.input}
              />

              <TextInput
                placeholder="Years of Experience"
                placeholderTextColor="#999"
                keyboardType="numeric"
                style={styles.input}
              />

              <TextInput
                placeholder="Short Bio / Experience Summary"
                placeholderTextColor="#999"
                multiline
                numberOfLines={3}
                style={[styles.input, styles.multiline]}
              />
            </>
          )}

          <LinearGradient
            colors={role === "parent" ? ['#FF9800', '#FB8C00', '#F57C00'] : ['#E91E63', '#D81B60', '#C2185B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {role === "parent" ? "Create Parent Account" : "Submit for Verification"}
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.linkText}>Login instead</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#BB519A',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  form: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  multiline: {
    height: 90,
    textAlignVertical: 'top',
  },
  divider: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginVertical: 24,
    borderRadius: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  buttonGradient: {
    borderRadius: 14,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  button: {
    paddingVertical: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#D81B60',
    fontSize: 16,
    fontWeight: '700',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});