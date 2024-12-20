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
  CreateLocationBody,
  CancelInvoiceBody,
  UpdateLocationBody,
  AccumulateLoyaltyPointsBody, 
  AdjustLoyaltyPointsBody,
  BatchChangeInventoryBody,
  BatchDeleteCatalogObjectsBody,
  BatchGetInventoryChangesBody,
  BatchGetInventoryCountsBody,
  BatchGetCatalogObjectsBody,
  BatchGetOrdersBody,
  BatchUpsertCatalogObjectsBody,
  BulkCreateCustomersBody,
  BulkCreateVendorsBody,
  BulkDeleteBookingCustomAttributesBody,
  BulkDeleteCustomersBody,
  BulkDeleteOrderCustomAttributesBody,
  BulkGetBookingsBody,
  BulkGetCustomersBody,
  BulkGetTeamMemberBookingProfilesBody,
  BulkGetVendorsBody,
  BulkSwapPlanBody,
  BulkUpdateCustomersBody,
  BulkUpdateVendorsBody,
  BulkUpsertBookingCustomAttributesBody,
  BulkUpsertCustomerCustomAttributesBody,
  BulkUpsertOrderCustomAttributesBody,
  CalculateLoyaltyPointsBody,
  CalculateOrderBody,
  CancelBookingBody,
  CancelPaymentBody, 
  ChangeBillingAnchorDateBody,
  CloneOrderBody,
  CompletePaymentBody,
  CreateBookingBody,
  CreateBookingCustomAttributeDefinitionBody,
  CreateBreakTypeBody,
  CreateCardBody,
  CreateCatalogImageBody,
  CreateCustomerBody,
  CreateCustomerCustomAttributeDefinitionBody,
  CreateCustomerGroupBody,
  CreateDeviceCodeBody,
  CreateDisputeEvidenceFileBody,
  CreateDisputeEvidenceTextBody,
  CreateGiftCardActivityBody,
  CreateGiftCardBody,
  CreateInvoiceAttachmentBody,
  CreateInvoiceBody,
  CreateLoyaltyAccountBody,
  CreateLoyaltyRewardBody,
  CreateLoyaltyPromotionBody,
  CreateMobileAuthorizationCodeBody,
  CreateOrderBody,
  CreateOrderCustomAttributeDefinitionBody,
  CreatePaymentBody, 
  CreatePaymentLinkBody,
  CreateShiftBody,
  CreateSubscriptionBody,
  CreateTerminalActionBody,
  CreateTerminalCheckoutBody,
  CreateTerminalRefundBody,
  CreateVendorBody,
  DeleteCustomerQueryParams,
  DeleteInvoiceQueryParams,
  GetBookingCustomAttributeDefinitionQueryParams,
  GetBookingCustomAttributeQueryParams,
  GetCashDrawerShiftsQueryParams,
  GetCatalogObjectQueryParams,
  GetCustomerCustomAttributeDefinitionQueryParams,
  GetCustomerCustomAttributeQueryParams,
  GetGiftCardFromGANBody,
  GetGiftCardFromNonceBody,
  GetInventoryCountQueryParams,
  GetOrderCustomAttributeDefinitionQueryParams,
  GetOrderCustomAttributesQueryParams,
  GetSubscriptionQueryParams,
  LinkCustomerToGiftCardBody,
  ListBankAccountsQueryParams,
  ListBookingCustomAttributeDefinitionsQueryParams,
  ListBookingCustomAttributesQueryParams,
  ListBookingsQueryParams,
  ListBreakTypesQueryParams,
  ListCardsQueryParams,
  ListCashDrawerShiftEventsQueryParams,
  ListCashDrawerShiftsQueryParams,
  ListCatalogQueryParams,
  ListCustomerCustomAttributeDefinitionsQueryParams,
  ListCustomerCustomAttributesQueryParams,
  ListCustomerGroupsQueryParams,
  ListCustomersQueryParams,
  ListCustomerSegmentsQueryParams,
  ListDeviceCodesQueryParams,
  ListDevicesQueryParams,
  ListDisputesQueryParams,
  ListGiftCardActivitiesQueryParams,
  ListGiftCardsQueryParams,
  ListInvoicesQueryParams,
  ListLocationBookingProfilesQueryParams,
  ListLoyaltyPromotionsQueryParams,
  ListOrderCustomAttributeDefinitionsQueryParams,
  ListOrderCustomAttributesQueryParams,
  ListPaymentLinksQueryParams,
  ListPaymentRefundsQueryParams, 
  ListPaymentsQueryParams,
  ListPayoutEntriesQueryParams,
  ListPayoutsQueryParams,
  ListSubscriptionEventsQueryParams,
  ListTeamMemberBookingProfilesQueryParams,
  ListTeamMemberWagesQueryParams,
  ListWorkweekConfigsQueryParams,
  PauseSubscriptionBody,
  PayOrderBody,
  PublishInvoiceBody,
  RedeemLoyaltyRewardBody,
  RefundPaymentBody, 
  RegisterApplePayDomainBody,
  ResumeSubscriptionBody,
  SearchAvailabilityBody,
  SearchCatalogItemsBody,
  SearchCatalogObjectsBody,
  SearchCustomersBody,
  SearchInvoicesBody,
  SearchLoyaltyAccountsBody,
  SearchLoyaltyEventsBody,
  SearchLoyaltyRewardsBody,
  SearchOrdersBody,
  SearchShiftsBody,
  SearchSubscriptionsBody,
  SearchTerminalActionsBody,
  SearchTerminalCheckoutsBody,
  SearchTerminalRefundsBody,
  SearchVendorsBody,
  SwapPlanBody,
  UnlinkCustomerFromGiftCardBody,
  UpdateBookingBody,
  UpdateBookingCustomAttributeDefinitionBody,
  UpdateBreakTypeBody,
  UpdateCatalogImageBody,
  UpdateCustomerBody,
  UpdateCustomerCustomAttributeDefinitionBody,
  UpdateCustomerGroupBody,
  UpdateInvoiceBody,
  UpdateItemModifierListsBody,
  UpdateItemTaxesBody,
  UpdateLocationSettingsBody,
  UpdateMerchantSettingsBody,
  UpdatePaymentLinkBody,
  UpdateOrderBody,
  UpdateOrderCustomAttributeDefinitionBody,
  UpdatePaymentBody,
  UpdateShiftBody,
  UpdateSubscriptionBody,
  UpdateVendorBody,
  UpdateWorkweekConfigBody,
  UpsertBookingCustomAttributeBody,
  UpsertCatalogObjectBody,
  UpsertCustomerCustomAttributeBody,
  UpsertOrderCustomAttributesBody,
  UpsertSnippetBody,
  CreateTeamMemberBody,
  BulkCreateTeamMembersBody,
  BulkUpdateTeamMembersBody,
  SearchTeamMembersBody,
  UpdateTeamMemberBody,
  UpdateWageSettingBody,
  ListMerchantsQueryParams,
  ListMerchantCustomAttributeDefinitionsQueryParams,
  CreateMerchantCustomAttributeDefinitionBody,
  GetMerchantCustomAttributeDefinitionQueryParams,
  UpdateMerchantCustomAttributeDefinitionBody,
  BulkDeleteMerchantCustomAttributesBody,
  BulkUpsertMerchantCustomAttributesBody,
  ListMerchantCustomAttributesQueryParams,
  UpsertMerchantCustomAttributeBody,
  ListLocationCustomAttributeDefinitionsQueryParams,
  CreateLocationCustomAttributeDefinitionBody,
  GetLocationCustomAttributeDefinitionQueryParams,
  UpdateLocationCustomAttributeDefinitionBody,
  BulkDeleteLocationCustomAttributesBody,
  BulkUpsertLocationCustomAttributesBody,
  ListLocationCustomAttributesQueryParams,
  GetLocationCustomAttributeQueryParams,
  UpsertLocationCustomAttributeBody,
  SquareEnvironment,
  AuthorizeQueryParams,
  RevokeTokenBody,
  ObtainTokenBody,
  ListWebhookEventTypesQueryParams,
  ListWebhookSubscriptionsQueryParams,
  CreateWebhookSubscriptionBody,
  UpdateWebhookSubscriptionBody,
  UpdateWebhookSubscriptionSignatureKeyBody,
  TestWebhookSubscriptionBody,
  SearchEventsBody,
  ListEventTypesQueryParams
} from './interfaces.ts';

