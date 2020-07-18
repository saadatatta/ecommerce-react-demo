import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51H6FanEqMMUqwfrN2RgbaUyYELSrXwFw1sFSbYERRh8bJ2OtURyO9LEZANpPTzjrLjrgjxzU2zRkzq6r18MvigTt0085Sacrmn";
  const onToken = (token) => {
    console.log(token);
    alert("Payment done");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Kakashi Hatake ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceInCents}
      description={`Your total price is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
}

export default StripeCheckoutButton;
