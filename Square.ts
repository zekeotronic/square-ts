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
  SearchTerminalRefundsBody
} from "./interfaces.ts";

class Square {
  accessToken : string;
  locationID : string;
  paymentsBaseURL : string;
  itemsBaseURL : string;
  searchOrdersBaseURL : string;
  refundsBaseURL : string;
  checkoutBaseURL : string;
  terminalBaseURL : string;
  // Constructor
  constructor(accessToken : string, locationID? : string) {
    this.accessToken = accessToken;
    this.locationID = locationID || '';
    this.paymentsBaseURL = 'https://connect.squareup.com/v2/payments';
    this.refundsBaseURL = 'https://connect.squareup.com/v2/refunds';
    this.itemsBaseURL = 'https://connect.squareup.com/v2/catalog/list';
    this.searchOrdersBaseURL = 'https://connect.squareup.com/v2/orders/search';
    this.checkoutBaseURL = 'https://connect.squareup.com/v2/online-checkout';
    this.terminalBaseURL = 'https://connect.squareup.com/v2/terminals';
  }
  // Helper methods
  private makeParamsString(options: ListPaymentsQueryParams): string {
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
  public async getLocationSettings(locationID? : string) : Promise<string> {
    const url = `${this.checkoutBaseURL}/location-settings/${locationID || this.locationID}`;
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
}

export default Square;