import { HTTP } from './interfaces.ts'

/**
 * Square Payments API class
 * @class Square
 * @classdesc Class representing Square API
 * @example
 * ```ts
 * import { Square } from "@shnoice/square";
 * const sq = new Square(accessToken);
 * ```
 * @example
 * ```ts
 * import { Square } from "@shnoice/square";
 * const sq = new Square(accessToken, 'production');
 * ```
 */
export class Square {
  accessToken : string;
  clientSecret : string;
  environment : string;
  applePayBaseURL : string;
  bankAccountsBaseURL : string;
  bookingsBaseURL : string;
  cardsBaseURL : string;
  cashDrawersBaseURL : string;
  catalogBaseURL : string;
  checkoutBaseURL : string;
  customersBaseURL : string;
  devicesBaseURL : string;
  disputesBaseURL : string;
  eventsBaseURL : string;
  giftCardsBaseURL : string;
  inventoryBaseURL : string;
  invoicesBaseURL : string;
  itemsBaseURL : string;
  laborBaseURL :string;
  locationsBaseURL : string;
  loyaltyBaseURL : string;
  merchantsBaseURL : string;
  mobileAuthBaseURL : string;
  oauthBaseURL : string;
  orderCustomAttributeDefinitionsBaseURL : string;
  orderCustomAttributesBaseURL : string;
  ordersBaseURL : string;
  paymentsBaseURL : string;
  payoutsBaseURL : string;
  refundsBaseURL : string;
  sitesBaseURL : string;
  subscriptionsBaseURL : string;
  teamMembersBaseURL : string;
  terminalBaseURL : string;
  vendorsBaseURL : string;
  webhooksBaseURL : string;
  
