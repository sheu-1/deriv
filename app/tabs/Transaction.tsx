import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Transaction = () => {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.depositButton}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Recent Transactions Section */}
      <Text style={styles.recentText}>Recent transactions</Text>
      {/* You can map through transaction data here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  balanceText: {
    fontSize: 16,
    color: '#777777',
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  depositButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  withdrawButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
  },
});

export default Transaction;
