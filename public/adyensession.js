

// Global configuration starts here

// const { AdyenCheckout } = require("@adyen/adyen-web");

const globalConfiguration = {
  session: {
    id: 'CS1F901A0DCEE6D5F2', // Unique identifier for the payment session.
    sessionData: 'Ab02b4c0!BQABAgAnSRNBxyiKdAaIaXdKzZPe6RuC739KXCKZuc7VXkPQFfEORsl8ei0Pz1mSu+yv2ObhrJwcEcvHP8DvRNilfp1gZgSyw+RT0n820rkB4S7jYeGUee9Pn4aXfL8ESrdHycsNvmZ18QyIGIDC///HwcuoDlv8NLps339RxwOZoKc07kd/qqxQS46gkUSftGYG9IIWXpAiqaN3nDJ1znWG/sAleUc9/KQcTY0FXGfcSshert0kiGcj6yqDeGAtK3zrW32doJrBreEvD46Pd6982KZQap7+/wmUqyiIJYqCzSpTiRE4fUz+KsK94V+vfA0k7RG6hRXc06MMJhJy2Ukicjt1OmF6R3nksjjpPJYQCDqzQ2jBxGNjleYGo/x+cr42RkFXCU1Cgv5CxcXjVo2y+cXiQQkrU/hSPWM469krOM7ijRP6ZCzLVlyhTM+nXu1CmGsgJ9CAYNqqGJ1oI/DO44/zCvW1/FLILzutFMs23xCYtHdwm3lnBJ6qsCTogy74yp2zPlnJ+MQB1ZS/Wf6jj/+sgOe3f0WYiJb1h/Dwf8SkyU4eD3IcdihjYIHHVkylK6gQRmGgwC8v+3+61KSws09lsHZYr5aT68IY1Bmpo0kk6S/gOK3AOa9GlEpQ5dBeV39ncXu5hxlXRZR02LLvDJCqx77qlvfCm0paQqBHISaZxgysnEHPsjRjjKVzmKsASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ9XLRn8ESswVCF30mqJisld1vV9o1RwW15Ww69s+zvk1UCBrfEdVCTPKm44jvi6Ap/rKlxNYjJZYTD2pRx/mWj1vBKSXHb1Vtl4aaOyXJaXnYZx4jhaKuKiZMG/ekkQIX4oMI5TFcJUyYc9ynBoRv0Z21ljBjTQJA9gpeKgTDKoj9iL0G1K+OtksB8xGEyl5CysfySmuzY+TBaJqBhh4e045uCfqpsJbHdtY7AsDI7lPWcIMZKfvKlSkeWBXvJrA462VdtBGt+u771C8+l1pkOZMwUljQcowPSLpttKoU1lNfW1fTMTaMrNdK9ppCffuih+AuDewdRIw1A5FAr4DoH0NcvCUWaR0lzqDE6NXd7hz2bNV2AXwbAs6ewTDDgpgkN0tehBad838v/ee0xYJphyBKTGrtSDDPjKXU9puXsASL+6KROfUFKiXcn8IHSwp3tC4StBSqHvEEZ+8wHO2fEbky5dcXfnNuY54Wg6l3Z0M/hbvCLAJjV2rPys+GBH9lt/Hx/C5b1R0wltJdEqdQayzc9T8ccwuQBFqPIYund3uesEzsNs4wSiAYPk9eDKjqK93o8gtXp9u6gE7Bh96hQWSrhRz3Mk60jfB34eC7QfiezY+QocyZ1ddB4ygu1+ILePYY=' // The payment session data.
  },
  environment: 'test', // Change to 'live' for the live environment.
  amount: {
    value: 1000,
    currency: 'EUR'
  },
  locale: 'en-US',
  countryCode: 'NL',
  clientKey: 'test_LLWB6TCGC5GX3CB6SWXHYJIEQIH5ULGI', 
  onPaymentCompleted: (result, component) => {
    console.info(result, component);
  },
  onPaymentFailed: (result, component) => {
    console.info(result, component);
  },
  onError: (error, component) => {
    console.error(error.name, error.message, error.stack, component);
  }
};

async function startCheckout() {
  try {
    // ✅ Reference AdyenCheckout from window
    //const checkout = new window.AdyenCheckout(globalConfiguration);
    const checkout = await AdyenCheckout(globalConfiguration);
    checkout.create('dropin', dropInConfiguration).mount('#dropin-container');
  } catch (err) {
    console.error("❌ Failed to initialize checkout:", err);
  }
}

	// Drop-in configuration.
const dropInConfiguration = {
  // Configuration for individual payment methods.
  paymentMethodsConfiguration: {
    card: {
      // onError configuration for card payments. Overrides the global configuration.
      onError: () => {}
    }
  }
};


// const dropin = new Dropin(AdyenCheckout, dropInConfiguration).mount('#dropin-container');
