interface Money {
  amount : number;
  currency : string;
}

interface Address {
  address_line_1 : string;
  address_line_2? : string;
  address_line_3? : string;
  locality : string;
  sublocality? : string;
  sublocality_2? : string;
  sublocality_3? : string;
  administrative_district_level_1 : string;
  administrative_district_level_2? : string;
  administrative_district_level_3? : string;
  postal_code : string;
  country : string;
  first_name? : string;
  last_name? : string;
};

interface CashPaymentDetails {
  buyer_supplied_money : Money;
  change_back_money? : Money;
};

interface ExternalPaymentDetails {
  type : string;
  source : string;
  source_id? : string;
  source_fee_money? : Money;
};

interface CustomerDetails {
  customer_initiated : boolean;
  seller_keyed_in : boolean;
};

interface OfflinePaymentDetails {
  client_created_at : string;
};

interface Card {
  id? : string;
  card_brand? : string;
  last_4? : string;
  exp_month : number;
  exp_year : number;
  cardholder_name : string;
  billing_address : Address;
  fingerprint? : string;
  customer_id : string;
  merchant_id? : string;
  reference_id? : string;
  enabled? : boolean;
  card_type? : string;
  prepaid_type? : string;
  bin? : string;
  version : number;
  card_co_brand? : string;
}

interface CardPaymentTimeline {
  authorized_at : string;
  captured_at? : string;
  voided_at? : string;
}

interface Error {
  categorty : string;
  code : string;
  detail? : string;
  field? : string;
}

interface CardPaymentDetails {
  status : string;
  card : Card;
  entry_method : string;
  cvv_status : string;
  avs_status : string;
  auth_result_code : string;
  application_identifier : string;
  application_name : string;
  application_cryptogram : string;
  verification_method : string;
  verification_results : string;
  statement_description : string;
  card_payment_timeline : CardPaymentTimeline;
  refund_requires_card_presence : boolean;
  errors : Error[];
}

interface Payment {
  id? : string;
  created_at? : string;
  updated_at? : string;
  amount_money? : Money;
  tip_money? : Money;
  total_money? : Money;
  app_fee_money? : Money;
  approved_money? : Money;
  processing_fee? : ProcessingFee[];
  refunded_money? : Money;
  status? : string;
  delay_duration? : string;
  delay_action? : string;
  delayed_until? : string;
  source_type? : string;
  card_details? : CardPaymentDetails;
}

interface ProcessingFee {
  effective_at? : string;
  type? : string;
  amount_money? : Money;
}

interface DestinationDetailsCashRefundDetails {
  seller_supplied_money : Money;
  change_back_money? : Money;
}

interface DestinationDetailsExternalRefundDetails {
  type : string;
  source : string;
  source_id? : string;
}

export interface ListPaymentsQueryParams {
  begin_time? : string;
  end_time? : string;
  sort_order? : string;
  cursor? : string;
  location_id? : string;
  total? : number;
  last_4? : string;
  card_brand? : string;
  limit? : number;
  is_offline_payment? : boolean;
  offline_begin_time? : string;
  offline_end_time? : string;
};

export interface CreatePaymentBody {
  source_id : string
  idempotency_key : string;
  amount_money? : Money;
  tip_money? : Money;
  app_fee_money? : Money;
  delay_duration? : string;
  delay_action? : string;
  autocomplete? : boolean;
  order_id? : string;
  customer_id? : string;
  location_id? : string;
  team_member_id? : string;
  reference_id? : string;
  verification_token? : string;
  accept_partial_authorization? : boolean;
  buyer_email_address? : string;
  billing_address? : Address;
  shipping_address? : Address;
  note? : string;
  statement_description_identifier? : string;
  cash_details? : CashPaymentDetails;
  external_details? : ExternalPaymentDetails;
  customer_details? : CustomerDetails;
  offline_payment_details? : OfflinePaymentDetails;
};

export interface CancelPaymentBody {
  idempotency_key : string;
};

export interface UpdatePaymentBody {
  payment : Payment,
  idempotency_key : string;
};

export interface ListPaymentRefundsQueryParams {
  begin_time? : string;
  end_time? : string;
  sort_order? : string;
  cursor? : string;
  location_id? : string;
  status? : string;
  source_type? : string;
  limit? : number;
};

export interface RefundPaymentBody {
  idempotency_key : string;
  amount_money : Money;
  app_fee_money? : Money;
  payment_id : string;
  destination_id : string;
  unlinked : boolean;
  location_id? : boolean;
  customer_id? : string;
  reason? : string;
  team_member_id? : string;
  cash_details? : DestinationDetailsCashRefundDetails;
  external_details? : DestinationDetailsExternalRefundDetails;
}