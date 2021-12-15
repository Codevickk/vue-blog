<template>
  <section class="join">
    <div class="container">
      <h2 class="join__heading">Join our Team of Writers</h2>
      <p class="join__paragraph">
        On dasdas, writers earn a living doing what they love. Getting started
        is easy. Just pay a one time <span>$25 fee</span> and everything is
        ready to go.
      </p>

      <button class="join__btn" @click="makePayment">Join us</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    makePayment() {
      FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-7774ca4dff3c0ac7368f78a716900924-X",
        tx_ref: "RX1",
        amount: 10,
        currency: "USD",
        country: "US",
        payment_options: "card",
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email: "testuser@gmail.com",
          phone_number: "08102909304",
          name: "Flutterwave Developers",
        },
        callback: function (data) {
          console.log(data);
        },
        customizations: {
          title: "My store",
          description: "Payment for items in cart",
          logo: "https://assets.piedpiper.com/logo.png",
        },
      });
    },
  },
};
</script>