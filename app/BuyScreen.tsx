import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EXCHANGE_RATE = 127; // Fixed exchange rate (1 USD = 127 KSH)
const DARAJA_URL = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

const BuyScreen = () => {
  const [amount, setAmount] = useState<string>('');
  const [kshAmount, setKshAmount] = useState<number>(0);

  const navigation = useNavigation();

  // Handle real-time conversion
  const handleAmountChange = (value: string) => {
    setAmount(value);
    const usdValue = parseFloat(value) || 0;
    setKshAmount(usdValue * EXCHANGE_RATE);
  };

  const handleBuy = async () => {
    if (!amount) {
      Alert.alert('Error', 'Please enter an amount.');
      return;
    }

    try {
      const phoneNumber = await AsyncStorage.getItem('phoneNumber');
      if (!phoneNumber) {
        Alert.alert('Error', 'Phone number not found in session.');
        return;
      }

      // Get Daraja access token
      const tokenResponse = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        auth: {
          username: 'YOUR_CONSUMER_KEY',
          password: 'YOUR_CONSUMER_SECRET',
        },
      });

      const accessToken = tokenResponse.data.access_token;

      // Generate the password
      const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
      const password = Buffer.from(`174379YOUR_PASSKEY${timestamp}`).toString('base64');

      // Trigger STK push
      const response = await axios.post(
        DARAJA_URL,
        {
          BusinessShortCode: '174379',
          Password: password,
          Timestamp: timestamp,
          TransactionType: 'CustomerPayBillOnline',
          Amount: kshAmount,
          PartyA: phoneNumber,
          PartyB: '174379',
          PhoneNumber: phoneNumber,
          CallBackURL: 'https://your-callback-url.com',
          AccountReference: 'USD Purchase',
          TransactionDesc: `Buying ${amount} USD`,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
      Alert.alert('Success', `Request sent for KES ${kshAmount}. Please enter your PIN to confirm.`);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Transaction failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy</Text>
      <Text style={styles.rate}>1 USD = {EXCHANGE_RATE} KSH</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount in USD"
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
      />

      <Text style={styles.resultText}>
        Equivalent in Ksh: {kshAmount.toFixed(2)} Ksh
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleBuy}>
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  rate: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BuyScreen;
