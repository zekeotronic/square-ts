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
  ListPaymentsQueryParams,
  CreatePaymentBody, 
  CancelPaymentBody, 
  UpdatePaymentBody, 
  ListPaymentRefundsQueryParams, 
  RefundPaymentBody, 
  UpdateLocationSettingsBody,
  UpdateMerchantSettingsBody,
  ListPaymentLinksQueryParams,
  CreatePaymentLinkBody,
  PaymentLink,
  CreateTerminalActionBody,
  SearchTerminalActionsBody,
  CreateTerminalCheckoutBody,
  SearchTerminalCheckoutsBody,
  CreateTerminalRefundBody,
  SearchTerminalRefundsBody,
  ListDisputesParams,
  CreateDisputeEvidenceFileBody,
  CreateDisputeEvidenceTextBody
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
  paymentsBaseURL : string;
  itemsBaseURL : string;
  searchOrdersBaseURL : string;
  refundsBaseURL : string;
  checkoutBaseURL : string;
  terminalBaseURL : string;
  disputesBaseURL : string;
  
  constructor(accessToken : string) {
    this.accessToken = accessToken;
    this.paymentsBaseURL = 'https://connect.squareup.com/v2/payments';
    this.refundsBaseURL = 'https://connect.squareup.com/v2/refunds';
    this.itemsBaseURL = 'https://connect.squareup.com/v2/catalog/list';
    this.searchOrdersBaseURL = 'https://connect.squareup.com/v2/orders/search';
    this.checkoutBaseURL = 'https://connect.squareup.com/v2/online-checkout';
    this.terminalBaseURL = 'https://connect.squareup.com/v2/terminals';
    this.disputesBaseURL = 'https://connect.squareup.com/v2/disputes';
  }
  // Helper methods
  private makeParamsString(options: object): string {
    const paramsArray = Object.entries(options)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    return paramsArray.length > 0 ? `?${paramsArray.join("&")}` : ""; 
  }
  private async makeRequest(method : string, url : string, body? : object, params? : object) : Promise<string> {
    const errorMessage = JSON.stringify({
      error: "Error"
    });
    let response;
    if (method === 'GET') {
      if (params) {
        try {
          const paramsString = this.makeParamsString(params);
          response = await fetch(`${url}${paramsString}`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "application/json"
            },
          });
          response = response.json();
        } catch (error) {
          console.error(error);
          response = errorMessage;
        }
      } else {
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
   * @param {object} params {@link ListPaymentsQueryParams}
   * @param {string} [params.begin_time] - The beginning of the requested reporting period, in RFC 3339 format
   * @param {string} [params.end_time] - The end of the requested reporting period, in RFC 3339 format
   * @param {string} [params.sort_order] - The order in which results are listed, either ASC or DESC
   * @param {string} [params.cursor] - A pagination cursor returned by a previous call to this endpoint
   * @param {string} [params.location_id] - Limit results to the location supplied. By default, results are returned for the default (main) location associated with the seller.
   * @param {string} [params.total] - The exact amount in the total_money for a `Payment` object
   * @param {string} [params.last_4] - The last 4 digits of the card number for a `Payment` object
   * @param {string} [params.card_brand] - The brand of the payment card (for example, VISA)
   * @param {number} [params.limit] - The maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page. The default value of 100 is also the maximum allowed value. If the provided value is greater than 100, it is ignored and the default value is used instead. Default: 100
   * @param {boolean} [params.is_offline_payment] - Whether the payment was taken offline or not.
   * @param {string} [params.offline_begin_time] - Indicates the start of the time range for which to retrieve offline payments, in RFC 3339 format for timestamps. The range is determined using the offline_payment_details.client_created_at field for each Payment. If set, payments without a value set in offline_payment_details.client_created_at will not be returned. Default: The current time. Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   * @param {string} [params.offline_end_time] - Indicates the end of the time range for which to retrieve offline payments, in RFC 3339 format for timestamps. The range is determined using the offline_payment_details.client_created_at field for each Payment. If set, payments without a value set in offline_payment_details.client_created_at will not be returned. Default: The current time.Examples for January 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
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
      return await this.makeRequest('GET', url, {}, params);
    }
    return await this.makeRequest('GET', this.paymentsBaseURL);
  }
  public async createPayment(body : CreatePaymentBody) : Promise<string> {
    return await this.makeRequest('POST', this.paymentsBaseURL, body);
  }
  public async cancelPaymentByIdempotency(body : CancelPaymentBody) : Promise<string> {
    const url = `${this.paymentsBaseURL}/cancel`;
    return await this.makeRequest('POST', url, body);
  }
  public async getPayment(paymentID : string) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentID}`;
    return await this.makeRequest('GET', url);
  }
  public async updatePayment(paymentID : string, body : UpdatePaymentBody) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentID}`;
    return await this.makeRequest('PUT', url, body);
  }
  public async cancelPayment(paymentId : string) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentId}/cancel`;
    return await this.makeRequest('POST', url);
  }
  public async completePayment(paymentId : string, ) : Promise<string> {
    const url = `${this.paymentsBaseURL}/${paymentId}/complete`;
    return await this.makeRequest('POST', url);
  }
  // Refund Methods
  public async listPaymentRefunds(params? : ListPaymentRefundsQueryParams) : Promise<string> {
    if (params) {
      const paramsString = this.makeParamsString(params);
      const url = `${this.refundsBaseURL}${paramsString}`;
      return await this.makeRequest('GET', url, {}, params);
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
      return await this.makeRequest('GET', url, {}, params);
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
      return await this.makeRequest('GET', url, {}, params);
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
}

// export default Square;