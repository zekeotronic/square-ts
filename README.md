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

## Disputes

[Source Documentation](https://developer.squareup.com/reference/square/disputes-api)

Use the Disputes API to manage disputes (chargebacks).

A seller has the following options to process a dispute:

- Accept the dispute using the [AcceptDispute](https://developer.squareup.com/reference/square/disputes-api/accept-dispute) endpoint. Square returns the disputed amount from the account balance of the Square account.
- Challenge the dispute using the [SubmitEvidence](https://developer.squareup.com/reference/square/disputes-api/submit-evidence) endpoint. If the payment was valid, you can contest the disputed payment. You submit supporting evidence you have about the transaction, such as receipts, invoices, email correspondence, proof of delivery, or photos. You upload evidence using the [CreateDisputeEvidenceFile](https://developer.squareup.com/reference/square/disputes-api/create-dispute-evidence-file) endpoint.

The Disputes API also supports other endpoints useful in dispute management.

### List Disputes

[List Disputes API Documentation](https://developer.squareup.com/reference/square/disputes-api/list-disputes)

```typescript
async listDisputes(params? : ListDisputesQueryParams) : Promise<string>
```

Returns a list of disputes associated with a particular account.

Permissions: `DISPUTES_READ`

Example:

```typescript
const disputes = await sq.listDisputes({
    states: 'INQUIRY_EVIDENCE_REQUIRED',
});
```

### Get Dispute

[Get Dispute API Documentation](https://developer.squareup.com/reference/square/disputes-api/retrieve-dispute)

```typescript
async getDispute(disputeID : string) : Promise<string>
```

Returns details about a specific dispute.

Permissions: `DISPUTES_READ`

Example:

```typescript
const dispute = await sq.getDispute('XDgyFu7yo1E2S5lQGGpYn');
```

### Accept Dispute

[Accept Dispute API Documentation](https://developer.squareup.com/reference/square/disputes-api/accept-dispute)

```typescript
async acceptDispute(disputeID : string) : Promise<string>
```

Accepts the loss on a dispute.

Square returns the disputed amount to the cardholder and updates the dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square account. If the Square account does not have sufficient funds, Square debits the associated bank account.

Permissions: `DISPUTES_WRITE`

Example:

```typescript
const acceptDispute = await sq.acceptDispute('XDgyFu7yo1E2S5lQGGpYn');
```

### List Dispute Evidence

[List Dispute Evidence API Documentation](https://developer.squareup.com/reference/square/disputes-api/list-dispute-evidence)

```typescript
async listDisputeEvidence(disputeID : string) : Promise<string>
```

Returns a list of evidence associated with a dispute.

Permissions: `DISPUTES_READ`

Example:

```typescript
const disputeEvidence = await sq.listDisputeEvidence('bVTprrwk0gygTLZ96VX1oB');
```

### Create Dispute Evidence File

[Create Dispute Evidence File API Documentation](https://developer.squareup.com/reference/square/disputes-api/create-dispute-evidence-file)

```typescript
async createDisputeEvidenceFile(disputeID : string, body : CreateDisputeEvidenceFileBody, filePath : string) : Promise<string>
```

Uploads a file to use as evidence in a dispute challenge.

The endpoint accepts HTTP multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.

Permissions: `DISPUTES_WRITE`

Example:

```typescript
const createDisputeEvidenceFile = await sq.createDisputeEvidenceFile('bVTprrwk0gygTLZ96VX1oB', {
    idempotency_key: 'ed3ee3933d946f1514d505d173c82648',
    evidence_type: 'GENERIC_EVIDENCE',
    content_type: 'image/png'
}, 'path/to/file');
```

### Create Dispute Evidence Text

[Create Dispute Evidence Text API Documentation](https://developer.squareup.com/reference/square/disputes-api/create-dispute-evidence-text)

```typescript
async createDisputeEvidenceText(disputeID : string, body : CreateDisputeEvidenceTextBody) : Promise<string>
```

Uploads text to use as evidence for a dispute challenge.

Permissions: `DISPUTES_WRITE`

Example:

```typescript
const createDisputeEvidenceText = await sq.createDisputeEvidenceText('bVTprrwk0gygTLZ96VX1oB', {
    evidence_type: 'TRACKING_NUMBER',
    content: '1Z8888888888888888',
    idempotency_key: 'ed3ee3933d946f1514d505d173c82648'
});
```

### Delete Dispute Evidence

[Delete Dispute Evidence API Documentation](https://developer.squareup.com/reference/square/disputes-api/delete-dispute-evidence)

```typescript
async deleteDisputeEvidence(disputeID : string, evidenceID : string) : Promise<string>
```

Removes specified evidence from a dispute.

Square does not send the bank any evidence that is removed.

Permissions: `DISPUTES_WRITE`

Example:

```typescript
const deleteDisputeEvidence = await sq.deleteDisputeEvidence('bVTprrwk0gygTLZ96VX1oB', 'CpfnkwGselCwS8QFvxN6');
```

### Get Dispute Evidence

[Get Dispute Evidence API Documentation](https://developer.squareup.com/reference/square/disputes-api/retrieve-dispute-evidence)

```typescript
async getDisputeEvidence(disputeID : string, evidenceID : string) : Promise<string>
```

Returns the metadata for the evidence specified in the request URL path.

You must maintain a copy of any evidence uploaded if you want to reference it later. Evidence cannot be downloaded after you upload it.

Permissions: `DISPUTES_READ`

Example:

```typescript
const disputeEvidence = await sq.getDisputeEvidence('bVTprrwk0gygTLZ96VX1oB', 'CpfnkwGselCwS8QFvxN6');
```

### Submit Evidence

[Submit Evidence API Documentation](https://developer.squareup.com/reference/square/disputes-api/submit-evidence)

```typescript
async submitEvidence(disputeID : string) : Promise<string>
```

Submits evidence to the cardholder's bank.

The evidence submitted by this endpoint includes evidence uploaded using the [CreateDisputeEvidenceFile](https://developer.squareup.com/reference/square/disputes-api/create-dispute-evidence-file) and [CreateDisputeEvidenceText](https://developer.squareup.com/reference/square/disputes-api/create-dispute-evidence-text) endpoints and evidence automatically provided by Square, when available. Evidence cannot be removed from a dispute after submission.

Permissions: `DISPUTES_WRITE`

Example:

```typescript
const submitEvidence = await sq.submitEvidence('EAZoK70gX3fyvibecLwIGB');
```

## Invoices

[Source Documentation](https://developer.squareup.com/reference/square/invoices-api)

Create, configure, and publish invoices for orders that were created using the Orders API.

[Square Invoices](https://squareup.com/invoices) makes it easy for sellers to request and collect payments from their customers. Square notifies customers and processes invoice payments.

Use the Invoices API to create and manage invoices for orders that were created using the Orders API. After you create the invoice and configure its delivery method, payment schedule, and other invoice settings, you can publish the invoice. Depending on the invoice settings, Square can send the invoice to the customer or automatically charge a card on file. Square hosts each invoice on a web page where customers can pay for it.

### List Invoices

[List Invoices API Documentation](https://developer.squareup.com/reference/square/invoices-api/list-invoices)

```typescript
async listInvoices(params : ListInvoicesQueryParams) : Promise<string>
```
Returns a list of invoices for a given location.

The response is paginated. If truncated, the response includes a cursor that you
use in a subsequent request to retrieve the next set of invoices.

Permissions: `INVOICES_READ`

Example:

```typescript
const invoices = await sq.listInvoices({
    location_id: 'LOCATION_ID_1',
    limit: 10
});
```

### Create Invoice

[Create Invoice API Documentation](https://developer.squareup.com/reference/square/invoices-api/create-invoice)

```typescript
async createInvoice(body : CreateInvoiceBody) : Promise<string>
```

Creates a draft [invoice](https://developer.squareup.com/reference/square/objects/Invoice) for an order created using the Orders API.

A draft invoice remains in your account and no action is taken. You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).

Permissions: `INVOICES_WRITE`, `ORDERS_WRITE`

Example:

```typescript
const invoice = await sq.createInvoice({
    idempotency_key: "cd9e25dc-d9f2-4430-aedb-61605070e95f",
    invoice: {
      location_id: "ES0RJRZYEC39A",
      order_id: "CAISENgvlJ6jLWAzERDzjyHVybY",
      scheduled_at: "2030-01-13T10:00:00Z",
      primary_recipient: {
        customer_id: "JDKYHBWT1D4F8MFH63DBMEN8Y4"
      },
      delivery_method: "EMAIL",
      payment_requests: [
        {
          request_type: "BALANCE",
          due_date: "2030-01-24",
          tipping_enabled: true,
          automatic_payment_source: "NONE",
          reminders: [
            {
              message: "Your invoice is due tomorrow",
              relative_scheduled_days: -1
            }
          ]
        }
      ],
      invoice_number: "inv-100",
      title: "Event Planning Services",
      description: "We appreciate your business!",
      accepted_payment_methods: {
        card: true,
        square_gift_card: false,
        bank_account: false,
        buy_now_pay_later: false,
        cash_app_pay: false
      },
      custom_fields: [
        {
          label: "Event Reference Number",
          value: "Ref. #1234",
          placement: "ABOVE_LINE_ITEMS"
        },
        {
          label: "Terms of Service",
          value: "The terms of service are...",
          placement: "BELOW_LINE_ITEMS"
        }
      ],
      sale_or_service_date: "2030-01-24",
      store_payment_method_enabled: false
    }
  });
```

### Search Invoices

[Search Invoices API Documentation](https://developer.squareup.com/reference/square/invoices-api/search-invoices)

```typescript
async searchInvoices(body : SearchInvoicesBody) : Promise<string>
```

Searches for invoices from a location specified in the filter.

You can optionally specify customers in the filter for whom to retrieve invoices. In the current implementation, you can only specify one location and optionally one customer.

The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of invoices.

Permissions: `INVOICES_READ`

Example:

```typescript
const invoices = await sq.searchInvoices({
    query: {
      filter: {
        location_ids: [
          "ES0RJRZYEC39A"
        ],
        customer_ids: [
          "JDKYHBWT1D4F8MFH63DBMEN8Y4"
        ]
      },
      sort: {
        field: "INVOICE_SORT_DATE",
        order: "DESC"
      },
      limit: 100
    }
  });
```

### Delete Invoice

[Delete Invoice API Documentation](https://developer.squareup.com/reference/square/invoices-api/delete-invoice)

```typescript
async deleteInvoice(invoiceID : string, params? : DeleteInvoiceQueryParams) : Promise<string>
```

Deletes the specified invoice.

When an invoice is deleted, the associated order status changes to CANCELED. You can only delete a draft invoice (you cannot delete a published invoice, including one that is scheduled for processing).

Permissions: `INVOICES_WRITE`, `ORDERS_WRITE`

Example:

```typescript
const deleteInvoice = await sq.deleteInvoice('invoice_id0');
```

### Get Invoice

[Get Invoice API Documentation](https://developer.squareup.com/reference/square/invoices-api/get-invoice)

```typescript
async getInvoice(invoiceID : string) : Promise<string>
```

Retrieves an invoice by invoice ID.

Permissions: `INVOICES_READ`

Example:

```typescript
const invoice = await sq.getInvoice('invoice_id0');
```

### Update Invoice

[Update Invoice API Documentation](https://developer.squareup.com/reference/square/invoices-api/update-invoice)

```typescript
async updateInvoice(invoiceID : string, body : UpdateInvoiceBody) : Promise<string>
```

Updates an invoice.

This endpoint supports sparse updates, so you only need to specify the fields you want to change along with the required `version` field. Some restrictions apply to updating invoices. For example, you cannot change the `order_id` or `location_id` field.

Permissions:`ORDERS_WRITE`, `INVOICES_WRITE`

Example:

```typescript
const updateInvoice = await sq.updateInvoice('invoice_id0', {
    idempotency_key: "4ee82288-0910-499e-ab4c-5d0071dad1be",
    invoice: {
      payment_requests: [
        {
          uid: "2da7964f-f3d2-4f43-81e8-5aa220bf3355",
          tipping_enabled: false,
          reminders: null
        }
      ],
      version: 1
    }
  });
```

### Create Invoice Attachment

[Create Invoice Attachment API Documentation](https://developer.squareup.com/reference/square/invoices-api/create-invoice-attachment)

```typescript
async createInvoiceAttachment(invoiceID : string, body : CreateInvoiceAttachmentBody, filePath : string) : Promise<string>
```

Uploads a file and attaches it to an invoice.

This endpoint accepts HTTP multipart/form-data file uploads with a JSON `request` part and a `file` part. The `file` part must be a `readable stream` that contains a file in a supported format: GIF, JPEG, PNG, TIFF, BMP, or PDF.

Invoices can have up to 10 attachments with a total file size of 25 MB. Attachments can be added only to invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.

Permissions: `INVOICES_WRITE`, `ORDERS_WRITE`

Example:

```typescript
const invoiceAttachment = await sq.createInvoiceAttachment('invoice_id0', {
    idempotency_key: "4ee82288-0910-499e-ab4c-5d0071dad1be",
    description: "Service contract"
  }, 'path/to/file');
```

### Delete Invoice Attachment

[Delete Invoice Attachment API Documentation](https://developer.squareup.com/reference/square/invoices-api/delete-invoice-attachment)

```typescript
async deleteInvoiceAttachment(invoiceID : string, attachmentID : string) : Promise<string>
```

Removes an attachment from an invoice and permanently deletes the file.

Attachments can be removed only from invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.

Permissions: `INVOICES_WRITE`, `ORDERS_WRITE`

Example:

```typescript
const deletedInvoiceAttachment = await sq.deleteInvoiceAttachment('invoice_id0', 'attachment_id0');
```

### Cancel Invoice

[Cancel Invoice API Documentation](https://developer.squareup.com/reference/square/invoices-api/cancel-invoice)

```typescript
async cancelInvoice(invoiceID : string, body : CancelInvoiceBody) : Promise<string>
```

Cancels an invoice.

The seller cannot collect payments for the canceled invoice.

You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.

Permissions: `INVOICES_WRITE`, `ORDERS_WRITE`

Example:

```typescript
const canceledInvoice = await sq.cancelInvoice('invoice_id0'{
  version: 1
});
```

### Publish Invoice

[Publish Invoice API Documentation](https://developer.squareup.com/reference/square/invoices-api/publish-invoice)

```typescript
async publishInvoice(invoiceID : string, body : PublishInvoiceBody) : Promise<string>
```

Publishes the specified draft invoice.

After an invoice is published, Square follows up based on the invoice configuration. For example, Square sends the invoice to the customer's email address, charges the customer's card on file, or does nothing. Square also makes the invoice available on a Square-hosted invoice page.

The invoice status also changes from `DRAFT` to a status based on the invoice configuration. For example, the status changes to `UNPAID` if Square emails the invoice or `PARTIALLY_PAID` if Square charges a card on file for a portion of the invoice amount.

In addition to the required `ORDERS_WRITE` and `INVOICES_WRITE` permissions, `CUSTOMERS_READ` and `PAYMENTS_WRITE` are required when publishing invoices configured for card-on-file payments.

Permissions: `ORDERS_WRITE`, `INVOICES_WRITE`

Example:

```typescript
const publishedInvoice = await sq.publishInvoice('invoice_id0', {
    idempotency_key: "4ee82288-0910-499e-ab4c-5d0071dad1be",
    version: 1
  });
```

## Cards

[Source Documentation](https://developer.squareup.com/reference/square/cards-api)

Use the Cards API to save a credit or debit card on file.

You can use the [CreateCard](https://developer.squareup.com/reference/square/cards-api/create-card) endpoint to save a credit or debit card to a Square account. Developers can integrate the Cards API in their application to let Square sellers:

- Save a card that can be charged by any Square seller who uses your application. Your application specifies the organization access token in the `CreateCard` request.
- Save a card that can be charged by a single Square seller. Your application specifies the access token of the specific seller account in the `CreateCard` request.

The Cards API also supports other endpoints to manage the cards.

### List Cards

[List Cards API Documentation](https://developer.squareup.com/reference/square/cards-api/list-cards)

```typescript
async listCards(params? : ListCardsQueryParams) : Promise<string>
```

Retrieves a list of cards owned by the account making the request.

A max of 25 cards will be returned.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const cards = await sq.listCards({
    sort_order: 'ASC'
});
```

### Create Card

[Create Card API Documentation](https://developer.squareup.com/reference/square/cards-api/create-card)

```typescript
async createCard(body : CreateCardBody) : Promise<string>
```

Adds a card on file to an existing merchant.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const card = await sq.createCard({
    idempotency_key: "4935a656-a929-4792-b97c-8848be85c27c",
    source_id: "cnon:uIbfJXhXETSP197M3GB",
    card: {
      billing_address: {
        address_line_1: "500 Electric Ave",
        address_line_2: "Suite 600",
        locality: "New York",
        administrative_district_level_1: "NY",
        postal_code: "10003",
        country: "US"
      },
      cardholder_name: "Amelia Earhart",
      customer_id: "VDKXEEKPJN48QDG3BGGFAK05P8",
      reference_id: "user-id-1"
    }
  });
```

### Get Card

[Get Card API Documentation](https://developer.squareup.com/reference/square/cards-api/retrieve-card)

```typescript
async getCard(cardID : string) : Promise<string>
```

Retrieves details for a specific Card.

Permissions: `PAYMENTS_READ`

Example:

```typescript
const card = await sq.getCard('ccof%3AuIbfJXhXETSP197M3GB');
```

### Disable Card

[Disable Card Documentation](https://developer.squareup.com/reference/square/cards-api/disable-card)

```typescript
async disableCard(cardID : string) : Promise<string>
```

Disables the card, preventing any further updates or charges.

Disabling an already disabled card is allowed but has no effect.

Permissions: `PAYMENTS_WRITE`

Example:

```typescript
const disableCard = await sq.disableCard('ccof%3AuIbfJXhXETSP197M3GB');
```
