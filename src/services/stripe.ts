import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_51JtLjVDoc0Crx3Q00m8b0ysP0Ccm6PkNgRBJzO4u6eWRa3FGjaTCpC1aBFcq20xdEZMWcLQo8WnMbB0nRLdo7kHP0008nF4TZ2';

const stripe = new Stripe(secretKey!, {
  apiVersion: "2023-08-16",
});

export default stripe;
