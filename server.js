// const express = require('express');
// const cors = require('cors');
// const { Client, Config, CheckoutAPI } = require('@adyen/api-library');
import express from 'express'
import cors from 'cors'
import pkg from '@adyen/api-library';
const { Client, Config, CheckoutAPI } = pkg;
const app = express();
app.use(cors());
app.use(express.json());

// Set your Adyen merchantAccount and API key here
const merchantAccount = 'AdyenRecruitment_Japan';
const apiKey = 'AQEyhmfxLo3IaBBKw0m/n3Q5qf3VaY9UCJ14XWZE03G/k2NFirKAXqKRXCvkvLaaz72weWUQwV1bDb7kfNy1WIxIIkxgBw==-Bgg+ZPv1effBsSKpmtRFxHA7tvdatIgzbI9aKIj9kT0=-i1i5%@xHxZ~3CD^,WqH';

// Initialize Adyen client
const client = new Client({ apiKey: apiKey, environment: 'TEST' }); // Use 'LIVE' for production
const checkout = new CheckoutAPI(client);

// Adyen Node API Library v18.0.0
// Require the parts of the module you want to use
// const { Client, CheckoutAPI } = require('@adyen/api-library');
// import pkg from '@adyen/api-library';
// const { Client, Config, CheckoutAPI } = pkg;
// Initialize the client object
// For the live environment, additionally include your liveEndpointUrlPrefix.


// Create the request object(s)
const createCheckoutSessionRequest = {
merchantAccount: "AdyenRecruitment_Japan",
amount: {
    value: 1000,
    currency: "EUR"
},
returnUrl: "http://localhost:8000/checkout.html",
reference: "EUGENE-WEBSTORE",
countryCode: "NL"
}

// Send the request
const checkoutAPI = new CheckoutAPI(client);
const response = checkoutAPI.PaymentsApi.sessions(createCheckoutSessionRequest, { idempotencyKey: "UUID" });





app.post('/api/sessions', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create payment session
    const response = await checkout.sessions({
      merchantAccount: merchantAccount,
      amount: {
        currency: 'EUR',
        value: amount || 1000, // amount in minor units, e.g. 1000 = 10.00 EUR
      },
      countryCode: 'NL',
      reference: 'TestSession001',
      returnUrl: 'http://localhost:8000/', // URL to return to after payment
    });

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.use(express.static('public'));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