  /**
   * @constructor
   * @param {string} accessToken Square access token 
   * @param {string} [environment='sandbox'] Sandbox or production environment
   */
  constructor(accessToken : string, clientSecret : string, environment : SquareEnvironment = 'sandbox') {
    this.accessToken = accessToken;
    this.clientSecret = clientSecret;
    this.environment = environment;
    this.applePayBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/apple-pay/domains`;
    this.bankAccountsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/bank-accounts`;
    this.bookingsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/bookings`;
    this.cardsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/cards`;
    this.cashDrawersBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/cash-drawers`;
    this.catalogBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/catalog`;
    this.checkoutBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/online-checkout`;
    this.customersBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/customers`;
    this.disputesBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/disputes`;
    this.devicesBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/devices`;
    this.eventsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/events`;
    this.giftCardsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/gift-cards`;
    this.inventoryBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/inventory`;
    this.invoicesBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/invoices`;
    this.itemsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/catalog/list`;
    this.laborBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/labor`;
    this.locationsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/locations`;
    this.loyaltyBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/loyalty`;
    this.merchantsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/merchants`;
    this.mobileAuthBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/mobile/authorization-code`;
    this.oauthBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/oauth2`;
    this.orderCustomAttributeDefinitionsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/orders/custom-attribute-definitions`;
    this.orderCustomAttributesBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/orders/custom-attributes`;
    this.ordersBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/orders`;
    this.paymentsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/payments`;
    this.payoutsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/payouts`;
    this.refundsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/refunds`;
    this.sitesBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/sites`;
    this.subscriptionsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/subscriptions`;
    this.teamMembersBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/team-members`;
    this.terminalBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/terminals`;
    this.vendorsBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/vendors`;
    this.webhooksBaseURL = `https://connect.squareup${this.environment === 'sandbox' ? 'sandbox' : ''}.com/v2/webhooks`;
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
    if (method === HTTP.GET) {
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
    if (method === HTTP.POST) {
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
    if (method === HTTP.PUT) {
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
    if (method === HTTP.DELETE) {
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
  private async makeFormRequest(method : string, url : string, body : FormData) : Promise<string> {
    const errorMessage = JSON.stringify({
      error: "Error"
    });
    let response;
    try {
      response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        },
        method: method,
        body: body
      });
      response = response.json();
    } catch (error) {
      console.log(error);
      response = errorMessage;
    }
    return response;
  };
  //OAuth Methods
  public async authorize(params : AuthorizeQueryParams) : Promise<string> {
    const paramsString = this.makeParamsString(params);
    const url = `${this.oauthBaseURL}/authorize${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async revokeToken(body : RevokeTokenBody) : Promise<string> {
    const url = `${this.oauthBaseURL}/revoke`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Client ${this.clientSecret}`,
          "Content-Type": "application/json"
        },
        method: HTTP.POST,
        body: JSON.stringify(body)
      });
      return response.json();
    } catch (error) {
      console.log(error);
      return JSON.stringify({error: "Error"});
    }
  }
  public async obtainToken(body : ObtainTokenBody) : Promise<string> {
    const url = `${this.oauthBaseURL}/token`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getTokenStatus() : Promise<string> {
    const url = `${this.oauthBaseURL}/token/status`;
    return await this.makeRequest(HTTP.GET, url);
  }
  //Webhooks Methods
  public async listWebhookEventTypes(params? : ListWebhookEventTypesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.webhooksBaseURL}/event-types${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listWebhookSubscriptions(params? : ListWebhookSubscriptionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.webhooksBaseURL}/subscriptions${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createWebhookSubscription(body : CreateWebhookSubscriptionBody) : Promise<string> {
    const url = `${this.webhooksBaseURL}/subscriptions`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteWebhookSubscription(subscriptionID : string) : Promise<string> {
    const url = `${this.webhooksBaseURL}/subscriptions/${subscriptionID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getWebhookSubscription(subscriptionID : string) : Promise<string> {
    const url = `${this.webhooksBaseURL}/subscriptions/${subscriptionID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateWebhookSubscription(subscriptionID : string, body : UpdateWebhookSubscriptionBody) : Promise<string> {
    const url = `${this.webhooksBaseURL}/subscriptions/${subscriptionID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async updateWebhookSubscriptionSignatureKey(subscriptionID : string, body : UpdateWebhookSubscriptionSignatureKeyBody) : Promise<string> {
    const url = `${this.webhooksBaseURL}/subscriptions/${subscriptionID}/signature-key`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async testWebhookSubscription(subscriptionID : string, body : TestWebhookSubscriptionBody) : Promise<string> {
    const url = `${this.webhooksBaseURL}/subscriptions/${subscriptionID}/test`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Events Methods
  public async searchEvents(body : SearchEventsBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.eventsBaseURL, body);
  }
  public async disableEvents() : Promise<string> {
    const url = `${this.eventsBaseURL}/disable`;
    return await this.makeRequest(HTTP.PUT, url);
  }
  public async enableEvents() : Promise<string> {
    const url = `${this.eventsBaseURL}/enable`;
    return await this.makeRequest(HTTP.PUT, url);
  }
  public async listEventTypes(params? : ListEventTypesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.eventsBaseURL}/types${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Payment methods
  /**
   * Lists payments for a Square account
   * @async
   * @method listPayments
   * @memberof Square
   * @param {ListPaymentsQueryParams} [params] Query parameters
   * @param {string} [params.begin_time]
   * @param {string} [params.end_time]
   * @param {string} [params.sort_order]
   * @param {string} [params.cursor]
   * @param {number} [params.location_id]
   * @param {string} [params.total]
   * @param {string} [params.last_4]
   * @param {string} [params.card_brand]
   * @param {number} [params.limit]
   * @param {boolean} [params.is_offline_payment]
   * @param {string} [params.offline_begin_time] 
   * @param {string} [params.offline_end_time] 
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
      return await this.makeRequest(HTTP.GET, url);
  }
  /**
   * Creates payment for a Square account
   * @async
   * @method createPayment
   * @memberof Square
   * @param {CreatePaymentBody} body Payment body
   * @param {string} body.source_id
   * @param {string} body.idempotency_key
   * @param {Money} [body.amount_money
   * @param {Money} [body.tip_money]
   * @param {Money} [body.app_fee_money]
   * @param {string} [body.delay_duration]
   * @param {string} [body.delay_action]
   * @param {boolean} [body.autocomplete]
   * @param {string} [body.order_id]
   * @param {string} [body.customer_id]
   * @param {string} [body.location_id]
   * @param {string} [body.team_member_id]
   * @param {string} [body.reference_id]
   * @param {string} [body.verification_token]
   * @param {boolean} [body.accept_partial_authorization]
   * @param {string} [body.buyer_email_address]
   * @param {Address} [body.billing_address]
   * @param {Address} [body.shipping_address]
   * @param {string} [body.note]
   * @param {string} [body.statement_description_identifier]
   * @param {CashPaymentDetails} [body.cash_details]
   * @param {ExternalPaymentDetails} [body.external_details]
   * @param {CustomerDetails} [body.customer_details]
   * @param {OfflinePaymentDetails} [body.offline_payment_details]
   * 
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
    return await this.makeRequest(HTTP.POST, this.paymentsBaseURL, body);
  }
  /**
   * Cancels payment by idempotency key
   * @async
   * @method cancelPaymentByIdempotency
   * @memberof Square
   * @param {CancelPaymentBody} body Cancel payment body
   * @param {string} body.idempotency_key
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
    return await this.makeRequest(HTTP.POST, url, body);
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
    return await this.makeRequest(HTTP.GET, url);
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
    return await this.makeRequest(HTTP.PUT, url, body);
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
    return await this.makeRequest(HTTP.POST, url);
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
      return await this.makeRequest(HTTP.POST, url, body);
    } else {
      return await this.makeRequest(HTTP.POST, url);
    }
  }
  // Refund Methods
  public async listPaymentRefunds(params? : ListPaymentRefundsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.refundsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async refundPayment(body : RefundPaymentBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.refundsBaseURL, body);
  }
  public async getPaymentRefund(refundID : string) : Promise<string> {
    const url = `${this.refundsBaseURL}/${refundID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Checkout Methods
  public async getLocationSettings(locationID : string) : Promise<string> {
    const url = `${this.checkoutBaseURL}/location-settings/${locationID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateLocationSettings(locationID : string, body : UpdateLocationSettingsBody ) : Promise<string> {
    const url = `${this.checkoutBaseURL}/location-settings/${locationID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async getMerchantSettings() : Promise<string> {
    const url = `${this.checkoutBaseURL}/merchant-settings`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateMerchantSettings(body : UpdateMerchantSettingsBody) : Promise<string> {
    const url = `${this.checkoutBaseURL}/merchant-settings`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async listPaymentLinks(params? : ListPaymentLinksQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.checkoutBaseURL}/payment-links${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createPaymentLink(body : CreatePaymentLinkBody) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deletePaymentLink(id : string) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links/${id}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getPaymentLink(id : string) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links/${id}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updatePaymentLink(id : string, body : UpdatePaymentLinkBody) : Promise<string> {
    const url = `${this.checkoutBaseURL}/payment-links/${id}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  // Terminal Methods
  public async createTerminalAction(body : CreateTerminalActionBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchTerminalActions(body : SearchTerminalActionsBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getTerminalAction(actionID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/${actionID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async cancelTerminalAction(actionID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/${actionID}/cancel`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async dismissTerminalAction(actionID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/actions/${actionID}/dismiss`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async createTerminalCheckout(body : CreateTerminalCheckoutBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchTerminalCheckouts(body : SearchTerminalCheckoutsBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getTerminalCheckout(checkoutID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/${checkoutID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async cancelTerminalCheckout(checkoutID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/${checkoutID}/cancel`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async dismissTerminalCheckout(checkoutID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/checkouts/${checkoutID}/dismiss`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async createTerminalRefund(body : CreateTerminalRefundBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchTerminalRefunds(body : SearchTerminalRefundsBody) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getTerminalRefund(terminalRefundID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/${terminalRefundID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async cancelTerminalRefund(terminalRefundID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/${terminalRefundID}/cancel`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async dismissTerminalRefund(terminalRefundID : string) : Promise<string> {
    const url = `${this.terminalBaseURL}/refunds/${terminalRefundID}/dismiss`;
    return await this.makeRequest(HTTP.POST, url);
  }
  // Disputes Methods
  public async listDisputes(params? : ListDisputesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.disputesBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getDispute(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async acceptDispute(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/accept`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async listDisputeEvidence(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createDisputeEvidenceFile(disputeID : string, body : CreateDisputeEvidenceFileBody, filePath : string) : Promise<string> {
    const f = await Deno.readFile(filePath);
    const file = new Blob([f], { type: `image/${filePath.split('.')[filePath.split('.').length - 1]}` });
    const form = new FormData();
    form.append('file', file);
    form.append('request', JSON.stringify(body));
    const url = `${this.disputesBaseURL}/${disputeID}/evidence-files`;
    return await this.makeFormRequest(HTTP.POST, url, form);
  }
  public async createDisputeEvidenceText(disputeID : string, body : CreateDisputeEvidenceTextBody) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence-text`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteDisputeEvidence(disputeID : string, evidenceID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence/${evidenceID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getDisputeEvidence(disputeID : string, evidenceID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/evidence/${evidenceID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async submitEvidence(disputeID : string) : Promise<string> {
    const url = `${this.disputesBaseURL}/${disputeID}/submit-evidence`;
    return await this.makeRequest(HTTP.POST, url);
  }
  // Invoices Methods
  public async listInvoices(params : ListInvoicesQueryParams) : Promise<string> {
    const paramsString = this.makeParamsString(params);
    const url = `${this.invoicesBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createInvoice(body : CreateInvoiceBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.invoicesBaseURL, body);
  }
  public async searchInvoices(body : SearchInvoicesBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteInvoice(invoiceID : string, params? : DeleteInvoiceQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.invoicesBaseURL}/${invoiceID}${paramsString}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getInvoice(invoiceID : string) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateInvoice(invoiceID : string, body : UpdateInvoiceBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async createInvoiceAttachment(invoiceID : string, body : CreateInvoiceAttachmentBody, filePath : string) : Promise<string> {
    const f = await Deno.readFile(filePath);
    const file = new Blob([f], { type: `image/${filePath.split('.')[filePath.split('.').length - 1]}` });
    const form = new FormData();
    form.append('file', file);
    form.append('request', JSON.stringify(body));
    const url = `${this.invoicesBaseURL}/${invoiceID}/attachments`;
    return await this.makeFormRequest(HTTP.POST, url, form);
  }
  public async deleteInvoiceAttachment(invoiceID : string, attachmentID : string) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}/attachments/${attachmentID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async cancelInvoice(invoiceID : string, body : CancelInvoiceBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}/cancel`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async publishInvoice(invoiceID : string, body : PublishInvoiceBody) : Promise<string> {
    const url = `${this.invoicesBaseURL}/${invoiceID}/publish`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Cards Methods
  public async listCards(params? : ListCardsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.cardsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createCard(body : CreateCardBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.cardsBaseURL, body);
  }
  public async getCard(cardID : string) : Promise<string> {
    const url = `${this.cardsBaseURL}/${cardID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async disableCard(cardID : string) : Promise<string> {
    const url = `${this.cardsBaseURL}/${cardID}/disable`;
    return await this.makeRequest(HTTP.POST, url);
  }
  // Subscription Methods
  public async createSubscription(body : CreateSubscriptionBody) : Promise<string> {
    const url = this.subscriptionsBaseURL;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkSwapPlan(body : BulkSwapPlanBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/bulk-swap-plan`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchSubscriptions(body : SearchSubscriptionsBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getSubscription(subscriptionID : string, params? : GetSubscriptionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateSubscription(subscriptionID : string, body : UpdateSubscriptionBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async deleteSubscriptionAction(subscriptionID : string, actionID : string) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/actions/${actionID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async changeBillingAnchorDate(subscriptionID : string, body : ChangeBillingAnchorDateBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/billing-anchor`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async cancelSubscription(subscriptionID : string) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/cancel`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async listSubscriptionEvents(subscriptionID : string, params? : ListSubscriptionEventsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/events${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async pauseSubscription(subscriptionID : string, body : PauseSubscriptionBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/pause`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async resumeSubscription(subscriptionID : string, body : ResumeSubscriptionBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/resume`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async swapPlan(subscriptionID : string, body : SwapPlanBody) : Promise<string> {
    const url = `${this.subscriptionsBaseURL}/${subscriptionID}/swap-plan`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Bank Accounts Methods
  public async listBankAccounts(params? : ListBankAccountsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bankAccountsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getBankAccountByv1ID(v1BankAccountID : string) : Promise<string> {
    const url = `${this.bankAccountsBaseURL}/by-v1-id/${v1BankAccountID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getBankAccount(bankAccountID : string) : Promise<string> {
    const url = `${this.bankAccountsBaseURL}/${bankAccountID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Payouts Methods
  public async listPayouts(params? : ListPayoutsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.payoutsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getPayout(payoutID : string) : Promise<string> {
    const url = `${this.payoutsBaseURL}/${payoutID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listPayoutEntries(payoutID : string, params? : ListPayoutEntriesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.payoutsBaseURL}/${payoutID}/payout-entries${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Mobile Authorization Methods
  public async createMobileAuthorizationCode(body : CreateMobileAuthorizationCodeBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.mobileAuthBaseURL, body);
  }
  // Devices Methods
  public async listDevices(params: ListDevicesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.devicesBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listDeviceCodes(params: ListDeviceCodesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.devicesBaseURL}/codes${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createDeviceCode(body : CreateDeviceCodeBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, `${this.devicesBaseURL}/codes`, body);
  }
  public async getDeviceCode(deviceCodeID : string) : Promise<string> {
    const url = `${this.devicesBaseURL}/codes/${deviceCodeID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getDevice(deviceID : string) : Promise<string> {
    const url = `${this.devicesBaseURL}/${deviceID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Apple Pay Methods
  public async registerApplePayDomain(body : RegisterApplePayDomainBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.applePayBaseURL, body);
  }
  // Orders Methods
  public async createOrder(body : CreateOrderBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.ordersBaseURL, body);
  }
  public async batchGetOrders(body : BatchGetOrdersBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/batch-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async calculateOrder(body : CalculateOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/calculate`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async cloneOrder(body : CloneOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/clone`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchOrders(body : SearchOrdersBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getOrder(orderID : string) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateOrder(orderID : string, body : UpdateOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async payOrder(orderID : string, body : PayOrderBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}/pay`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Order Custom Attributes Methods
  public async listOrderCustomAttributeDefinitions(params? : ListOrderCustomAttributeDefinitionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createOrderCustomAttributeDefinition(body : CreateOrderCustomAttributeDefinitionBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.orderCustomAttributeDefinitionsBaseURL, body);
  }
  public async deleteOrderCustomAttributeDefinition(key : string) : Promise<string> {
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getOrderCustomAttributeDefinition(key : string, params? : GetOrderCustomAttributeDefinitionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateOrderCustomAttributeDefinition(key : string, body : UpdateOrderCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.orderCustomAttributeDefinitionsBaseURL}/${key}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async bulkDeleteOrderCustomAttributes(body : BulkDeleteOrderCustomAttributesBody) : Promise<string> {
    const url = `${this.orderCustomAttributesBaseURL}/bulk-delete`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkUpsertOrderCustomAttributes(body : BulkUpsertOrderCustomAttributesBody) : Promise<string> {
    const url = `${this.orderCustomAttributesBaseURL}/bulk-upsert`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async listOrderCustomAttributes(orderID : string, params? : ListOrderCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async deleteOrderCustomAttributes(orderID : string, customAttributeKey : string) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes/${customAttributeKey}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getOrderCustomAttributes(orderID : string, customAttributeKey : string, params? : GetOrderCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes/${customAttributeKey}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async upsertOrderCustomAttributes(orderID : string, customAttributeKey : string, body : UpsertOrderCustomAttributesBody) : Promise<string> {
    const url = `${this.ordersBaseURL}/${orderID}/custom-attributes/${customAttributeKey}`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Catalog Methods
  public async batchDeleteCatalogObjects(body : BatchDeleteCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/batch-delete`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async batchGetCatalogObjects(body : BatchGetCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/batch-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async batchUpsertCatalogObjects(body : BatchUpsertCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/batch-upsert`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async createCatalogImage(body : CreateCatalogImageBody, filePath : string) : Promise<string> {
    const f = await Deno.readFile(filePath);
    const file = new Blob([f], { type: `image/${filePath.split('.')[filePath.split('.').length - 1]}` });
    const form = new FormData();
    form.append('file', file);
    form.append('request', JSON.stringify(body));
    const url = `${this.catalogBaseURL}/images`;
    return await this.makeFormRequest(HTTP.POST, url, form);
  }
  public async updateCatalogImage(imageID : string, body : UpdateCatalogImageBody, filePath: string) : Promise<string> {
    const f = await Deno.readFile(filePath);
    const file = new Blob([f], { type: `image/${filePath.split('.')[filePath.split('.').length - 1]}` });
    const form = new FormData();
    form.append('file', file);
    form.append('request', JSON.stringify(body));
    const url = `${this.catalogBaseURL}/images/${imageID}`;
    return await this.makeFormRequest(HTTP.PUT, url, form);
  }
  public async catalogInfo() : Promise<string> {
    const url = `${this.catalogBaseURL}/info`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listCatalog(params? : ListCatalogQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.catalogBaseURL}/list${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async upsertCatalogObject(body : UpsertCatalogObjectBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/object`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteCatalogObject(objectID : string) : Promise<string> {
    const url = `${this.catalogBaseURL}/object/${objectID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getCatalogObject(objectID : string, params? : GetCatalogObjectQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.catalogBaseURL}/object/${objectID}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async searchCatalogObjects(body : SearchCatalogObjectsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchCatalogItems(body : SearchCatalogItemsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/search-catalog-items`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async updateItemModifierLists(body : UpdateItemModifierListsBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/update-item-modifier-lists`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async updateItemTaxes(body : UpdateItemTaxesBody) : Promise<string> {
    const url = `${this.catalogBaseURL}/update-item-taxes`;
    return await this.makeRequest(HTTP.POST, url, body);
  };
  // Inventory Methods
  public async getInventoryAdjustment(adjustmentID : string) : Promise<string> {
    const url = `${this.inventoryBaseURL}/adjustment/${adjustmentID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async batchChangeInventory(body : BatchChangeInventoryBody) : Promise<string> {
    const url = `${this.inventoryBaseURL}/changes/batch-create`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async batchGetInventoryChanges(body : BatchGetInventoryChangesBody) : Promise<string> {
    const url = `${this.inventoryBaseURL}/changes/batch-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async batchGetInventoryCounts(body : BatchGetInventoryCountsBody) : Promise<string> {
    const url = `${this.inventoryBaseURL}/counts/batch-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getPhysicalInventoryCount(physicalCountID : string) : Promise<string> {
    const url = `${this.inventoryBaseURL}/physical-counts/${physicalCountID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getInventoryTransfer(transferID : string) : Promise<string> {
    const url = `${this.inventoryBaseURL}/transfers/${transferID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getInventoryCount(catalogObjectID : string, params? : GetInventoryCountQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.inventoryBaseURL}/catalog-object/${catalogObjectID}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Bookings Methods
  public async listBookings(params? : ListBookingsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createBooking(body : CreateBookingBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.bookingsBaseURL, body);
  }
  public async searchAvailability(body : SearchAvailabilityBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/availability/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkGetBookings(body : BulkGetBookingsBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/bulk-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getBusinessBookingProfile() : Promise<string> {
    const url = `${this.bookingsBaseURL}/business-booking-profile`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listLocationBookingProfiles(params? : ListLocationBookingProfilesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/location-booking-profiles${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getLocationBookingProfile(locationID : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/location-booking-profiles/${locationID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listTeamMemberBookingProfiles(params? : ListTeamMemberBookingProfilesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/team-member-booking-profiles${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async bulkGetTeamMemberBookingProfiles(body : BulkGetTeamMemberBookingProfilesBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/team-member-booking-profiles/bulk-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getTeamMemberBookingProfile(teamMemberID : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/team-member-booking-profiles/${teamMemberID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getBooking(bookingID : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateBooking(bookingID : string, body : UpdateBookingBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async cancelBooking(bookingID : string, body : CancelBookingBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}/cancel`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Booking Custom Attributes Methods
  public async listBookingCustomAttributeDefinitions(params? : ListBookingCustomAttributeDefinitionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createBookingCustomAttributeDefinition(body : CreateBookingCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteBookingCustomAttributeDefinition(key : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getBookingCustomAttributeDefinition(key : string, params? : GetBookingCustomAttributeDefinitionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateBookingCustomAttributeDefinition(key : string, body : UpdateBookingCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async bulkDeleteBookingCustomAttributes(body : BulkDeleteBookingCustomAttributesBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attributes/bulk-delete`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkUpsertBookingCustomAttributes(body : BulkUpsertBookingCustomAttributesBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/custom-attributes/bulk-upsert`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async listBookingCustomAttributes(bookingID : string, params? : ListBookingCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async deleteBookingCustomAttribute(bookingID : string, key : string) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getBookingCustomAttribute(bookingID : string, key : string, params? : GetBookingCustomAttributeQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async upsertBookingCustomAttribute(bookingID : string, key : string, body : UpsertBookingCustomAttributeBody) : Promise<string> {
    const url = `${this.bookingsBaseURL}/${bookingID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  // Vendors Methods
  public async bulkCreateVendors(body : BulkCreateVendorsBody) : Promise<string> {
    const url = `${this.vendorsBaseURL}/bulk-create`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkGetVendors(body : BulkGetVendorsBody) : Promise<string> {
    const url = `${this.vendorsBaseURL}/bulk-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkUpdateVendors(body : BulkUpdateVendorsBody) : Promise<string> {
    const url = `${this.vendorsBaseURL}/bulk-update`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async createVendor(body : CreateVendorBody) : Promise<string> {
    const url = `${this.vendorsBaseURL}/create`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchVendors(body : SearchVendorsBody) : Promise<string> {
    const url = `${this.vendorsBaseURL}/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getVendor(vendorID : string) : Promise<string> {
    const url = `${this.vendorsBaseURL}/${vendorID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateVendor(vendorID : string, body : UpdateVendorBody) : Promise<string> {
    const url = `${this.vendorsBaseURL}/${vendorID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  // Sites Methods
  public async listSites() : Promise<string> {
    return await this.makeRequest(HTTP.GET, this.sitesBaseURL);
  }
  // Snippets Methods
  public async deleteSnippet(siteID : string) : Promise<string> {
    const url = `${this.sitesBaseURL}/${siteID}/snippet`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getSnippet(siteID : string) : Promise<string> {
    const url = `${this.sitesBaseURL}/${siteID}/snippet`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async upsertSnippet(siteID : string, body: UpsertSnippetBody) : Promise<string> {
    const url = `${this.sitesBaseURL}/${siteID}/snippet`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  //Cash Drawers Methods
  public async listCashDrawerShifts(params : ListCashDrawerShiftsQueryParams) : Promise<string> {
    const paramsString = this.makeParamsString(params);
    const url = `${this.cashDrawersBaseURL}/shifts/${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getCashDrawerShifts(shiftID : string, params : GetCashDrawerShiftsQueryParams) : Promise<string> {
    const paramsString = this.makeParamsString(params);
    const url = `${this.cashDrawersBaseURL}/shifts/${shiftID}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listCashDrawerShiftEvents(shiftID : string, params : ListCashDrawerShiftEventsQueryParams) : Promise<string> {
    const paramsString = this.makeParamsString(params);
    const url = `${this.cashDrawersBaseURL}/shifts/${shiftID}/events${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Customers Methods
  public async listCustomers(params? : ListCustomersQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createCustomer(body : CreateCustomerBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.customersBaseURL, body);
  }
  public async bulkCreateCustomers(body : BulkCreateCustomersBody) : Promise<string> {
    const url = `${this.customersBaseURL}/bulk-create`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkDeleteCustomers(body : BulkDeleteCustomersBody) : Promise<string> {
    const url = `${this.customersBaseURL}/bulk-delete`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkGetCustomers(body : BulkGetCustomersBody) : Promise<string> {
    const url = `${this.customersBaseURL}/bulk-retrieve`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkUpdateCustomers(body : BulkUpdateCustomersBody) : Promise<string> {
    const url = `${this.customersBaseURL}/bulk-update`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchCustomers(body : SearchCustomersBody) : Promise<string> {
    const url = `${this.customersBaseURL}/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteCustomer(customerID : string, params? : DeleteCustomerQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}/${customerID}${paramsString}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getCustomer(customerID : string) : Promise<string> {
    const url = `${this.customersBaseURL}/${customerID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateCustomer(customerID : string, body : UpdateCustomerBody) : Promise<string> {
    const url = `${this.customersBaseURL}/${customerID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async removeGroupFromCustomer(customerID : string, groupID : string) : Promise<string> {
    const url = `${this.customersBaseURL}/${customerID}/groups/${groupID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async addGroupToCustomer(customerID : string, groupID : string) : Promise<string> {
    const url = `${this.customersBaseURL}/${customerID}/groups/${groupID}`;
    return await this.makeRequest(HTTP.PUT, url);
  }
  // Customer Custom Attributes Methods
  public async listCustomerCustomAttributeDefinitions(params? : ListCustomerCustomAttributeDefinitionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}/custom-attribute-definitions${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  };
  public async createCustomerCustomAttributeDefinition(body : CreateCustomerCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.customersBaseURL}/custom-attribute-definitions`;
    return await this.makeRequest(HTTP.POST, url, body);
  };
  public async deleteCustomerCustomAttributeDefinition(key : string) : Promise<string> {
    const url = `${this.customersBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  };
  public async getCustomerCustomAttributeDefinition(key : string, params? : GetCustomerCustomAttributeDefinitionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}/custom-attribute-definitions/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  };
  public async updateCustomerCustomAttributeDefinition(key : string, body : UpdateCustomerCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.customersBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  };
  public async bulkUpsertCustomerCustomAttributes(body : BulkUpsertCustomerCustomAttributesBody) : Promise<string> {
    const url = `${this.customersBaseURL}/custom-attributes/bulk-upsert`
    return await this.makeRequest(HTTP.POST, url, body);
  };
  public async listCustomerCustomAttributes(customerID : string, params? : ListCustomerCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}/${customerID}/custom-attributes${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  };
  public async deleteCustomerCustomAttribute(customerID : string, key : string) : Promise<string> {
    const url = `${this.customersBaseURL}/${customerID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  };
  public async getCustomerCustomAttribute(customerID : string, key : string, params? : GetCustomerCustomAttributeQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}/${customerID}/custom-attributes/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  };
  public async upsertCustomerCustomAttribute(customerID : string, key : string, body : UpsertCustomerCustomAttributeBody) : Promise<string> {
    const url = `${this.customersBaseURL}/${customerID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.POST, url, body);
  };
  // Customer Groups Methods
  public async listCustomerGroups(params? : ListCustomerGroupsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}/groups${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createCustomerGroup(body : CreateCustomerGroupBody) : Promise<string> {
    const url = `${this.customersBaseURL}/groups`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteCustomerGroup(groupID : string) : Promise<string> {
    const url = `${this.customersBaseURL}/groups/${groupID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getCustomerGroup(groupID : string) : Promise<string> {
    const url = `${this.customersBaseURL}/groups/${groupID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateCustomerGroup(groupID : string, body: UpdateCustomerGroupBody) : Promise<string> {
    const url = `${this.customersBaseURL}/groups/${groupID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  // Customer Segments Methods
  public async listCustomerSegments(params? : ListCustomerSegmentsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.customersBaseURL}/segments${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getCustomerSegment(segmentID : string) : Promise<string> {
    const url = `${this.customersBaseURL}/segments/${segmentID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Loyalty Methods
  public async createLoyaltyAccount(body : CreateLoyaltyAccountBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/accounts`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchLoyaltyAccounts(body : SearchLoyaltyAccountsBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/accounts/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getLoyaltyAccount(accoundID : string) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/accounts/${accoundID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async accumulateLoyaltyPoints(accountID : string, body : AccumulateLoyaltyPointsBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/accounts/${accountID}/accumulate`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async adjustLoyaltyPoints(accountID : string, body : AdjustLoyaltyPointsBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/accounts/${accountID}/adjust`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchLoyaltyEvents(body : SearchLoyaltyEventsBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/events/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getLoyaltyProgram(programID : string) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/programs/${programID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async calculateLoyaltyPoints(programID : string, body : CalculateLoyaltyPointsBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/programs/${programID}/calculate`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async listLoyaltyPromotions(programID : string, params? : ListLoyaltyPromotionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.loyaltyBaseURL}/programs/${programID}/promotions${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createLoyaltyPromotion(programID : string, body : CreateLoyaltyPromotionBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/programs/${programID}/promotions`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getLoyaltyPromotion(promotionID : string, programID : string) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/programs/${programID}/promotions/${promotionID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async cancelLoyaltyPromotion(promotionID : string, programID : string) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/programs/${programID}/promotions/${promotionID}/cancel`;
    return await this.makeRequest(HTTP.POST, url);
  }
  public async createLoyaltyReward(body : CreateLoyaltyRewardBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/rewards`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchLoyaltyRewards(body : SearchLoyaltyRewardsBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/rewards/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteLoyaltyReward(rewardID : string) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/rewards/${rewardID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getLoyaltyReward(rewardID : string) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/rewards/${rewardID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async redeemLoyaltyReward(rewardID : string, body : RedeemLoyaltyRewardBody) : Promise<string> {
    const url = `${this.loyaltyBaseURL}/rewards/${rewardID}/redeem`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Gift Cards Methods
  public async listGiftCards(params? : ListGiftCardsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.giftCardsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  };
  public async createGiftCard(body : CreateGiftCardBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.giftCardsBaseURL, body);
  };
  public async getGiftCardFromGAN(body : GetGiftCardFromGANBody) : Promise<string> {
    const url = `${this.giftCardsBaseURL}/from-gan`;
    return await this.makeRequest(HTTP.POST, url, body);
  };
  public async getGiftCardFromNonce(body : GetGiftCardFromNonceBody) : Promise<string> {
    const url = `${this.giftCardsBaseURL}/from-nonce`;
    return await this.makeRequest(HTTP.POST, url, body);
  };
  public async linkCustomerToGiftCard(giftCardID : string, body : LinkCustomerToGiftCardBody) : Promise<string> {
    const url = `${this.giftCardsBaseURL}/${giftCardID}/link-customer`;
    return await this.makeRequest(HTTP.POST, url, body);
  };
  public async unlinkCustomerFromGiftCard(giftCardID : string, body : UnlinkCustomerFromGiftCardBody) : Promise<string> {
    const url = `${this.giftCardsBaseURL}/${giftCardID}/unlink-customer`;
    return await this.makeRequest(HTTP.POST, url, body);
  };
  public async getGiftCard(giftCardID : string) : Promise<string> {
    const url = `${this.giftCardsBaseURL}/${giftCardID}`;
    return await this.makeRequest(HTTP.GET, url);
  };
  // Gift Card Activities Methods
  public async listGiftCardActivities(params? : ListGiftCardActivitiesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.giftCardsBaseURL}/activities${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createGiftCardActivity(body : CreateGiftCardActivityBody) : Promise<string> {
    const url = `${this.giftCardsBaseURL}/activities`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Labor Methods
  public async listBreakTypes(params? : ListBreakTypesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.laborBaseURL}/break-types${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createBreakType(body : CreateBreakTypeBody) : Promise<string> {
    const url = `${this.laborBaseURL}/break-types`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteBreakType(breakTypeID : string) : Promise<string> {
    const url = `${this.laborBaseURL}/break-types/${breakTypeID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getBreakType(breakTypeID : string) : Promise<string> {
    const url = `${this.laborBaseURL}/break-types/${breakTypeID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateBreakType(breakTypeID : string, body : UpdateBreakTypeBody) : Promise<string> {
    const url = `${this.laborBaseURL}/break-types/${breakTypeID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async createShift(body : CreateShiftBody) : Promise<string> {
    const url = `${this.laborBaseURL}/shifts`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchShifts(body : SearchShiftsBody) : Promise<string> {
    const url = `${this.laborBaseURL}/shifts/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteShift(shiftID : string) : Promise<string> {
    const url = `${this.laborBaseURL}/shifts/${shiftID}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getShift(shiftID : string) : Promise<string> {
    const url = `${this.laborBaseURL}/shifts/${shiftID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateShift(shiftID : string, body : UpdateShiftBody) : Promise<string> {
    const url = `${this.laborBaseURL}/shifts/${shiftID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async listTeamMemberWages(params? : ListTeamMemberWagesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.laborBaseURL}/team-member-wages${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getTeamMemberWage(teamMemberWageID : string) : Promise<string> {
    const url = `${this.laborBaseURL}/team-member-wages/${teamMemberWageID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async listWorkweekConfigs(params? : ListWorkweekConfigsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.laborBaseURL}/workweek-configs${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateWorkweekConfig(workweekConfigID : string, body : UpdateWorkweekConfigBody) : Promise<string> {
    const url = `${this.laborBaseURL}/workweek-configs/${workweekConfigID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  // Team Methods
  public async createTeamMember(body : CreateTeamMemberBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.teamMembersBaseURL, body);
  }
  public async bulkCreateTeamMembers(body : BulkCreateTeamMembersBody) : Promise<string> {
    const url = `${this.teamMembersBaseURL}/bulk-create`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkUpdateTeamMembers(body : BulkUpdateTeamMembersBody) : Promise<string> {
    const url = `${this.teamMembersBaseURL}/bulk-update`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async searchTeamMembers(body : SearchTeamMembersBody) : Promise<string> {
    const url = `${this.teamMembersBaseURL}/search`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async getTeamMember(teamMemberID : string) : Promise<string> {
    const url = `${this.teamMembersBaseURL}/${teamMemberID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateTeamMember(teamMemberID : string, body : UpdateTeamMemberBody) : Promise<string> {
    const url = `${this.teamMembersBaseURL}/${teamMemberID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async getWageSetting(teamMemberID : string) : Promise<string> {
    const url = `${this.teamMembersBaseURL}/${teamMemberID}/wage-setting`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateWageSetting(teamMemberID : string, body : UpdateWageSettingBody) : Promise<string> {
    const url = `${this.teamMembersBaseURL}/${teamMemberID}/wage-setting`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  // Merchant Methods
  public async listMerchants(params? : ListMerchantsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.merchantsBaseURL}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async getMerchant(merchantID : string) : Promise<string> {
    const url = `${this.merchantsBaseURL}/${merchantID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  // Merchant Custom Attributes Methods
  public async listMerchantCustomAttributeDefinitions(params? : ListMerchantCustomAttributeDefinitionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.merchantsBaseURL}/custom-attribute-definitions${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createMerchantCustomAttributeDefinition(body : CreateMerchantCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.merchantsBaseURL}/custom-attribute-definitions`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteMerchantCustomAttributeDefinition(key : string) : Promise<string> {
    const url = `${this.merchantsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getMerchantCustomAttributeDefinition(key : string, params? : GetMerchantCustomAttributeDefinitionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.merchantsBaseURL}/custom-attribute-definitions/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateMerchantCustomAttributeDefinition(key : string, body : UpdateMerchantCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.merchantsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async bulkDeleteMerchantCustomAttributes(body : BulkDeleteMerchantCustomAttributesBody) : Promise<string> {
    const url = `${this.merchantsBaseURL}/custom-attributes/bulk-delete`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkUpsertMerchantCustomAttributes(body : BulkUpsertMerchantCustomAttributesBody) : Promise<string> {
    const url = `${this.merchantsBaseURL}/custom-attributes/bulk-upsert`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async listMerchantCustomAttributes(merchantID : string, params? : ListMerchantCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.merchantsBaseURL}/${merchantID}/custom-attributes${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async deleteMerchantCustomAttribute(merchantID : string, key : string) : Promise<string> {
    const url = `${this.merchantsBaseURL}/${merchantID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getMerchantCustomAttribute(merchantID : string, key : string) : Promise<string> {
    const url = `${this.merchantsBaseURL}/${merchantID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async upsertMerchantCustomAttribute(merchantID : string, key : string, body : UpsertMerchantCustomAttributeBody) : Promise<string> {
    const url = `${this.merchantsBaseURL}/${merchantID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  // Locations Methods
  public async listLocations() : Promise<string> {
    return await this.makeRequest(HTTP.GET, this.locationsBaseURL);
  }
  public async createLocation(body : CreateLocationBody) : Promise<string> {
    return await this.makeRequest(HTTP.POST, this.locationsBaseURL, body);
  }
  public async getLocation(locationID : string) : Promise<string> {
    const url = `${this.locationsBaseURL}/${locationID}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateLocation(locationID : string, body : UpdateLocationBody) : Promise<string> {
    const url = `${this.locationsBaseURL}/${locationID}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  // Locations Custom Attributes Methods
  public async listLocationCustomAttributeDefinitions(params? : ListLocationCustomAttributeDefinitionsQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.locationsBaseURL}/custom-attribute-definitions${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async createLocationCustomAttributeDefinition(body : CreateLocationCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.locationsBaseURL}/custom-attribute-definitions`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async deleteLocationCustomAttributeDefinition(key : string) : Promise<string> {
    const url = `${this.locationsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getLocationCustomAttributeDefinition(key : string, params? : GetLocationCustomAttributeDefinitionQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.locationsBaseURL}/custom-attribute-definitions/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async updateLocationCustomAttributeDefinition(key : string, body : UpdateLocationCustomAttributeDefinitionBody) : Promise<string> {
    const url = `${this.locationsBaseURL}/custom-attribute-definitions/${key}`;
    return await this.makeRequest(HTTP.PUT, url, body);
  }
  public async bulkDeleteLocationCustomAttributes(body : BulkDeleteLocationCustomAttributesBody) : Promise<string> {
    const url = `${this.locationsBaseURL}/custom-attributes/bulk-delete`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async bulkUpsertLocationCustomAttributes(body : BulkUpsertLocationCustomAttributesBody) : Promise<string> {
    const url = `${this.locationsBaseURL}/custom-attributes/bulk-upsert`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
  public async listLocationCustomAttributes(locationID : string, params? : ListLocationCustomAttributesQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.locationsBaseURL}/${locationID}/custom-attributes${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async deleteLocationCustomAttribute(locationID : string, key : string) : Promise<string> {
    const url = `${this.locationsBaseURL}/${locationID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.DELETE, url);
  }
  public async getLocationCustomAttribute(locationID : string, key : string, params? : GetLocationCustomAttributeQueryParams) : Promise<string> {
    const paramsString = params ? this.makeParamsString(params) : '';
    const url = `${this.locationsBaseURL}/${locationID}/custom-attributes/${key}${paramsString}`;
    return await this.makeRequest(HTTP.GET, url);
  }
  public async upsertLocationCustomAttribute(locationID : string, key : string, body : UpsertLocationCustomAttributeBody) : Promise<string> {
    const url = `${this.locationsBaseURL}/${locationID}/custom-attributes/${key}`;
    return await this.makeRequest(HTTP.POST, url, body);
  }
}