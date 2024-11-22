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
  CancelPaymentBody, 
  CompletePaymentBody,
  CreateCardBody,
  CreateDisputeEvidenceFileBody,
  CreateDisputeEvidenceTextBody,
  CreateInvoiceAttachmentBody,
  CreateInvoiceBody,
  CreatePaymentBody, 
  CreatePaymentLinkBody,
  CreateTerminalActionBody,
  CreateTerminalCheckoutBody,
  CreateTerminalRefundBody,
  DeleteInvoiceQueryParams,
  ListCardsQueryParams,
  ListDisputesParams,
  ListInvoicesQueryParams,
  ListPaymentLinksQueryParams,
  ListPaymentRefundsQueryParams, 
  ListPaymentsQueryParams,
  PaymentLink,
  PublishInvoiceBody,
  RefundPaymentBody, 
  SearchInvoicesBody,
  SearchTerminalActionsBody,
  SearchTerminalCheckoutsBody,
  SearchTerminalRefundsBody,
  UpdateInvoiceBody,
  UpdateLocationSettingsBody,
  UpdateMerchantSettingsBody,
  UpdatePaymentBody, 
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
  cardsBaseURL : string;
  checkoutBaseURL : string;
  disputesBaseURL : string;
  invoicesBaseURL : string;
  itemsBaseURL : string;
  paymentsBaseURL : string;
  refundsBaseURL : string;
  searchOrdersBaseURL : string;
  terminalBaseURL : string;
  
  constructor(accessToken : string) {
    this.accessToken = accessToken;
    this.cardsBaseURL = 'https://connect.squareup.com/v2/cards';
    this.checkoutBaseURL = 'https://connect.squareup.com/v2/online-checkout';
    this.disputesBaseURL = 'https://connect.squareup.com/v2/disputes';
    this.invoicesBaseURL = 'https://connect.squareup.com/v2/invoices';
    this.itemsBaseURL = 'https://connect.squareup.com/v2/catalog/list';
    this.paymentsBaseURL = 'https://connect.squareup.com/v2/payments';
    this.refundsBaseURL = 'https://connect.squareup.com/v2/refunds';
    this.searchOrdersBaseURL = 'https://connect.squareup.com/v2/orders/search';
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
    if (params) {
      const paramsString = this.makeParamsString(params);
      const url = `${this.paymentsBaseURL}${paramsString}`;
      return await this.makeRequest('GET', url);
    }
    return await this.makeRequest('GET', this.paymentsBaseURL);
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
    if (params) {
      const paramsString = this.makeParamsString(params);
      const url = `${this.refundsBaseURL}${paramsString}`;
      return await this.makeRequest('GET', url);
    } else {
      return await this.makeRequest('GET', this.refundsBaseURL);
    }
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
    if (params) {
      const paramsString = this.makeParamsString(params);
      const url = `${this.checkoutBaseURL}/payment-links${paramsString}`;
      return await this.makeRequest('GET', url);
    } else {
      const url = `${this.checkoutBaseURL}/payment-links`;
      return await this.makeRequest('GET', url);
    }
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
    if (params) {
      const paramsString = this.makeParamsString(params);
      const url = `${this.disputesBaseURL}${paramsString}`;
      return await this.makeRequest('GET', url);
    } else {
      return await this.makeRequest('GET', this.disputesBaseURL);
    }
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
    if (params) {
      const paramsString = this.makeParamsString(params);
      const url = `${this.cardsBaseURL}${paramsString}`;
      return await this.makeRequest('GET', url);
    } else {
      return await this.makeRequest('GET', this.cardsBaseURL);
    }
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
}

// export default Square;