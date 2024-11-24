# Square Deno

Package to interact with the Square API using Deno.
## Usage

```typescript
import { Square } from "@shnoice/square";

const sq = new Square(accessToken);
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

