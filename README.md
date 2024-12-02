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

`.listPayments()`


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

`.createPayment()`

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

`.cancelPaymentByIdempotency()`

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

`.getPayment()`

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

`.updatePayment()`

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

`.cancelPayment()`

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

`.completePayment()`

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