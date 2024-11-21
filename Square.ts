import type { ListPaymentsQueryParams, CreatePaymentBody, CancelPaymentBody, UpdatePaymentBody, ListPaymentRefundsQueryParams, RefundPaymentBody } from "./interfaces.ts";

class Square {

  accessToken : string;
  locationID : string;
  paymentsBaseURL : string;
  itemsBaseURL : string;
  searchOrdersBaseURL : string;
  refundsBaseURL : string;

  constructor(accessToken : string, locationID? : string) {
    this.accessToken = accessToken;
    this.locationID = locationID || '';
    this.paymentsBaseURL = 'https://connect.squareup.com/v2/payments';
    this.refundsBaseURL = 'https://connect.squareup.com/v2/refunds';
    this.itemsBaseURL = 'https://connect.squareup.com/v2/catalog/list';
    this.searchOrdersBaseURL = 'https://connect.squareup.com/v2/orders/search';
  }

  private makeParamsString(options: ListPaymentsQueryParams): string {
    const paramsArray = Object.entries(options)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    return paramsArray.length > 0 ? `?${paramsArray.join("&")}` : ""; 
}

  public async listPayments(params? : ListPaymentsQueryParams) : Promise<string> {
    if (params) {
      try {
        const paramsString = this.makeParamsString(params);
        const response = await fetch(`${this.paymentsBaseURL}${paramsString}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
      });
        return await response.json();
      } catch (error) {
        console.error(error);
        return "Error";
      }
    }
    try {
      const response = await fetch(this.paymentsBaseURL, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async createPayment(body : CreatePaymentBody) : Promise<string> {
    try {
      const response = await fetch(this.paymentsBaseURL, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async cancelPaymentByIdempotency(body : CancelPaymentBody) : Promise<string> {
    try {
      const response = await fetch(`${this.paymentsBaseURL}/cancel`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async getPayment(paymentID : string) : Promise<string> {
    try {
      const response = await fetch(`${this.paymentsBaseURL}/${paymentID}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async updatePayment(paymentID : string, body : UpdatePaymentBody) : Promise<string> {
    try {
      const response = await fetch(`${this.paymentsBaseURL}/${paymentID}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(body)
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async cancelPayment(paymentId : string) : Promise<string> {
    try {
      const response = await fetch(`${this.paymentsBaseURL}/${paymentId}/cancel`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async completePayment(paymentId : string, ) : Promise<string> {
    try {
      const response = await fetch(`${this.paymentsBaseURL}/${paymentId}/complete`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
        method: "POST",
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async listPaymentRefunds(params? : ListPaymentRefundsQueryParams) : Promise<string> {
    try {
      if (params) {
        const paramsString = this.makeParamsString(params);
        const response = await fetch(`${this.refundsBaseURL}${paramsString}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
      });
        return await response.json();
      }
      const response = await fetch(this.refundsBaseURL, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
      
    }
  }

  public async refundPayment(body : RefundPaymentBody) : Promise<string> {
    try {
      const response = await fetch(this.refundsBaseURL, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
      });
      return await response.json();
      
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  public async getPaymentRefund(refundID : string) : Promise<string> {
    try {
      const response = await fetch(`${this.refundsBaseURL}/${refundID}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json"
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }
}

export default Square;