import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  BuyScreen: undefined;
  SellScreen: undefined;
};

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#000000', // Black
  secondary: '#777777',
  background: '#ffffff', // White
  green: '#28a745', // Green for Buy
  black: '#000000', // Black for Sell
  border: '#ccc',
};

const SPACING = 20;

const Transaction = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitial}>A</Text>
        </View>
        <Text style={styles.welcomeText}>Welcome back, Alex</Text>
      </View>

      {/* Balance Section */}
      <Text style={styles.balanceText}>Your balance is</Text>
      <Text style={styles.amountText}>100 USD</Text>

      <View style={styles.divider} />

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => navigation.navigate('BuyScreen')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sellButton}
          onPress={() => navigation.navigate('SellScreen')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Recent Transactions Section */}
      <Text style={styles.recentText}>Recent transactions</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: SPACING,
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary, // Black
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: COLORS.background, // White text inside the black circle
    fontSize: 22,
    fontWeight: 'bold',
  },
  welcomeText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  balanceText: {
    fontSize: 16,
    color: COLORS.secondary,
  },
  amountText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING / 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8, // Responsive width
    marginBottom: SPACING,
  },
  buyButton: {
    backgroundColor: COLORS.green, // Green for Buy
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  sellButton: {
    backgroundColor: COLORS.black, // Black for Sell
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.background, // White text for buttons
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  recentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 8,
  },
});

export default Transaction;
