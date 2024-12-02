# Square Deno

Package to interact with the Square API using Deno.
## Usage

```typescript
import { Square } from "@shnoice/square";

const sq = new Square(accessToken);
```

```typescript
import { Square } from "@shnoice/square";

const sq = new Square(accessToken, 'production');
```
## Constructor Parameters

```typescript
Square(accessToken: string, environment: 'sandbox' | 'production' = 'sandbox')
```
[How to create account and generate API token](https://developer.squareup.com/docs/get-started/create-account-and-application)

## Payments 
[Source Documentation](https://developer.squareup.com/reference/square/payments-api)

The Payments API lets developers take and manage payments.

Applications need the following input to take a payment:

- The amount to charge.
- The payment recipient. The payment goes to the account identified by the Authorization header in the API request.
- The payment source. The source can be a payment token or card on file.

You can generate a payment token using the Web Payments SDK and the In-App Payments SDK. For working code examples, see [Square Connect API Examples](https://github.com/square/connect-api-examples).

A card on file is a credit card, debit card, or gift card that is associated with a customer. You can create a customer and add a card on file using Square APIs, the Square Seller Dashboard, or the Square Point of Sale application.

### List payments

[List Payments API Documentation](https://developer.squareup.com/reference/square/payments-api/list-payments)

```typescript
async listPayments(params? : ListPaymentsQueryParams) : Promise<string>
```

Retrieves a list of payments taken by the account making the request.

Results are eventually consistent, and new payments or changes to payments might take several seconds to appear.

The maximum results per page is 100.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const payments = await sq.listPayments({
    begin_time: '2024-01-01T00:00:00Z',
    end_time: '2024-01-31T23:59:59Z',
    sort_order: 'ASC'
});
```

### Create payment

[Create Payment API Documentation](https://developer.squareup.com/reference/square/payments-api/create-payment)

```typescript
async createPayment(body : CreatePaymentBody) : Promise<string>
```

Creates a payment using the provided source.

You can use this endpoint to charge a card (credit/debit card or
Square gift card) or record a payment that the seller received outside of Square (cash payment from a buyer or a payment that an external entity processed on behalf of the seller).

The endpoint creates a `Payment` object and returns it in the response.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const payment = await sq.createPayment({
    source_id: 'cnon:card-nonce-ok',
    amount_money: {
        amount: 1000,
        currency: 'USD'
    },
    idempotency_key : `idempotency_key_${Math.random()}`
});
```

### Cancel payment by idempotency key

[Cancel payment by idempotency key API Documentation](https://developer.squareup.com/reference/square/payments-api/cancel-payment-by-idempotency-key)

```typescript
async cancelPaymentByIdempotency(body : CancelPaymentBody) : Promise<string>
```

Cancels (voids) a payment identified by the idempotency key that is specified in the request.

Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a `CreatePayment` request, a network error occurs and you do not get a response). In this case, you can direct Square to cancel the payment using this endpoint. In the request, you provide the same idempotency key that you provided in your `CreatePayment` request that you want to cancel. After canceling the payment, you can submit your `CreatePayment` request again.

Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint returns successfully.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const cancelPayment = await sq.cancelPaymentByIdempotency({
    idempotency_key: 'idempotency_key_0.123456789'
});
```

### Get payment

[Get Payment API Documentation](https://developer.squareup.com/reference/square/payments-api/get-payment)

```typescript
async getPayment(paymentID : string) : Promise<string>
```

Retrieves details for a specific payment.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const payment = await sq.getPayment('bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY');
```

### Update payment

[Update Payment API Documentation](https://developer.squareup.com/reference/square/payments-api/update-payment)

```typescript
async updatePayment(paymentID : string, body : UpdatePaymentBody) : Promise<string>
```

Updates a payment with the `APPROVED` status.

You can update the `amount_money` and `tip_money` using this endpoint.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const updatePayment = await sq.updatePayment('bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY',{
    idempotency_key: "956f8b13-e4ec-45d6-85e8-d1d95ef0c5de",
    payment: {
      amount_money: {
        amount: 1000,
        currency: "USD"
      },
      tip_money: {
        amount: 100,
        currency: "USD"
      },
    }
  });
```

### Cancel payment

[Cancel Payment API Documentation](https://developer.squareup.com/reference/square/payments-api/cancel-payment)

```typescript
async cancelPayment(paymentId : string) : Promise<string>
```

Cancels (voids) a payment.

You can use this endpoint to cancel a payment with the APPROVED `status`.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const cancelPayment = await sq.cancelPayment('bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY');
```

### Complete payment

[Complete Payment API Documentation](https://developer.squareup.com/reference/square/payments-api/complete-payment)


```typescript
async completePayment(paymentId : string, body? : CompletePaymentBody) : Promise<string>
```

Completes (captures) a payment.

By default, payments are set to complete immediately after they are created.

You can use this endpoint to complete a payment with the APPROVED `status`.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const completePayment = await sq.completePayment('bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY');
```

## Refunds

[Source Documentation](https://developer.squareup.com/reference/square/refunds-api)

Manage and issue refunds for payments made to Square sellers.

The following applies to refunds:

- You cannot refund more than what was originally collected.
- The refund amount must be available in the account's Square balance. If the amount is not available, Square attempts to take money out of the associated bank account. Refunds are in a state of PENDING until the funds are secured.
- If funds cannot be secured, the refund is not completed and the buyer does not receive a credit. The refund has a status of FAILED. Future refunds to this payment are not allowed and the buyer should be reimbursed by other means.
- You can refund only payments with status COMPLETED. You cannot refund an APPROVED payment; however, you can cancel an approved payment.


### List Payment Refunds

[List Payment Refunds API Documentation](https://developer.squareup.com/reference/square/refunds-api/list-payment-refunds)

Retrieves a list of refunds for the account making the request.

Results are eventually consistent, and new refunds or changes to refunds might take several seconds to appear.

The maximum results per page is `100`.

Permissions: `PAYMENTS_READ`

```typescript
async listPaymentRefunds(params? : ListPaymentRefundsQueryParams) : Promise<string>
```

Example:

```typescript
const refunds = await sq.listPaymentRefunds({
    begin_time: '2024-01-01T00:00:00Z',
    end_time: '2024-01-31T23:59:59Z',
    sort_order: 'ASC'
});
```

### Refund Payment

[Refund Payment API Documentation](https://developer.squareup.com/reference/square/refunds-api/refund-payment)

```typescript
async refundPayment(body : RefundPaymentBody) : Promise<string>
```

Refunds a payment.

You can refund the entire payment amount or a portion of it. You can use this endpoint to refund a card payment or record a refund of a cash or external payment. 

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const refund = await sq.refundPayment({
    payment_id: 'bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY',
    amount_money: {
        amount: 1000,
        currency: 'USD'
    },
    idempotency_key : `idempotency_key_${Math.random()}`
});
```

### Get Payment Refund

[Get Payment Refund API Documentation](https://developer.squareup.com/reference/square/refunds-api/get-payment-refund)

```typescript
async getPaymentRefund(refundID : string) : Promise<string>
```

Retrieves a specific refund using the refund_id.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const refund = await sq.getPaymentRefund('bP9mAsEMYPUGjjGNaNO5ZDVyLhSZY');
```

## Checkout

[Source Documentation](https://developer.squareup.com/reference/square/checkout-api)

Accept payments through a pre-built, Square-hosted checkout page. No frontend required.

With the Square Checkout API, your customers can pay for a purchase through a simple, Square-hosted checkout page. It can be integrated into any payments workflow with minimal coding.

You can create and configure your checkout page through a CreatePaymentLink request, specifying the accepted payment methods and checkout options like tipping and custom fields. You can also configure a URL for customers to be redirected to once they complete their purchase.

First time Square developers should utilize the payment link endpoints to create, update, retrieve, and list checkout pages.

### Get Location Settings

[Get Location Settings API Documentation](https://developer.squareup.com/reference/square/checkout-api/retrieve-location-settings)

```typescript
async getLocationSettings(locationID : string) : Promise<string>
```

Retrieves the location-level settings for a Square-hosted checkout page.

Permissions: `MERCHANT_PROFILE_READ`

Example:

```typescript
const locationSettings = await sq.getLocationSettings('LOCATION_ID_1');
```

### Update Location Settings

[Update Location Settings API Documentation](https://developer.squareup.com/reference/square/checkout-api/update-location-settings)

```typescript
async updateLocationSettings(locationID : string, body : UpdateLocationSettingsBody ) : Promise<string>
```

Updates the location-level settings for a Square-hosted checkout page.

Permissions: `MERCHANT_PROFILE_READ`, `MERCHANT_PROFILE_WRITE`

Example:

```typescript
const updateLocationSettings = await sq.updateLocationSettings('LOCATION_ID_1', {
    location_settings: {
      customer_notes_enabled: false
    }
});
```

### Get Merchant Settings

[Get Merchant Settings API Documentation](https://developer.squareup.com/reference/square/checkout-api/retrieve-merchant-settings)

```typescript
async getMerchantSettings() : Promise<string>
```

Retrieves the merchant-level settings for a Square-hosted checkout page.

Permissions: `MERCHANT_PROFILE_READ`, `PAYMENT_METHODS_READ`

Example:

```typescript
const merchantSettings = await sq.getMerchantSettings();
```

### Update Merchant Settings

[Update Merchant Settings API Documentation](https://developer.squareup.com/reference/square/checkout-api/update-merchant-settings)

```typescript
async updateMerchantSettings(body : UpdateMerchantSettingsBody) : Promise<string>
```

Updates the merchant-level settings for a Square-hosted checkout page.

Permissions: `MERCHANT_PROFILE_READ`, `MERCHANT_PROFILE_WRITE`, `PAYMENT_METHODS_READ`

Example:

```typescript
const updateMerchantSettings = await sq.updateMerchantSettings({
    merchant_settings: {
      payment_methods: {
        apple_pay: {
          enabled: true
        }
      }
    }
});
```

### List Payment Links

[List Payment Links API Documentation](https://developer.squareup.com/reference/square/checkout-api/list-payment-links)

```typescript
async listPaymentLinks(params? : ListPaymentLinksQueryParams) : Promise<string>
```

Lists all payment links.

Permissions: `ORDERS_READ`

Example:

```typescript
const paymentLinks = await sq.listPaymentLinks({
    limit: 10
});
```

### Create Payment Link

[Create Payment Link API Documentation](https://developer.squareup.com/reference/square/checkout-api/create-payment-link)

```typescript
async createPaymentLink(body : CreatePaymentLinkBody) : Promise<string>
```

Creates a Square-hosted checkout page.

Applications can share the resulting payment link with their buyer to pay for goods and services.

Permissions: `ORDERS_READ`, `ORDERS_WRITE`, `PAYMENTS_WRITE`

Example:

```typescript
const paymentLink = await sq.createPaymentLink({
    idempotency_key: "cd9e25dc-d9f2-4430-aedb-61605070e95f",
    quick_pay: {
      name: "Auto Detailing",
      price_money: {
        amount: 10000,
        currency: "USD"
      },
      location_id: "A9Y43N9ABXZBP"
    }
  });
```

### Delete Payment Link

[Delete Payment Link API Documentation](https://developer.squareup.com/reference/square/checkout-api/delete-payment-link)

```typescript
async deletePaymentLink(id : string) : Promise<string>
```

Deletes a payment link.

Permissions: `ORDERS_READ`, `ORDERS_WRITE`

Example:

```typescript
const deletePaymentLink = await sq.deletePaymentLink('MQASNYL6QB6DFCJ3 ');
```

### Get Payment Link

[Get Payment Link API Documentation](https://developer.squareup.com/reference/square/checkout-api/retrieve-payment-link)

```typescript
async getPaymentLink(id : string) : Promise<string>
```

Retrieves a payment link.

Permissions: `ORDERS_READ`

Example:

```typescript
const paymentLink = await sq.getPaymentLink('LLO5Q3FRCFICDB4B');
```

### Update Payment Link

[Update Payment Link API Documentation](https://developer.squareup.com/reference/square/checkout-api/update-payment-link)

```typescript
async updatePaymentLink(id : string, body : UpdatePaymentLinkBody) : Promise<string>
```

Updates a payment link.

You can update the `payment_link` fields such as `description`, `checkout_options`, and `pre_populated_data`. You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.

Permissions: `ORDERS_READ`, `ORDERS_WRITE`, `PAYMENTS_WRITE`

Example:

```typescript
const updatePaymentLink = await sq.updatePaymentLink('TY4BWEDJ6AI5MBIV', {
    payment_link: {
      version: 1,
      checkout_options: {
        ask_for_shipping_address: true
      }
    }
  });
```