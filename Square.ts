  /**
   * @module
   *
   * This module contains methods to interact with Square API.
   *
+  * @example
+  * ```ts
+  * import { Square } from "@shnoice/square";

+  *
+  * const sq = new Square(accessToken);
+  * ```
   */

import type { 
  BatchChangeInventoryBody,
  BatchDeleteCatalogObjectsBody,
  BatchGetInventoryChangesBody,
  BatchGetInventoryCountsBody,
  BatchGetCatalogObjectsBody,
  BatchGetOrdersBody,
  BatchUpsertCatalogObjectsBody,
  BulkDeleteBookingCustomAttributesBody,
  BulkDeleteOrderCustomAttributesBody,
  BulkGetBookingsBody,
  BulkGetTeamMemberBookingProfilesBody,
  BulkSwapPlanBody,
  BulkUpsertBookingCustomAttributesBody,
  BulkUpsertOrderCustomAttributesBody,
  CalculateOrderBody,
  CancelBookingBody,
  CancelPaymentBody, 
  ChangeBillingAnchorDateBody,
  CloneOrderBody,
  CompletePaymentBody,
  CreateBookingBody,
  CreateBookingCustomAttributeDefinitionBody,
  CreateCardBody,
  CreateCatalogImageBody,
  CreateDeviceCodeBody,
  CreateDisputeEvidenceFileBody,
  CreateDisputeEvidenceTextBody,
  CreateInvoiceAttachmentBody,
  CreateInvoiceBody,
  CreateMobileAuthorizationCodeBody,
  CreateOrderBody,
  CreateOrderCustomAttributeDefinitionBody,
  CreatePaymentBody, 
  CreatePaymentLinkBody,
  CreateSubscriptionBody,
  CreateTerminalActionBody,
  CreateTerminalCheckoutBody,
  CreateTerminalRefundBody,
  DeleteInvoiceQueryParams,
  GetBookingCustomAttributeDefinitionQueryParams,
  GetBookingCustomAttributeQueryParams,
  GetCatalogObjectQueryParams,
  GetInventoryCountQueryParams,
  GetOrderCustomAttributeDefinitionQueryParams,
  GetOrderCustomAttributesQueryParams,
  GetSubscriptionQueryParams,
  ListBankAccountsQueryParams,
  ListBookingCustomAttributeDefinitionsQueryParams,
  ListBookingCustomAttributesQueryParams,
  ListBookingsQueryParams,
  ListCardsQueryParams,
  ListCatalogQueryParams,
  ListDeviceCodesQueryParams,
  ListDevicesQueryParams,
  ListDisputesParams,
  ListInvoicesQueryParams,
  ListLocationBookingProfilesQueryParams,
  ListOrderCustomAttributeDefinitionsQueryParams,
  ListOrderCustomAttributesQueryParams,
  ListPaymentLinksQueryParams,
  ListPaymentRefundsQueryParams, 
  ListPaymentsQueryParams,
  ListPayoutEntriesQueryParams,
  ListPayoutsQueryParams,
  ListSubscriptionEventsQueryParams,
  ListTeamMemberBookingProfilesQueryParams,
  PauseSubscriptionBody,
  PaymentLink,
  PayOrderBody,
  PublishInvoiceBody,
  RefundPaymentBody, 
  RegisterApplePayDomainBody,
  ResumeSubscriptionBody,
  SearchAvailabilityBody,
  SearchCatalogItemsBody,
  SearchCatalogObjectsBody,
  SearchInvoicesBody,
  SearchOrdersBody,
  SearchSubscriptionsBody,
  SearchTerminalActionsBody,
  SearchTerminalCheckoutsBody,
  SearchTerminalRefundsBody,
  SwapPlanBody,
  UpdateBookingBody,
  UpdateBookingCustomAttributeDefinitionBody,
  UpdateCatalogImageBody,
  UpdateInvoiceBody,
  UpdateItemModifierListsBody,
  UpdateItemTaxesBody,
  UpdateLocationSettingsBody,
  UpdateMerchantSettingsBody,
  UpdateOrderBody,
  UpdateOrderCustomAttributeDefinitionBody,
  UpdatePaymentBody, 
  UpdateSubscriptionBody,
  UpsertBookingCustomAttributeBody,
  UpsertCatalogObjectBody,
  UpsertOrderCustomAttributesBody
} from "./interfaces.ts";

