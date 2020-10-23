import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HZv8NLpdfcy4ZG20GWnVjxGw4SmlbGgyQlsnQnGtZFD6VziYVKVkqyHGpyYmd5lVar8ExvybMqVQ6suuwClkJal00mWmLmzsW';

  const onToken = (token) => {
    axios({
        url: 'payment',
        method: 'post',
        data: {
            amount: priceForStripe,
            token
        }
    }).then((res) => {
        alert('Payment successful!')
    }).catch((err) => {
        console.log('Payment error: ', JSON.parse(err))
        alert('These was an issue')
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
