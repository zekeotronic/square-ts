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

## Terminal

[Source Documentation](https://developer.squareup.com/reference/square/terminal-api)

Requests a checkout from a paired Square Terminal.

The Terminal API allows you to manage sending and receiving requests and responses from a paired Square Terminal. For a Terminal checkout, refund, or action, you can create a request, check its status, cancel the request, search for in-process requests, and get the results of the request after it is completed. In the current implementation, refunds are only supported for Interac debit cards in Canada.

### Create Terminal action

[Create Terminal action API Documentation](https://developer.squareup.com/reference/square/terminal-api/create-terminal-action)

```typescript
async createTerminalAction(body : CreateTerminalActionBody) : Promise<string>
```

Creates a Terminal action request and sends it to the specified device.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const terminalAction = await sq.createTerminalAction({
    idempotency_key: "thahn-70e75c10-47f7-4ab6-88cc-aaa4076d065e",
    action: {
      device_id: "{{DEVICE_ID}}",
      type: "SAVE_CARD",
      deadline_duration: "PT5M",
      save_card_options: {
        customer_id: "{{CUSTOMER_ID}}",
        reference_id: "user-id-1"
      }
    }
  });
```

### Search Terminal Actions

[Search Terminal Actions API Documentation](https://developer.squareup.com/reference/square/terminal-api/search-terminal-actions)

```typescript
async searchTerminalActions(body : SearchTerminalActionsBody) : Promise<string>
```

Retrieves a filtered list of Terminal action requests created by the account making the request.

Terminal action requests are available for 30 days.

Permissions: `PAYMENTS_READ`


Example:

```typescript
const terminalActions = await sq.searchTerminalActions({
    limit: 2,
    query: {
      sort: {
        sort_order: "DESC"
      },
      filter: {
        created_at: {
          start_at: "2022-04-01T00:00:00.000Z"
        }
      }
    }
  });
```

### Get Terminal Action

[Get Terminal Action API Documentation](https://developer.squareup.com/reference/square/terminal-api/get-terminal-action)

```typescript
async getTerminalAction(actionID : string) : Promise<string>
```

Retrieves a Terminal action request by action_id.

Terminal action requests are available for 30 days.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const terminalAction = await sq.getTerminalAction('termapia%3AjveJIAkkAjILHkdCE');
```

### Cancel Terminal Action

[Cancel Terminal Action API Documentation](https://developer.squareup.com/reference/square/terminal-api/cancel-terminal-action)

```typescript
async cancelTerminalAction(actionID : string) : Promise<string>
```

Cancels a Terminal action request if the status of the request permits it.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const cancelTerminalAction = await sq.cancelTerminalAction('termapia%3AjveJIAkkAjILHkdCE');
```

### Dismiss Terminal Action

[Dismiss Terminal Action API Documentation](https://developer.squareup.com/reference/square/terminal-api/dismiss-terminal-action)

```typescript
async dismissTerminalAction(actionID : string) : Promise<string>
```

Dismisses a Terminal action request if the status and type of the request permits it.

See [Link and Dismiss Actions](https://developer.squareup.com/docs/terminal-api/advanced-features/custom-workflows/link-and-dismiss-actions) for more details.

Example:

```typescript
const dismissTerminalAction = await sq.dismissTerminalAction('termapia%3Aabcdefg1234567');
```

### Create Terminal Checkout

[Create Terminal Checkout API Documentation](https://developer.squareup.com/reference/square/terminal-api/create-terminal-checkout)

```typescript
async createTerminalCheckout(body : CreateTerminalCheckoutBody) : Promise<string>
```

Creates a Terminal checkout request and sends it to the specified device to take a payment for the requested amount.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const terminalCheckout = await sq.createTerminalCheckout({
    idempotency_key: "28a0c3bc-7839-11ea-bc55-0242ac130003",
    checkout: {
      amount_money: {
        amount: 2610,
        currency: "USD"
      },
      reference_id: "id11572",
      device_options: {
        device_id: "dbb5d83a-7838-11ea-bc55-0242ac130003"
      },
      note: "A brief note"
    }
  });
```

### Search Terminal Checkouts

[Search Terminal Checkouts API Documentation](https://developer.squareup.com/reference/square/terminal-api/search-terminal-checkouts)

```typescript
async searchTerminalCheckouts(body : SearchTerminalCheckoutsBody) : Promise<string>
```

Returns a filtered list of Terminal checkout requests created by the application making the request.

Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned. Terminal checkout requests are available for 30 days.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const terminalCheckouts = await sq.searchTerminalCheckouts({
    limit: 2,
    query: {
      filter: {
        status: "COMPLETED"
      }
    }
  });
```

### Get Terminal Checkout

[Get Terminal Checkout API Documentation](https://developer.squareup.com/reference/square/terminal-api/get-terminal-checkout)

```typescript
async getTerminalCheckout(checkoutID : string) : Promise<string>
```

Retrieves a Terminal checkout request by checkout_id.

Terminal checkout requests are available for 30 days.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const terminalCheckout = await sq.getTerminalCheckout('terchout%3Aabcdefg1234567');
```

### Cancel Terminal Checkout

[Cancel Terminal Checkout API Documentation](https://developer.squareup.com/reference/square/terminal-api/cancel-terminal-checkout)

```typescript
async cancelTerminalCheckout(checkoutID : string) : Promise<string>
```

Cancels a Terminal checkout request if the status of the request permits it.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const cancelTerminalCheckout = await sq.cancelTerminalCheckout('S1yDlPQx7slqO');
```

### Dismiss Terminal Checkout

[Dismiss Terminal Checkout API Documentation](https://developer.squareup.com/reference/square/terminal-api/dismiss-terminal-checkout)

```typescript
async dismissTerminalCheckout(checkoutID : string) : Promise<string>
```

Dismisses a Terminal checkout request if the status and type of the request permits it.

Example:

```typescript
const dismissTerminalCheckout = await sq.dismissTerminalCheckout('LmZEKbo3SBfqO');
```

### Create Terminal Refund

[Create Terminal Refund API Documentation](https://developer.squareup.com/reference/square/terminal-api/create-terminal-refund)

```typescript
async createTerminalRefund(body : CreateTerminalRefundBody) : Promise<string>
```

Creates a request to refund an Interac payment completed on a Square Terminal.

Refunds for Interac payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds for Terminal payments should use the Refunds API. For more information, see [Refunds API](https://developer.squareup.com/reference/square/refunds-api).

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const terminalRefund = await sq.createTerminalRefund({
    idempotency_key: "402a640b-b26f-401f-b406-46f839590c04",
    refund: {
      amount_money: {
        amount: 111,
        currency: "CAD"
      },
      device_id: "f72dfb8e-4d65-4e56-aade-ec3fb8d33291",
      reason: "Returning items",
      payment_id: "5O5OvgkcNUhl7JBuINflcjKqUzXZY"
    }
  });
```

### Search Terminal Refunds

[Search Terminal Refunds API Documentation](https://developer.squareup.com/reference/square/terminal-api/search-terminal-refunds)

```typescript
async searchTerminalRefunds(body : SearchTerminalRefundsBody) : Promise<string>
```

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request.

Terminal refund requests are available for 30 days.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const terminalRefunds = await sq.searchTerminalRefunds({
    limit: 1,
    query: {
      filter: {
        status: "COMPLETED"
      }
    }
  });
```

### Get Terminal Refund

[Get Terminal Refund API Documentation](https://developer.squareup.com/reference/square/terminal-api/get-terminal-refund)

```typescript
async getTerminalRefund(terminalRefundID : string) : Promise<string>
```

Retrieves an Interac Terminal refund object by ID.

Terminal refund objects are available for 30 days.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const terminalRefund = await sq.getTerminalRefund('terminal_refund_id0');
```

### Cancel Terminal Refund

[Cancel Terminal Refund API Documentation](https://developer.squareup.com/reference/square/terminal-api/cancel-terminal-refund)

```typescript
async cancelTerminalRefund(terminalRefundID : string) : Promise<string>
```

Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const cancelTerminalRefund = await sq.cancelTerminalRefund('terminal_refund_id0');
```

### Dismiss Terminal Refund

[Dismiss Terminal Refund API Documentation](https://developer.squareup.com/reference/square/terminal-api/dismiss-terminal-refund)

```typescript
async dismissTerminalRefund(terminalRefundID : string) : Promise<string>
```

Dismisses a Terminal refund request if the status and type of the request permits it.

Example:

```typescript
const dismissTerminalRefund = await sq.dismissTerminalRefund('terminal_refund_id0');
```