/**
 * The Square API class
 * @class Square
 * Create a new Square API instance
 * @param {string} accessToken - The access token for the Square API
 * @example
 * ```ts
 * const sq = new Square(accessToken);
 * ```
 */
export class Square {
  accessToken : string;
  applePayBaseURL : string;
  bankAccountsBaseURL : string;
  bookingsBaseURL : string;
  cardsBaseURL : string;
  catalogBaseURL : string;
  checkoutBaseURL : string;
  devicesBaseURL : string;
  disputesBaseURL : string;
  inventoryBaseURL : string;
  invoicesBaseURL : string;
  itemsBaseURL : string;
  mobileAuthBaseURL : string;
  orderCustomAttributeDefinitionsBaseURL : string;
  orderCustomAttributesBaseURL : string;
  ordersBaseURL : string;
  paymentsBaseURL : string;
  payoutsBaseURL : string;
  refundsBaseURL : string;
  subscriptionsBaseURL : string;
  terminalBaseURL : string;
  
  constructor(accessToken : string) {
    this.accessToken = accessToken;
    this.applePayBaseURL = 'https://connect.squareup.com/v2/apple-pay/domains';
    this.bankAccountsBaseURL = 'https://connect.squareup.com/v2/bank-accounts';
    this.bookingsBaseURL = 'https://connect.squareup.com/v2/bookings';
    this.cardsBaseURL = 'https://connect.squareup.com/v2/cards';
    this.catalogBaseURL = 'https://connect.squareup.com/v2/catalog';
    this.checkoutBaseURL = 'https://connect.squareup.com/v2/online-checkout';
    this.disputesBaseURL = 'https://connect.squareup.com/v2/disputes';
    this.devicesBaseURL = 'https://connect.squareup.com/v2/devices';
    this.inventoryBaseURL = 'https://connect.squareup.com/v2/inventory';
    this.invoicesBaseURL = 'https://connect.squareup.com/v2/invoices';
    this.itemsBaseURL = 'https://connect.squareup.com/v2/catalog/list';
    this.mobileAuthBaseURL = 'https://connect.squareup.com/mobile/authorization-code';
    this.orderCustomAttributeDefinitionsBaseURL = 'https://connect.squareup.com/v2/orders/custom-attribute-definitions'
    this.orderCustomAttributesBaseURL = 'https://connect.squareup.com/v2/orders/custom-attributes'
    this.ordersBaseURL = 'https://connect.squareup.com/v2/orders';
    this.paymentsBaseURL = 'https://connect.squareup.com/v2/payments';
    this.payoutsBaseURL = 'https://connect.squareup.com/v2/payouts';
    this.refundsBaseURL = 'https://connect.squareup.com/v2/refunds';
    this.subscriptionsBaseURL = 'https://connect.squareup.com/v2/subscriptions'
    this.terminalBaseURL = 'https://connect.squareup.com/v2/terminals';
  }
  // Helper methods
  private makeParamsString(options: object): string {
    const paramsArray = Object.entries(options)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    return paramsArray.length > 0 ? `?${paramsArray.join("&")}` : ""; 
  }
  private async makeRequest(method : string, url : string, body? : object) : Promise<string> {
    const errorMessage = JSON.stringify({
      error: "Error"
    });
    let response;
    if (method === 'GET') {
      try {
        response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "application/json"
          },
        });
        response = response.json();
      } catch (error) {
        console.log(error);
        response = errorMessage;
      }
    };
    if (method === 'POST') {
      if (body) {
        try {
          response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
              "Content-Type": "application/json"
            },
            method: method,
            body: JSON.stringify(body)
          });
          response = response.json();
        } catch (error) {
          console.log(error);
          response = errorMessage;
        }
      } else {
        try {
          response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
              "Content-Type": "application/json"
            },
          method: method
          });
          response = response.json();
        } catch (error) {
          console.log(error);
          response = errorMessage;
        }
      }
    };
    if (method === 'PUT') {
      try {
        response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "application/json"
          },
          method: method,
          body: JSON.stringify(body)
        });
        response = response.json();
      } catch (error) {
        console.log(error);
        response = errorMessage;
      }
    };
    if (method === 'DELETE') {
      try {
        response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "application/json"
          },
          method: method
        });
        response = response.json();
      } catch (error) {
        console.log(error);
        response = errorMessage;
      }
    };
    return response;
  }
  // Payment methods
  /**
   * Lists payments for a Square account
   * @async
   * @method listPayments
   * @memberof Square
   * @returns {Promise<string>} JSON response string
   * @example
   * ```ts
   * const payments = await sq.listPayments();
   * ```
   * @example
   * ```ts
   * const payments = await sq.listPayments({
   *    begin_time: '2021-01-01T00:00:00Z', 
   *    end_time: '2021-01-31T23:59:59Z'
   * });
   * ```
   */
  public async listPayments(params? : ListPaymentsQueryParams) : Promise<string> {
      const paramsString = params ? this.makeParamsString(params) : '';
      const url = `${this.paymentsBaseURL}${paramsString}`;
      return await this.makeRequest('GET', url);
  }
  /**
   * Creates payment for a Square account
   * @async
   * @method createPayment
   * @memberof Square
   * @returns {Promise<string>} JSON response string
   * @example
   * ```ts
   * const createdPayment = await sq.createPayment({
   *    source_id: 'CASH', 
   *    idempotency_key: 'XXXXXXXX',
   *    amount_money: {
   *     amount: 2500,
   *     currency: 'USD'
   *    }
   * });
   * ```
   */
  public async createPayment(body : CreatePaymentBody) : Promise<string> {
    return await this.makeRequest('POST', this.paymentsBaseURL, body);
  }
  /**
   * Cancels payment by idempotency key
   * @async
   * @method cancelPaymentByIdempotency
   * @memberof Square
   * @returns {Promise<string>} JSON response string
   * @example
   * ```ts
   * const canceledPayment = await sq.cancelPaymentByIdempotency({
   *     idempotency_key: 'XXXXXXXX'
   * });
   * ```
   */
  public async cancelPaymentByIdempotency(body : CancelPaymentBody) : Promise<string> {
    const url = `${this.paymentsBaseURL}/cancel`;
    return await this.makeRequest('POST', url, body);
  }
  /**
   * Gets payment by payment id
   * @async
   * @method getPayment
   * @memberof Square
   * @returns {Promise<string>} JSON response string
   * @example
   * ```ts
   * const payment = await sq.getPayment('123456789');
   * ```
   */
  public async getPayment(paymentID : string) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentID}`;
    return await this.makeRequest('GET', url);
  }
  /**
   * Updates payment by payment id
   * @async
   * @method updatePayment
   * @memberof Square
   * @returns {Promise<string>} JSON response string
   * @example
   * ```ts
   * const updatedPayment = await sq.updatePayment('123456789', {
   *    idempotency_key: 'XXXXXXXX',
   *    payment: {
   *      amount_money: {
   *        amount: 2500,
   *        currency: 'USD'
   *      }
   *    }
   * });
   * ```
   */
  public async updatePayment(paymentID : string, body : UpdatePaymentBody) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentID}`;
    return await this.makeRequest('PUT', url, body);
  }
  /**
   * Cancels payment by payment id
   * @async
   * @method cancelPayment
   * @memberof Square
   * @returns {Promise<string>} JSON response string
   * @example
   * ```ts
   * const canceledPayment = await sq.cancelPayment('123456789');
   * ```
   */
  public async cancelPayment(paymentId : string) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentId}/cancel`;
    return await this.makeRequest('POST', url);
  }
  /**
   * Completes payment for a Square account
   * @async
   * @method completePayment
   * @memberof Square
   * @returns {Promise<string>} JSON response string
   * @example
   * ```ts
   * const completedPayment = await sq.completePayment({
   *    source_id: 'CASH', 
   *    idempotency_key: 'XXXXXXXX',
   *    amount_money: {
   *     amount: 2500,
   *     currency: 'USD'
   *    }
   * });
   * ```
   */
  public async completePayment(paymentId : string, body? : CompletePaymentBody) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentId}/complete`;
    if (body) {
      return await this.makeRequest('POST', url, body);
    } else {
      return await this.makeRequest('POST', url);
    }
  }
  // Refund Methods
  public async listPaymentRefunds(params? : ListPaymentRefundsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.refundsBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async refundPayment(body : RefundPaymentBody) : Promise<string> {
    return await this.makeRequest('POST', this.refundsBaseURL, body);
  }
  public async getPaymentRefund(refundID : string) : Promise<string> {
    const url = `${this.refundsBaseURL}/${refundID}`;
    return await this.makeRequest('GET', url);
  }
  // Checkout Methods
  public async getLocationSettings(locationID : string) : Promise<string> {
    const url = `${this.checkoutBaseURL}/location-settings/${locationID}`;
    return await this.makeRequest('GET', url);
  }
  public async updateLocationSettings(locationID : string, body : UpdateLocationSettingsBody ) : Promise<string> {
    const url = `${this.checkoutBaseURL}/location-settings/${locationID}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async getMerchantSettings() : Promise<string> {
    const url = `${this.checkoutBaseURL}/merchant-settings`;
    return await this.makeRequest('GET', url);
  }
  public async updateMerchantSettings(body : UpdateMerchantSettingsBody) : Promise<string> {
    const url = `${this.checkoutBaseURL}/merchant-settings`;
    return await this.makeRequest('PUT', url, body);
  }
  public async listPaymentLinks(params? : ListPaymentLinksQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.checkoutBaseURL}/payment-links${paramsString}`;
    return await this.makeRequest('GET', url);

  }
  public async createPaymentLink(body : CreatePaymentLinkBody) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links`;
    return await this.makeRequest('POST', url, body);
  }
  public async deletePaymentLink(id : string) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links/${id}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getPaymentLink(id : string) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links/${id}`;
    return await this.makeRequest('GET', url);
  }
  public async updatePaymentLink(id : string, body : PaymentLink) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links/${id}`;
    return await this.makeRequest('PUT', url, body);
  }
  // Terminal Methods
  public async createTerminalAction(body : CreateTerminalActionBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions`;
    return await this.makeRequest('POST', url, body);
  }
  public async searchTerminalActions(body : SearchTerminalActionsBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async getTerminalAction(actionID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/${actionID}`;
    return await this.makeRequest('GET', url);
  }
  public async cancelTerminalAction(actionID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/${actionID}/cancel`;
    return await this.makeRequest('POST', url);
  }
  public async dismissTerminalAction(actionID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/${actionID}/dismiss`;
    return await this.makeRequest('POST', url);
  }
  public async createTerminalCheckout(body : CreateTerminalCheckoutBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts`;
    return await this.makeRequest('POST', url, body);
  }
  public async searchTerminalCheckouts(body : SearchTerminalCheckoutsBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async getTerminalCheckout(checkoutID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/${checkoutID}`;
    return await this.makeRequest('GET', url);
  }
  public async cancelTerminalCheckout(checkoutID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/${checkoutID}/cancel`;
    return await this.makeRequest('POST', url);
  }
  public async dismissTerminalCheckout(checkoutID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/${checkoutID}/dismiss`;
    return await this.makeRequest('POST', url);
  }
  public async createTerminalRefund(body : CreateTerminalRefundBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds`;
    return await this.makeRequest('POST', url, body);
  }
  public async searchTerminalRefunds(body : SearchTerminalRefundsBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async getTerminalRefund(terminalRefundID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/${terminalRefundID}`;
    return await this.makeRequest('GET', url);
  }
  public async cancelTerminalRefund(terminalRefundID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/${terminalRefundID}/cancel`;
    return await this.makeRequest('POST', url);
  }
  public async dismissTerminalRefund(terminalRefundID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/${terminalRefundID}/dismiss`;
    return await this.makeRequest('POST', url);
  }
  // Disputes Methods
  public async listDisputes(params? : ListDisputesParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.disputesBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async getDispute(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}`;
    return await this.makeRequest('GET', url);
  }
  public async acceptDispute(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/accept`;
    return await this.makeRequest('POST', url);
  }
  public async listDisputeEvidence(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence`;
    return await this.makeRequest('GET', url);
  }
  // TODO: Add File Upload to createDisputeEvidenceFile
  public async createDisputeEvidenceFile(disputeID : string, body : CreateDisputeEvidenceFileBody) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence-files`;
    return await this.makeRequest('POST', url, body);
  }
  public async createDisputeEvidenceText(disputeID : string, body : CreateDisputeEvidenceTextBody) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence-text`;
    return await this.makeRequest('POST', url, body);
  }
  public async deleteDisputeEvidence(disputeID : string, evidenceID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence/${evidenceID}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getDisputeEvidence(disputeID : string, evidenceID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence/${evidenceID}`;
    return await this.makeRequest('GET', url);
  }
  public async submitEvidence(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/submit-evidence`;
    return await this.makeRequest('POST', url);
  }
  // Invoices Methods
  public async listInvoices(params : ListInvoicesQueryParams) : Promise<string> {
    const paramsString = this.makeParamsString(params);
    const url = `${this.invoicesBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async createInvoice(body : CreateInvoiceBody) : Promise<string> {
    return await this.makeRequest('POST', this.invoicesBaseURL, body);
  }
  public async searchInvoices(body : SearchInvoicesBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async deleteInvoice(invoiceID : string, params? : DeleteInvoiceQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.invoicesBaseURL}/${invoiceID}${paramsString}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getInvoice(invoiceID : string) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}`;
    return await this.makeRequest('GET', url);
  }
  public async updateInvoice(invoiceID : string, body : UpdateInvoiceBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}`;
    return await this.makeRequest('PUT', url, body);
  }
  // TODO: Add File Upload to createInvoiceAttachment
  public async createInvoiceAttachment(invoiceID : string, body : CreateInvoiceAttachmentBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}/attachments`;
    return await this.makeRequest('POST', url, body);
  }
  public async deleteInvoiceAttachment(invoiceID : string, attachmentID : string) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}/attachments/${attachmentID}`;
    return await this.makeRequest('DELETE', url);
  }
  public async cancelInvoice(invoiceID : string) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}/cancel`;
    return await this.makeRequest('POST', url);
  }
  public async publishInvoice(invoiceID : string, body : PublishInvoiceBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}/publish`;
    return await this.makeRequest('POST', url, body);
  }
  // Cards Methods
  public async listCards(params? : ListCardsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.cardsBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async createCard(body : CreateCardBody) : Promise<string> {
    return await this.makeRequest('POST', this.cardsBaseURL, body);
  }
  public async getCard(cardID : string) : Promise<string> {
    const url = `${this.cardsBaseURL}/${cardID}`;
    return await this.makeRequest('GET', url);
  }
  public async disableCard(cardID : string) : Promise<string> {
    const url = `${this.cardsBaseURL}/${cardID}/disable`;
    return await this.makeRequest('POST', url);
  }
  // Subscription Methods
  public async createSubscription(body : CreateSubscriptionBody) : Promise<string> {
    const url = this.subscriptionsBaseURL;
    return await this.makeRequest('POST', url, body);
  }
  public async bulkSwapPlan(body : BulkSwapPlanBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/bulk-swap-plan`;
    return await this.makeRequest('POST', url, body);
  }
  public async searchSubscriptions(body : SearchSubscriptionsBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async getSubscription(subscriptionID : string, params? : GetSubscriptionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async updateSubscription(subscriptionID : string, body : UpdateSubscriptionBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async deleteSubscriptionAction(subscriptionID : string, actionID : string) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/actions/${actionID}`;
    return await this.makeRequest('DELETE', url);
  }
  public async changeBillingAnchorDate(subscriptionID : string, body : ChangeBillingAnchorDateBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/billing-anchor`;
    return await this.makeRequest('POST', url, body);
  }
  public async cancelSubscription(subscriptionID : string) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/cancel`;
    return await this.makeRequest('POST', url);
  }
  public async listSubscriptionEvents(subscriptionID : string, params? : ListSubscriptionEventsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/events${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async pauseSubscription(subscriptionID : string, body : PauseSubscriptionBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/pause`;
    return await this.makeRequest('POST', url, body);
  }
  public async resumeSubscription(subscriptionID : string, body : ResumeSubscriptionBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/resume`;
    return await this.makeRequest('POST', url, body);
  }
  public async swapPlan(subscriptionID : string, body : SwapPlanBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/swap-plan`;
    return await this.makeRequest('POST', url, body);
  }
  // Bank Accounts Methods
  public async listBankAccounts(params? : ListBankAccountsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bankAccountsBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async getBankAccountByv1ID(v1BankAccountID : string) : Promise<string> {
    const url = `${this.bankAccountsBaseURL}/by-v1-id/${v1BankAccountID}`;
    return await this.makeRequest('GET', url);
  }
  public async getBankAccount(bankAccountID : string) : Promise<string> {
    const url = `${this.bankAccountsBaseURL}/${bankAccountID}`;
    return await this.makeRequest('GET', url);
  }
  // Payouts Methods
  public async listPayouts(params? : ListPayoutsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.payoutsBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async getPayout(payoutID : string) : Promise<string> {
    const url = `${this.payoutsBaseURL}/${payoutID}`;
    return await this.makeRequest('GET', url);
  }
  public async listPayoutEntries(payoutID : string, params? : ListPayoutEntriesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.payoutsBaseURL}/${payoutID}/payout-entries${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  // Mobile Authorization Methods
  public async createMobileAuthorizationCode(body : CreateMobileAuthorizationCodeBody) : Promise<string> {
    return await this.makeRequest('POST', this.mobileAuthBaseURL, body);
  }
  // Devices Methods
  public async listDevices(params: ListDevicesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.devicesBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async listDeviceCodes(params: ListDeviceCodesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.devicesBaseURL}/codes${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async createDeviceCode(body : CreateDeviceCodeBody) : Promise<string> {
    return await this.makeRequest('POST', `${this.devicesBaseURL}/codes`, body);
  }
  public async getDeviceCode(deviceCodeID : string) : Promise<string> {
    const url = `${this.devicesBaseURL}/codes/${deviceCodeID}`;
    return await this.makeRequest('GET', url);
  }
  public async getDevice(deviceID : string) : Promise<string> {
    const url = `${this.devicesBaseURL}/${deviceID}`;
    return await this.makeRequest('GET', url);
  }
  // Apple Pay Methods
  public async registerApplePayDomain(body : RegisterApplePayDomainBody) : Promise<string> {
    return await this.makeRequest('POST', this.applePayBaseURL, body);
  }
  // Orders Methods
  public async createOrder(body : CreateOrderBody) : Promise<string> {
    return await this.makeRequest('POST', this.ordersBaseURL, body);
  }
  public async batchGetOrders(body : BatchGetOrdersBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/batch-retrieve`;
    return await this.makeRequest('POST', url, body);
  }
  public async calculateOrder(body : CalculateOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/calculate`;
    return await this.makeRequest('POST', url, body);
  }
  public async cloneOrder(body : CloneOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/clone`;
    return await this.makeRequest('POST', url, body);
  }
  public async searchOrders(body : SearchOrdersBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async getOrder(orderID : string) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}`;
    return await this.makeRequest('GET', url);
  }
  public async updateOrder(orderID : string, body : UpdateOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async payOrder(orderID : string, body : PayOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}/pay`;
    return await this.makeRequest('POST', url, body);
  }
  // Order Custom Attributes Methods
  public async listOrderCustomAttributeDefinitions(params? : ListOrderCustomAttributeDefinitionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async createOrderCustomAttributeDefinition(body : CreateOrderCustomAttributeDefinitionBody) : Promise<string> {
    return await this.makeRequest('POST', this.orderCustomAttributeDefinitionsBaseURL, body);
  }
  public async deleteOrderCustomAttributeDefinition(key : string) : Promise<string> {
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}/${key}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getOrderCustomAttributeDefinition(key : string, params? : GetOrderCustomAttributeDefinitionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}/${key}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async updateOrderCustomAttributeDefinition(key : string, body : UpdateOrderCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}/${key}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async bulkDeleteOrderCustomAttributes(body : BulkDeleteOrderCustomAttributesBody) : Promise<string> {
    const url = `${this.orderCustomAttributesBaseURL}/bulk-delete`;
    return await this.makeRequest('POST', url, body);
  }
  public async bulkUpsertOrderCustomAttributes(body : BulkUpsertOrderCustomAttributesBody) : Promise<string> {
    const url = `${this.orderCustomAttributesBaseURL}/bulk-upsert`;
    return await this.makeRequest('POST', url, body);
  }
  public async listOrderCustomAttributes(orderID : string, params? : ListOrderCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async deleteOrderCustomAttributes(orderID : string, customAttributeKey : string) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes/${customAttributeKey}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getOrderCustomAttributes(orderID : string, customAttributeKey : string, params? : GetOrderCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes/${customAttributeKey}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async upsertOrderCustomAttributes(orderID : string, customAttributeKey : string, body : UpsertOrderCustomAttributesBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes/${customAttributeKey}`;
    return await this.makeRequest('POST', url, body);
  }
  // Catalog Methods
  public async batchDeleteCatalogObjects(body : BatchDeleteCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/batch-delete`;
    return await this.makeRequest('POST', url, body);
  }
  public async batchGetCatalogObjects(body : BatchGetCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/batch-retrieve`;
    return await this.makeRequest('POST', url, body);
  }
  public async batchUpsertCatalogObjects(body : BatchUpsertCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/batch-upsert`;
    return await this.makeRequest('POST', url, body);
  }
  // TODO: Add File Upload to createCatalogImage
  public async createCatalogImage(body : CreateCatalogImageBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/images`;
    return await this.makeRequest('POST', url, body);
  }
  // TODO: Add File Upload to updateCatalogImage
  public async updateCatalogImage(imageID : string, body : UpdateCatalogImageBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/images/${imageID}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async catalogInfo() : Promise<string> {
    const url = `${this.catalogBaseURL}/info`;
    return await this.makeRequest('GET', url);
  }
  public async listCatalog(params? : ListCatalogQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.catalogBaseURL}/list${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async upsertCatalogObject(body : UpsertCatalogObjectBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/object`;
    return await this.makeRequest('POST', url, body);
  }
  public async deleteCatalogObject(objectID : string) : Promise<string> {
    const url = `${this.catalogBaseURL}/object/${objectID}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getCatalogObject(objectID : string, params? : GetCatalogObjectQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.catalogBaseURL}/object/${objectID}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async searchCatalogObjects(body : SearchCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async searchCatalogItems(body : SearchCatalogItemsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/search-catalog-items`;
    return await this.makeRequest('POST', url, body);
  }
  public async updateItemModifierLists(body : UpdateItemModifierListsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/update-item-modifier-lists`;
    return await this.makeRequest('POST', url, body);
  }
  public async updateItemTaxes(body : UpdateItemTaxesBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/update-item-taxes`;
    return await this.makeRequest('POST', url, body);
  };
  // Inventory Methods
  public async getInventoryAdjustment(adjustmentID : string) : Promise<string> {
    const url = `${this.inventoryBaseURL}/adjustment/${adjustmentID}`;
    return await this.makeRequest('GET', url);
  }
  public async batchChangeInventory(body : BatchChangeInventoryBody) : Promise<string> {
    const url = `${this.inventoryBaseURL}/changes/batch-create`;
    return await this.makeRequest('POST', url, body);
  }
  public async batchGetInventoryChanges(body : BatchGetInventoryChangesBody) : Promise<string> {
    const url = `${this.inventoryBaseURL}/changes/batch-retrieve`;
    return await this.makeRequest('POST', url, body);
  }
  public async batchGetInventoryCounts(body : BatchGetInventoryCountsBody) : Promise<string> {
    const url = `${this.inventoryBaseURL}/counts/batch-retrieve`;
    return await this.makeRequest('POST', url, body);
  }
  public async getPhysicalInventoryCount(physicalCountID : string) : Promise<string> {
    const url = `${this.inventoryBaseURL}/physical-counts/${physicalCountID}`;
    return await this.makeRequest('GET', url);
  }
  public async getInventoryTransfer(transferID : string) : Promise<string> {
    const url = `${this.inventoryBaseURL}/transfers/${transferID}`;
    return await this.makeRequest('GET', url);
  }
  public async getInventoryCount(catalogObjectID : string, params? : GetInventoryCountQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.inventoryBaseURL}/catalog-object/${catalogObjectID}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  // Bookings Methods
  public async listBookings(params? : ListBookingsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async createBooking(body : CreateBookingBody) : Promise<string> {
    return await this.makeRequest('POST', this.bookingsBaseURL, body);
  }
  public async searchAvailability(body : SearchAvailabilityBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/availability/search`;
    return await this.makeRequest('POST', url, body);
  }
  public async bulkGetBookings(body : BulkGetBookingsBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/bulk-retrieve`;
    return await this.makeRequest('POST', url, body);
  }
  public async getBusinessBookingProfile() : Promise<string> {
    const url = `${this.bookingsBaseURL}/business-booking-profile`;
    return await this.makeRequest('GET', url);
  }
  public async listLocationBookingProfiles(params? : ListLocationBookingProfilesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/location-booking-profiles${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async getLocationBookingProfile(locationID : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/location-booking-profiles/${locationID}`;
    return await this.makeRequest('GET', url);
  }
  public async listTeamMemberBookingProfiles(params? : ListTeamMemberBookingProfilesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/team-member-booking-profiles${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async bulkGetTeamMemberBookingProfiles(body : BulkGetTeamMemberBookingProfilesBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/team-member-booking-profiles/bulk-retrieve`;
    return await this.makeRequest('POST', url, body);
  }
  public async getTeamMemberBookingProfile(teamMemberID : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/team-member-booking-profiles/${teamMemberID}`;
    return await this.makeRequest('GET', url);
  }
  public async getBooking(bookingID : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}`;
    return await this.makeRequest('GET', url);
  }
  public async updateBooking(bookingID : string, body : UpdateBookingBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async cancelBooking(bookingID : string, body : CancelBookingBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}/cancel`;
    return await this.makeRequest('POST', url, body);
  }
  // Booking Custom Attributes Methods
  public async listBookingCustomAttributeDefinitions(params? : ListBookingCustomAttributeDefinitionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async createBookingCustomAttributeDefinition(body : CreateBookingCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions`;
    return await this.makeRequest('POST', url, body);
  }
  public async deleteBookingCustomAttributeDefinition(key : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getBookingCustomAttributeDefinition(key : string, params? : GetBookingCustomAttributeDefinitionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions/${key}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async updateBookingCustomAttributeDefinition(key : string, body : UpdateBookingCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async bulkDeleteBookingCustomAttributes(body : BulkDeleteBookingCustomAttributesBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attributes/bulk-delete`;
    return await this.makeRequest('POST', url, body);
  }
  public async bulkUpsertBookingCustomAttributes(body : BulkUpsertBookingCustomAttributesBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attributes/bulk-upsert`;
    return await this.makeRequest('POST', url, body);
  }
  public async listBookingCustomAttributes(bookingID : string, params? : ListBookingCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async deleteBookingCustomAttribute(bookingID : string, key : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes/${key}`;
    return await this.makeRequest('DELETE', url);
  }
  public async getBookingCustomAttribute(bookingID : string, key : string, params? : GetBookingCustomAttributeQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes/${key}${paramsString}`;
    return await this.makeRequest('GET', url);
  }
  public async upsertBookingCustomAttribute(bookingID : string, key : string, body : UpsertBookingCustomAttributeBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes/${key}`;
    return await this.makeRequest('PUT', url, body);
  }

}