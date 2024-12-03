export enum HTTP {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
};

/**
 * @interface ACHDetails
 * @member {string} [routing_number]
 * @member {string} [account_number_suffix]
 * @member {string} [account_type]
 */
interface ACHDetails {
  routing_number? : string;
  account_number_suffix? : string;
  account_type? : string;
};
/**
 * @interface AcceptedPaymentMethods
 * @member {boolean} [apple_pay]
 * @member {boolean} [google_pay]
 * @member {boolean} [cash_app_pay]
 * @member {boolean} [afterpay_clearpay]
 */
interface AcceptedPaymentMethods{
  apple_pay? : boolean;
  google_pay? : boolean;
  cash_app_pay? : boolean;
  afterpay_clearpay? : boolean;
};
/**
 * @interface Address
 * @member {string} address_line_1
 * @member {string} [address_line_2]
 * @member {string} [address_line_3]
 * @member {string} locality
 * @member {string} [sublocality]
 * @member {string} [sublocality_2]
 * @member {string} [sublocality_3]
 * @member {string} administrative_district_level_1
 * @member {string} [administrative_district_level_2]
 * @member {string} [administrative_district_level_3]
 * @member {string} postal_code
 * @member {string} country
 * @member {string} [first_name]
 * @member {string} [last_name]
 */
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
/**
 * @interface AfterpayDetails
 * @member {string} [email_address]
 */
interface AfterpayDetails {
  email_address? : string;
};
/**
 * @interface ApplicationDetails
 * @member {string} [square_product]
 * @member {string} [application_id]
 */
interface ApplicationDetails {
  square_product? : string;
  application_id? : string;
};
/**
 * @interface AppointmentSegment
 * @member {number} [duration_minutes]
 * @member {string} [service_variation_id]
 * @member {string} team_member_id
 * @member {number} [service_variation_version]
 * @member {number} [intermission_minutes]
 * @member {boolean} [any_team_member]
 * @member {string[]} [resource_ids]
 */
interface AppointmentSegment {
  duration_minutes? : number;
  service_variation_id? : string;
  team_member_id : string
  service_variation_version? : number;
  intermission_minutes? : number;
  any_team_member? : boolean;
  resource_ids? : string[];
};
/**
 * @interface Availability
 * @member {string} [start_at]
 * @member {string} [location_id]
 * @member {AppointmentSegment[]} [appointment_segments]
 */
interface Availability {
  start_at? : string;
  location_id? : string;
  appointment_segments? : AppointmentSegment[];
};
/**
 * @interface BankAccount
 * @member {string} id
 * @member {string} account_number_suffix
 * @member {string} country
 * @member {string} currency
 * @member {string} account_type
 * @member {string} holder_name
 * @member {string} primary_bank_identification_number
 * @member {string} [secondary_bank_identification_number]
 * @member {string} [debit_mandate_reference_id]
 * @member {string} [reference_id]
 * @member {string} [location_id]
 * @member {string} [status]
 * @member {boolean} creditable
 * @member {boolean} debitable
 * @member {string} [fingerprint]
 * @member {number} [version]
 * @member {string} [bank_name]
 */
interface BankAccount {
  id : string;
  account_number_suffix : string;
  country : string;
  currency : string;
  account_type : string;
  holder_name : string;
  primary_bank_identification_number : string;
  secondary_bank_identification_number? : string;
  debit_mandate_reference_id? : string;
  reference_id? : string;
  location_id? : string;
  status? : string;
  creditable : boolean;
  debitable : boolean;
  fingerprint? : string;
  version? : number;
  bank_name? : string;
};
/**
 * @interface BankAccountPaymentDetails
 * @member {string} [bank_name]
 * @member {string} [transfer_type]
 * @member {string} [account_ownership_type]
 * @member {string} [fingerprint]
 * @member {string} [country]
 * @member {string} statement_description
 * @member {ACHDetails} ach_details
 * @member {Error[]} errors
 */
interface BankAccountPaymentDetails {
  bank_name? : string;
  transfer_type? : string;
  account_ownership_type? : string;
  fingerprint? : string;
  country? : string;
  statement_description : string;
  ach_details : ACHDetails;
  errors : Error[];
};
/**
 * @interface Booking
 * @member {string} [id]
 * @member {number} [version]
 * @member {string} [status]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [start_at]
 * @member {string} [location_id]
 * @member {string} [customer_id]
 * @member {string} [customer_note]
 * @member {string} [seller_note]
 * @member {AppointmentSegment[]} [appointment_segments]
 * @member {number} [transition_time_minutes]
 * @member {boolean} [all_day]
 * @member {string} [location_type]
 * @member {BookingCreatorDetails} [creator_details]
 * @member {string} [source]
 * @member {Address} [address]
 */
interface Booking {
  id? : string;
  version? : number;
  status? : string;
  created_at? : string;
  updated_at? : string;
  start_at? : string;
  location_id? : string;
  customer_id? : string;
  customer_note? : string;
  seller_note? : string;
  appointment_segments? : AppointmentSegment[];
  transition_time_minutes? : number;
  all_day? : boolean;
  location_type? : string;
  creator_details? : BookingCreatorDetails;
  source? : string;
  address? : Address;
};
/**
 * @interface BookingCreatorDetails
 * @member {string} [creator_type]
 * @member {string} [team_member_id]
 * @member {string} [customer_id]
 */
interface BookingCreatorDetails {
  creator_type? : string;
  team_member_id? : string;
  customer_id? : string;
};
/**
 * @interface BookingCustomAttributeDeleteRequest
 * @member {string} booking_id
 * @member {string} key
 */
interface BookingCustomAttributeDeleteRequest {
  booking_id : string;
  key : string;
};
/**
 * @interface BookingCustomAttributeUpsertRequest
 * @member {string} booking_id
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
interface BookingCustomAttributeUpsertRequest {
  booking_id : string;
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface Break
 * @member {string} [id]
 * @member {string} start_at
 * @member {string} [end_at]
 * @member {string} break_type_id
 * @member {string} name
 * @member {string} expected_duration
 * @member {boolean} is_paid
 */
interface Break {
  id? : string;
  start_at : string;
  end_at? : string;
  break_type_id : string;
  name : string;
  expected_duration : string;
  is_paid : boolean;
};
/**
 * @interface BreakType
 * @member {string} [id]
 * @member {string} location_id
 * @member {string} break_name
 * @member {string} expected_duration
 * @member {boolean} is_paid
 * @member {number} [version]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface BreakType {
  id? : string;
  location_id : string;
  break_name : string;
  expected_duration : string;
  is_paid : boolean;
  version? : number;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface BulkCreateCustomerData
 * @member {string} [given_name]
 * @member {string} [family_name]
 * @member {string} [company_name]
 * @member {string} [nickname]
 * @member {string} [email_address]
 * @member {Address} [address]
 * @member {string} [phone_number]
 * @member {string} [reference_id]
 * @member {string} [note]
 * @member {string} [birthday]
 * @member {CustomerTaxIds} [tax_ids]
 */
interface BulkCreateCustomerData {
  given_name? : string;
  family_name? : string;
  company_name? : string;
  nickname? : string;
  email_address? : string;
  address? : Address;
  phone_number? : string;
  reference_id? : string;
  note? : string;
  birthday? : string;
  tax_ids? : CustomerTaxIds;
};
/**
 * @interface BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute
 * @member {string} [key]
 * @member {string} order_id
 */
interface BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute {
  key? : string;
  order_id : string;
};
/**
 * @interface BulkUpdateCustomerData
 * @member {string} [given_name]
 * @member {string} [family_name]
 * @member {string} [company_name]
 * @member {string} [nickname]
 * @member {string} [email_address]
 * @member {Address} [address]
 * @member {string} [phone_number]
 * @member {string} [reference_id]
 * @member {string} [note]
 * @member {string} [birthday]
 * @member {CustomerTaxIds} [tax_ids]
 * @member {number} [version]
 */
interface BulkUpdateCustomerData {
  given_name? : string;
  family_name? : string;
  company_name? : string;
  nickname? : string;
  email_address? : string;
  address? : Address;
  phone_number? : string;
  reference_id? : string;
  note? : string;
  birthday? : string;
  tax_ids? : CustomerTaxIds;
  version? : number;
};
/**
 * @interface BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest
 * @member {string} customer_id
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
interface BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest {
  customer_id : string;
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 * @member {string} order_id
 */
interface BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute {
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
  order_id : string;
};
/**
 * @interface BusinessAppointmentSettings
 * @member {string[]} [location_types]
 * @member {string} [alignment_time]
 * @member {number} [min_booking_lead_time_seconds]
 * @member {number} [max_booking_lead_time_seconds]
 * @member {boolean} [any_team_member_booking_enabled]
 * @member {boolean} [multiple_service_booking_enabled]
 * @member {string} [max_appointments_per_day_limit_type]
 * @member {number} [max_appointments_per_day_limit]
 * @member {number} [cancellation_window_seconds]
 * @member {Money} [cancellation_fee_money]
 * @member {string} [cancellation_policy]
 * @member {string} [cancellation_policy_text]
 * @member {boolean} [skip_booking_flow_staff_selection]
 */
interface BusinessAppointmentSettings {
  location_types? : string[];
  alignment_time? : string;
  min_booking_lead_time_seconds? : number;
  max_booking_lead_time_seconds? : number;
  any_team_member_booking_enabled? : boolean;
  multiple_service_booking_enabled? : boolean;
  max_appointments_per_day_limit_type? : string;
  max_appointments_per_day_limit? : number;
  cancellation_window_seconds? : number;
  cancellation_fee_money? : Money;
  cancellation_policy? : string;
  cancellation_policy_text? : string;
  skip_booking_flow_staff_selection? : boolean;
};
/**
 * @interface BusinessBookingProfile
 * @member {string} [seller_id]
 * @member {string} [created_at]
 * @member {boolean} [booking_enabled]
 * @member {string} [customer_timezone_choice]
 * @member {string} [booking_policy]
 * @member {boolean} [allow_user_cancel]
 * @member {BusinessAppointmentSettings} [business_appointment_settings]
 * @member {boolean} [support_seller_level_writes]
 */
interface BusinessBookingProfile {
  seller_id? : string;
  created_at? : string;
  booking_enabled? : boolean;
  customer_timezone_choice? : string;
  booking_policy? : string;
  allow_user_cancel? : boolean;
  business_appointment_settings? : BusinessAppointmentSettings;
  support_seller_level_writes? : boolean;
};
/**
 * @interface BusinessHours
 * @member {BusinessHoursPeriod[]} [periods]
 */
interface BusinessHours {
  periods? : BusinessHoursPeriod[];
};
/**
 * @interface BusinessHoursPeriod
 * @member {string} [day_of_week]
 * @member {string} [start_local_time]
 * @member {string} [end_local_time]
 */
interface BusinessHoursPeriod {
  day_of_week? : string;
  start_local_time? : string;
  end_local_time? : string;
};
/**
 * @interface BuyNowPayLaterDetails
 * @member {string} [brand]
 * @member {AfterpayDetails} [afterpay_details]
 * @member {ClearpayDetails} [clearpay_details]
 */
interface BuyNowPayLaterDetails {
  brand? : string;
  afterpay_details? : AfterpayDetails;
  clearpay_details? : ClearpayDetails;
};
/**
 * @interface Card
 * @member {string} [id]
 * @member {string} [card_brand]
 * @member {string} [last_4]
 * @member {number} [exp_month]
 * @member {number} [exp_year]
 * @member {string} [cardholder_name]
 * @member {Address} [billing_address]
 * @member {string} [fingerprint]
 * @member {string} [customer_id]
 * @member {string} [merchant_id]
 * @member {string} [reference_id]
 * @member {boolean} [enabled]
 * @member {string} [card_type]
 * @member {string} [prepaid_type]
 * @member {string} [bin]
 * @member {number} [version]
 * @member {string} [card_co_brand]
 */
interface Card {
  id? : string;
  card_brand? : string;
  last_4? : string;
  exp_month? : number;
  exp_year? : number;
  cardholder_name? : string;
  billing_address? : Address;
  fingerprint? : string;
  customer_id? : string;
  merchant_id? : string;
  reference_id? : string;
  enabled? : boolean;
  card_type? : string;
  prepaid_type? : string;
  bin? : string;
  version? : number;
  card_co_brand? : string;
};
/**
 * @interface CardForgottenEventCard
 * @member {string} [id]
 * @member {string} [customer_id]
 * @member {boolean} [enabled]
 * @member {string} [reference_id]
 * @member {number} [version]
 * @member {string} [merchant_id]
 */
interface CardForgottenEventCard {
  id? : string;
  customer_id? : string;
  enabled? : boolean;
  reference_id? : string;
  version? : number;
  merchant_id? : string;
};
/**
 * @interface CardPaymentDetails
 * @member {string} [status]
 * @member {Card} [card]
 * @member {string} [entry_method]
 * @member {string} [cvv_status]
 * @member {string} [avs_status]
 * @member {string} [auth_result_code]
 * @member {string} [application_identifier]
 * @member {string} [application_name]
 * @member {string} [application_cryptogram]
 * @member {string} [verification_method]
 * @member {string} [verification_results]
 * @member {string} [statement_description]
 * @member {CardPaymentTimeline} [card_payment_timeline]
 * @member {boolean} [refund_requires_card_presence]
 * @member {Error[]} [errors]
 */
interface CardPaymentDetails {
  status? : string;
  card? : Card;
  entry_method? : string;
  cvv_status? : string;
  avs_status? : string;
  auth_result_code? : string;
  application_identifier? : string;
  application_name? : string;
  application_cryptogram? : string;
  verification_method? : string;
  verification_results? : string;
  statement_description? : string;
  card_payment_timeline? : CardPaymentTimeline;
  refund_requires_card_presence? : boolean;
  errors? : Error[];
};
/**
 * @interface CardPaymentTimeline
 * @member {string} [authorized_at]
 * @member {string} [captured_at]
 * @member {string} [voided_at]
 */
interface CardPaymentTimeline {
  authorized_at? : string;
  captured_at? : string;
  voided_at? : string;
};
/**
 * @interface CashAppDetails
 * @member {string} [buyer_full_name]
 * @member {string} [buyer_country_code]
 * @member {string} [buyer_cashtag]
 */
interface CashAppDetails {
  buyer_full_name? : string;
  buyer_country_code? : string;
  buyer_cashtag? : string;
};
/**
 * @interface CashDrawerDevice
 * @member {string} [id]
 * @member {string} [name]
 */
interface CashDrawerDevice {
  id? : string;
  name? : string;
};
/**
 * @interface CashDrawerShift
 * @member {string} [id]
 * @member {string} [state]
 * @member {string} [opened_at]
 * @member {string} [ended_at]
 * @member {string} [closed_at]
 * @member {string} [description]
 * @member {Money} [opened_cash_money]
 * @member {Money} [cash_payment_money]
 * @member {Money} [cash_refunds_money]
 * @member {Money} [cash_paid_in_money]
 * @member {Money} [cash_paid_out_money]
 * @member {Money} [expected_cash_money]
 * @member {Money} [closed_cash_money]
 * @member {CashDrawerDevice} [device]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [location_id]
 * @member {string[]} [team_member_ids]
 * @member {string} [opening_team_member_id]
 * @member {string} [ending_team_member_id]
 * @member {string} [closing_team_member_id]
 */
interface CashDrawerShift {
  id? : string;
  state? : string;
  opened_at? : string;
  ended_at? : string;
  closed_at? : string;
  description? : string;
  opened_cash_money? : Money;
  cash_payment_money? : Money;
  cash_refunds_money? : Money;
  cash_paid_in_money? : Money;
  cash_paid_out_money? : Money;
  expected_cash_money? : Money;
  closed_cash_money? : Money;
  device? : CashDrawerDevice;
  created_at? : string;
  updated_at? : string;
  location_id? : string;
  team_member_ids? : string[];
  opening_team_member_id? : string;
  ending_team_member_id? : string;
  closing_team_member_id? : string;
};
/**
 * @interface CashDrawerShiftEvent
 * @member {string} [id]
 * @member {string} [event_type]
 * @member {Money} [event_money]
 * @member {string} [created_at]
 * @member {string} [description]
 * @member {string} [team_member_id]
 */
interface CashDrawerShiftEvent {
  id? : string;
  event_type? : string;
  event_money? : Money;
  created_at? : string;
  description? : string;
  team_member_id? : string;
};
/**
 * @interface CashDrawerShiftSummary
 * @member {string} [id]
 * @member {string} [state]
 * @member {string} [opened_at]
 * @member {string} [ended_at]
 * @member {string} [closed_at]
 * @member {string} [description]
 * @member {Money} [opened_cash_money]
 * @member {Money} [expected_cash_money]
 * @member {Money} [closed_cash_money]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [location_id]
 */
interface CashDrawerShiftSummary {
  id? : string;
  state? : string;
  opened_at? : string;
  ended_at? : string;
  closed_at? : string;
  description? : string;
  opened_cash_money? : Money;
  expected_cash_money? : Money;
  closed_cash_money? : Money;
  created_at? : string;
  updated_at? : string;
  location_id? : string;
};
/**
 * @interface CashPaymentDetails
 * @member {Money} buyer_supplied_money
 * @member {Money} [change_back_money]
 */
interface CashPaymentDetails {
  buyer_supplied_money : Money;
  change_back_money? : Money;
};
/**
 * @interface CatalogAvailabilityPeriod
 * @member {string} [start_local_time]
 * @member {string} [end_local_time]
 * @member {string} [day_of_week]
 */
interface CatalogAvailabilityPeriod {
  start_local_time? : string;
  end_local_time? : string;
  day_of_week? : string;
};
/**
 * @interface CatalogCategory
 * @member {string} [name]
 * @member {string[]} [image_ids]
 * @member {string} [category_type]
 * @member {CatalogObjectCategory} [parent_category]
 * @member {boolean} [is_top_level]
 * @member {string[]} [channels]
 * @member {string[]} [availability_period_ids]
 * @member {boolean} [online_visibility]
 * @member {string} [root_category]
 * @member {CatalogEcomSeoData} [ecom_seo_data]
 * @member {CategoryPathToRootNode[]} [path_to_root]
 */
interface CatalogCategory {
  name? : string;
  image_ids? : string[];
  category_type? : string;
  parent_category? : CatalogObjectCategory;
  is_top_level? : boolean;
  channels? : string[];
  availability_period_ids? : string[];
  online_visibility? : boolean;
  root_category? : string;
  ecom_seo_data? : CatalogEcomSeoData;
  path_to_root? : CategoryPathToRootNode[];
};
/**
 * @interface CatalogCustomAttributeDefinition
 * @member {string} type
 * @member {string} name
 * @member {string} [description]
 * @member {SourceApplication} [source_application]
 * @member {string[]} allowed_object_types
 * @member {string} [seller_visibility]
 * @member {string} [app_visibility]
 * @member {CatalogCustomAttributeDefinitionStringConfig} [string_config]
 * @member {CatalogCustomAttributeDefinitionNumberConfig} [number_config]
 * @member {CatalogCustomAttributeDefinitionSelectionConfig} [selection_config]
 * @member {number} [custom_attribute_usage_count]
 * @member {string} [key]
 */
interface CatalogCustomAttributeDefinition {
  type : string;
  name : string;
  description? : string;
  source_application? : SourceApplication;
  allowed_object_types : string[];
  seller_visibility? : string;
  app_visibility? : string;
  string_config? : CatalogCustomAttributeDefinitionStringConfig;
  number_config? : CatalogCustomAttributeDefinitionNumberConfig;
  selection_config? : CatalogCustomAttributeDefinitionSelectionConfig;
  custom_attribute_usage_count? : number;
  key? : string;
};
/**
 * @interface CatalogCustomAttributeDefinitionNumberConfig
 * @member {number} [precision]
 */
interface CatalogCustomAttributeDefinitionNumberConfig {
  precision? :number;
};
/**
 * @interface CatalogCustomAttributeDefinitionSelectionConfig
 * @member {number} [max_allowed_selections]
 * @member {CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]} [allowed_selections]
 */
interface CatalogCustomAttributeDefinitionSelectionConfig {
  max_allowed_selections? : number;
  allowed_selections? : CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]
};
/**
 * @interface CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection
 * @member {string} [uid]
 * @member {string} name
 */
interface CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection {
  uid? : string;
  name : string;
};
/**
 * @interface CatalogCustomAttributeDefinitionStringConfig
 * @member {boolean} [enforce_uniqueness]
 */
interface CatalogCustomAttributeDefinitionStringConfig {
  enforce_uniqueness? : boolean;
};
/**
 * @interface CatalogCustomAttributeValue
 * @member {string} [name]
 * @member {string} [string_value]
 * @member {string} [custom_attribute_definition_id]
 * @member {string} [type]
 * @member {string} [number_value]
 * @member {boolean} [boolean_value]
 * @member {string[]} [selection_uid_values]
 * @member {string} [key]
 */
interface CatalogCustomAttributeValue {
  name? : string;
  string_value? : string;
  custom_attribute_definition_id? : string;
  type? : string;
  number_value? : string;
  boolean_value? : boolean;
  selection_uid_values? : string[];
  key? : string;
};
/**
 * @interface CatalogDiscount
 * @member {string} [name]
 * @member {string} [discount_type]
 * @member {string} [percentage]
 * @member {Money} [amount_money]
 * @member {boolean} [pin_required]
 * @member {string} [label_color]
 * @member {string} [modify_tax_basis]
 * @member {Money} [maximum_amount_money]
 */
interface CatalogDiscount {
  name? : string;
  discount_type? : string;
  percentage? : string;
  amount_money? : Money;
  pin_required? : boolean;
  label_color? : string;
  modify_tax_basis? : string;
  maximum_amount_money? : Money;
};
/**
 * @interface CatalogEcomSeoData
 * @member {string} [page_title]
 * @member {string} [page_description]
 * @member {string} [permalink]
 */
interface CatalogEcomSeoData {
  page_title? : string;
  page_description? : string;
  permalink? : string;
};
/**
 * @interface CatalogIdMapping
 * @member {string} [client_object_id]
 * @member {string} [object_id]
 */
interface CatalogIdMapping {
  client_object_id? : string;
  object_id? : string;
}; 
/**
 * @interface CatalogImage
 * @member {string} [name]
 * @member {string} [url]
 * @member {string} [caption]
 * @member {string} [photo_studio_order_id]
 */
interface CatalogImage {
  name? : string;
  url? : string;
  caption? : string;
  photo_studio_order_id? : string;
};
/**
 * @interface CatalogInfoResponseLimits
 * @member {number} [batch_upsert_max_objects_per_batch]
 * @member {number} [batch_upsert_max_total_objects]
 * @member {number} [batch_retrieve_max_object_ids]
 * @member {number} [search_max_page_limit]
 * @member {number} [batch_delete_max_object_ids]
 * @member {number} [update_item_taxes_max_item_ids]
 * @member {number} [update_item_taxes_max_taxes_to_enable]
 * @member {number} [update_item_taxes_max_taxes_to_disable]
 * @member {number} [update_item_modifier_lists_max_item_ids]
 * @member {number} [update_item_modifier_lists_max_modifier_lists_to_enable]
 * @member {number} [update_item_modifier_lists_max_modifier_lists_to_disable]
 */
interface CatalogInfoResponseLimits {
  batch_upsert_max_objects_per_batch? : number;
  batch_upsert_max_total_objects? : number;
  batch_retrieve_max_object_ids? : number;
  search_max_page_limit? : number;
  batch_delete_max_object_ids? : number;
  update_item_taxes_max_item_ids? : number;
  update_item_taxes_max_taxes_to_enable? : number;
  update_item_taxes_max_taxes_to_disable? : number;
  update_item_modifier_lists_max_item_ids? : number;
  update_item_modifier_lists_max_modifier_lists_to_enable? : number;
  update_item_modifier_lists_max_modifier_lists_to_disable? : number;
};
/**
 * @interface CatalogItem
 * @member {string} [name]
 * @member {string} [abbreviation]
 * @member {string} [label_color]
 * @member {boolean} [is_taxable]
 * @member {boolean} [available_online]
 * @member {boolean} [available_for_pickup]
 * @member {boolean} [available_electronically]
 * @member {string[]} [tax_ids]
 * @member {CatalogItemModifierListInfo[]} [modifier_list_info]
 * @member {CatalogObject[]} [variations]
 * @member {string} [product_type]
 * @member {boolean} [skip_modifier_screen]
 * @member {CatalogItemOptionForItem[]} [item_options]
 * @member {string[]} [image_ids]
 * @member {string} [sort_name]
 * @member {CatalogObjectCategory[]} [categories]
 * @member {string} [description_html]
 * @member {string} [description_plaintext]
 * @member {string[]} [channels]
 * @member {boolean} [is_archived]
 * @member {CatalogEcomSeoData} [ecom_seo_data]
 * @member {CatalogItemFoodAndBeverageDetails} [food_and_beverage_details]
 * @member {CatalogObjectCategory} [reporting_category]
 */
interface CatalogItem {
  name? : string;
  abbreviation? : string;
  label_color? : string;
  is_taxable? : boolean;
  available_online? : boolean;
  available_for_pickup? : boolean;
  available_electronically? : boolean;
  tax_ids? : string[];
  modifier_list_info? : CatalogItemModifierListInfo[];
  variations? : CatalogObject[];
  product_type? : string;
  skip_modifier_screen? : boolean;
  item_options? : CatalogItemOptionForItem[];
  image_ids? : string[];
  sort_name? : string;
  categories? : CatalogObjectCategory[];
  description_html? : string;
  description_plaintext? : string;
  channels? : string[];
  is_archived? : boolean;
  ecom_seo_data? : CatalogEcomSeoData;
  food_and_beverage_details? : CatalogItemFoodAndBeverageDetails;
  reporting_category? : CatalogObjectCategory;
};
/**
 * @interface CatalogItemFoodAndBeverageDetails
 * @member {number} [calorie_count]
 * @member {CatalogItemFoodAndBeverageDetailsDietaryPreference[]} [dietary_preferences]
 * @member {CatalogItemFoodAndBeverageDetailsIngredient[]} [ingredients]
 */
interface CatalogItemFoodAndBeverageDetails {
  calorie_count? : number;
  dietary_preferences? : CatalogItemFoodAndBeverageDetailsDietaryPreference[];
  ingredients? : CatalogItemFoodAndBeverageDetailsIngredient[];
};
/**
 * @interface CatalogItemFoodAndBeverageDetailsDietaryPreference
 * @member {string} [type]
 * @member {string} [standard_name]
 * @member {string} [custom_name]
 */
interface CatalogItemFoodAndBeverageDetailsDietaryPreference {
  type? : string;
  standard_name? : string;
  custom_name? : string;
};
/**
 * @interface CatalogItemFoodAndBeverageDetailsIngredient
 * @member {string} [type]
 * @member {string} [standard_name]
 * @member {string} [custom_name]
 */
interface CatalogItemFoodAndBeverageDetailsIngredient {
  type? : string;
  standard_name? : string;
  custom_name? : string;
};
/**
 * @interface CatalogItemModifierListInfo
 * @member {string} modifier_list_id
 * @member {CatalogModifierOverride[]} [modifier_overrides]
 * @member {number} [min_selected_modifiers]
 * @member {number} [max_selected_modifiers]
 * @member {boolean} [enabled]
 * @member {number} [ordinal]
 */
interface CatalogItemModifierListInfo {
  modifier_list_id : string;
  modifier_overrides? : CatalogModifierOverride[];
  min_selected_modifiers? : number;
  max_selected_modifiers? : number;
  enabled? : boolean;
  ordinal? : number;
};
/**
 * @interface CatalogItemOption
 * @member {string} [name]
 * @member {string} [display_name]
 * @member {string} [description]
 * @member {boolean} [show_colors]
 * @member {CatalogObject[]} [values]
 */
interface CatalogItemOption {
  name? : string;
  display_name? : string;
  description? : string;
  show_colors? : boolean;
  values? : CatalogObject[];
};
/**
 * @interface CatalogItemOptionForItem
 * @member {string} [item_option_id]
 */
interface CatalogItemOptionForItem {
  item_option_id? : string;
};
/**
 * @interface CatalogItemOptionValue
 * @member {string} [item_option_id]
 * @member {string} [name]
 * @member {string} [description]
 * @member {string} [color]
 * @member {number} [ordinal]
 */
interface CatalogItemOptionValue {
  item_option_id? : string;
  name? : string;
  description? : string;
  color? : string;
  ordinal? : number;
};
/**
 * @interface CatalogItemOptionValueForItemVariation
 * @member {string} [item_option_id]
 * @member {string} [item_option_value_id]
 */
interface CatalogItemOptionValueForItemVariation {
  item_option_id? : string;
  item_option_value_id? : string;
};
/**
 * @interface CatalogItemVariation
 * @member {string} [item_id]
 * @member {string} [name]
 * @member {string} [sku]
 * @member {string} [upc]
 * @member {number} [ordinal]
 * @member {Money} [pricing_type]
 * @member {Money} [price_money]
 * @member {ItemVariationLocationOverrides[]} [location_overrides]
 * @member {boolean} [track_inventory]
 * @member {string} [inventory_alert_type]
 * @member {number} [inventory_alert_threshold]
 * @member {string} [user_data]
 * @member {number} [service_duration]
 * @member {boolean} [available_for_booking]
 * @member {CatalogItemOptionValueForItemVariation[]} [item_option_values]
 * @member {string} [measurement_unit_id]
 * @member {boolean} [sellable]
 * @member {boolean} [stockable]
 * @member {string[]} [image_ids]
 * @member {string[]} [team_member_ids]
 * @member {CatalogStockConversion} [stockable_conversion]
 */
interface CatalogItemVariation {
  item_id? : string;
  name? : string;
  sku? : string;
  upc? : string;
  ordinal? : number;
  pricing_type? : Money;
  price_money? : Money;
  location_overrides? : ItemVariationLocationOverrides[];
  track_inventory? : boolean;
  inventory_alert_type? : string;
  inventory_alert_threshold? : number;
  user_data? : string;
  service_duration? : number;
  available_for_booking? : boolean;
  item_option_values? : CatalogItemOptionValueForItemVariation[];
  measurement_unit_id? : string;
  sellable? : boolean;
  stockable? : boolean;
  image_ids? : string[];
  team_member_ids? : string[];
  stockable_conversion? : CatalogStockConversion;
};
/**
 * @interface CatalogMeasurementUnit
 * @member {MeasurementUnit} [measurement_unit]
 * @member {number} [precision]
 */
interface CatalogMeasurementUnit {
  measurement_unit? : MeasurementUnit;
  precision? : number;
};
/**
 * @interface CatalogModifier
 * @member {string} [name]
 * @member {Money} [price_money]
 * @member {number} [ordinal]
 * @member {string} [modifier_list_id]
 * @member {ModifierLocationOverrides[]} [location_overrides]
 * @member {string} [image_id]
 */
interface CatalogModifier {
  name? : string;
  price_money? : Money;
  ordinal? : number;
  modifier_list_id? : string;
  location_overrides? : ModifierLocationOverrides[]
  image_id? : string;
};
/**
 * @interface CatalogModifierList
 * @member {string} [name]
 * @member {number} [ordinal]
 * @member {string} [selection_type]
 * @member {CatalogObject[]} [modifiers]
 * @member {string[]} [image_ids]
 * @member {string} [modifier_type]
 * @member {number} [max_length]
 * @member {boolean} [text_required]
 * @member {string} [internal_name]
 */
interface CatalogModifierList {
  name? : string;
  ordinal? : number;
  selection_type? : string;
  modifiers? : CatalogObject[];
  image_ids? : string[];
  modifier_type? : string;
  max_length? : number;
  text_required? : boolean;
  internal_name? : string;
};
/**
 * @interface CatalogModifierOverride
 * @member {string} modifier_id
 * @member {boolean} [on_by_default]
 */
interface CatalogModifierOverride {
  modifier_id : string;
  on_by_default? : boolean;
};
/**
 * @interface CatalogObject
 * @member {string} type
 * @member {string} id
 * @member {string} [updated_at]
 * @member {number} [version]
 * @member {boolean} [is_deleted]
 * @member {Map<string, CatalogCustomAttributeValue>[]} [custom_attribute_values]
 * @member {CatalogV1Id[]} [catalog_v1_ids]
 * @member {boolean} [present_at_all_locations]
 * @member {string[]} [present_at_location_ids]
 * @member {string[]} [absent_at_location_ids]
 * @member {CatalogItem} [item_data]
 * @member {CatalogCategory} [category_data]
 * @member {CatalogItemVariation} [item_variation_data]
 * @member {CatalogTax} [tax_data]
 * @member {CatalogDiscount} [discount_data]
 * @member {CatalogModifierList} [modifier_list_data]
 * @member {CatalogModifier} [modifier_data]
 * @member {CatalogTimePeriod} [time_period_data]
 * @member {CatalogProductSet} [product_set_data]
 * @member {CatalogPricingRule} [pricing_rule_data]
 * @member {CatalogImage} [image_data]
 * @member {CatalogMeasurementUnit} [measurement_unit_data]
 * @member {CatalogSubscriptionPlan} [subscription_plan_data]
 * @member {CatalogItemOption} [item_option_data]
 * @member {CatalogItemOptionValue} [item_option_value_data]
 * @member {CatalogCustomAttributeDefinition} [custom_attribute_definition_data]
 * @member {CatalogQuickAmountsSettings} [quick_amounts_settings_data]
 * @member {CatalogSubscriptionPlanVariation} [subscription_plan_variation_data]
 * @member {CatalogAvailabilityPeriod} [availability_period_data]
 */
interface CatalogObject {
  type : string;
  id : string;
  updated_at? : string;
  version? : number;
  is_deleted? : boolean;
  custom_attribute_values? : Map<string, CatalogCustomAttributeValue>[];
  catalog_v1_ids? : CatalogV1Id[];
  present_at_all_locations? : boolean;
  present_at_location_ids? : string[];
  absent_at_location_ids? : string[];
  item_data? : CatalogItem;
  category_data? : CatalogCategory;
  item_variation_data? : CatalogItemVariation;
  tax_data? : CatalogTax;
  discount_data? : CatalogDiscount;
  modifier_list_data? : CatalogModifierList;
  modifier_data? : CatalogModifier;
  time_period_data? : CatalogTimePeriod;
  product_set_data? : CatalogProductSet;
  pricing_rule_data? : CatalogPricingRule;
  image_data? : CatalogImage;
  measurement_unit_data? : CatalogMeasurementUnit;
  subscription_plan_data? : CatalogSubscriptionPlan;
  item_option_data? : CatalogItemOption;
  item_option_value_data? : CatalogItemOptionValue;
  custom_attribute_definition_data? : CatalogCustomAttributeDefinition;
  quick_amounts_settings_data? : CatalogQuickAmountsSettings;
  subscription_plan_variation_data? : CatalogSubscriptionPlanVariation;
  availability_period_data? : CatalogAvailabilityPeriod;
};
/**
 * @interface CatalogObjectBatch
 * @member {CatalogObject[]} objects
 */
interface CatalogObjectBatch {
  objects : CatalogObject[];
};
/**
 * @interface CatalogObjectCategory
 * @member {string} [id]
 * @member {number} [ordinal]
 */
interface CatalogObjectCategory {
  id? : string;
  ordinal? : number;
};
/**
 * @interface CatalogObjectReference
 * @member {string} [object_id]
 * @member {number} [catalog_version]
 */
interface CatalogObjectReference {
  object_id? : string;
  catalog_version? : number;
};
/**
 * @interface CatalogPricingRule
 * @member {string} [name]
 * @member {string[]} [time_period_ids]
 * @member {string} [discount_id]
 * @member {string} [match_products_id]
 * @member {string} [exclude_products_id]
 * @member {string} [valid_from_date]
 * @member {string} [valid_from_local_time]
 * @member {string} [valid_until_date]
 * @member {string} [valid_until_local_time]
 * @member {string} [exclude_strategy]
 * @member {Money} [minimum_order_subtotal_money]
 * @member {string[]} [customer_group_ids_any]
 */
interface CatalogPricingRule {
  name? : string;
  time_period_ids? : string[];
  discount_id? : string;
  match_products_id? : string;
  exclude_products_id? : string;
  valid_from_date? : string;
  valid_from_local_time? : string;
  valid_until_date? : string;
  valid_until_local_time? : string;
  exclude_strategy? : string;
  minimum_order_subtotal_money? : Money;
  customer_group_ids_any? : string[];
};
/**
 * @interface CatalogProductSet
 * @member {string} [name]
 * @member {string[]} [product_ids_any]
 * @member {string[]} [product_ids_all]
 * @member {number} [quantity_exact]
 * @member {number} [quantity_min]
 * @member {number} [quantity_max]
 * @member {boolean} [all_products]
 */
interface CatalogProductSet {
  name? : string;
  product_ids_any? : string[];
  product_ids_all? : string[];
  quantity_exact? : number;
  quantity_min? : number;
  quantity_max? : number;
  all_products? : boolean;
};
/**
 * @interface CatalogQuery
 * @member {CatalogQuerySortedAttribute} [sorted_attribute_query]
 * @member {CatalogQueryExact} [exact_query]
 * @member {CatalogQuerySet} [set_query]
 * @member {CatalogQueryPrefix} [prefix_query]
 * @member {CatalogQueryRange} [range_query]
 * @member {CatalogQueryText} [text_query]
 * @member {CatalogQueryItemsForTax} [items_for_tax_query]
 * @member {CatalogQueryItemsForModifierList} [items_for_modifier_list_query]
 * @member {CatalogQueryItemsForItemOptions} [items_for_item_options_query]
 * @member {CatalogQueryItemVariationsForItemOptionValues} [item_variations_for_item_option_values_query]
 */
interface CatalogQuery {
  sorted_attribute_query? : CatalogQuerySortedAttribute;
  exact_query? : CatalogQueryExact;
  set_query? : CatalogQuerySet;
  prefix_query? : CatalogQueryPrefix;
  range_query? : CatalogQueryRange;
  text_query? : CatalogQueryText;
  items_for_tax_query? : CatalogQueryItemsForTax;
  items_for_modifier_list_query? : CatalogQueryItemsForModifierList;
  items_for_item_options_query? : CatalogQueryItemsForItemOptions;
  item_variations_for_item_option_values_query? : CatalogQueryItemVariationsForItemOptionValues;
};
/**
 * @interface CatalogQueryExact
 * @member {string} attribute_name
 * @member {string} attribute_value
 */
interface CatalogQueryExact {
  attribute_name : string;
  attribute_value : string;
};
/**
 * @interface CatalogQueryItemVariationsForItemOptionValues
 * @member {string[]} [item_option_value_ids]
 */
interface CatalogQueryItemVariationsForItemOptionValues {
  item_option_value_ids? : string[];
};
/**
 * @interface CatalogQueryItemsForItemOptions
 * @member {string[]} [item_option_ids]
 */
interface CatalogQueryItemsForItemOptions {
  item_option_ids? : string[];
};
/**
 * @interface CatalogQueryItemsForModifierList
 * @member {string[]} [modifier_list_ids]
 */
interface CatalogQueryItemsForModifierList {
  modifier_list_ids : string[];
};
/**
 * @interface CatalogQueryItemsForTax
 * @member {string[]} [tax_ids]
 */
interface CatalogQueryItemsForTax {
  tax_ids : string[];
};
/**
 * @interface CatalogQueryPrefix
 * @member {string} attribute_name
 * @member {string} attribute_prefix
 */
interface CatalogQueryPrefix {
  attribute_name : string;
  attribute_prefix : string;
};
/**
 * @interface CatalogQueryRange
 * @member {string} attribute_name
 * @member {number} [attribute_min_value]
 * @member {number} [attribute_max_value]
 */
interface CatalogQueryRange {
  attribute_name : string;
  attribute_min_value? : number;
  attribute_max_value? : number;
};
/**
 * @interface CatalogQuerySet
 * @member {string} attribute_name
 * @member {string[]} attribute_values
 */
interface CatalogQuerySet {
  attribute_name : string;
  attribute_values : string[];
};
/**
 * @interface CatalogQuerySortedAttribute
 * @member {string} attribute_name
 * @member {string} [initial_attribute_value]
 * @member {string} [sort_order]
 */
interface CatalogQuerySortedAttribute {
  attribute_name : string;
  initial_attribute_value? : string;
  sort_order? : string;
};
/**
 * @interface CatalogQueryText
 * @member {string[]} keywords
 */
interface CatalogQueryText {
  keywords : string[];
};
/**
 * @interface CatalogQuickAmount
 * @member {string} type
 * @member {Money} amount
 * @member {number} [score]
 * @member {number} [ordinal]
 */
interface CatalogQuickAmount {
  type : string;
  amount : Money;
  score? : number;
  ordinal? : number;
};
/**
 * @interface CatalogQuickAmountsSettings
 * @member {string} option
 * @member {boolean} [eligible_for_auto_amounts]
 * @member {CatalogQuickAmount[]} [amounts]
 */
interface CatalogQuickAmountsSettings {
  option : string;
  eligible_for_auto_amounts? : boolean;
  amounts? : CatalogQuickAmount[];
};
/**
 * @interface CatalogStockConversion
 * @member {string} stockable_item_variation_id
 * @member {string} stockable_quantity
 * @member {string} nonstockable_quantity
 */
interface CatalogStockConversion {
  stockable_item_variation_id : string;
  stockable_quantity : string;
  nonstockable_quantity : string;
};
/**
 * @interface CatalogSubscriptionPlan
 * @member {string} name
 * @member {SubscriptionPhase[]} [phases]
 * @member {CatalogObject[]} [subscription_plan_variations]
 * @member {string[]} [eligible_item_ids]
 * @member {string[]} [eligible_category_ids]
 * @member {boolean} [all_items]
 */
interface CatalogSubscriptionPlan {
  name : string;
  phases? : SubscriptionPhase[];
  subscription_plan_variations? : CatalogObject[];
  eligible_item_ids? : string[];
  eligible_category_ids? : string[];
  all_items? : boolean;
};
/**
 * @interface CatalogSubscriptionPlanVariation
 * @member {string} name
 * @member {SubscriptionPhase[]} phases
 * @member {string} [subscription_plan_id]
 * @member {number} [monthly_billing_anchor_date]
 * @member {boolean} [can_prorate]
 * @member {string} [successor_plan_variation_id]
 */
interface CatalogSubscriptionPlanVariation {
  name : string;
  phases : SubscriptionPhase[];
  subscription_plan_id? : string;
  monthly_billing_anchor_date? : number;
  can_prorate? : boolean;
  successor_plan_variation_id? : string;
};
/**
 * @interface CatalogTax
 * @member {string} [name]
 * @member {string} [calculation_phase]
 * @member {string} [inclusion_type]
 * @member {boolean} [applies_to_custom_amounts]
 * @member {boolean} [enabled]
 * @member {string} [applies_to_product_set_id]
 */
interface CatalogTax {
  name? : string;
  calculation_phase? : string;
  inclusion_type? : string;
  applies_to_custom_amounts? : boolean;
  enabled? : boolean;
  applies_to_product_set_id? : string;
};
/**
 * @interface CatalogTimePeriod
 * @member {string} [event]
 */
interface CatalogTimePeriod {
  event? : string;
};
/**
 * @interface CatalogV1Id
 * @member {string} [catalog_v1_id]
 * @member {string} [location_id]
 */
interface CatalogV1Id {
  catalog_v1_id? : string;
  location_id? : string;
};
/**
 * @interface CatalogVersionUpdatedEventCatalogVersion
 * @member {string} [updated_at]
 */
interface CatalogVersionUpdatedEventCatalogVersion {
  updated_at? : string;
};
/**
 * @interface CategoryPathToRootNode
 * @member {string} [category_id]
 * @member {string} [category_name]
 */
interface CategoryPathToRootNode {
  category_id? : string;
  category_name? : string;
};
/**
 * @interface Checkout
 * @member {string} [id]
 * @member {string} [checkout_page_url]
 * @member {boolean} [ask_for_shipping_address]
 * @member {string} [merchant_support_email]
 * @member {string} [pre_populate_buyer_email]
 * @member {Address} [pre_populate_shipping_address]
 * @member {string} [redirect_url]
 * @member {Order} [order]
 * @member {string} [created_at]
 */
interface Checkout {
  id? : string;
  checkout_page_url? : string;
  ask_for_shipping_address? : boolean;
  merchant_support_email? : string;
  pre_populate_buyer_email? : string;
  pre_populate_shipping_address? : Address;
  redirect_url? : string;
  order? : Order;
  created_at? : string;
};
/**
 * @interface CheckoutLocationSettings
 * @member {string} [location_id]
 * @member {boolean} [customer_notes_enabled]
 * @member {CheckoutLocationSettingsPolicy[]} [policies]
 * @member {CheckoutLocationSettingsBranding} [branding]
 * @member {CheckoutLocationSettingsTipping} [tipping]
 * @member {CheckoutLocationSettingsCoupons} [coupons]
 * @member {string} [updated_at]
 */
interface CheckoutLocationSettings {
  location_id? : string;
  customer_notes_enabled? : boolean;
  policies? : CheckoutLocationSettingsPolicy[];
  branding? : CheckoutLocationSettingsBranding;
  tipping? : CheckoutLocationSettingsTipping;
  coupons? : CheckoutLocationSettingsCoupons;
  updated_at? : string;
};
/**
 * @interface CheckoutLocationSettingsBranding
 * @member {string} [header_type]
 * @member {string} [button_color]
 * @member {string} [button_shape]
 */
interface CheckoutLocationSettingsBranding {
  header_type? : string;
  button_color? : string;
  button_shape? : string;
};
/**
 * @interface CheckoutLocationSettingsCoupons
 * @member {boolean} [enabled]
 */
interface CheckoutLocationSettingsCoupons {
  enabled? : boolean;
};
/**
 * @interface CheckoutLocationSettingsPolicy
 * @member {string} [uid]
 * @member {string} [title]
 * @member {string} [description]
 */
interface CheckoutLocationSettingsPolicy {
  uid? : string;
  title? : string;
  description? : string;
};
/**
 * @interface CheckoutLocationSettingsTipping
 * @member {string[]} [percentages]
 * @member {boolean} [smart_tipping_enabled]
 * @member {number} [default_percent]
 * @member {Money[]} [smart_tips]
 * @member {Money} [default_smart_tip]
 */
interface CheckoutLocationSettingsTipping {
  percentages? : string[];
  smart_tipping_enabled? : boolean;
  default_percent? : number;
  smart_tips? : Money[];
  default_smart_tip? : Money;
};
/**
 * @interface CheckoutMerchantSettings
 * @member {CheckoutMerchantSettingsPaymentMethods} [payment_methods]
 * @member {string} [updated_at]
 */
interface CheckoutMerchantSettings {
  payment_methods? : CheckoutMerchantSettingsPaymentMethods,
  updated_at? : string;
};
/**
 * @interface CheckoutMerchantSettingsPaymentMethods
 * @member {CheckoutMerchantSettingsPaymentMethodsPaymentMethod} [apple_pay]
 * @member {CheckoutMerchantSettingsPaymentMethodsPaymentMethod} [google_pay]
 * @member {CheckoutMerchantSettingsPaymentMethodsPaymentMethod} [cash_app]
 * @member {CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay} [afterpay_clearpay]
 */
interface CheckoutMerchantSettingsPaymentMethods {
  apple_pay? : CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  google_pay? : CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  cash_app? : CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  afterpay_clearpay? : CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay;
};
/**
 * @interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay
 * @member {CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange} [order_eligibility_range]
 * @member {CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange} [item_eligibility_range]
 * @member {boolean} [enabled]
 */
interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay {
  order_eligibility_range? : CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  item_eligibility_range? : CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  enabled? : boolean;
};
/**
 * @interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange
 * @member {Money} min
 * @member {Money} max
 */
interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange {
  min : Money;
  max : Money;
};
/**
 * @interface CheckoutMerchantSettingsPaymentMethodsPaymentMethod
 * @member {boolean} [enabled]
 */
interface CheckoutMerchantSettingsPaymentMethodsPaymentMethod {
  enabled? : boolean;
};
/**
 * @interface CheckoutOptions
 * @member {boolean} [allow_tipping]
 * @member {CustomField[]} [custom_fields]
 * @member {string} [subscription_plan_id]
 * @member {string} [redirect_url]
 * @member {string} [merchant_support_email]
 * @member {boolean} [ask_for_shipping_address]
 * @member {AcceptedPaymentMethods} [accepted_payment_methods]
 * @member {Money} [app_fee_money]
 * @member {ShippingFee} [shipping_fee]
 * @member {boolean} [enable_coupon]
 * @member {boolean} [enable_loyalty]
 */
interface CheckoutOptions {
  allow_tipping? : boolean;
  custom_fields? : CustomField[];
  subscription_plan_id? : string;
  redirect_url? : string;
  merchant_support_email? : string;
  ask_for_shipping_address? : boolean;
  accepted_payment_methods? : AcceptedPaymentMethods;
  app_fee_money? : Money;
  shipping_fee? : ShippingFee;
  enable_coupon? : boolean;
  enable_loyalty? : boolean;
};
/**
 * @interface ClearpayDetails
 * @member {string} [email_address]
 */
interface ClearpayDetails {
  email_address? : string;
};
/**
 * @interface CollectedData
 * @member {string} [input_text]
 */
interface CollectedData{
  input_text? : string;
};
/**
 * @interface Component
 * @member {string} type
 * @member {DeviceComponentDetailsApplicationDetails} [application_details]
 * @member {DeviceComponentDetailsCardReaderDetails} [card_reader_details]
 * @member {DeviceComponentDetailsBatteryDetails} [battery_details]
 * @member {DeviceComponentDetailsWiFiDetails} [wifi_details]
 * @member {DeviceComponentDetailsEthernetDetails} [ethernet_details]
 */
interface Component {
  type : string;
  application_details? : DeviceComponentDetailsApplicationDetails;
  card_reader_details? : DeviceComponentDetailsCardReaderDetails;
  battery_details? : DeviceComponentDetailsBatteryDetails;
  wifi_details? : DeviceComponentDetailsWiFiDetails;
  ethernet_details? : DeviceComponentDetailsEthernetDetails;
};
/**
 * @interface ConfirmationDecision
 * @member {boolean} [has_agreed]
 */
interface ConfirmationDecision {
  has_agreed? : boolean;
};
/**
 * @interface ConfirmationOptions
 * @member {string} title
 * @member {string} body
 * @member {string} agree_button_text
 * @member {string} [disagree_button_text]
 * @member {ConfirmationDecision} [decision]
 */
interface ConfirmationOptions {
  title : string;
  body : string;
  agree_button_text : string;
  disagree_button_text? : string;
  decision? : ConfirmationDecision;
};
/**
 * @interface Coordinates
 * @member {number} [latitude]
 * @member {number} [longitude]
 */
interface Coordinates {
  latitude? : number;
  longitude? : number;
};
/**
 * @interface CustomAttribute
 * @member {string} [key]
 * @member {any} [value]
 * @member {number} [version]
 * @member {string} [visibility]
 * @member {CustomAttributeDefinition} [definition]
 * @member {string} [updated_at]
 * @member {string} [created_at]
 */
interface CustomAttribute {
  key? : string;
  value? : any;
  version? : number;
  visibility? : string;
  definition? : CustomAttributeDefinition;
  updated_at? : string;
  created_at? : string;
};
/**
 * @interface CustomAttributeDefinition
 * @member {string} [key]
 * @member {object} [schema]
 * @member {string} [name]
 * @member {string} [description]
 * @member {string} [visibility]
 * @member {number} [version]
 * @member {string} [updated_at]
 * @member {string} [created_at]
 */
interface CustomAttributeDefinition {
  key? : string;
  schema? : object;
  name? : string;
  description? : string;
  visibility? : string;
  version? : number;
  updated_at? : string;
  created_at? : string;
};
/**
 * @interface CustomAttributeDefinitionEventDataObject
 * @member {CustomAttributeDefinition} [custom_attribute_definition]
 */
interface CustomAttributeDefinitionEventDataObject {
  custom_attribute_definition? : CustomAttributeDefinition;
};
/**
 * @interface CustomAttributeEventDataObject
 * @member {CustomAttribute} [custom_attribute]
 */
interface CustomAttributeEventDataObject {
  custom_attribute? : CustomAttribute;
};
/**
 * @interface CustomAttributeFilter
 * @member {string} [custom_attribute_definition_id]
 * @member {string} [key]
 * @member {string} [string_filter]
 * @member {Range} [number_filter]
 * @member {string[]} [selection_uids_filter]
 * @member {boolean} [bool_filter]
 */
interface CustomAttributeFilter {
  custom_attribute_definition_id? : string;
  key? : string;
  string_filter? : string;
  number_filter? : Range;
  selection_uids_filter? : string[];
  bool_filter? : boolean;
};
/**
 * @interface CustomField
 * @member {string} title
 */
interface CustomField {
  title : string;
};
/**
 * @interface Customer
 * @member {string} [id]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [given_name]
 * @member {string} [family_name]
 * @member {string} [nickname]
 * @member {string} [company_name]
 * @member {string} [email_address]
 * @member {Address} [address]
 * @member {string} [phone_number]
 * @member {string} [birthday]
 * @member {string} [reference_id]
 * @member {string} [note]
 * @member {CustomerPreferences} [preferences]
 * @member {string} [creation_source]
 * @member {string[]} [group_ids]
 * @member {string[]} [segment_ids]
 * @member {number} [version]
 * @member {CustomerTaxIds} [tax_ids]
 */
interface Customer {
  id? : string;
  created_at? : string;
  updated_at? : string;
  given_name? : string;
  family_name? : string;
  nickname? : string;
  company_name? : string;
  email_address? : string;
  address? : Address;
  phone_number? : string;
  birthday? : string;
  reference_id? : string;
  note? : string;
  preferences? : CustomerPreferences;
  creation_source? : string;
  group_ids? : string[];
  segment_ids? : string[];
  version? : number;
  tax_ids? : CustomerTaxIds;
};
/**
 * @interface CustomerAddressFilter
 * @member {CustomerTextFilter} [postal_code]
 * @member {string} [country]
 */
interface CustomerAddressFilter {
  postal_code? : CustomerTextFilter;
  country? : string;
};
/**
 * @interface CustomerCreatedEventEventContext
 * @member {CustomerCreatedEventEventContextMerge} [merge]
 */
interface CustomerCreatedEventEventContext {
  merge? : CustomerCreatedEventEventContextMerge;
};
/**
 * @interface CustomerCreatedEventEventContextMerge
 * @member {string[]} [from_customer_ids]
 * @member {string} [to_customer_id]
 */
interface CustomerCreatedEventEventContextMerge {
  from_customer_ids? : string[];
  to_customer_id? : string;
};
/**
 * @interface CustomerCreationSourceFilter
 * @member {string[]} [values]
 * @member {string} [rule]
 */
interface CustomerCreationSourceFilter {
  values? : string[];
  rule? : string;
};
/**
 * @interface CustomerCustomAttributeFilter
 * @member {string} key
 * @member {CustomerCustomAttributeFilterValue} [filter]
 * @member {TimeRange} [updated_at]
 */
interface CustomerCustomAttributeFilter {
  key : string;
  filter? : CustomerCustomAttributeFilterValue;
  updated_at? : TimeRange;
};
/**
 * @interface CustomerCustomAttributeFilterValue
 * @member {CustomerTextFilter} [email]
 * @member {CustomerTextFilter} [phone]
 * @member {CustomerTextFilter} [text]
 * @member {FilterValue} [selection]
 * @member {TimeRange} [date]
 * @member {FloatNumberRange} [number]
 * @member {boolean} [boolean]
 * @member {CustomerAddressFilter} [address]
 */
interface CustomerCustomAttributeFilterValue {
  email? : CustomerTextFilter;
  phone? : CustomerTextFilter;
  text? : CustomerTextFilter;
  selection? : FilterValue;
  date? : TimeRange;
  number? : FloatNumberRange;
  boolean? : boolean;
  address? : CustomerAddressFilter;
};
/**
 * @interface CustomerCustomAttributeFilters
 * @member {CustomerCustomAttributeFilter[]} [filters]
 */
interface CustomerCustomAttributeFilters {
  filters? : CustomerCustomAttributeFilter[];
};
/**
 * @interface CustomerDeletedEventEventContext
 * @member {CustomerDeletedEventEventContextMerge} [merge]
 */
interface CustomerDeletedEventEventContext {
  merge? : CustomerDeletedEventEventContextMerge;
};
/**
 * @interface CustomerDeletedEventEventContextMerge
 * @member {string[]} [from_customer_ids]
 * @member {string} [to_customer_id]
 */
interface CustomerDeletedEventEventContextMerge {
  from_customer_ids? : string[];
  to_customer_id? : string;
};
/**
 * @interface CustomerDetails
 * @member {boolean} [customer_initiated]
 * @member {boolean} [seller_keyed_in]
 */
interface CustomerDetails {
  customer_initiated? : boolean;
  seller_keyed_in? : boolean;
};
/**
 * @interface CustomerFilter
 * @member {CustomerCreationSourceFilter} [creation_source]
 * @member {TimeRange} [created_at]
 * @member {TimeRange} [updated_at]
 * @member {CustomerTextFilter} [email_address]
 * @member {CustomerTextFilter} [phone_number]
 * @member {CustomerTextFilter} [reference_id]
 * @member {FilterValue} [group_ids]
 * @member {CustomerCustomAttributeFilters} [custom_attribute]
 * @member {FilterValue} [segment_ids]
 */
interface CustomerFilter {
  creation_source? : CustomerCreationSourceFilter;
  created_at? : TimeRange;
  updated_at? : TimeRange;
  email_address? : CustomerTextFilter;
  phone_number? : CustomerTextFilter;
  reference_id? : CustomerTextFilter;
  group_ids? : FilterValue;
  custom_attribute? : CustomerCustomAttributeFilters;
  segment_ids? : FilterValue;
};
/**
 * @interface CustomerGroup
 * @member {string} [id]
 * @member {string} name
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface CustomerGroup {
  id? : string;
  name : string;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface CustomerPreferences
 * @member {boolean} [email_unsubscribed]
 */
interface CustomerPreferences {
  email_unsubscribed? : boolean;
};
/**
 * @interface CustomerQuery
 * @member {CustomerFilter} [filter]
 * @member {CustomerSort} [sort]
 */
interface CustomerQuery {
  filter? : CustomerFilter;
  sort? : CustomerSort;
};
/**
 * @interface CustomerSegment
 * @member {string} [id]
 * @member {string} name
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface CustomerSegment {
  id? : string;
  name : string;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface CustomerSort
 * @member {string} [field]
 * @member {string} [order]
 */
interface CustomerSort {
  field? : string;
  order? : string;
};
/**
 * @interface CustomerTaxIds
 * @member {string} [eu_vat]
 */
interface CustomerTaxIds {
  eu_vat? : string;
};
/**
 * @interface CustomerTextFilter
 * @member {string} [exact]
 * @member {string} [fuzzy]
 */
interface CustomerTextFilter {
  exact? : string;
  fuzzy? : string;
};
/**
 * @interface DataCollectionOptions
 * @member {string} title
 * @member {string} body
 * @member {string} input_type
 * @member {CollectedData} [collected_data]
 */
interface DataCollectionOptions {
  title : string;
  body : string;
  input_type : string;
  collected_data? : CollectedData;
};
/**
 * @interface DateRange
 * @member {string} [start_at]
 * @member {string} [end_at]
 */
interface DateRange {
  start_at? : string;
  end_at? : string;
};
/**
 * @interface Destination
 * @member {string} [type]
 * @member {string} [id]
 */
interface Destination {
  type? : string;
  id? : string;
};
/**
 * @interface DestinationDetails
 * @member {DestinationDetailsCardRefundDetails} [card_details]
 * @member {DestinationDetailsCashRefundDetails} [cash_details]
 * @member {DestinationDetailsExternalRefundDetails} [external_details]
 */
interface DestinationDetails {
  card_details? : DestinationDetailsCardRefundDetails;
  cash_details? : DestinationDetailsCashRefundDetails;
  external_details? : DestinationDetailsExternalRefundDetails;
};
/**
 * @interface DestinationDetailsCardRefundDetails
 * @member {Card} [card]
 * @member {string} [entry_method]
 * @member {string} [auth_result_code]
 */
interface DestinationDetailsCardRefundDetails {
  card? : Card;
  entry_method? : string;
  auth_result_code? : string;
};
/**
 * @interface DestinationDetailsCashRefundDetails
 * @member {Money} seller_supplied_money
 * @member {Money} [change_back_money]
 */
interface DestinationDetailsCashRefundDetails {
  seller_supplied_money : Money;
  change_back_money? : Money;
};
/**
 * @interface DestinationDetailsExternalRefundDetails
 * @member {string} type
 * @member {string} source
 * @member {string} [source_id]
 */
interface DestinationDetailsExternalRefundDetails {
  type : string;
  source : string;
  source_id? : string;
};
/**
 * @interface Device
 * @member {string} [id]
 * @member {DeviceAttributes} attributes
 * @member {Component[]} [components]
 * @member {DeviceStatus} [status]
 */
interface Device {
  id? : string;
  attributes : DeviceAttributes;
  components? : Component[];
  status? : DeviceStatus;
};
/**
 * @interface DeviceAttributes
 * @member {string} type
 * @member {string} manufacturer
 * @member {string} [model]
 * @member {string} [name]
 * @member {string} [manufacturers_id]
 * @member {string} [updated_at]
 * @member {string} [version]
 * @member {string} [merchant_token]
 */
interface DeviceAttributes {
  type : string;
  manufacturer : string;
  model? : string;
  name? : string;
  manufacturers_id? : string;
  updated_at? : string;
  version? : string;
  merchant_token? : string;
};
/**
 * @interface DeviceCheckoutOptions
 * @member {string} device_id
 * @member {boolean} [skip_receipt_screen]
 * @member {boolean} [collect_signature]
 * @member {TipSettings} [tip_settings]
 * @member {boolean} [show_itemized_cart]
 */
interface DeviceCheckoutOptions {
  device_id : string;
  skip_receipt_screen? : boolean;
  collect_signature? : boolean;
  tip_settings? : TipSettings;
  show_itemized_cart? : boolean;
};
/**
 * @interface DeviceCode
 * @member {string} [id]
 * @member {string} [name]
 * @member {string} [code]
 * @member {string} [device_id]
 * @member {string} product_type
 * @member {string} [location_id]
 * @member {string} [status]
 * @member {string} [pair_by]
 * @member {string} [created_at]
 * @member {string} [status_changed_at]
 * @member {string} [paired_at]
 */
interface DeviceCode {
  id? : string;
  name? : string;
  code? : string;
  device_id? : string;
  product_type : string;
  location_id? : string;
  status? : string;
  pair_by? : string;
  created_at? : string;
  status_changed_at? : string;
  paired_at? : string;
};
// interface DeviceComponentDetails {};
/**
 * @interface DeviceComponentDetailsApplicationDetails
 * @member {string} [application_type]
 * @member {string} [version]
 * @member {string} [session_location]
 * @member {string} [device_code_id]
 */
interface DeviceComponentDetailsApplicationDetails {
  application_type? : string;
  version? : string;
  session_location? : string;
  device_code_id? : string;
};
/**
 * @interface DeviceComponentDetailsBatteryDetails
 * @member {number} [visible_percent]
 */
interface DeviceComponentDetailsBatteryDetails {
  visible_percent? : number;
};
/**
 * @interface DeviceComponentDetailsCardReaderDetails
 * @member {string} [version]
 */
interface DeviceComponentDetailsCardReaderDetails {
  version? : string;
};
/**
 * @interface DeviceComponentDetailsEthernetDetails
 * @member {boolean} [active]
 * @member {string} [ip_address_v4]
 */
interface DeviceComponentDetailsEthernetDetails {
  active? : boolean;
  ip_address_v4? : string;
};
/**
 * @interface DeviceComponentDetailsMeasurement
 * @member {number} [value]
 */
interface DeviceComponentDetailsMeasurement {
  value? : number;
};
/**
 * @interface DeviceComponentDetailsNetworkInterfaceDetails
 * @member {string} [ip_address_v4]
 */
interface DeviceComponentDetailsNetworkInterfaceDetails {
  ip_address_v4? : string;
};
/**
 * @interface DeviceComponentDetailsWiFiDetails
 * @member {boolean} [active]
 * @member {string} [ssid]
 * @member {string} [ip_address_v4]
 * @member {string} [secure_connection]
 * @member {DeviceComponentDetailsMeasurement} [signal_strength]
 */
interface DeviceComponentDetailsWiFiDetails {
  active? : boolean;
  ssid? : string;
  ip_address_v4? : string;
  secure_connection? : string;
  signal_strength? : DeviceComponentDetailsMeasurement;
};
/**
 * @interface DeviceDetails
 * @member {string} [device_id]
 * @member {string} [device_installation_id]
 * @member {string} [device_name]
 */
interface DeviceDetails {
  device_id? : string;
  device_installation_id? : string;
  device_name? : string;
};
/**
 * @interface DeviceMetadata
 * @member {string} [battery_percentage]
 * @member {string} [charging_state]
 * @member {string} [location_id]
 * @member {string} [merchant_id]
 * @member {string} [network_connection_type]
 * @member {string} [payment_region]
 * @member {string} [serial_number]
 * @member {string} [os_version]
 * @member {string} [app_version]
 * @member {string} [wifi_network_name]
 * @member {string} [wifi_network_strength]
 * @member {string} [ip_address]
 */
interface DeviceMetadata {
  battery_percentage? : string;
  charging_state? : string;
  location_id? : string;
  merchant_id? : string;
  network_connection_type? : string;
  payment_region? : string;
  serial_number? : string;
  os_version? : string;
  app_version? : string;
  wifi_network_name? : string;
  wifi_network_strength? : string;
  ip_address? : string;
};
/**
 * @interface DeviceStatus
 * @member {string} [category]
 */
interface DeviceStatus {
  category? : string;
};
/**
 * @interface DigitalWalletDetails
 * @member {string} [status]
 * @member {string} [brand]
 * @member {CashAppDetails} [cash_app_details]
 */
interface DigitalWalletDetails {
  status? : string;
  brand? : string;
  cash_app_details? : CashAppDetails;
};
/**
 * @interface Dispute
 * @member {string} [id]
 * @member {Money} [amount_money]
 * @member {string} [reason]
 * @member {string} [state]
 * @member {string} [due_at]
 * @member {DisputedPayment} [disputed_payment]
 * @member {string} [card_brand]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [brand_dispute_id]
 * @member {string} [reported_at]
 * @member {number} [version]
 * @member {string} [location_id]
 */
interface Dispute {
  id? : string;
  amount_money? : Money;
  reason? : string;
  state? : string;
  due_at? : string;
  disputed_payment? : DisputedPayment;
  card_brand? : string;
  created_at? : string;
  updated_at? : string;
  brand_dispute_id? : string;
  reported_at? : string;
  version? : number;
  location_id? : string;
};
/**
 * @interface DisputeEvidence
 * @member {string} [id]
 * @member {string} [dispute_id]
 * @member {DisputeEvidenceFile} [evidence_file]
 * @member {string} [evidence_text]
 * @member {string} [uploaded_at]
 * @member {string} [evidence_type]
 */
interface DisputeEvidence {
  id? : string;
  dispute_id? : string;
  evidence_file? : DisputeEvidenceFile;
  evidence_text? : string;
  uploaded_at? : string;
  evidence_type? : string;
};
/**
 * @interface DisputeEvidenceFile
 * @member {string} [filename]
 * @member {string} [filetype]
 */
interface DisputeEvidenceFile {
  filename? : string;
  filetype? : string;
};
/**
 * @interface DisputedPayment
 * @member {string} [payment_id]
 */
interface DisputedPayment {
  payment_id? : string;
};
/**
 * @interface Error
 * @member {string} category
 * @member {string} code
 * @member {string} [detail]
 * @member {string} [field]
 */
interface Error {
  category : string;
  code : string;
  detail? : string;
  field? : string;
};
/**
 * @interface Event
 * @member {string} [merchant_id]
 * @member {string} [location_id]
 * @member {string} [type]
 * @member {string} [event_id]
 * @member {string} [created_at]
 * @member {EventData} [data]
 */
interface Event {
  merchant_id? : string;
  location_id? : string;
  type? : string;
  event_id? : string;
  created_at? : string;
  data? : EventData;
};
/**
 * @interface EventData
 * @member {string} [type]
 * @member {string} [id]
 * @member {boolean} [deleted]
 * @member {object} [object]
 */
interface EventData {
  type? : string;
  id? : string;
  deleted? : boolean;
  object? : object;
};
/**
 * @interface EventMetadata
 * @member {string} [event_id]
 * @member {string} [api_version]
 */
interface EventMetadata {
  event_id? : string;
  api_version? : string;
};
/**
 * @interface EventTypeMetadata
 * @member {string} [event_type]
 * @member {string} [api_version_introduced]
 * @member {string} [release_status]
 */
interface EventTypeMetadata {
  event_type? : string;
  api_version_introduced? : string;
  release_status? : string;
};
/**
 * @interface ExternalPaymentDetails
 * @member {string} type
 * @member {string} source
 * @member {string} [source_id]
 * @member {Money} [source_fee_money]
 */
interface ExternalPaymentDetails {
  type : string;
  source : string;
  source_id? : string;
  source_fee_money? : Money;
};
/**
 * @interface FilterValue
 * @member {string[]} [all]
 * @member {string[]} [any]
 * @member {string[]} [none]
 */
interface FilterValue {
  all? : string[];
  any? : string[];
  none? : string[];
};
/**
 * @interface FloatNumberRange
 * @member {string} [start_at]
 * @member {string} [end_at]
 */
interface FloatNumberRange {
  start_at? : string;
  end_at? : string;
};
/**
 * @interface Fulfillment
 * @member {string} [uid]
 * @member {string} [type]
 * @member {string} [state]
 * @member {string} [line_item_application]
 * @member {FulfillmentFulfillmentEntry[]} [entries]
 * @member {Map<string, string>} [metadata]
 * @member {FulfillmentPickupDetails} [pickup_details]
 * @member {FulfillmentShipmentDetails} [shipment_details]
 * @member {FulfillmentDeliveryDetails} [delivery_details]
 */
interface Fulfillment {
  uid? : string;
  type? : string;
  state? : string;
  line_item_application? : string;
  entries? : FulfillmentFulfillmentEntry[];
  metadata? : Map<string, string>;
  pickup_details? : FulfillmentPickupDetails;
  shipment_details? : FulfillmentShipmentDetails;
  delivery_details? : FulfillmentDeliveryDetails;
};
/**
 * @interface FulfillmentDeliveryDetails
 * @member {FulfillmentRecipient} [recipient]
 * @member {string} [schedule_type]
 * @member {string} [placed_at]
 * @member {string} [deliver_at]
 * @member {string} [prep_time_duration]
 * @member {string} [delivery_window_duration]
 * @member {string} [note]
 * @member {string} [completed_at]
 * @member {string} [in_progress_at]
 * @member {string} [rejected_at]
 * @member {string} [ready_at]
 * @member {string} [delivered_at]
 * @member {string} [canceled_at]
 * @member {string} [cancel_reason]
 * @member {string} [courier_pickup_at]
 * @member {string} [courier_pickup_window_duration]
 * @member {boolean} [is_no_contact_delivery]
 * @member {string} [dropoff_notes]
 * @member {string} [courier_provider_name]
 * @member {string} [courier_support_phone_number]
 * @member {string} [square_delivery_id]
 * @member {string} [external_delivery_id]
 * @member {boolean} [managed_delivery]
 */
interface FulfillmentDeliveryDetails {
  recipient? : FulfillmentRecipient;
  schedule_type? : string;
  placed_at? : string;
  deliver_at? : string;
  prep_time_duration? : string;
  delivery_window_duration? : string;
  note? : string;
  completed_at? : string;
  in_progress_at? : string;
  rejected_at? : string;
  ready_at? : string;
  delivered_at? : string;
  canceled_at? : string;
  cancel_reason? : string;
  courier_pickup_at? : string;
  courier_pickup_window_duration? : string;
  is_no_contact_delivery? : boolean;
  dropoff_notes? : string;
  courier_provider_name? : string;
  courier_support_phone_number? : string;
  square_delivery_id? : string;
  external_delivery_id? : string;
  managed_delivery? : boolean;
};
/**
 * @interface FulfillmentFulfillmentEntry
 * @member {string} uid
 * @member {string} line_item_uid
 * @member {string} quantity
 * @member {Map<string, string>} metadata
 */
interface FulfillmentFulfillmentEntry {
  uid : string;
  line_item_uid : string;
  quantity : string;
  metadata : Map<string, string>;
};
/**
 * @interface FulfillmentPickupDetails
 * @member {FulfillmentRecipient} [recipient]
 * @member {string} [expires_at]
 * @member {string} [auto_complete_duration]
 * @member {string} [schedule_type]
 * @member {string} [pickup_at]
 * @member {string} [pickup_window_duration]
 * @member {string} [prep_time_duration]
 * @member {string} [note]
 * @member {string} [placed_at]
 * @member {string} [accepted_at]
 * @member {string} [rejected_at]
 * @member {string} [ready_at]
 * @member {string} [expired_at]
 * @member {string} [picked_up_at]
 * @member {string} [canceled_at]
 * @member {string} [cancel_reason]
 * @member {boolean} [is_curbside_pickup]
 * @member {FulfillmentPickupDetailsCurbsidePickupDetails} [curbside_pickup_details]
 */
interface FulfillmentPickupDetails {
  recipient? : FulfillmentRecipient;
  expires_at? : string;
  auto_complete_duration? : string;
  schedule_type? : string;
  pickup_at? : string;
  pickup_window_duration? : string;
  prep_time_duration? : string;
  note? : string;
  placed_at? : string;
  accepted_at? : string;
  rejected_at? : string;
  ready_at? : string;
  expired_at? : string;
  picked_up_at? : string;
  canceled_at? : string;
  cancel_reason? : string;
  is_curbside_pickup? : boolean;
  curbside_pickup_details? : FulfillmentPickupDetailsCurbsidePickupDetails;
};
/**
 * @interface FulfillmentPickupDetailsCurbsidePickupDetails
 * @member {string} [curbside_details]
 * @member {string} [buyer_arrived_at]
 */
interface FulfillmentPickupDetailsCurbsidePickupDetails {
  curbside_details? : string;
  buyer_arrived_at? : string;
};
/**
 * @interface FulfillmentRecipient
 * @member {string} [customer_id]
 * @member {string} [display_name]
 * @member {string} [email_address]
 * @member {string} [phone_number]
 * @member {Address} [address]
 */
interface FulfillmentRecipient {
  customer_id? : string;
  display_name? : string;
  email_address? : string;
  phone_number? : string;
  address? : Address;
};
/**
 * @interface FulfillmentShipmentDetails
 * @member {FulfillmentRecipient} [recipient]
 * @member {string} [carrier]
 * @member {string} [shipping_note]
 * @member {string} [shipping_type]
 * @member {string} [tracking_number]
 * @member {string} [tracking_url]
 * @member {string} [placed_at]
 * @member {string} [in_progress_at]
 * @member {string} [packaged_at]
 * @member {string} [expected_shipped_at]
 * @member {string} [shipped_at]
 * @member {string} [canceled_at]
 * @member {string} [cancel_reason]
 * @member {string} [failed_at]
 * @member {string} [failure_reason]
 */
interface FulfillmentShipmentDetails {
  recipient? : FulfillmentRecipient;
  carrier? : string;
  shipping_note? : string;
  shipping_type? : string;
  tracking_number? : string;
  tracking_url? : string;
  placed_at? : string;
  in_progress_at? : string;
  packaged_at? : string;
  expected_shipped_at? : string;
  shipped_at? : string;
  canceled_at? : string;
  cancel_reason? : string;
  failed_at? : string;
  failure_reason? : string;
};
/**
 * @interface GiftCard
 * @member {string} [id]
 * @member {string} type
 * @member {string} [gan_source]
 * @member {string} [state]
 * @member {Money} [balance_money]
 * @member {string} [gan]
 * @member {string} [created_at]
 * @member {string[]} [customer_ids]
 */
interface GiftCard {
  id? : string;
  type : string;
  gan_source? : string;
  state? : string;
  balance_money? : Money;
  gan? : string;
  created_at? : string;
  customer_ids? : string[];
};
/**
 * @interface GiftCardActivity
 * @member {string} [id]
 * @member {string} type
 * @member {string} location_id
 * @member {string} [created_at]
 * @member {string} [gift_card_id]
 * @member {string} gift_card_gan
 * @member {Money} [gift_card_balance_money]
 * @member {GiftCardActivityLoad} [load_activity_details]
 * @member {GiftCardActivityActivate} [activate_activity_details]
 * @member {GiftCardActivityRedeem} [redeem_activity_details]
 * @member {GiftCardActivityClearBalance} [clear_balance_activity_details]
 * @member {GiftCardActivityDeactivate} [deactivate_activity_details]
 * @member {GiftCardActivityAdjustIncrement} [adjust_increment_activity_details]
 * @member {GiftCardActivityAdjustDecrement} [adjust_decrement_activity_details]
 * @member {GiftCardActivityRefund} [refund_activity_details]
 * @member {GiftCardActivityUnlinkedActivityRefund} [unlinked_activity_refund_activity_details]
 * @member {GiftCardActivityImport} [import_activity_details]
 * @member {GiftCardActivityBlock} [block_activity_details]
 * @member {GiftCardActivityUnblock} [unblock_activity_details]
 * @member {GiftCardActivityImportReversal} [import_reversal_activity_details]
 * @member {GiftCardActivityTransferBalanceTo} [transfer_balance_to_activity_details]
 * @member {GiftCardActivityTransferBalanceFrom} [transfer_balance_from_activity_details]
 */
interface GiftCardActivity {
  id? : string;
  type : string;
  location_id : string;
  created_at? : string;
  gift_card_id? : string;
  gift_card_gan? : string;
  gift_card_balance_money? : Money;
  load_activity_details? : GiftCardActivityLoad;
  activate_activity_details? : GiftCardActivityActivate;
  redeem_activity_details? : GiftCardActivityRedeem;
  clear_balance_activity_details? : GiftCardActivityClearBalance;
  deactivate_activity_details? : GiftCardActivityDeactivate;
  adjust_increment_activity_details? : GiftCardActivityAdjustIncrement;
  adjust_decrement_activity_details? : GiftCardActivityAdjustDecrement;
  refund_activity_details? : GiftCardActivityRefund;
  unlinked_activity_refund_activity_details? : GiftCardActivityUnlinkedActivityRefund;
  import_activity_details? : GiftCardActivityImport;
  block_activity_details? : GiftCardActivityBlock;
  unblock_activity_details? : GiftCardActivityUnblock;
  import_reversal_activity_details? : GiftCardActivityImportReversal;
  transfer_balance_to_activity_details? : GiftCardActivityTransferBalanceTo;
  transfer_balance_from_activity_details? : GiftCardActivityTransferBalanceFrom;
};
/**
 * @interface GiftCardActivityActivate
 * @member {Money} [amount_money]
 * @member {string} [order_id]
 * @member {string} [line_item_uid]
 * @member {string} [reference_id]
 * @member {string[]} [buyer_payment_instrument_ids]
 */
interface GiftCardActivityActivate {
  amount_money? : Money;
  order_id? : string;
  line_item_uid? : string;
  reference_id? : string;
  buyer_payment_instrument_ids? : string[];
};
/**
 * @interface GiftCardActivityAdjustDecrement
 * @member {Money} amount_money
 * @member {string} reason
 */
interface GiftCardActivityAdjustDecrement {
  amount_money : Money;
  reason : string;
};
/**
 * @interface GiftCardActivityAdjustIncrement
 * @member {Money} amount_money
 * @member {string} reason
 */
interface GiftCardActivityAdjustIncrement {
  amount_money : Money;
  reason : string;
};
/**
 * @interface GiftCardActivityBlock
 * @member {string} reason
 */
interface GiftCardActivityBlock {
  reason : string;
};
/**
 * @interface GiftCardActivityClearBalance
 * @member {string} reason
 */
interface GiftCardActivityClearBalance {
  reason : string;
};
/**
 * @interface GiftCardActivityDeactivate
 * @member {string} reason
 */
interface GiftCardActivityDeactivate {
  reason : string;
};
/**
 * @interface GiftCardActivityImport
 * @member {Money} amount_money
 */
interface GiftCardActivityImport {
  amount_money : Money;
};
/**
 * @interface GiftCardActivityImportReversal
 * @member {Money} amount_money
 */
interface GiftCardActivityImportReversal {
  amount_money : Money;
};
/**
 * @interface GiftCardActivityLoad
 * @member {Money} [amount_money]
 * @member {string} [order_id]
 * @member {string} [line_item_uid]
 * @member {string} [reference_id]
 * @member {string[]} [buyer_payment_instrument_ids]
 */
interface GiftCardActivityLoad {
  amount_money? : Money;
  order_id? : string;
  line_item_uid? : string;
  reference_id? : string;
  buyer_payment_instrument_ids? : string[];
};
/**
 * @interface GiftCardActivityRedeem
 * @member {Money} amount_money
 * @member {string} [payment_id]
 * @member {string} [reference_id]
 * @member {string} [status]
 */
interface GiftCardActivityRedeem {
  amount_money : Money;
  payment_id? : string;
  reference_id? : string;
  status? : string;
};
/**
 * @interface GiftCardActivityRefund
 * @member {string} [redeem_activity_id]
 * @member {Money} [amount_money]
 * @member {string} [reference_id]
 * @member {string} [payment_id]
 */
interface GiftCardActivityRefund {
  redeem_activity_id? : string;
  amount_money? : Money;
  reference_id? : string;
  payment_id? : string;
};
/**
 * @interface GiftCardActivityTransferBalanceFrom
 * @member {string} transfer_to_gift_card_id
 * @member {Money} amount_money
 */
interface GiftCardActivityTransferBalanceFrom {
  transfer_to_gift_card_id : string;
  amount_money : Money;
};
/**
 * @interface GiftCardActivityTransferBalanceTo
 * @member {string} transfer_from_gift_card_id
 * @member {Money} amount_money
 */
interface GiftCardActivityTransferBalanceTo {
  transfer_from_gift_card_id : string;
  amount_money : Money;
};
/**
 * @interface GiftCardActivityUnblock
 * @member {string} reason
 */
interface GiftCardActivityUnblock {
  reason : string;
};
/**
 * @interface GiftCardActivityUnlinkedActivityRefund
 * @member {Money} amount_money
 * @member {string} [reference_id]
 * @member {string} [payment_id]
 */
interface GiftCardActivityUnlinkedActivityRefund {
  amount_money : Money;
  reference_id? : string;
  payment_id? : string;
};
/**
 * @interface InventoryAdjustment
 * @member {string} [id]
 * @member {string} [reference_id]
 * @member {string} [from_state]
 * @member {string} [to_state]
 * @member {string} [location_id]
 * @member {string} [catalog_object_id]
 * @member {string} [catalog_object_type]
 * @member {string} [quantity]
 * @member {Money} [total_price_money]
 * @member {string} [occurred_at]
 * @member {string} [created_at]
 * @member {SourceApplication} [source]
 * @member {string} [employee_id]
 * @member {string} [team_member_id]
 * @member {string} [transaction_id]
 * @member {string} [refund_id]
 * @member {string} [purchase_order_id]
 * @member {string} [goods_receipt_id]
 * @member {InventoryAdjustmentGroup} [adjustment_group]
 */
interface InventoryAdjustment {
  id? : string;
  reference_id? : string;
  from_state? : string;
  to_state? : string;
  location_id? : string;
  catalog_object_id? : string;
  catalog_object_type? : string;
  quantity? : string;
  total_price_money? : Money;
  occurred_at? : string;
  created_at? : string;
  source? : SourceApplication;
  employee_id? : string;
  team_member_id? : string;
  transaction_id? : string;
  refund_id? : string;
  purchase_order_id? : string;
  goods_receipt_id? : string;
  adjustment_group? : InventoryAdjustmentGroup;
};
/**
 * @interface InventoryAdjustmentGroup
 * @member {string} [id]
 * @member {string} [root_adjustment_id]
 * @member {string} [from_state]
 * @member {string} [to_state]
 */
interface InventoryAdjustmentGroup {
  id? : string;
  root_adjustment_id? : string;
  from_state? : string;
  to_state? : string;
};
/**
 * @interface InventoryChange
 * @member {string} [type]
 * @member {InventoryPhysicalCount} [physical_count]
 * @member {InventoryAdjustment} [adjustment]
 * @member {InventoryTransfer} [transfer]
 * @member {CatalogMeasurementUnit} [measurement_unit]
 * @member {string} [measurement_unit_id]
 */
interface InventoryChange {
  type? : string;
  physical_count? : InventoryPhysicalCount;
  adjustment? : InventoryAdjustment;
  transfer? : InventoryTransfer;
  measurement_unit? : CatalogMeasurementUnit;
  measurement_unit_id? : string;
};
/**
 * @interface InventoryCount
 * @member {string} [catalog_object_id]
 * @member {string} [catalog_object_type]
 * @member {string} [state]
 * @member {string} [location_id]
 * @member {string} [quantity]
 * @member {string} [calculated_at]
 * @member {boolean} [is_estimated]
 */
interface InventoryCount {
  catalog_object_id? : string;
  catalog_object_type? : string;
  state? : string;
  location_id? : string;
  quantity? : string;
  calculated_at? : string;
  is_estimated? : boolean;
};
/**
 * @interface InventoryPhysicalCount
 * @member {string} [id]
 * @member {string} [reference_id]
 * @member {string} [catalog_object_id]
 * @member {string} [catalog_object_type]
 * @member {string} [state]
 * @member {string} [location_id]
 * @member {string} [quantity]
 * @member {SourceApplication} [source]
 * @member {string} [employee_id]
 * @member {string} [team_member_id]
 * @member {string} [occurred_at]
 * @member {string} [created_at]
 */
interface InventoryPhysicalCount {
  id? : string;
  reference_id? : string;
  catalog_object_id? : string;
  catalog_object_type? : string;
  state? : string;
  location_id? : string;
  quantity? : string;
  source? : SourceApplication;
  employee_id? : string;
  team_member_id? : string;
  occurred_at? : string;
  created_at? : string;
};
/**
 * @interface InventoryTransfer
 * @member {string} [id]
 * @member {string} [reference_id]
 * @member {string} [state]
 * @member {string} [from_location_id]
 * @member {string} [to_location_id]
 * @member {string} [catalog_object_id]
 * @member {string} [catalog_object_type]
 * @member {string} [quantity]
 * @member {string} [occurred_at]
 * @member {string} [created_at]
 * @member {SourceApplication} [source]
 * @member {string} [employee_id]
 * @member {string} [team_member_id]
 */
interface InventoryTransfer {
  id? : string;
  reference_id? : string;
  state? : string;
  from_location_id? : string;
  to_location_id? : string;
  catalog_object_id? : string;
  catalog_object_type? : string;
  quantity? : string;
  occurred_at? : string;
  created_at? : string;
  source? : SourceApplication;
  employee_id? : string;
  team_member_id? : string;
};
/**
 * @interface Invoice
 * @member {string} [id]
 * @member {number} [version]
 * @member {string} [location_id]
 * @member {string} [order_id]
 * @member {InvoiceRecipient} [primary_recipient]
 * @member {InvoicePaymentRequest[]} [payment_requests]
 * @member {string} [delivery_method]
 * @member {string} [invoice_number]
 * @member {string} [title]
 * @member {string} [description]
 * @member {string} [scheduled_at]
 * @member {string} [public_url]
 * @member {Money} [next_payment_amount_money]
 * @member {string} [status]
 * @member {string} [timezone]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {InvoiceAcceptedPaymentMethods} [accepted_payment_methods]
 * @member {InvoiceCustomField[]} [custom_fields]
 * @member {string} [subscription_id]
 * @member {string} [sale_or_service_date]
 * @member {string} [payment_conditions]
 * @member {boolean} [store_payment_method_enabled]
 * @member {InvoiceAttachment[]} [attachments]
 */
interface Invoice {
  id? : string;
  version? : number;
  location_id? : string;
  order_id? : string;
  primary_recipient? : InvoiceRecipient;
  payment_requests? : InvoicePaymentRequest[];
  delivery_method? : string;
  invoice_number? : string;
  title? : string;
  description? : string;
  scheduled_at? : string;
  public_url? : string;
  next_payment_amount_money? : Money;
  status? : string;
  timezone? : string;
  created_at? : string;
  updated_at? : string;
  accepted_payment_methods? : InvoiceAcceptedPaymentMethods;
  custom_fields? : InvoiceCustomField[];
  subscription_id? : string;
  sale_or_service_date? : string;
  payment_conditions? : string;
  store_payment_method_enabled? : boolean;
  attachments? : InvoiceAttachment[];
};
/**
 * @interface InvoiceAcceptedPaymentMethods
 * @member {boolean} [card]
 * @member {boolean} [square_gift_card]
 * @member {boolean} [bank_account]
 * @member {boolean} [buy_now_pay_later]
 * @member {boolean} [cash_app_pay]
 */
interface InvoiceAcceptedPaymentMethods {
  card? : boolean;
  square_gift_card? : boolean;
  bank_account? : boolean;
  buy_now_pay_later? : boolean;
  cash_app_pay? : boolean;
};
/**
 * @interface InvoiceAttachment
 * @member {string} [id]
 * @member {string} [filename]
 * @member {string} [description]
 * @member {number} [filesize]
 * @member {string} [hash]
 * @member {string} [mime_type]
 * @member {string} [uploaded_at]
 */
interface InvoiceAttachment {
  id? : string;
  filename? : string;
  description? : string;
  filesize? : number;
  hash? : string;
  mime_type? : string;
  uploaded_at? : string;
};
/**
 * @interface InvoiceCustomField
 * @member {string} [label]
 * @member {string} [value]
 * @member {string} [placement]
 */
interface InvoiceCustomField {
  label? : string;
  value? : string;
  placement? : string;
};
/**
 * @interface InvoiceFilter
 * @member {string[]} location_ids
 * @member {string[]} [customer_ids]
 */
interface InvoiceFilter {
  location_ids : string[];
  customer_ids? : string[];
};
/**
 * @interface InvoicePaymentRequest
 * @member {string} [uid]
 * @member {string} [request_type]
 * @member {string} [due_date]
 * @member {Money} [fixed_amount_requested_money]
 * @member {string} [percentage_requested]
 * @member {boolean} [tipping_enabled]
 * @member {string} [automatic_payment_source]
 * @member {string} [card_id]
 * @member {InvoicePaymentReminder[]} [reminders]
 * @member {string} [computed_amount_money]
 * @member {Money} [total_completed_amount_money]
 * @member {Money} [rounding_adjustment_included_money]
 */
interface InvoicePaymentRequest {
  uid? : string;
  request_type? : string;
  due_date? : string;
  fixed_amount_requested_money? : Money;
  percentage_requested? : string;
  tipping_enabled? : boolean;
  automatic_payment_source? : string;
  card_id? : string;
  reminders? : InvoicePaymentReminder[];
  computed_amount_money? : string;
  total_completed_amount_money? : Money;
  rounding_adjustment_included_money? : Money;
};
/**
 * @interface InvoicePaymentReminder
 * @member {string} [uid]
 * @member {number} [relative_scheduled_days]
 * @member {string} [message]
 * @member {string} [status]
 * @member {string} [sent_at]
 */
interface InvoicePaymentReminder {
  uid? : string;
  relative_scheduled_days? : number;
  message? : string;
  status? : string;
  sent_at? : string;
};
/**
 * @interface InvoiceQuery
 * @member {InvoiceFilter} filter
 * @member {InvoiceSort} [sort]
 */
interface InvoiceQuery {
  filter : InvoiceFilter;
  sort? : InvoiceSort;
};
/**
 * @interface InvoiceRecipient
 * @member {string} [customer_id]
 * @member {string} [given_name]
 * @member {string} [family_name]
 * @member {string} [email_address]
 * @member {Address} [address]
 * @member {string} [phone_number]
 * @member {string} [company_name]
 * @member {InvoiceRecipientTaxIds} [tax_ids]
 */
interface InvoiceRecipient {
  customer_id? : string;
  given_name? : string;
  family_name? : string;
  email_address? : string;
  address? : Address;
  phone_number? : string;
  company_name? : string;
  tax_ids? : InvoiceRecipientTaxIds;
};
/**
 * @interface InvoiceRecipientTaxIds
 * @member {string} [eu_vat]
 */
interface InvoiceRecipientTaxIds {
  eu_vat? : string;
};
/**
 * @interface InvoiceSort
 * @member {string} field
 * @member {string} [order]
 */
interface InvoiceSort {
  field : string;
  order? : string;
};
/**
 * @interface ItemVariationLocationOverrides
 * @member {string} [location_id]
 * @member {Money} [price_money]
 * @member {string} [pricing_type]
 * @member {boolean} [track_inventory]
 * @member {string} [inventory_alert_type]
 * @member {number} [inventory_alert_threshold]
 * @member {boolean} [sold_out]
 * @member {string} [sold_out_valid_until]
 */
interface ItemVariationLocationOverrides {
  location_id? : string;
  price_money? : Money;
  pricing_type? : string;
  track_inventory? : boolean;
  inventory_alert_type? : string;
  inventory_alert_threshold? : number;
  sold_out? : boolean;
  sold_out_valid_until? : string;
};
/**
 * @interface JobAssignment
 * @member {string} job_title
 * @member {string} pay_type
 * @member {Money} [hourly_rate]
 * @member {Money} [annual_rate]
 * @member {number} [weekly_hours]
 */
interface JobAssignment {
  job_title : string;
  pay_type : string;
  hourly_rate? : Money;
  annual_rate? : Money;
  weekly_hours? : number;
};
/**
 * @interface Location
 * @member {string} [id]
 * @member {string} [name]
 * @member {Address} [address]
 * @member {string} [timezone]
 * @member {string[]} [capabilities]
 * @member {string} [status]
 * @member {string} [created_at]
 * @member {string} [merchant_id]
 * @member {string} [country]
 * @member {string} [language_code]
 * @member {string} [currency]
 * @member {string} [phone_number]
 * @member {string} [business_name]
 * @member {string} [type]
 * @member {string} [website_url]
 * @member {BusinessHours} [business_hours]
 * @member {string} [business_email]
 * @member {string} [description]
 * @member {string} [twitter_username]
 * @member {string} [instagram_username]
 * @member {string} [facebook_url]
 * @member {Coordinates} [coordinates]
 * @member {string} [logo_url]
 * @member {string} [pos_background_url]
 * @member {string} [mcc]
 * @member {string} [full_format_logo_url]
 * @member {TaxIds} [tax_ids]
 */
interface Location {
  id? : string;
  name? : string;
  address? : Address;
  timezone? : string;
  capabilities? : string[];
  status? : string;
  created_at? : string;
  merchant_id? : string;
  country? : string;
  language_code? : string;
  currency? : string;
  phone_number? : string;
  business_name? : string;
  type? : string;
  website_url? : string;
  business_hours? : BusinessHours;
  business_email? : string;
  description? : string;
  twitter_username? : string;
  instagram_username? : string;
  facebook_url? : string;
  coordinates? : Coordinates;
  logo_url? : string;
  pos_background_url? : string;
  mcc? : string;
  full_format_logo_url? : string;
  tax_ids? : TaxIds;
};
/**
 * @interface LocationBookingProfile
 * @member {string} [location_id]
 * @member {string} [booking_site_url]
 * @member {boolean} [online_booking_enabled]
 */
interface LocationBookingProfile {
  location_id? : string;
  booking_site_url? : string;
  online_booking_enabled? : boolean;
};
/**
 * @interface LoyaltyAccount
 * @member {string} [id]
 * @member {string} program_id
 * @member {number} [balance]
 * @member {number} [lifetime_points]
 * @member {string} [customer_id]
 * @member {string} [enrolled_at]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {LoyaltyAccountMapping} [mapping]
 * @member {LoyaltyAccountExpiringPointDeadline[]} [expiring_point_deadlines]
 */
interface LoyaltyAccount {
  id? : string;
  program_id : string;
  balance? : number;
  lifetime_points? : number;
  customer_id? : string;
  enrolled_at? : string;
  created_at? : string;
  updated_at? : string;
  mapping? : LoyaltyAccountMapping;
  expiring_point_deadlines? : LoyaltyAccountExpiringPointDeadline[];
};
/**
 * @interface LoyaltyAccountExpiringPointDeadline
 * @member {number} points
 * @member {string} expires_at
 */
interface LoyaltyAccountExpiringPointDeadline {
  points : number;
  expires_at : string;
};
/**
 * @interface LoyaltyAccountMapping
 * @member {string} [id]
 * @member {string} [created_at]
 * @member {string} [phone_number]
 */
interface LoyaltyAccountMapping {
  id? : string;
  created_at? : string;
  phone_number? : string;
};
/**
 * @interface LoyaltyEvent
 * @member {string} [id]
 * @member {string} [type]
 * @member {string} [created_at]
 * @member {LoyaltyEventAccumulatePoints} [accumulate_points]
 * @member {LoyaltyEventCreateReward} [create_reward]
 * @member {LoyaltyEventRedeemReward} [redeem_reward]
 * @member {LoyaltyEventDeleteReward} [delete_reward]
 * @member {LoyaltyEventAdjustPoints} [adjust_points]
 * @member {string} loyalty_account_id
 * @member {string} [location_id]
 * @member {string} source
 * @member {LoyaltyEventExpirePoints} [expire_points]
 * @member {LoyaltyEventOther} [other_event]
 * @member {LoyaltyEventAccumulatePromotionPoints} [accumulate_promotion_points]
 */
interface LoyaltyEvent {
  id? : string;
  type? : string;
  created_at? : string;
  accumulate_points? : LoyaltyEventAccumulatePoints;
  create_reward? : LoyaltyEventCreateReward;
  redeem_reward? : LoyaltyEventRedeemReward;
  delete_reward? : LoyaltyEventDeleteReward;
  adjust_points? : LoyaltyEventAdjustPoints;
  loyalty_account_id : string;
  location_id? : string;
  source : string;
  expire_points? : LoyaltyEventExpirePoints;
  other_event? : LoyaltyEventOther;
  accumulate_promotion_points? : LoyaltyEventAccumulatePromotionPoints;
};
/**
 * @interface LoyaltyEventAccumulatePoints
 * @member {string} [loyalty_program_id]
 * @member {number} [points]
 * @member {string} [order_id]
 */
interface LoyaltyEventAccumulatePoints {
  loyalty_program_id? : string;
  points? : number;
  order_id? : string;
};
/**
 * @interface LoyaltyEventAccumulatePromotionPoints
 * @member {string} [loyalty_program_id]
 * @member {string} [loyalty_promotion_id]
 * @member {number} [points]
 * @member {string} [order_id]
 */
interface LoyaltyEventAccumulatePromotionPoints {
  loyalty_program_id? : string;
  loyalty_promotion_id? : string;
  points? : number;
  order_id? : string;
};
/**
 * @interface LoyaltyEventAdjustPoints
 * @member {string} [loyalty_program_id]
 * @member {number} points
 * @member {string} [reason]
 */
interface LoyaltyEventAdjustPoints {
  loyalty_program_id? : string;
  points : number;
  reason? : string;
};
/**
 * @interface LoyaltyEventCreateReward
 * @member {string} [loyalty_program_id]
 * @member {string} [reward_id]
 * @member {number} [points]
 */
interface LoyaltyEventCreateReward {
  loyalty_program_id? : string;
  reward_id? : string;
  points? : number;
};
/**
 * @interface LoyaltyEventDateTimeFilter
 * @member {TimeRange} created_at
 */
interface LoyaltyEventDateTimeFilter {
  created_at : TimeRange;
};
/**
 * @interface LoyaltyEventDeleteReward
 * @member {string} [loyalty_program_id]
 * @member {string} [reward_id]
 * @member {number} [points]
 */
interface LoyaltyEventDeleteReward {
  loyalty_program_id? : string;
  reward_id? : string;
  points? : number;
};
/**
 * @interface LoyaltyEventExpirePoints
 * @member {string} [loyalty_program_id]
 * @member {number} points
 */
interface LoyaltyEventExpirePoints {
  loyalty_program_id? : string;
  points : number;
};
/**
 * @interface LoyaltyEventFilter
 * @member {LoyaltyEventLoyaltyAccountFilter} [loyalty_account_filter]
 * @member {LoyaltyEventTypeFilter} [type_filter]
 * @member {LoyaltyEventDateTimeFilter} [date_time_filter]
 * @member {LoyaltyEventLocationFilter} [location_filter]
 * @member {LoyaltyEventOrderFilter} [order_filter]
 */
interface LoyaltyEventFilter {
  loyalty_account_filter? : LoyaltyEventLoyaltyAccountFilter;
  type_filter? : LoyaltyEventTypeFilter;
  date_time_filter? : LoyaltyEventDateTimeFilter;
  location_filter? : LoyaltyEventLocationFilter;
  order_filter? : LoyaltyEventOrderFilter;
};
/**
 * @interface LoyaltyEventLocationFilter
 * @member {string[]} location_ids
 */
interface LoyaltyEventLocationFilter {
  location_ids : string[];
};
/**
 * @interface LoyaltyEventLoyaltyAccountFilter
 * @member {string} loyalty_account_id
 */
interface LoyaltyEventLoyaltyAccountFilter {
  loyalty_account_id : string;
};
/**
 * @interface LoyaltyEventOrderFilter
 * @member {string} order_id
 */
interface LoyaltyEventOrderFilter {
  order_id : string;
};
/**
 * @interface LoyaltyEventOther
 * @member {string} [loyalty_program_id]
 * @member {number} points
 */
interface LoyaltyEventOther {
  loyalty_program_id? : string;
  points : number;
};
/**
 * @interface LoyaltyEventQuery
 * @member {LoyaltyEventFilter} [filter]
 */
interface LoyaltyEventQuery {
  filter? : LoyaltyEventFilter;
};
/**
 * @interface LoyaltyEventRedeemReward
 * @member {string} [loyalty_program_id]
 * @member {string} [reward_id]
 * @member {string} [order_id]
 */
interface LoyaltyEventRedeemReward {
  loyalty_program_id? : string;
  reward_id? : string;
  order_id? : string;
};
/**
 * @interface LoyaltyEventTypeFilter
 * @member {string[]} types
 */
interface LoyaltyEventTypeFilter {
  types : string[];
};
/**
 * @interface LoyaltyProgram
 * @member {string} [id]
 * @member {string} [status]
 * @member {LoyaltyProgramRewardTier[]} [reward_tiers]
 * @member {LoyaltyProgramExpirationPolicy} [expiration_policy]
 * @member {LoyaltyProgramTerminology} [terminology]
 * @member {string[]} [location_ids]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {LoyaltyProgramAccrualRule[]} [accrual_rules]
 */
interface LoyaltyProgram {
  id? : string;
  status? : string;
  reward_tiers? : LoyaltyProgramRewardTier[];
  expiration_policy? : LoyaltyProgramExpirationPolicy;
  terminology? : LoyaltyProgramTerminology;
  location_ids? : string[];
  created_at? : string;
  updated_at? : string;
  accrual_rules? : LoyaltyProgramAccrualRule[];
};
/**
 * @interface LoyaltyProgramAccrualRule
 * @member {string} accrual_type
 * @member {number} [points]
 * @member {LoyaltyProgramAccrualRuleVisitData} [visit_data]
 * @member {LoyaltyProgramAccrualRuleSpendData} [spend_data]
 * @member {LoyaltyProgramAccrualRuleItemVariationData} [item_variation_data]
 * @member {LoyaltyProgramAccrualRuleCategoryData} [category_data]
 */
interface LoyaltyProgramAccrualRule {
  accrual_type : string;
  points? : number;
  visit_data? : LoyaltyProgramAccrualRuleVisitData;
  spend_data? : LoyaltyProgramAccrualRuleSpendData;
  item_variation_data? : LoyaltyProgramAccrualRuleItemVariationData;
  category_data? : LoyaltyProgramAccrualRuleCategoryData;
};
/**
 * @interface LoyaltyProgramAccrualRuleCategoryData
 * @member {string} category_id
 */
interface LoyaltyProgramAccrualRuleCategoryData {
  category_id : string;
};
/**
 * @interface LoyaltyProgramAccrualRuleItemVariationData
 * @member {string} item_variation_id
 */
interface LoyaltyProgramAccrualRuleItemVariationData {
  item_variation_id : string;
};
/**
 * @interface LoyaltyProgramAccrualRuleSpendData
 * @member {Money} amount_money
 * @member {string[]} [excluded_category_ids]
 * @member {string[]} [excluded_item_variation_ids]
 * @member {string} tax_mode
 */
interface LoyaltyProgramAccrualRuleSpendData {
  amount_money : Money
  excluded_category_ids? : string[]
  excluded_item_variation_ids? : string[]
  tax_mode : string
};
/**
 * @interface LoyaltyProgramAccrualRuleVisitData
 * @member {Money} [minimum_amount_money]
 * @member {string} tax_mode
 */
interface LoyaltyProgramAccrualRuleVisitData {
  minimum_amount_money? : Money;
  tax_mode : string;
};
/**
 * @interface LoyaltyProgramExpirationPolicy
 * @member {string} expiration_duration
 */
interface LoyaltyProgramExpirationPolicy {
  expiration_duration : string;
};
/**
 * @interface LoyaltyProgramRewardTier
 * @member {string} [id]
 * @member {number} points
 * @member {string} [name]
 * @member {string} [created_at]
 * @member {CatalogObjectReference} pricing_rule_reference
 */
interface LoyaltyProgramRewardTier {
  id? : string
  points : number;
  name? : string;
  created_at? : string;
  pricing_rule_reference : CatalogObjectReference;
};
/**
 * @interface LoyaltyProgramTerminology
 * @member {string} one
 * @member {string} other
 */
interface LoyaltyProgramTerminology {
  one : string;
  other : string;
};
/**
 * @interface LoyaltyPromotion
 * @member {string} [id]
 * @member {string} name
 * @member {LoyaltyPromotionIncentive} incentive
 * @member {LoyaltyPromotionAvailableTimeData} available_time
 * @member {LoyaltyPromotionTriggerLimit} [trigger_limit]
 * @member {string} [status]
 * @member {string} [created_at]
 * @member {string} [canceled_at]
 * @member {string} [updated_at]
 * @member {string} [loyalty_program_id]
 * @member {Money} [minimum_spend_amount_money]
 * @member {string[]} [qualifying_item_variation_ids]
 * @member {string[]} [qualifying_category_ids]
 */
interface LoyaltyPromotion {
  id? : string;
  name : string;
  incentive : LoyaltyPromotionIncentive;
  available_time : LoyaltyPromotionAvailableTimeData;
  trigger_limit? : LoyaltyPromotionTriggerLimit;
  status? : string;
  created_at? : string;
  canceled_at? : string;
  updated_at? : string;
  loyalty_program_id? : string;
  minimum_spend_amount_money? : Money;
  qualifying_item_variation_ids? : string[];
  qualifying_category_ids? : string[];
};
/**
 * @interface LoyaltyPromotionAvailableTimeData
 * @member {string} [start_date]
 * @member {string} [end_date]
 * @member {string[]} time_periods
 */
interface LoyaltyPromotionAvailableTimeData {
  start_date? : string;
  end_date? : string;
  time_periods : string[];
};
/**
 * @interface LoyaltyPromotionIncentive
 * @member {string} type
 * @member {LoyaltyPromotionIncentivePointsMultiplierData} [points_multiplier_data]
 * @member {LoyaltyPromotionIncentivePointsAdditionData} [points_addition_data]
 */
interface LoyaltyPromotionIncentive {
  type : string;
  points_multiplier_data? : LoyaltyPromotionIncentivePointsMultiplierData;
  points_addition_data? : LoyaltyPromotionIncentivePointsAdditionData;
};
/**
 * @interface LoyaltyPromotionIncentivePointsAdditionData
 * @member {number} points_addition
 */
interface LoyaltyPromotionIncentivePointsAdditionData {
  points_addition : number;
};
/**
 * @interface LoyaltyPromotionIncentivePointsMultiplierData
 * @member {string} [multiplier]
 */
interface LoyaltyPromotionIncentivePointsMultiplierData {
  multiplier? : string;
};
/**
 * @interface LoyaltyPromotionTriggerLimit
 * @member {number} times
 * @member {string} [interval]
 */
interface LoyaltyPromotionTriggerLimit {
  times : number;
  interval? : string;
};
/**
 * @interface LoyaltyReward
 * @member {string} [id]
 * @member {string} status
 * @member {string} loyalty_account_id
 * @member {string} reward_tier_id
 * @member {number} [points]
 * @member {string} [order_id]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [redeemed_at]
 */
interface LoyaltyReward {
  id? : string;
  status? : string;
  loyalty_account_id : string;
  reward_tier_id : string;
  points? : number;
  order_id? : string;
  created_at? : string;
  updated_at? : string;
  redeemed_at? : string;
};
/**
 * @interface MeasurementUnit
 * @member {MeasurementUnitCustom} [custom_unit]
 * @member {string} [area_unit]
 * @member {string} [length_unit]
 * @member {string} [volume_unit]
 * @member {string} [weight_unit]
 * @member {string} [generic_unit]
 * @member {string} [time_unit]
 * @member {string} [type]
 */
interface MeasurementUnit {
  custom_unit? : MeasurementUnitCustom;
  area_unit? : string;
  length_unit? : string;
  volume_unit? : string;
  weight_unit? : string;
  generic_unit? : string;
  time_unit? : string;
  type? : string;
};
/**
 * @interface MeasurementUnitCustom
 * @member {string} name
 * @member {string} abbreviation
 */
interface MeasurementUnitCustom {
  name : string;
  abbreviation : string;
};
/**
 * @interface Merchant
 * @member {string} [id]
 * @member {string} [business_name]
 * @member {string} country
 * @member {string} [language_code]
 * @member {string} [currency]
 * @member {string} [status]
 * @member {string} [main_location_id]
 * @member {string} [created_at]
 */
interface Merchant {
  id? : string;
  business_name? : string;
  country : string;
  language_code? : string;
  currency? : string;
  status? : string;
  main_location_id? : string;
  created_at? : string;
};
/**
 * @interface ModifierLocationOverrides
 * @member {number} [location_id]
 * @member {Money} [price_money]
 * @member {boolean} [sold_out]
 */
interface ModifierLocationOverrides {
  location_id? : string;
  price_money? : Money;
  sold_out? : boolean;
};
/**
 * @interface Money
 * @member {number} [amount]
 * @member {string} [currency]
 */
interface Money {
  amount? : number;
  currency? : string;
};
/**
 * @interface OauthAuthorizationRevokedEventRevocationObject
 * @member {string} [revoked_at]
 * @member {string} [revoker_type]
 */
interface OauthAuthorizationRevokedEventRevocationObject {
  revoked_at? : string;
  revoker_type? : string;
};
/**
 * @interface OfflinePaymentDetails
 * @member {string} [client_created_at]
 */
interface OfflinePaymentDetails {
  client_created_at? : string;
};
/**
 * @interface Order
 * @member {string} [id]
 * @member {string} location_id
 * @member {string} [reference_id]
 * @member {OrderSource} [source]
 * @member {string} [customer_id]
 * @member {OrderLineItem[]} [line_items]
 * @member {OrderLineItemTax[]} [taxes]
 * @member {OrderLineItemDiscount[]} [discounts]
 * @member {OrderServiceCharge[]} [service_charges]
 * @member {Fulfillment[]} [fulfillments]
 * @member {OrderReturn[]} [returns]
 * @member {OrderMoneyAmounts} [return_amounts]
 * @member {OrderMoneyAmounts} [net_amounts]
 * @member {OrderRoundingAdjustment} [rounding_adjustment]
 * @member {Tender[]} [tenders]
 * @member {Refund[]} [refunds]
 * @member {Map<string, string>} [metadata]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [closed_at]
 * @member {string} [state]
 * @member {number} [version]
 * @member {Money} [total_money]
 * @member {Money} [total_tax_money]
 * @member {Money} [total_discount_money]
 * @member {Money} [total_tip_money]
 * @member {Money} [total_service_charge_money]
 * @member {string} [ticket_name]
 * @member {OrderPricingOptions} [pricing_options]
 * @member {OrderReward[]} [rewards]
 * @member {Money} [net_amount_due_money]
 */
interface Order {
  id? : string;
  location_id : string;
  reference_id? : string;
  source? : OrderSource;
  customer_id? : string;
  line_items? : OrderLineItem[];
  taxes? : OrderLineItemTax[];
  discounts? : OrderLineItemDiscount[];
  service_charges? : OrderServiceCharge[];
  fulfillments? : Fulfillment[];
  returns? : OrderReturn[];
  return_amounts? : OrderMoneyAmounts;
  net_amounts? : OrderMoneyAmounts;
  rounding_adjustment? : OrderRoundingAdjustment;
  tenders? : Tender[];
  refunds? : Refund[];
  metadata? : Map<string, string>;
  created_at? : string;
  updated_at? : string;
  closed_at? : string;
  state? : string;
  version? : number;
  total_money? : Money;
  total_tax_money? : Money;
  total_discount_money? : Money;
  total_tip_money? : Money;
  total_service_charge_money? : Money;
  ticket_name? : string;
  pricing_options? : OrderPricingOptions;
  rewards? : OrderReward[];
  net_amount_due_money? : Money;
};
/**
 * @interface OrderCreated
 * @member {string} [order_id]
 * @member {number} [version]
 * @member {string} [location_id]
 * @member {string} [state]
 * @member {string} [created_at]
 */
interface OrderCreated {
  order_id? : string;
  version? : number;
  location_id? : string;
  state? : string;
  created_at? : string;
};
/**
 * @interface OrderCreatedObject
 * @member {OrderCreated} order_created
 */
interface OrderCreatedObject {
  order_created? : OrderCreated;
};
/**
 * @interface OrderEntry
 * @member {string} [order_id]
 * @member {number} [version]
 * @member {string} [location_id]
 */
interface OrderEntry {
  order_id? : string;
  version? : number;
  location_id? : string;
};
/**
 * @interface OrderFulfillment
 * @member {string} [uid]
 * @member {string} [type]
 * @member {string} [state]
 * @member {string} [line_item_application]
 * @member {OrderFulfillmentFulfillmentEntry[]} [entries]
 * @member {Map<string, string>} [metadata]
 * @member {OrderFulfillmentPickupDetails} [pickup_details]
 * @member {OrderFulfillmentShipmentDetails} [shipment_details]
 * @member {OrderFulfillmentDeliveryDetails} [delivery_details]
 */
interface OrderFulfillment {
  uid? : string;
  type? : string;
  state? : string;
  line_item_application? : string;
  entries? : OrderFulfillmentFulfillmentEntry[];
  metadata? : Map<string, string>;
  pickup_details? : OrderFulfillmentPickupDetails;
  shipment_details? : OrderFulfillmentShipmentDetails;
  delivery_details? : OrderFulfillmentDeliveryDetails;
};
/**
 * @interface OrderFulfillmentDeliveryDetails
 * @member {OrderFulfillmentRecipient} [recipient]
 * @member {string} [schedule_type]
 * @member {string} [placed_at]
 * @member {string} [deliver_at]
 * @member {string} [prep_time_duration]
 * @member {string} [delivery_window_duration]
 * @member {string} [note]
 * @member {string} [completed_at]
 * @member {string} [in_progress_at]
 * @member {string} [rejected_at]
 * @member {string} [ready_at]
 * @member {string} [delivered_at]
 * @member {string} [canceled_at]
 * @member {string} [cancel_reason]
 * @member {string} [courier_pickup_at]
 * @member {string} [courier_pickup_window_duration]
 * @member {boolean} [is_no_contact_delivery]
 * @member {string} [dropoff_notes]
 * @member {string} [courier_provider_name]
 * @member {string} [courier_support_phone_number]
 * @member {string} [square_delivery_id]
 * @member {string} [external_delivery_id]
 * @member {boolean} [managed_delivery]
 */
interface OrderFulfillmentDeliveryDetails {
  recipient? : OrderFulfillmentRecipient;
  schedule_type? : string;
  placed_at? : string;
  deliver_at? : string;
  prep_time_duration? : string;
  delivery_window_duration? : string;
  note? : string;
  completed_at? : string;
  in_progress_at? : string;
  rejected_at? : string;
  ready_at? : string;
  delivered_at? : string;
  canceled_at? : string;
  cancel_reason? : string;
  courier_pickup_at? : string;
  courier_pickup_window_duration? : string;
  is_no_contact_delivery? : boolean;
  dropoff_notes? : string;
  courier_provider_name? : string;
  courier_support_phone_number? : string;
  square_delivery_id? : string;
  external_delivery_id? : string;
  managed_delivery? : boolean;
};
/**
 * @interface OrderFulfillmentFulfillmentEntry
 * @member {string} [uid]
 * @member {string} line_item_uid
 * @member {string} quantity
 * @member {Map<string, string>} [metadata]
 */
interface OrderFulfillmentFulfillmentEntry {
  uid? : string;
  line_item_uid : string;
  quantity : string;
  metadata? : Map<string, string>;
};
/**
 * @interface OrderFulfillmentPickupDetails
 * @member {OrderFulfillmentRecipient} [recipient]
 * @member {string} [expires_at]
 * @member {string} [auto_complete_duration]
 * @member {string} [schedule_type]
 * @member {string} [pickup_at]
 * @member {string} [pickup_window_duration]
 * @member {string} [prep_time_duration]
 * @member {string} [note]
 * @member {string} [placed_at]
 * @member {string} [accepted_at]
 * @member {string} [rejected_at]
 * @member {string} [ready_at]
 * @member {string} [expired_at]
 * @member {string} [picked_up_at]
 * @member {string} [canceled_at]
 * @member {string} [cancel_reason]
 * @member {boolean} [is_curbside_pickup]
 * @member {OrderFulfillmentPickupDetailsCurbsidePickupDetails} [curbside_pickup_details]
 */
interface OrderFulfillmentPickupDetails {
  recipient? : OrderFulfillmentRecipient;
  expires_at? : string;
  auto_complete_duration? : string;
  schedule_type? : string;
  pickup_at? : string;
  pickup_window_duration? : string;
  prep_time_duration? : string;
  note? : string;
  placed_at? : string;
  accepted_at? : string;
  rejected_at? : string;
  ready_at? : string;
  expired_at? : string;
  picked_up_at? : string;
  canceled_at? : string;
  cancel_reason? : string;
  is_curbside_pickup? : boolean;
  curbside_pickup_details? : OrderFulfillmentPickupDetailsCurbsidePickupDetails;
};
/**
 * @interface OrderFulfillmentPickupDetailsCurbsidePickupDetails
 * @member {string} [curbside_details]
 * @member {string} [buyer_arrived_at]
 */
interface OrderFulfillmentPickupDetailsCurbsidePickupDetails {
  curbside_details? : string;
  buyer_arrived_at? : string;
};
/**
 * @interface OrderFulfillmentRecipient
 * @member {string} [customer_id]
 * @member {string} [display_name]
 * @member {string} [email_address]
 * @member {string} [phone_number]
 * @member {Address} [address]
 */
interface OrderFulfillmentRecipient {
  customer_id? : string;
  display_name? : string;
  email_address? : string;
  phone_number? : string;
  address? : Address;
};
/**
 * @interface OrderFulfillmentShipmentDetails
 * @member {OrderFulfillmentRecipient} [recipient]
 * @member {string} [carrier]
 * @member {string} [shipping_note]
 * @member {string} [shipping_type]
 * @member {string} [tracking_number]
 * @member {string} [tracking_url]
 * @member {string} [placed_at]
 * @member {string} [in_progress_at]
 * @member {string} [packaged_at]
 * @member {string} [expected_shipped_at]
 * @member {string} [shipped_at]
 * @member {string} [canceled_at]
 * @member {string} [cancel_reason]
 * @member {string} [failed_at]
 * @member {string} [failure_reason]
 */
interface OrderFulfillmentShipmentDetails {
  recipient? : OrderFulfillmentRecipient;
  carrier? : string;
  shipping_note? : string;
  shipping_type? : string;
  tracking_number? : string;
  tracking_url? : string;
  placed_at? : string;
  in_progress_at? : string;
  packaged_at? : string;
  expected_shipped_at? : string;
  shipped_at? : string;
  canceled_at? : string;
  cancel_reason? : string;
  failed_at? : string;
  failure_reason? : string;
};
/**
 * @interface OrderFulfillmentUpdated
 * @member {string} [order_id]
 * @member {number} [version]
 * @member {string} [location_id]
 * @member {string} [state]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {OrderFulfillmentUpdatedUpdate[]} [fulfillment_update]
 */
interface OrderFulfillmentUpdated {
  order_id? : string;
  version? : number;
  location_id? : string;
  state? : string;
  created_at? : string;
  updated_at? : string;
  fulfillment_update? : OrderFulfillmentUpdatedUpdate[];
};
/**
 * @interface OrderFulfillmentUpdatedObject
 * @member {OrderFulfillmentUpdated} order_fulfillment_updated
 */
interface OrderFulfillmentUpdatedObject {
  order_fulfillment_updated? : OrderFulfillmentUpdated;
};
/**
 * @interface OrderFulfillmentUpdatedUpdate
 * @member {string} [fulfillment_uid]
 * @member {string} [old_state]
 * @member {string} [new_state]
 */
interface OrderFulfillmentUpdatedUpdate {
  fulfillment_uid? : string;
  old_state? : string;
  new_state? : string;
};
/**
 * @interface OrderLineItem
 * @member {string} [uid]
 * @member {string} [name]
 * @member {string} quantity
 * @member {OrderQuantityUnit} [quantity_unit]
 * @member {string} [note]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [variation_name]
 * @member {string} [item_type]
 * @member {Map<string, string>} [metadata]
 * @member {OrderLineItemModifier[]} [modifiers]
 * @member {OrderLineItemAppliedTax[]} [applied_taxes]
 * @member {OrderLineItemAppliedDiscount[]} [applied_discounts]
 * @member {OrderLineItemAppliedServiceCharge[]} [applied_service_charges]
 * @member {Money} [base_price_money]
 * @member {Money} [variation_total_price_money]
 * @member {Money} [gross_sales_money]
 * @member {Money} [total_tax_money]
 * @member {Money} [total_discount_money]
 * @member {Money} [total_money]
 * @member {OrderLineItemPricingBlocklists} [pricing_blocklists]
 * @member {Money} [total_service_charge_money]
 */
interface OrderLineItem {
  uid? : string;
  name? : string;
  quantity : string;
  quantity_unit? : OrderQuantityUnit;
  note? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  variation_name? : string;
  item_type? : string;
  metadata? : Map<string, string>;
  modifiers? : OrderLineItemModifier[];
  applied_taxes? : OrderLineItemAppliedTax[];
  applied_discounts? : OrderLineItemAppliedDiscount[];
  applied_service_charges? : OrderLineItemAppliedServiceCharge[];
  base_price_money? : Money;
  variation_total_price_money? : Money;
  gross_sales_money? : Money;
  total_tax_money? : Money;
  total_discount_money? : Money;
  total_money? : Money;
  pricing_blocklists? : OrderLineItemPricingBlocklists;
  total_service_charge_money? : Money;
};
/**
 * @interface OrderLineItemAppliedDiscount
 * @member {string} [uid]
 * @member {string} discount_uid
 * @member {Money} [applied_money]
 */
interface OrderLineItemAppliedDiscount {
  uid? : string;
  discount_uid : string;
  applied_money? : Money;
};
/**
 * @interface OrderLineItemAppliedServiceCharge
 * @member {string} [uid]
 * @member {string} service_charge_uid
 * @member {Money} [applied_money]
 */
interface OrderLineItemAppliedServiceCharge {
  uid? : string;
  service_charge_uid : string;
  applied_money? : Money;
};
/**
 * @interface OrderLineItemAppliedTax
 * @member {string} [uid]
 * @member {string} tax_uid
 * @member {Money} [applied_money]
 */
interface OrderLineItemAppliedTax {
  uid? : string;
  tax_uid : string;
  applied_money? : Money;
};
/**
 * @interface OrderLineItemDiscount
 * @member {string} [uid]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [name]
 * @member {string} [type]
 * @member {string} [percentage]
 * @member {Money} [amount_money]
 * @member {Money} [applied_money]
 * @member {Map<string, string>} [metadata]
 * @member {string} [scope]
 * @member {string[]} [reward_ids]
 * @member {string} [pricing_rule_id]
 */
interface OrderLineItemDiscount {
  uid? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  name? : string;
  type? : string;
  percentage? : string;
  amount_money? : Money;
  applied_money? : Money;
  metadata? : Map<string, string>;
  scope? : string;
  reward_ids? : string[];
  pricing_rule_id? : string;
};
/**
 * @interface OrderLineItemModifier
 * @member {string} [uid]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [name]
 * @member {string} [quantity]
 * @member {Money} [base_price_money]
 * @member {Money} [total_price_money]
 * @member {Map<string, string>} [metadata]
 */
interface OrderLineItemModifier {
  uid? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  name? : string;
  quantity? : string;
  base_price_money? : Money;
  total_price_money? : Money;
  metadata? : Map<string, string>;
};
/**
 * @interface OrderLineItemPricingBlocklists
 * @member {OrderLineItemPricingBlocklistsBlockedDiscount[]} [blocked_discounts]
 * @member {OrderLineItemPricingBlocklistsBlockedTax[]} [blocked_taxes]
 */
interface OrderLineItemPricingBlocklists {
  blocked_discounts? : OrderLineItemPricingBlocklistsBlockedDiscount[];
  blocked_taxes? : OrderLineItemPricingBlocklistsBlockedTax[];
};
/**
 * @interface OrderLineItemPricingBlocklistsBlockedDiscount
 * @member {string} [uid]
 * @member {string} [discount_uid]
 * @member {string} [discount_catalog_object_id]
 */
interface OrderLineItemPricingBlocklistsBlockedDiscount {
  uid? : string;
  discount_uid? : string;
  discount_catalog_object_id? : string;
};
/**
 * @interface OrderLineItemPricingBlocklistsBlockedTax
 * @member {string} [uid]
 * @member {string} [tax_uid]
 * @member {string} [tax_catalog_object_id]
 */
interface OrderLineItemPricingBlocklistsBlockedTax {
  uid? : string;
  tax_uid? : string;
  tax_catalog_object_id? : string;
};
/**
 * @interface OrderLineItemTax
 * @member {string} [uid]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [name]
 * @member {string} [type]
 * @member {string} [percentage]
 * @member {Map<string, string>} [metadata]
 * @member {Money} [applied_money]
 * @member {string} [scope]
 * @member {boolean} [auto_applied]
 */
interface OrderLineItemTax {
  uid? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  name? : string;
  type? : string;
  percentage? : string;
  metadata? : Map<string, string>;
  applied_money? : Money;
  scope? : string;
  auto_applied? : boolean;
};
/**
 * @interface OrderMoneyAmounts
 * @member {Money} [total_money]
 * @member {Money} [tax_money]
 * @member {Money} [discount_money]
 * @member {Money} [tip_money]
 * @member {Money} [service_charge_money]
 */
interface OrderMoneyAmounts {
  total_money? : Money;
  tax_money? : Money;
  discount_money? : Money;
  tip_money? : Money;
  service_charge_money? : Money;
};
/**
 * @interface OrderPricingOptions
 * @member {boolean} [auto_apply_discounts]
 * @member {boolean} [auto_apply_taxes]
 */
interface OrderPricingOptions {
  auto_apply_discounts? : boolean;
  auto_apply_taxes? : boolean;
};
/**
 * @interface OrderQuantityUnit
 * @member {MeasurementUnit} [measurement_unit]
 * @member {number} [precision]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 */
interface OrderQuantityUnit {
  measurement_unit? : MeasurementUnit;
  precision? : number;
  catalog_object_id? : string;
  catalog_version? : number;
};
/**
 * @interface OrderReturn
 * @member {string} [uid]
 * @member {string} [source_order_id]
 * @member {OrderReturnLineItem[]} [return_line_items]
 * @member {OrderReturnServiceCharge[]} [return_service_charges]
 * @member {OrderReturnTax[]} [return_taxes]
 * @member {OrderReturnDiscount[]} [return_discounts]
 * @member {OrderReturnTip[]} [return_tips]
 * @member {OrderRoundingAdjustment} [rounding_adjustment]
 * @member {OrderMoneyAmounts} [return_amounts]
 */
interface OrderReturn {
  uid? : string;
  source_order_id? : string;
  return_line_items? : OrderReturnLineItem[];
  return_service_charges? : OrderReturnServiceCharge[];
  return_taxes? : OrderReturnTax[];
  return_discounts? : OrderReturnDiscount[];
  return_tips? : OrderReturnTip[];
  rounding_adjustment? : OrderRoundingAdjustment;
  return_amounts? : OrderMoneyAmounts;
};
/**
 * @interface OrderReturnDiscount
 * @member {string} [uid]
 * @member {string} [source_discount_uid]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [name]
 * @member {string} [type]
 * @member {string} [percentage]
 * @member {Money} [amount_money]
 * @member {Money} [applied_money]
 * @member {string} [scope]
 */
interface OrderReturnDiscount {
  uid? : string;
  source_discount_uid? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  name? : string;
  type? : string;
  percentage? : string;
  amount_money? : Money;
  applied_money? : Money;
  scope? : string;
};
/**
 * @interface OrderReturnLineItem
 * @member {string} [uid]
 * @member {string} [source_line_item_uid]
 * @member {string} [name]
 * @member {string} quantity
 * @member {OrderQuantityUnit} [quantity_unit]
 * @member {string} [note]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [variation_name]
 * @member {string} [item_type]
 * @member {OrderReturnLineItemModifier[]} [return_modifiers]
 * @member {OrderLineItemAppliedTax[]} [applied_taxes]
 * @member {OrderLineItemAppliedDiscount[]} [applied_discounts]
 * @member {Money} [base_price_money]
 * @member {Money} [variation_total_price_money]
 * @member {Money} [gross_return_money]
 * @member {Money} [total_tax_money]
 * @member {Money} [total_discount_money]
 * @member {Money} [total_money]
 * @member {OrderLineItemAppliedServiceCharge[]} [applied_service_charges]
 * @member {Money} [total_service_charge_money]
 */
interface OrderReturnLineItem {
  uid? : string;
  source_line_item_uid? : string;
  name? : string;
  quantity : string;
  quantity_unit? : OrderQuantityUnit;
  note? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  variation_name? : string;
  item_type? : string;
  return_modifiers? : OrderReturnLineItemModifier[];
  applied_taxes? : OrderLineItemAppliedTax[];
  applied_discounts? : OrderLineItemAppliedDiscount[];
  base_price_money? : Money;
  variation_total_price_money? : Money;
  gross_return_money? : Money;
  total_tax_money? : Money;
  total_discount_money? : Money;
  total_money? : Money;
  applied_service_charges? : OrderLineItemAppliedServiceCharge[];
  total_service_charge_money? : Money;
};
/**
 * @interface OrderReturnLineItemModifier
 * @member {string} [uid]
 * @member {string} [source_modifier_uid]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [name]
 * @member {Money} [base_price_money]
 * @member {Money} [total_price_money]
 * @member {string} [quantity]
 */
interface OrderReturnLineItemModifier {
  uid? : string;
  source_modifier_uid? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  name? : string;
  base_price_money? : Money;
  total_price_money? : Money;
  quantity? : string;
};
/**
 * @interface OrderReturnServiceCharge
 * @member {string} [uid]
 * @member {string} [source_service_charge_uid]
 * @member {string} [name]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [percentage]
 * @member {Money} [amount_money]
 * @member {Money} [applied_money]
 * @member {Money} [total_money]
 * @member {Money} [total_tax_money]
 * @member {string} [calculation_phase]
 * @member {boolean} [taxable]
 * @member {OrderLineItemAppliedTax[]} [applied_taxes]
 * @member {string} [treatment_type]
 * @member {string} [scope]
 */
interface OrderReturnServiceCharge {
  uid? : string;
  source_service_charge_uid? : string;
  name? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  percentage? : string;
  amount_money? : Money;
  applied_money? : Money;
  total_money? : Money;
  total_tax_money? : Money;
  calculation_phase? : string;
  taxable? : boolean;
  applied_taxes? : OrderLineItemAppliedTax[];
  treatment_type? : string;
  scope? : string;
};
/**
 * @interface OrderReturnTax
 * @member {string} [uid]
 * @member {string} [source_tax_uid]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [name]
 * @member {string} [type]
 * @member {string} [percentage]
 * @member {Money} [applied_money]
 * @member {string} [scope]
 */
interface OrderReturnTax {
  uid? : string;
  source_tax_uid? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  name? : string;
  type? : string;
  percentage? : string;
  applied_money? : Money;
  scope? : string;
};
/**
 * @interface OrderReturnTip
 * @member {string} [uid]
 * @member {Money} [applied_money]
 * @member {string} [source_tender_uid]
 * @member {string} [source_tender_id]
 */
interface OrderReturnTip {
  uid? : string;
  applied_money? : Money;
  source_tender_uid? : string;
  source_tender_id? : string;
};
/**
 * @interface OrderReward
 * @member {string} id
 * @member {string} reward_tier_id
 */
interface OrderReward {
  id : string;
  reward_tier_id : string;
};
/**
 * @interface OrderRoundingAdjustment
 * @member {string} [uid]
 * @member {string} [name]
 * @member {Money} [amount_money]
 */
interface OrderRoundingAdjustment {
  uid? : string;
  name? : string;
  amount_money? : Money;
};
/**
 * @interface OrderServiceCharge
 * @member {string} [uid]
 * @member {string} [name]
 * @member {string} [catalog_object_id]
 * @member {number} [catalog_version]
 * @member {string} [percentage]
 * @member {Money} [amount_money]
 * @member {Money} [applied_money]
 * @member {Money} [total_money]
 * @member {Money} [total_tax_money]
 * @member {string} [calculation_phase]
 * @member {boolean} [taxable]
 * @member {OrderLineItemAppliedTax[]} [applied_taxes]
 * @member {string} [metadata]
 * @member {string} [type]
 * @member {string} [treatment_type]
 * @member {string} [scope]
 */
interface OrderServiceCharge {
  uid? : string;
  name? : string;
  catalog_object_id? : string;
  catalog_version? : number;
  percentage? : string;
  amount_money? : Money;
  applied_money? : Money;
  total_money? : Money;
  total_tax_money? : Money;
  calculation_phase? : string;
  taxable? : boolean;
  applied_taxes? : OrderLineItemAppliedTax[];
  metadata? : string;
  type? : string;
  treatment_type? : string;
  scope? : string;
};
/**
 * @interface OrderSource
 * @member {string} name
 */
interface OrderSource {
  name : string;
};
/**
 * @interface OrderUpdated
 * @member {string} [order_id]
 * @member {number} [version]
 * @member {string} [location_id]
 * @member {string} [state]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface OrderUpdated {
  order_id? : string;
  version? : number;
  location_id? : string;
  state? : string;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface OrderUpdatedObject
 * @member {OrderUpdated} [order_updated]
 */
interface OrderUpdatedObject {
  order_updated? : OrderUpdated;
};
/**
 * @interface PaginationCursor
 * @member {string} [order_value]
 */
interface PaginationCursor {
  order_value? : string;
};
/**
 * @interface Payment
 * @member {string} [id]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {Money} [amount_money]
 * @member {Money} [tip_money]
 * @member {Money} [total_money]
 * @member {Money} [app_fee_money]
 * @member {Money} [approved_money]
 * @member {ProcessingFee[]} [processing_fee]
 * @member {Money} [refunded_money]
 * @member {string} [status]
 * @member {string} [delay_duration]
 * @member {string} [delay_action]
 * @member {string} [delayed_until]
 * @member {string} [source_type]
 * @member {CardPaymentDetails} [card_details]
 * @member {CashPaymentDetails} [cash_details]
 * @member {BankAccountPaymentDetails} [bank_account_details]
 * @member {ExternalPaymentDetails} [external_details]
 * @member {DigitalWalletDetails} [wallet_details]
 * @member {BuyNowPayLaterDetails} [buy_now_pay_later_details]
 * @member {SquareAccountDetails} [square_account_details]
 * @member {string} [location_id]
 * @member {string} [order_id]
 * @member {string} [reference_id]
 * @member {string} [customer_id]
 * @member {string} [team_member_id]
 * @member {string[]} [refund_ids]
 * @member {RiskEvaluation} [risk_evaluation]
 * @member {string} [terminal_checkout_id]
 * @member {string} [buyer_email_address]
 * @member {Address} [billing_address]
 * @member {Address} [shipping_address]
 * @member {string} [note]
 * @member {string} [statement_description_identifier]
 * @member {string[]} [capabilities]
 * @member {string} [receipt_number]
 * @member {string} [receipt_url]
 * @member {DeviceDetails} [device_details]
 * @member {ApplicationDetails} [application_details]
 * @member {boolean} [is_offline_payment]
 * @member {OfflinePaymentDetails} [offline_payment_details]
 * @member {string} [version_token]
 */
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
  cash_details? : CashPaymentDetails;
  bank_account_details? : BankAccountPaymentDetails;
  external_details? : ExternalPaymentDetails;
  wallet_details? : DigitalWalletDetails;
  buy_now_pay_later_details? : BuyNowPayLaterDetails;
  square_account_details? : SquareAccountDetails;
  location_id? : string;
  order_id? : string;
  reference_id? : string;
  customer_id? : string;
  team_member_id? : string;
  refund_ids? : string[];
  risk_evaluation? : RiskEvaluation;
  terminal_checkout_id? : string;
  buyer_email_address? : string;
  billing_address? : Address;
  shipping_address? : Address;
  note? : string;
  statement_description_identifier? : string;
  capabilities? : string[];
  receipt_number? : string;
  receipt_url? : string;
  device_details? : DeviceDetails;
  application_details? : ApplicationDetails;
  is_offline_payment? : boolean;
  offline_payment_details? : OfflinePaymentDetails;
  version_token? : string;
};
/**
 * @interface PaymentBalanceActivityAppFeeRefundDetail
 * @member {string} [payment_id]
 * @member {string} [refund_id]
 * @member {string} [location_id]
 */
interface PaymentBalanceActivityAppFeeRefundDetail {
  payment_id? : string;
  refund_id? : string;
  location_id? : string;
};
/**
 * @interface PaymentBalanceActivityAppFeeRevenueDetail
 * @member {string} [payment_id]
 * @member {string} [location_id]
 */
interface PaymentBalanceActivityAppFeeRevenueDetail {
  payment_id? : string;
  location_id? : string;
};
/**
 * @interface PaymentBalanceActivityAutomaticSavingsDetail
 * @member {string} [payment_id]
 * @member {string} [payout_id]
 */
interface PaymentBalanceActivityAutomaticSavingsDetail {
  payment_id? : string;
  payout_id? : string;
};
/**
 * @interface PaymentBalanceActivityAutomaticSavingsReversedDetail
 * @member {string} [payment_id]
 * @member {string} [payout_id]
 */
interface PaymentBalanceActivityAutomaticSavingsReversedDetail {
  payment_id? : string;
  payout_id? : string;
};
/**
 * @interface PaymentBalanceActivityChargeDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityChargeDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityDepositFeeDetail
 * @member {string} [payout_id]
 */
interface PaymentBalanceActivityDepositFeeDetail {
  payout_id? : string;
};
/**
 * @interface PaymentBalanceActivityDepositFeeReversedDetail
 * @member {string} [payout_id]
 */
interface PaymentBalanceActivityDepositFeeReversedDetail {
  payout_id? : string;
};
/**
 * @interface PaymentBalanceActivityDisputeDetail
 * @member {string} [payment_id]
 * @member {string} [dispute_id]
 */
interface PaymentBalanceActivityDisputeDetail {
  payment_id? : string;
  dispute_id? : string;
};
/**
 * @interface PaymentBalanceActivityFeeDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityFeeDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityFreeProcessingDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityFreeProcessingDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityHoldAdjustmentDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityHoldAdjustmentDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityOpenDisputeDetail
 * @member {string} [payment_id]
 * @member {string} [dispute_id]
 */
interface PaymentBalanceActivityOpenDisputeDetail {
  payment_id? : string;
  dispute_id? : string;
};
/**
 * @interface PaymentBalanceActivityOtherAdjustmentDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityOtherAdjustmentDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityOtherDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityOtherDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityRefundDetail
 * @member {string} [payment_id]
 * @member {string} [refund_id]
 */
interface PaymentBalanceActivityRefundDetail {
  payment_id? : string;
  refund_id? : string;
};
/**
 * @interface PaymentBalanceActivityReleaseAdjustmentDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityReleaseAdjustmentDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityReserveHoldDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityReserveHoldDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityReserveReleaseDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityReserveReleaseDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivitySquareCapitalPaymentDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivitySquareCapitalPaymentDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivitySquareCapitalReversedPaymentDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivitySquareCapitalReversedPaymentDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivitySquarePayrollTransferDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivitySquarePayrollTransferDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivitySquarePayrollTransferReversedDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivitySquarePayrollTransferReversedDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityTaxOnFeeDetail
 * @member {string} [payment_id]
 * @member {string} [tax_rate_description]
 */
interface PaymentBalanceActivityTaxOnFeeDetail {
  payment_id? : string;
  tax_rate_description? : string;
};
/**
 * @interface PaymentBalanceActivityThirdPartyFeeDetail
 * @member {string} [payment_id]
 */
interface PaymentBalanceActivityThirdPartyFeeDetail {
  payment_id? : string;
};
/**
 * @interface PaymentBalanceActivityThirdPartyFeeRefundDetail
 * @member {string} [payment_id]
 * @member {string} [refund_id]
 */
interface PaymentBalanceActivityThirdPartyFeeRefundDetail {
  payment_id? : string;
  refund_id? : string;
};
/**
 * @interface PaymentLink
 * @member {string} [id]
 * @member {number} version
 * @member {string} [description]
 * @member {string} [order_id]
 * @member {CheckoutOptions} [checkout_options]
 * @member {PrePopulatedData} [pre_populated_data]
 * @member {string} [url]
 * @member {string} [long_url]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [payment_note]
 */
export interface PaymentLink {
  id? : string;
  version : number;
  description? : string;
  order_id? : string;
  checkout_options? : CheckoutOptions;
  pre_populated_data? : PrePopulatedData;
  url? : string;
  long_url? : string;
  created_at? : string;
  updated_at? : string;
  payment_note? : string;
};
/**
 * @interface PaymentLinkRelatedResources
 * @member {Order[]} [orders]
 * @member {CatalogObject[]} [subscription_plans]
 */
interface PaymentLinkRelatedResources {
  orders? : Order[];
  subscription_plans? : CatalogObject[];
};
/**
 * @interface PaymentOptions
 * @member {boolean} [autocomplete]
 * @member {string} [delay_duration]
 * @member {boolean} [accept_partial_authorization]
 * @member {string} [delay_action]
 */
interface PaymentOptions {
  autocomplete? : boolean;
  delay_duration? : string;
  accept_partial_authorization? : boolean;
  delay_action? : string;
};
/**
 * @interface PaymentRefund
 * @member {string} id
 * @member {string} [status]
 * @member {string} [location_id]
 * @member {boolean} [unlinked]
 * @member {string} [destination_type]
 * @member {DestinationDetails} [destination_details]
 * @member {Money} amount_money
 * @member {Money} [app_fee_money]
 * @member {ProcessingFee[]} [processing_fee]
 * @member {string} [payment_id]
 * @member {string} [order_id]
 * @member {string} [reason]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [team_member_id]
 * @member {string} [terminal_refund_id]
 */
interface PaymentRefund {
  id : string;
  status? : string;
  location_id? : string;
  unlinked? : boolean;
  destination_type? : string;
  destination_details? : DestinationDetails;
  amount_money : Money;
  app_fee_money? : Money;
  processing_fee? : ProcessingFee[];
  payment_id? : string;
  order_id? : string;
  reason? : string;
  created_at? : string;
  updated_at? : string;
  team_member_id? : string;
  terminal_refund_id? : string;
};
/**
 * @interface Payout
 * @member {string} id
 * @member {string} [status]
 * @member {string} location_id
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {Money} [amount_money]
 * @member {Destination} [destination]
 * @member {number} [version]
 * @member {string} [type]
 * @member {PayoutFee[]} [payout_fee]
 * @member {string} [arrival_date]
 * @member {string} [end_to_end_id]
 */
interface Payout {
  id : string;
  status? : string;
  location_id : string;
  created_at? : string;
  updated_at? : string;
  amount_money? : Money;
  destination? : Destination;
  version? : number;
  type? : string;
  payout_fee? : PayoutFee[];
  arrival_date? : string;
  end_to_end_id? : string;
};
/**
 * @interface PayoutEntry
 * @member {string} id
 * @member {string} payout_id
 * @member {string} [effective_at]
 * @member {string} [type]
 * @member {Money} [gross_amount_money]
 * @member {Money} [fee_amount_money]
 * @member {Money} [net_amount_money]
 * @member {PaymentBalanceActivityAppFeeRevenueDetail} [type_app_fee_revenue_details]
 * @member {PaymentBalanceActivityAppFeeRefundDetail} [type_app_fee_refund_details]
 * @member {PaymentBalanceActivityAutomaticSavingsDetail} [type_automatic_savings_details]
 * @member {PaymentBalanceActivityAutomaticSavingsReversedDetail} [type_automatic_savings_reversed_details]
 * @member {PaymentBalanceActivityChargeDetail} [type_charge_details]
 * @member {PaymentBalanceActivityDepositFeeDetail} [type_deposit_fee_details]
 * @member {PaymentBalanceActivityDepositFeeReversedDetail} [type_deposit_fee_reversed_details]
 * @member {PaymentBalanceActivityDisputeDetail} [type_dispute_details]
 * @member {PaymentBalanceActivityFeeDetail} [type_fee_details]
 * @member {PaymentBalanceActivityFreeProcessingDetail} [type_free_processing_details]
 * @member {PaymentBalanceActivityHoldAdjustmentDetail} [type_hold_adjustment_details]
 * @member {PaymentBalanceActivityOpenDisputeDetail} [type_open_dispute_details]
 * @member {PaymentBalanceActivityOtherDetail} [type_other_details]
 * @member {PaymentBalanceActivityOtherAdjustmentDetail} [type_other_adjustment_details]
 * @member {PaymentBalanceActivityRefundDetail} [type_refund_details]
 * @member {PaymentBalanceActivityReleaseAdjustmentDetail} [type_release_adjustment_details]
 * @member {PaymentBalanceActivityReserveHoldDetail} [type_reserve_hold_details]
 * @member {PaymentBalanceActivityReserveReleaseDetail} [type_reserve_release_details]
 * @member {PaymentBalanceActivitySquareCapitalPaymentDetail} [type_square_capital_payment_details]
 * @member {PaymentBalanceActivitySquareCapitalReversedPaymentDetail} [type_square_capital_reversed_payment_details]
 * @member {PaymentBalanceActivityTaxOnFeeDetail} [type_tax_on_fee_details]
 * @member {PaymentBalanceActivityThirdPartyFeeDetail} [type_third_party_fee_details]
 * @member {PaymentBalanceActivityThirdPartyFeeRefundDetail} [type_third_party_fee_refund_details]
 * @member {PaymentBalanceActivitySquarePayrollTransferDetail} [type_square_payroll_transfer_details]
 * @member {PaymentBalanceActivitySquarePayrollTransferReversedDetail} [type_square_payroll_transfer_reversed_details]
 */
interface PayoutEntry {
  id : string;
  payout_id : string;
  effective_at? : string;
  type? : string;
  gross_amount_money? : Money;
  fee_amount_money? : Money;
  net_amount_money? : Money;
  type_app_fee_revenue_details? : PaymentBalanceActivityAppFeeRevenueDetail;
  type_app_fee_refund_details? : PaymentBalanceActivityAppFeeRefundDetail;
  type_automatic_savings_details? : PaymentBalanceActivityAutomaticSavingsDetail;
  type_automatic_savings_reversed_details? : PaymentBalanceActivityAutomaticSavingsReversedDetail;
  type_charge_details? : PaymentBalanceActivityChargeDetail;
  type_deposit_fee_details? : PaymentBalanceActivityDepositFeeDetail;
  type_deposit_fee_reversed_details? : PaymentBalanceActivityDepositFeeReversedDetail;
  type_dispute_details? : PaymentBalanceActivityDisputeDetail;
  type_fee_details? : PaymentBalanceActivityFeeDetail;
  type_free_processing_details? : PaymentBalanceActivityFreeProcessingDetail;
  type_hold_adjustment_details? : PaymentBalanceActivityHoldAdjustmentDetail;
  type_open_dispute_details? : PaymentBalanceActivityOpenDisputeDetail;
  type_other_details? : PaymentBalanceActivityOtherDetail;
  type_other_adjustment_details? : PaymentBalanceActivityOtherAdjustmentDetail;
  type_refund_details? : PaymentBalanceActivityRefundDetail;
  type_release_adjustment_details? : PaymentBalanceActivityReleaseAdjustmentDetail;
  type_reserve_hold_details? : PaymentBalanceActivityReserveHoldDetail;
  type_reserve_release_details? : PaymentBalanceActivityReserveReleaseDetail;
  type_square_capital_payment_details? : PaymentBalanceActivitySquareCapitalPaymentDetail;
  type_square_capital_reversed_payment_details? : PaymentBalanceActivitySquareCapitalReversedPaymentDetail;
  type_tax_on_fee_details? : PaymentBalanceActivityTaxOnFeeDetail;
  type_third_party_fee_details? : PaymentBalanceActivityThirdPartyFeeDetail;
  type_third_party_fee_refund_details? : PaymentBalanceActivityThirdPartyFeeRefundDetail;
  type_square_payroll_transfer_details? : PaymentBalanceActivitySquarePayrollTransferDetail;
  type_square_payroll_transfer_reversed_details? : PaymentBalanceActivitySquarePayrollTransferReversedDetail;
};
/**
 * @interface PayoutFee
 * @member {Money} [amount_money]
 * @member {string} [effective_at]
 * @member {string} [type]
 */
interface PayoutFee {
  amount_money? : Money;
  effective_at? : string;
  type? : string;
};
/**
 * @interface Phase
 * @member {string} [uid]
 * @member {number} [ordinal]
 * @member {string} [order_template_id]
 * @member {string} [plan_phase_uid]
 */
interface Phase {
  uid? : string;
  ordinal? : number;
  order_template_id? : string;
  plan_phase_uid? : string;
};
/**
 * @interface PhaseInput
 * @member {number} ordinal
 * @member {string} [order_template_id]
 */
interface PhaseInput {
  ordinal : number;
  order_template_id? : string;
};
/**
 * @interface PrePopulatedData
 * @member {string} [buyer_email]
 * @member {string} [buyer_phone_number]
 * @member {Address} [buyer_address]
 */
interface PrePopulatedData {
  buyer_email? : string;
  buyer_phone_number? : string;
  buyer_address? : Address;
};
/**
 * @interface ProcessingFee
 * @member {string} [effective_at]
 * @member {string} [type]
 * @member {Money} [amount_money]
 */
interface ProcessingFee {
  effective_at? : string;
  type? : string;
  amount_money? : Money;
};
/**
 * @interface QrCodeOptions
 * @member {string} title
 * @member {string} body
 * @member {string} barcode_contents
 */
interface QrCodeOptions {
  title : string;
  body : string;
  barcode_contents : string;
};
/**
 * @interface QuantityRatio
 * @member {number} [quantity]
 * @member {number} [quantity_denominator]
 */
interface QuantityRatio {
  quantity? : number;
  quantity_denominator? : number;
};
/**
 * @interface QuickPay
 * @member {string} name
 * @member {Money} price_money
 * @member {string} location_id
 */
interface QuickPay {
  name : string;
  price_money : Money;
  location_id : string;
};
/**
 * @interface Range
 * @member {string} [min]
 * @member {string} [max]
 */
interface Range {
  min? : string;
  max? : string;
};
/**
 * @interface ReceiptOptions
 * @member {string} payment_id
 * @member {boolean} [print_only]
 * @member {boolean} [is_duplicate]
 */
interface ReceiptOptions {
  payment_id : string; 
  print_only? : boolean; 
  is_duplicate? : boolean; 
};
/**
 * @interface Refund
 * @member {string} id
 * @member {string} location_id
 * @member {string} [transaction_id]
 * @member {string} tender_id
 * @member {string} [created_at]
 * @member {string} reason
 * @member {Money} amount_money
 * @member {string} status
 * @member {Money} [processing_fee_money]
 */
interface Refund {
  id : string;
  location_id : string;
  transaction_id? : string;
  tender_id : string;
  created_at? : string;
  reason : string;
  amount_money : Money;
  status : string;
  processing_fee_money? : Money;
};
/**
 * @interface RiskEvaluation
 * @member {string} [created_at]
 * @member {string} [risk_level]
 */
interface RiskEvaluation {
  created_at? : string;
  risk_level? : string;
};
/**
 * @interface SaveCardOptions
 * @member {string} customer_id
 * @member {string} [card_id]
 * @member {string} [reference_id]
 */
interface SaveCardOptions {
  customer_id : string;
  card_id? : string;
  reference_id? : string;
};
/**
 * @interface SearchAvailabilityFilter
 * @member {TimeRange} start_at_range
 * @member {string} [location_id]
 * @member {SegmentFilter[]} [segment_filters]
 * @member {string} [booking_id]
 */
interface SearchAvailabilityFilter {
  start_at_range : TimeRange;
  location_id? : string;
  segment_filters? : SegmentFilter[];
  booking_id? : string;
};
/**
 * @interface SearchAvailabilityQuery
 * @member {SearchAvailabilityFilter} filter
 */
interface SearchAvailabilityQuery {
  filter : SearchAvailabilityFilter;
};
/**
 * @interface SearchEventsFilter
 * @member {string[]} [event_types]
 * @member {string[]} [merchant_ids]
 * @member {string[]} [location_ids]
 * @member {TimeRange} [created_at]
 */
interface SearchEventsFilter {
  event_types? : string[];
  merchant_ids? : string[];
  location_ids? : string[];
  created_at? : TimeRange;
};
/**
 * @interface SearchEventsQuery
 * @member {SearchEventsFilter} [filter]
 * @member {SearchEventsSort} [sort]
 */
interface SearchEventsQuery {
  filter? : SearchEventsFilter;
  sort? : SearchEventsSort;
};
/**
 * @interface SearchEventsSort
 * @member {string} [field]
 * @member {string} [order]
 */
interface SearchEventsSort {
  field? : string;
  order? : string;
};
/**
 * @interface SearchLoyaltyAccountsRequestLoyaltyAccountQuery
 * @member {LoyaltyAccountMapping[]} [mappings]
 * @member {string[]} [customer_ids]
 */
interface SearchLoyaltyAccountsRequestLoyaltyAccountQuery {
  mappings? : LoyaltyAccountMapping[];
  customer_ids? : string[];
};
/**
 * @interface SearchLoyaltyRewardsRequestLoyaltyRewardQuery
 * @member {string} loyalty_account_id
 * @member {string} [status]
 */
interface SearchLoyaltyRewardsRequestLoyaltyRewardQuery {
  loyalty_account_id : string;
  status? : string;
};
/**
 * @interface SearchOrdersCustomerFilter
 * @member {string[]} [customer_ids]
 */
interface SearchOrdersCustomerFilter {
  customer_ids? : string[];
};
/**
 * @interface SearchOrdersDateTimeFilter
 * @member {TimeRange} [created_at]
 * @member {TimeRange} [updated_at]
 * @member {TimeRange} [closed_at]
 */
interface SearchOrdersDateTimeFilter {
  created_at? : TimeRange;
  updated_at? : TimeRange;
  closed_at? : TimeRange;
};
/**
 * @interface SearchOrdersFilter
 * @member {SearchOrdersStateFilter} [state_filter]
 * @member {SearchOrdersDateTimeFilter} [date_time_filter]
 * @member {SearchOrdersFulfillmentFilter} [fulfillment_filter]
 * @member {SearchOrdersSourceFilter} [source_filter]
 * @member {SearchOrdersCustomerFilter} [customer_filter]
 */
interface SearchOrdersFilter  {
  state_filter? : SearchOrdersStateFilter;
  date_time_filter? : SearchOrdersDateTimeFilter;
  fulfillment_filter? : SearchOrdersFulfillmentFilter;
  source_filter? : SearchOrdersSourceFilter;
  customer_filter? : SearchOrdersCustomerFilter;
};
/**
 * @interface SearchOrdersFulfillmentFilter
 * @member {string[]} [fulfillment_types]
 * @member {string[]} [fulfillment_states]
 */
interface SearchOrdersFulfillmentFilter {
  fulfillment_types? : string[];
  fulfillment_states? : string[];
};
/**
 * @interface SearchOrdersQuery
 * @member {SearchOrdersFilter} [filter]
 * @member {SearchOrdersSort} [sort]
 */
interface SearchOrdersQuery {
  filter? : SearchOrdersFilter;
  sort? : SearchOrdersSort;
};
/**
 * @interface SearchOrdersSort
 * @member {string} sort_field
 * @member {string} [sort_order]
 */
interface SearchOrdersSort {
  sort_field : string;
  sort_order? : string;
};
/**
 * @interface SearchOrdersSourceFilter
 * @member {string[]} [source_names]
 */
interface SearchOrdersSourceFilter {
  source_names? : string[];
};
/**
 * @interface SearchOrdersStateFilter
 * @member {string[]} states
 */
interface SearchOrdersStateFilter {
  states : string[];
};
/**
 * @interface SearchSubscriptionsFilter
 * @member {string[]} [customer_ids]
 * @member {string[]} [location_ids]
 * @member {string[]} [source_names]
 */
interface SearchSubscriptionsFilter {
  customer_ids? : string[];
  location_ids? : string[];
  source_names? : string[];
};
/**
 * @interface SearchSubscriptionsQuery
 * @member {SearchSubscriptionsFilter} [filter]
 */
interface SearchSubscriptionsQuery {
  filter? : SearchSubscriptionsFilter;
};
/**
 * @interface SearchTeamMembersFilter
 * @member {string[]} [location_ids]
 * @member {string} [status]
 * @member {boolean} [is_owner]
 */
interface SearchTeamMembersFilter {
  location_ids? : string[];
  status? : string;
  is_owner? : boolean;
};
/**
 * @interface SearchTeamMembersQuery
 * @member {SearchTeamMembersFilter} [filter]
 */
interface SearchTeamMembersQuery {
  filter? : SearchTeamMembersFilter;
};
/**
 * @interface SearchVendorsRequestFilter
 * @member {string[]} [name]
 * @member {string[]} [status]
 */
interface SearchVendorsRequestFilter {
  name? : string[];
  status? : string[];
};
/**
 * @interface SearchVendorsRequestSort
 * @member {string} [field]
 * @member {string} [order]
 */
interface SearchVendorsRequestSort {
  field? : string;
  order? : string;
};
/**
 * @interface SegmentFilter
 * @member {string} service_variation_id
 * @member {FilterValue} [team_member_id_filter]
 */
interface SegmentFilter {
  service_variation_id : string;
  team_member_id_filter? : FilterValue;
};
/**
 * @interface SelectOption
 * @member {string} reference_id
 * @member {string} title
 */
interface SelectOption {
  reference_id : string;
  title : string;
};
/**
 * @interface SelectOptions
 * @member {string} title
 * @member {string} body
 * @member {SelectOption[]} options
 * @member {SelectOption} [selected_option]
 */
interface SelectOptions {
  title : string;
  body : string;
  options : SelectOption[];
  selected_option? : SelectOption;
};
/**
 * @interface Shift
 * @member {string} [id]
 * @member {string} location_id
 * @member {string} [timezone]
 * @member {string} start_at
 * @member {string} [end_at]
 * @member {ShiftWage} [wage]
 * @member {Break[]} [breaks]
 * @member {string} [status]
 * @member {number} [version]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [team_member_id]
 * @member {Money} [declared_cash_tip_money]
 */
interface Shift {
  id? : string;
  location_id : string;
  timezone? : string;
  start_at : string;
  end_at? : string;
  wage? : ShiftWage;
  breaks? : Break[];
  status? : string;
  version? : number;
  created_at? : string;
  updated_at? : string;
  team_member_id? : string;
  declared_cash_tip_money? : Money;
};
/**
 * @interface ShiftFilter
 * @member {string[]} [location_ids]
 * @member {string} [status]
 * @member {TimeRange} [start]
 * @member {TimeRange} [end]
 * @member {ShiftWorkday} [workday]
 * @member {string[]} [team_member_ids]
 */
interface ShiftFilter {
  location_ids? : string[];
  status? : string;
  start? : TimeRange;
  end? : TimeRange;
  workday? : ShiftWorkday;
  team_member_ids? : string[];
};
/**
 * @interface ShiftQuery
 * @member {ShiftFilter} [filter]
 * @member {ShiftSort} [sort]
 */
interface ShiftQuery {
  filter? : ShiftFilter;
  sort? : ShiftSort;
};
/**
 * @interface ShiftSort
 * @member {string} [field]
 * @member {string} [order]
 */
interface ShiftSort {
  field? : string;
  order? : string;
};
/**
 * @interface ShiftWage
 * @member {string} [title]
 * @member {Money} [hourly_rate]
 * @member {string} [job_id]
 * @member {boolean} [tip_eligible]
 */
interface ShiftWage {
  title? : string;
  hourly_rate? : Money;
  job_id? : string;
  tip_eligible? : boolean;
};
/**
 * @interface ShiftWorkday
 * @member {DateRange} [date_range]
 * @member {string} [match_shifts_by]
 * @member {string} [default_timezone]
 */
interface ShiftWorkday {
  date_range? : DateRange;
  match_shifts_by? : string;
  default_timezone? : string;
};
/**
 * @interface ShippingFee
 * @member {string} [name]
 * @member {Money} charge
 */
interface ShippingFee {
  name? : string;
  charge : Money;
};
/**
 * @interface SignatureImage
 * @member {string} [image_type]
 * @member {string} [data]
 */
interface SignatureImage {
  image_type? : string;
  data? : string;
};
/**
 * @interface SignatureOptions
 * @member {string} title
 * @member {string} body
 * @member {SignatureImage[]} [signature]
 */
interface SignatureOptions {
  title : string;
  body : string;
  signature? : SignatureImage[];
};
/**
 * @interface Site
 * @member {string} [id]
 * @member {string} [site_title]
 * @member {string} [domain]
 * @member {boolean} [is_published]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface Site {
  id? : string;
  site_title? : string;
  domain? : string;
  is_published? : boolean;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface Snippet
 * @member {string} [id]
 * @member {string} [site_id]
 * @member {string} content
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface Snippet {
  id? : string;
  site_id? : string;
  content : string;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface SourceApplication
 * @member {string} [product]
 * @member {string} [application_id]
 * @member {string} [name]
 */
interface SourceApplication {
  product? : string;
  application_id? : string;
  name? : string;
};
/**
 * @interface SquareAccountDetails
 * @member {string} [payment_source_token]
 * @member {Error[]} [errors]
 */
interface SquareAccountDetails {
  payment_source_token? : string;
  errors? : Error[];
};
/**
 * @interface StandardUnitDescription
 * @member {MeasurementUnit} [unit]
 * @member {string} [name]
 * @member {string} [abbreviation]
 */
interface StandardUnitDescription {
  unit? : MeasurementUnit;
  name? : string;
  abbreviation? : string;
};
/**
 * @interface StandardUnitDescriptionGroup
 * @member {StandardUnitDescription[]} [standard_unit_descriptions]
 * @member {string} [language_code]
 */
interface StandardUnitDescriptionGroup {
  standard_unit_descriptions? : StandardUnitDescription[];
  language_code? : string;
};
/**
 * @interface Subscription
 * @member {string} [id]
 * @member {string} [location_id]
 * @member {string} [plan_variation_id]
 * @member {string} [customer_id]
 * @member {string} [start_date]
 * @member {string} [canceled_date]
 * @member {string} [charged_through_date]
 * @member {string} [status]
 * @member {string} [tax_percentage]
 * @member {string[]} [invoice_ids]
 * @member {Money} [price_override_money]
 * @member {number} [version]
 * @member {string} [created_at]
 * @member {string} [card_id]
 * @member {string} [timezone]
 * @member {SubscriptionSource} [source]
 * @member {SubscriptionAction[]} [actions]
 * @member {number} [monthly_billing_anchor_date]
 * @member {Phase[]} [phases]
 */
interface Subscription {
  id? : string;
  location_id? : string;
  plan_variation_id? : string;
  customer_id? : string;
  start_date? : string;
  canceled_date? : string;
  charged_through_date? : string;
  status? : string;
  tax_percentage? : string;
  invoice_ids? : string[];
  price_override_money? : Money;
  version? : number;
  created_at? : string;
  card_id? : string;
  timezone? : string;
  source? : SubscriptionSource;
  actions? : SubscriptionAction[];
  monthly_billing_anchor_date? : number;
  phases? : Phase[];
};
/**
 * @interface SubscriptionAction
 * @member {string} [id]
 * @member {string} [type]
 * @member {string} [effective_date]
 * @member {number} [monthly_billing_anchor_date]
 * @member {Phase[]} [phases]
 * @member {string} [new_plan_variation_id]
 */
interface SubscriptionAction {
  id? : string;
  type? : string;
  effective_date? : string;
  monthly_billing_anchor_date? : number;
  phases? : Phase[];
  new_plan_variation_id? : string;
};
/**
 * @interface SubscriptionEvent
 * @member {string} id
 * @member {string} subscription_event_type
 * @member {string} effective_date
 * @member {number} [monthly_billing_anchor_date]
 * @member {SubscriptionEventInfo} [info]
 * @member {Phase[]} [phases]
 * @member {string} plan_variation_id
 */
interface SubscriptionEvent {
  id : string;
  subscription_event_type : string;
  effective_date : string;
  monthly_billing_anchor_date? : number;
  info? : SubscriptionEventInfo;
  phases? : Phase[];
  plan_variation_id : string;
};
/**
 * @interface SubscriptionEventInfo
 * @member {string} [detail]
 * @member {string} [code]
 */
interface SubscriptionEventInfo {
  detail? : string;
  code? : string;
};
/**
 * @interface SubscriptionPhase
 * @member {string} [uid]
 * @member {string} cadence
 * @member {number} [periods]
 * @member {Money} [recurring_price_money]
 * @member {number} [ordinal]
 * @member {SubscriptionPricing} [pricing]
 */
interface SubscriptionPhase {
  uid? : string;
  cadence : string;
  periods? : number;
  recurring_price_money? : Money;
  ordinal? : number;
  pricing? : SubscriptionPricing;
};
/**
 * @interface SubscriptionPricing
 * @member {string} [type]
 * @member {string[]} [discount_ids]
 * @member {Money} [price_money]
 */
interface SubscriptionPricing {
  type? : string;
  discount_ids? : string[];
  price_money? : Money;
};
/**
 * @interface SubscriptionSource
 * @member {string} [name]
 */
interface SubscriptionSource {
  name? : string;
};
/**
 * @interface SubscriptionTestResult
 * @member {string} [id]
 * @member {number} [status_code]
 * @member {string} [payload]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface SubscriptionTestResult {
  id? : string;
  status_code? : number;
  payload? : string;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface TaxIds
 * @member {string} [eu_vat]
 * @member {string} [fr_siret]
 * @member {string} [fr_naf]
 * @member {string} [es_nif]
 * @member {string} [jp_qii]
 */
interface TaxIds {
  eu_vat? : string;
  fr_siret? : string;
  fr_naf? : string;
  es_nif? : string;
  jp_qii? : string;
};
/**
 * @interface TeamMember
 * @member {string} [id]
 * @member {string} [reference_id]
 * @member {boolean} [is_owner]
 * @member {string} [status]
 * @member {string} [given_name]
 * @member {string} [family_name]
 * @member {string} [email_address]
 * @member {string} [phone_number]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {TeamMemberAssignedLocations} [assigned_locations]
 */
interface TeamMember {
  id? : string;
  reference_id? : string;
  is_owner? : boolean;
  status? : string;
  given_name? : string;
  family_name? : string;
  email_address? : string;
  phone_number? : string;
  created_at? : string;
  updated_at ? : string;
  assigned_locations? : TeamMemberAssignedLocations;
};
/**
 * @interface TeamMemberAssignedLocations
 * @member {string} [assignment_type]
 * @member {string[]} [location_ids]
 */
interface TeamMemberAssignedLocations {
  assignment_type? : string;
  location_ids? : string[];
};
/**
 * @interface TeamMemberBookingProfile
 * @member {string} [team_member_id]
 * @member {string} [description]
 * @member {string} [display_name]
 * @member {boolean} [is_bookable]
 * @member {string} [profile_image_url]
 */
interface TeamMemberBookingProfile {
  team_member_id? : string;
  description? : string;
  display_name? : string;
  is_bookable? : boolean;
  profile_image_url? : string;
};
/**
 * @interface TeamMemberWage
 * @member {string} [id]
 * @member {string} [team_member_id]
 * @member {string} [title]
 * @member {Money} [hourly_rate]
 * @member {string} [job_id]
 * @member {boolean} [tip_eligible]
 */
interface TeamMemberWage {
  id? : string;
  team_member_id? : string;
  title? : string;
  hourly_rate? : Money;
  job_id? : string;
  tip_eligible? : boolean;
};
/**
 * @interface Tender
 * @member {string} [id]
 * @member {string} [location_id]
 * @member {string} [transaction_id]
 * @member {string} [created_at]
 * @member {string} [note]
 * @member {Money} [amount_money]
 * @member {Money} [tip_money]
 * @member {Money} [processing_fee_money]
 * @member {string} [customer_id]
 * @member {string} type
 * @member {TenderCardDetails} [card_details]
 * @member {TenderCashDetails} [cash_details]
 * @member {TenderBankAccountDetails} [bank_account_details]
 * @member {TenderBuyNowPayLaterDetails} [buy_now_pay_later_details]
 * @member {TenderSquareAccountDetails} [square_account_details]
 * @member {string} [payment_id]
 */
interface Tender {
  id? : string;
  location_id? : string;
  transaction_id? : string;
  created_at? : string;
  note? : string;
  amount_money? : Money;
  tip_money? : Money;
  processing_fee_money? : Money;
  customer_id? : string;
  type : string;
  card_details? : TenderCardDetails;
  cash_details? : TenderCashDetails;
  bank_account_details? : TenderBankAccountDetails;
  buy_now_pay_later_details? : TenderBuyNowPayLaterDetails;
  square_account_details? : TenderSquareAccountDetails;
  payment_id? : string;
};
/**
 * @interface TenderBankAccountDetails
 * @member {string} [status]
 */
interface TenderBankAccountDetails {
  status? : string;
};
/**
 * @interface TenderBuyNowPayLaterDetails
 * @member {string} [buy_now_pay_later_brand]
 * @member {string} [status]
 */
interface TenderBuyNowPayLaterDetails {
  buy_now_pay_later_brand? : string;
  status? : string;
};
/**
 * @interface TenderCardDetails
 * @member {string} [status]
 * @member {Card} [card]
 * @member {string} [entry_method]
 */
interface TenderCardDetails {
  status? : string;
  card? : Card;
  entry_method? : string;
};
/**
 * @interface TenderCashDetails
 * @member {Money} [buyer_tendered_money]
 * @member {Money} [change_back_money]
 */
interface TenderCashDetails {
  buyer_tendered_money? : Money;
  change_back_money? : Money;
};
/**
 * @interface TenderSquareAccountDetails
 * @member {string} [status]
 */
interface TenderSquareAccountDetails {
  status? : string;
};
/**
 * @interface TerminalAction
 * @member {string} [id]
 * @member {string} [device_id]
 * @member {string} [deadline_duration]
 * @member {string} [status]
 * @member {string} [cancel_reason]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [app_id]
 * @member {string} [location_id]
 * @member {string} [type]
 * @member {QrCodeOptions} [qr_code_options]
 * @member {SaveCardOptions} [save_card_options]
 * @member {SignatureOptions} [signature_options]
 * @member {ConfirmationOptions} [confirmation_options]
 * @member {ReceiptOptions} [receipt_options]
 * @member {DataCollectionOptions} [data_collection_options]
 * @member {SelectOptions} [select_options]
 * @member {DeviceMetadata} [device_metadata]
 * @member {boolean} [await_next_action]
 * @member {string} [await_next_action_duration]
 */
interface TerminalAction {
  id? : string;
  device_id? : string;
  deadline_duration? : string;
  status? : string;
  cancel_reason? : string;
  created_at? : string;
  updated_at? : string;
  app_id? : string;
  location_id? : string;
  type? : string;
  qr_code_options? : QrCodeOptions;
  save_card_options? : SaveCardOptions;
  signature_options? : SignatureOptions;
  confirmation_options? : ConfirmationOptions;
  receipt_options? : ReceiptOptions;
  data_collection_options? : DataCollectionOptions;
  select_options? : SelectOptions;
  device_metadata? : DeviceMetadata;
  await_next_action? : boolean;
  await_next_action_duration? : string;
};
/**
 * @interface TerminalActionQuery
 * @member {TerminalActionQueryFilter} [filter]
 * @member {TerminalActionQuerySort} [sort]
 */
interface TerminalActionQuery {
  filter? : TerminalActionQueryFilter;
  sort? : TerminalActionQuerySort;
};
/**
 * @interface TerminalActionQueryFilter
 * @member {string} [device_id]
 * @member {TimeRange} [created_at]
 * @member {string} [status]
 * @member {string} [type]
 */
interface TerminalActionQueryFilter {
  device_id? : string;
  created_at? : TimeRange;
  status? : string;
  type? : string;
};
/**
 * @interface TerminalActionQuerySort
 * @member {string} [sort_order]
 */
interface TerminalActionQuerySort {
  sort_order? : string;
};
/**
 * @interface TerminalCheckout
 * @member {string} [id]
 * @member {Money} amount_money
 * @member {string} [reference_id]
 * @member {string} [note]
 * @member {string} [order_id]
 * @member {PaymentOptions} [payment_options]
 * @member {DeviceCheckoutOptions} device_options
 * @member {string} [status]
 * @member {string} [cancel_reason]
 * @member {string[]} [payment_ids]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [app_id]
 * @member {string} [location_id]
 * @member {string} [payment_type]
 * @member {string} [team_member_id]
 * @member {string} [customer_id]
 * @member {Money} [app_fee_money]
 * @member {string} [statement_description_identifier]
 * @member {Money} [tip_money]
 */
interface TerminalCheckout {
  id? : string;
  amount_money : Money;
  reference_id? : string;
  note? : string;
  order_id? : string;
  payment_options? : PaymentOptions;
  device_options : DeviceCheckoutOptions;
  status? : string;
  cancel_reason? : string;
  payment_ids? : string[];
  created_at? : string;
  updated_at? : string;
  app_id? : string;
  location_id? : string;
  payment_type? : string;
  team_member_id? : string;
  customer_id? : string;
  app_fee_money? : Money;
  statement_description_identifier? : string;
  tip_money? : Money;
};
/**
 * @interface TerminalCheckoutQuery
 * @member {TerminalCheckoutQueryFilter} [filter]
 * @member {TerminalCheckoutQuerySort} [sort]
 */
interface TerminalCheckoutQuery {
  filter? : TerminalCheckoutQueryFilter;
  sort? : TerminalCheckoutQuerySort;
};
/**
 * @interface TerminalCheckoutQueryFilter
 * @member {string} [device_id]
 * @member {TimeRange} [created_at]
 * @member {string} [status]
 */
interface TerminalCheckoutQueryFilter {
  device_id? : string;
  created_at? : TimeRange;
  status? : string;
};
/**
 * @interface TerminalCheckoutQuerySort
 * @member {string} [sort_order]
 */
interface TerminalCheckoutQuerySort {
  sort_order? : string;
};
/**
 * @interface TerminalRefund
 * @member {string} [id]
 * @member {string} [refund_id]
 * @member {string} payment_id
 * @member {string} [order_id]
 * @member {Money} amount_money
 * @member {string} reason
 * @member {string} device_id
 * @member {string} [deadline_duration]
 * @member {string} [status]
 * @member {string} [cancel_reason]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [app_id]
 * @member {string} [location_id]
 */
interface TerminalRefund {
  id? : string;
  refund_id? : string;
  payment_id : string;
  order_id? : string;
  amount_money : Money;
  reason : string;
  device_id : string;
  deadline_duration? : string;
  status? : string;
  cancel_reason? : string;
  created_at? : string;
  updated_at? : string;
  app_id? : string;
  location_id? : string;
};
/**
 * @interface TerminalRefundQuery
 * @member {TerminalRefundQueryFilter} [filter]
 * @member {TerminalRefundQuerySort} [sort]
 */
interface TerminalRefundQuery {
  filter? : TerminalRefundQueryFilter;
  sort? : TerminalRefundQuerySort;
};
/**
 * @interface TerminalRefundQueryFilter
 * @member {string} [device_id]
 * @member {TimeRange} [created_at]
 * @member {string} [status]
 */
interface TerminalRefundQueryFilter {
  device_id? : string;
  created_at? : TimeRange;
  status? : string;
};
/**
 * @interface TerminalRefundQuerySort
 * @member {string} [sort_order]
 */
interface TerminalRefundQuerySort {
  sort_order? : string;
};
/**
 * @interface TimeRange
 * @member {string} [start_at]
 * @member {string} [end_at]
 */
interface TimeRange {
  start_at? : string;
  end_at? : string;
};
/**
 * @interface TipSettings
 * @member {boolean} [allow_tipping]
 * @member {boolean} [separate_tip_screen]
 * @member {boolean} [custom_tip_field]
 * @member {string[]} [tip_percentages]
 * @member {boolean} [smart_tipping]
 */
interface TipSettings {
  allow_tipping? : boolean;
  separate_tip_screen? : boolean;
  custom_tip_field? : boolean;
  tip_percentages? : string[];
  smart_tipping? : boolean;
};
/**
 * @interface UpdateVendorRequest
 * @member {string} [idempotency_key]
 * @member {Vendor} vendor
 */
interface UpdateVendorRequest {
  idempotency_key ? : string;
  vendor : Vendor;
};
/**
 * @interface Vendor
 * @member {string} [id]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 * @member {string} [name]
 * @member {Address} [address]
 * @member {VendorContact[]} [contacts]
 * @member {string} [account_number]
 * @member {string} [note]
 * @member {number} [version]
 * @member {string} [status]
 */
interface Vendor {
  id? : string;
  created_at? : string;
  updated_at? : string;
  name? : string;
  address? : Address;
  contacts? : VendorContact[];
  account_number? : string;
  note? : string;
  version? : number;
  status? : string;
};
/**
 * @interface VendorContact
 * @member {string} [id]
 * @member {string} [name]
 * @member {string} [email_address]
 * @member {string} [phone_number]
 * @member {boolean} [removed]
 * @member {number} ordinal
 */
interface VendorContact {
  id? : string;
  name? : string;
  email_address? : string;
  phone_number? : string;
  removed? : boolean;
  ordinal : number;
};
/**
 * @interface WageSetting
 * @member {string} [errors]
 * @member {string} [status]
 */
interface WageSetting {
  errors? : string;
  status? : string;
};
/**
 * @interface WebhookSubscription
 * @member {string} [id]
 * @member {string} [name]
 * @member {boolean} [enabled]
 * @member {string[]} [event_types]
 * @member {string} [notification_url]
 * @member {string} [api_version]
 * @member {string} [signature_key]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface WebhookSubscription {
  id? : string;
  name? : string;
  enabled? : boolean;
  event_types? : string[];
  notification_url? : string;
  api_version? : string;
  signature_key? : string;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface WorkweekConfig
 * @member {string} [id]
 * @member {string} start_of_week
 * @member {string} start_of_day_local_time
 * @member {number} [version]
 * @member {string} [created_at]
 * @member {string} [updated_at]
 */
interface WorkweekConfig {
  id? : string;
  start_of_week : string;
  start_of_day_local_time : string;
  version? : number;
  created_at? : string;
  updated_at? : string;
};
/**
 * @interface CreateTeamMemberRequest
 * @member {string} [idempotency_key]
 * @member {TeamMember} team_member
 */
interface CreateTeamMemberRequest {
  idempotency_key? : string;
  team_member? : TeamMember;
};
/**
 * @interface UpdateTeamMemberRequest
 * @member {TeamMember} [team_member]
 */
interface UpdateTeamMemberRequest {
  team_member? : TeamMember;
};
/**
 * @interface BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest
 * @member {string} [key]
 */
interface BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest {
  key? : string;
};
/**
 * @interface BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest
 * @member {string} merchant_id
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
interface BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest {
  merchant_id : string;
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest
 * @member {string} [key]
 */
interface BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest {
  key? : string;
};
/**
 * @interface BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest
 * @member {string} location_id
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
interface BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest {
  location_id : string;
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};


/**
 * @interface AccumulateLoyaltyPointsBody
 * @member {LoyaltyEventAccumulatePoints} accumulate_points
 * @member {string} idempotency_key
 * @member {string} location_id
 */
export interface AccumulateLoyaltyPointsBody {
  accumulate_points : LoyaltyEventAccumulatePoints;
  idempotency_key : string;
  location_id : string;
};
/**
 * @interface AdjustLoyaltyPointsBody
 * @member {string} idempotency_key
 * @member {LoyaltyEventAdjustPoints} adjust_points
 * @member {boolean} [allow_negative_balance]
 */
export interface AdjustLoyaltyPointsBody {
  idempotency_key : string;
  adjust_points : LoyaltyEventAdjustPoints;
  allow_negative_balance? : boolean;
};
/**
 * @interface BatchChangeInventoryBody
 * @member {string} idempotency_key
 * @member {InventoryChange[]} [changes]
 * @member {boolean} [ignore_unchanged_counts]
 */
export interface BatchChangeInventoryBody {
  idempotency_key : string;
  changes? : InventoryChange[];
  ignore_unchanged_counts? : boolean;
};
/**
 * @interface BatchDeleteCatalogObjectsBody
 * @member {string[]} [object_ids]
 */
export interface BatchDeleteCatalogObjectsBody {
  object_ids? : string[];
};
/**
 * @interface BatchGetInventoryChangesBody
 * @member {string[]} [catalog_object_ids]
 * @member {string[]} [location_ids]
 * @member {string[]} [types]
 * @member {string[]} [states]
 * @member {string} [updated_after]
 * @member {string} [updated_before]
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface BatchGetInventoryChangesBody {
  catalog_object_ids? : string[];
  location_ids? : string[];
  types? : string[];
  states? : string[];
  updated_after? : string;
  updated_before? : string;
  cursor? : string;
  limit? : number;
};
/**
 * @interface BatchGetInventoryCountsBody
 * @member {string[]} [catalog_object_ids]
 * @member {string[]} [location_ids]
 * @member {string} [updated_after]
 * @member {string} [cursor]
 * @member {string} [states]
 * @member {number} [limit]
 */
export interface BatchGetInventoryCountsBody {
  catalog_object_ids? : string[];
  location_ids? : string[];
  updated_after? : string;
  cursor? : string;
  states? : string;
  limit? : number;
};
/**
 * @interface BatchRetrieveCatalogObjectsBody
 * @member {string[]} object_ids
 * @member {boolean} [include_related_objects]
 * @member {number} [catalog_version]
 * @member {boolean} [include_deleted_objects]
 * @member {boolean} [include_category_path_to_root]
 */
export interface BatchGetCatalogObjectsBody {
  object_ids : string[];
  include_related_objects? : boolean;
  catalog_version? : number;
  include_deleted_objects? : boolean;
  include_category_path_to_root? : boolean;
};
/**
 * @interface BatchGetOrdersBody
 * @member {string} [location_id]
 * @member {string[]} order_ids
 */
export interface BatchGetOrdersBody {
  location_id? : string;
  order_ids : string[];
};
/**
 * @interface BatchUpsertCatalogObjectsBody
 * @member {string} idempotency_key
 * @member {CatalogObjectBatch[]} batches
 */
export interface BatchUpsertCatalogObjectsBody {
  idempotency_key : string;
  batches : CatalogObjectBatch[];
};
/**
 * @interface BulkCreateCustomersBody
 * @member {Map<string, BulkCreateCustomerData>[]} customers
 */
export interface BulkCreateCustomersBody {
  customers : Map<string, BulkCreateCustomerData>[] ;
};
/**
 * @interface BulkCreateVendorsBody
 * @member {Map<string, Vendor>[]} vendors
 */
export interface BulkCreateVendorsBody {
  vendors : Map<string, Vendor>[];
};
/**
 * @interface BulkDeleteBookingCustomAttributesBody
 * @member {Map<string, BookingCustomAttributeDeleteRequest>[]} values
 */
export interface BulkDeleteBookingCustomAttributesBody {
  values : Map<string, BookingCustomAttributeDeleteRequest>[];
};
/**
 * @interface BulkDeleteCatalogObjectBody
 * @member {string[]} object_ids
 */
export interface BulkDeleteCustomersBody {
  customer_ids : string[];
};
/**
 * @interface BulkDeleteOrderCustomAttributesBody
 * @member {Map<string, BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute>[]} values
 */
export interface BulkDeleteOrderCustomAttributesBody {
  values : Map<string, BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute>[];
};
/**
 * @interface BulkGetBookingsBody
 * @member {string[]} booking_ids
 */
export interface BulkGetBookingsBody {
  booking_ids : string[];
};
/**
 * @interface BulkGetCustomersBody
 * @member {string[]} customer_ids
 */
export interface BulkGetCustomersBody {
  customer_ids : string[];
};
/**
 * @interface BulkGetTeamMemberBookingProfilesBody
 * @member {string[]} team_member_ids
 */
export interface BulkGetTeamMemberBookingProfilesBody {
  team_member_ids : string[];
};
/**
 * @interface BulkGetVendorsBody
 * @member {string[]} [vendor_ids]
 */
export interface BulkGetVendorsBody{
  vendor_ids? : string[];
};
/**
 * @interface BulkSwapPlanBody
 * @member {string} new_plan_variation_id
 * @member {string} old_plan_variation_id
 * @member {string} location_id
 */
export interface BulkSwapPlanBody {
  new_plan_variation_id : string;
  old_plan_variation_id : string;
  location_id : string;
};
/**
 * @interface BulkUpdateCustomersBody
 * @member {Map<string, BulkUpdateCustomerData>[]} customers
 */
export interface BulkUpdateCustomersBody {
  customers : Map<string, BulkUpdateCustomerData>[];
};
/**
 * @interface BulkUpdateVendorsBody
 * @member {Map<string, UpdateVendorRequest>[]} vendors
 */
export interface BulkUpdateVendorsBody {
  vendors : Map<string, UpdateVendorRequest>[];
};
/**
 * @interface BulkUpsertBookingCustomAttributesBody
 * @member {Map<string, BookingCustomAttributeUpsertRequest>[]} values
 */
export interface BulkUpsertBookingCustomAttributesBody {
  values : Map<string, BookingCustomAttributeUpsertRequest>[];
};
/**
 * @interface BulkUpsertCustomerCustomAttributesBody
 * @member {Map<string, BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>[]} values
 */
export interface BulkUpsertCustomerCustomAttributesBody {
  values : Map<string, BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>[];
};
/**
 * @interface BulkUpsertOrderCustomAttributesBody
 * @member {Map<string, BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>[]} values
 */
export interface BulkUpsertOrderCustomAttributesBody {
  values : Map<string, BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>[];
};
/**
 * @interface CalculateLoyaltyPointsBody
 * @member {string} [order_id]
 * @member {Money} [transaction_amount_money]
 * @member {string} [loyalty_account_id]
 */
export interface CalculateLoyaltyPointsBody {
  order_id? : string;
  transaction_amount_money? : Money;
  loyalty_account_id? : string;
};
/**
 * @interface CreateLoyaltyPromotionBody
 * @member {LoyaltyPromotion} loyalty_promotion
 * @member {string} idempotency_key
 */
export interface CreateLoyaltyPromotionBody {
  loyalty_promotion : LoyaltyPromotion;
  idempotency_key : string;
};
/**
 * @interface CreateLoyaltyRewardBody
 * @member {LoyaltyReward} reward
 * @member {string} idempotency_key
 */
export interface CreateLoyaltyRewardBody {
  reward : LoyaltyReward;
  idempotency_key : string;
};
/**
 * @interface CalculateOrderBody
 * @member {Order} order
 * @member {OrderReward[]} [proposed_rewards]
 */
export interface CalculateOrderBody {
  order : Order;
  proposed_rewards? : OrderReward[];
};
/**
 * @interface CancelBookingBody
 * @member {string} [idempotency_key]
 * @member {number} [booking_version]
 */
export interface CancelBookingBody {
  idempotency_key? : string;
  booking_version? : number;
};
/**
 * @interface CreateBreakTypeBody
 * @member {string} [idempotency_key]
 * @member {BreakType} break_type
 */
export interface CreateBreakTypeBody {
  idempotency_key? : string;
  break_type : BreakType;
};
/**
 * @interface CancelPaymentBody
 * @member {string} idempotency_key
 */
export interface CancelPaymentBody {
  idempotency_key : string;
};
/**
 * @interface ChangeBillingAnchorDateBody
 * @member {number} [monthly_billing_anchor_date]
 * @member {string} [effective_date]
 */
export interface ChangeBillingAnchorDateBody {
  monthly_billing_anchor_date? : number;
  effective_date? : string;
};
/**
 * @interface CloneOrderBody
 * @member {string} order_id
 * @member {number} [version]
 * @member {string} [idempotency_key]
 */
export interface CloneOrderBody {
  order_id : string;
  version? : number;
  idempotency_key? : string;
};
/**
 * @interface CompletePaymentBody
 * @member {string} [version_token]
 */
export interface CompletePaymentBody {
  version_token? : string;
};
/**
 * @interface CreateBookingBody
 * @member {string} [idempotency_key]
 * @member {Booking} booking
 */
export interface CreateBookingBody {
  idempotency_key? : string;
  booking : Booking;
};
/**
 * @interface CreateBookingCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface CreateBookingCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface CreateCardBody
 * @member {string} idempotency_key
 * @member {string} source_id
 * @member {string} [verification_token]
 * @member {Card} card
 */
export interface CreateCardBody {
  idempotency_key : string;
  source_id : string;
  verification_token? : string;
  card : Card;
};
/**
 * @interface CreateCatalogImageBody
 * @member {string} idempotency_key
 * @member {string} [object_id]
 * @member {CatalogObject} image
 * @member {boolean} [is_primary]
 */
export interface CreateCatalogImageBody {
  idempotency_key : string;
  object_id? : string;
  image : CatalogObject;
  is_primary? : boolean;
};
/**
 * @interface CreateCustomerBody
 * @member {string} [idempotency_key]
 * @member {string} [given_name]
 * @member {string} [family_name]
 * @member {string} [company_name]
 * @member {string} [nickname]
 * @member {string} [email_address]
 * @member {Address} [address]
 * @member {string} [phone_number]
 * @member {string} [reference_id]
 * @member {string} [note]
 * @member {string} [birthday]
 * @member {CustomerTaxIds} [tax_ids]
 */
export interface CreateCustomerBody {
  idempotency_key? : string;
  given_name? : string;
  family_name? : string;
  company_name? : string;
  nickname? : string;
  email_address? : string;
  address? : Address;
  phone_number? : string;
  reference_id? : string;
  note? : string;
  birthday? : string;
  tax_ids? : CustomerTaxIds;
};
/**
 * @interface CreateCustomerCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface CreateCustomerCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface CreateCustomerGroupBody
 * @member {string} [idempotency_key]
 * @member {CustomerGroup} group
 */
export interface CreateCustomerGroupBody {
  idempotency_key? : string;
  group : CustomerGroup;
};
/**
 * @interface CreateDeviceCodeBody
 * @member {string} idempotency_key
 * @member {DeviceCode} device_code
 */
export interface CreateDeviceCodeBody {
  idempotency_key : string;
  device_code : DeviceCode;
};
/**
 * @interface CreateDisputeEvidenceFileBody
 * @member {string} idempotency_key
 * @member {string} [evidence_type]
 * @member {string} [content_type]
 */
export interface CreateDisputeEvidenceFileBody {
  idempotency_key : string;
  evidence_type? : string;
  content_type? : string;
};
/**
 * @interface CreateDisputeEvidenceTextBody
 * @member {string} idempotency_key
 * @member {string} evidence_type
 * @member {string} evidence_text
 */
export interface CreateDisputeEvidenceTextBody {
  idempotency_key : string;
  evidence_type : string;
  evidence_text : string;
};
/**
 * @interface CreateGiftCardActivityBody
 * @member {string} idempotency_key
 * @member {GiftCardActivity} gift_card_activity
 */
export interface CreateGiftCardActivityBody {
  idempotency_key : string;
  gift_card_activity : GiftCardActivity
};
/**
 * @interface CreateGiftCardBody
 * @member {string} idempotency_key
 * @member {string} location_id
 * @member {GiftCard} gift_card
 */
export interface CreateGiftCardBody {
  idempotency_key : string;
  location_id : string;
  gift_card : GiftCard;
};
/**
 * @interface CreateInvoiceAttachmentBody
 * @member {string} [idempotency_key]
 * @member {string} [description]
 */
export interface CreateInvoiceAttachmentBody {
  idempotency_key? : string;
  description? : string;
};
/**
 * @interface CreateInvoiceBody
 * @member {Invoice} invoice
 * @member {string} [idempotency_key]
 */
export interface CreateInvoiceBody {
  invoice : Invoice;
  idempotency_key? : string;
};
/**
 * @interface CreateMobileAuthorizationCodeBody
 * @member {string} location_id
 */
export interface CreateMobileAuthorizationCodeBody {
  location_id : string
};
/**
 * @interface CreateOrderBody
 * @member {Order} order
 * @member {string} idempotency_key
 */
export interface CreateOrderBody {
  order : Order;
  idempotency_key : string;
};
/**
 * @interface CreateOrderCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} idempotency_key
 */
export interface CreateOrderCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface CreateLoyaltyAccountBody
 * @member {LoyaltyAccount} loyalty_account
 * @member {string} idempotency_key
 */
export interface CreateLoyaltyAccountBody {
  loyalty_account : LoyaltyAccount;
  idempotency_key : string;
};
/**
 * @interface CreatePaymentBody
 * @member {string} source_id
 * @member {string} idempotency_key
 * @member {Money} [amount_money]
 * @member {Money} [tip_money]
 * @member {Money} [app_fee_money]
 * @member {string} [delay_duration]
 * @member {string} [delay_action]
 * @member {boolean} [autocomplete]
 * @member {string} [order_id]
 * @member {string} [customer_id]
 * @member {string} [location_id]
 * @member {string} [team_member_id]
 * @member {string} [reference_id]
 * @member {string} [verification_token]
 * @member {boolean} [accept_partial_authorization]
 * @member {string} [buyer_email_address]
 * @member {Address} [billing_address]
 * @member {Address} [shipping_address]
 * @member {string} [note]
 * @member {string} [statement_description_identifier]
 * @member {CashPaymentDetails} [cash_details]
 * @member {ExternalPaymentDetails} [external_details]
 * @member {CustomerDetails} [customer_details]
 * @member {OfflinePaymentDetails} [offline_payment_details]
 */
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
/**
 * @interface CreatePaymentLinkBody
 * @member {string} [idempotency_key]
 * @member {string} [description]
 * @member {QuickPay} [quick_pay]
 * @member {Order} [order]
 */
export interface CreatePaymentLinkBody {
  idempotency_key? : string;
  description? : string;
  quick_pay? : QuickPay;
  order? : Order;
}
/**
 * @interface CreateSubscriptionBody
 * @member {string} [idempotency_key]
 * @member {string} location_id
 * @member {string} [plan_variation_id]
 * @member {string} customer_id
 * @member {string} [start_date]
 * @member {string} [canceled_date]
 * @member {string} [tax_percentage]
 * @member {Money} [price_override_money]
 * @member {string} [card_id]
 * @member {string} [timezone]
 * @member {SubscriptionSource} [source]
 * @member {number} [monthly_billing_anchor_date]
 * @member {Phase[]} [phases]
 */
export interface CreateSubscriptionBody {
  idempotency_key? : string;
  location_id : string;
  plan_variation_id? : string;
  customer_id : string;
  start_date? : string;
  canceled_date? : string;
  tax_percentage? : string;
  price_override_money? : Money;
  card_id? : string;
  timezone? : string;
  source? : SubscriptionSource;
  monthly_billing_anchor_date? : number;
  phases? : Phase[];
};
/**
 * @interface CreateTerminalActionBody
 * @member {string} idempotency_key
 * @member {TerminalAction} action
 */
export interface CreateTerminalActionBody {
  idempotency_key : string;
  action : TerminalAction
};
/**
 * @interface CreateTerminalCheckoutBody
 * @member {string} idempotency_key
 * @member {TerminalCheckout} checkout
 */
export interface CreateTerminalCheckoutBody {
  idempotency_key : string;
  checkout : TerminalCheckout;
};
/**
 * @interface CreateTerminalRefundBody
 * @member {string} idempotency_key
 * @member {TerminalRefund} refund
 */
export interface CreateTerminalRefundBody {
  idempotency_key : string;
  refund? : TerminalRefund;
};
/**
 * @interface CreateVendorBody
 * @member {string} idempotency_key
 * @member {Vendor} Vendor
 */
export interface CreateVendorBody {
  idempotency_key : string;
  Vendor : Vendor;
};
/**
 * @interface GetGiftCardFromGANBody
 * @member {string} gan
 */
export interface GetGiftCardFromGANBody {
  gan : string;
};
/**
 * @interface GetGiftCardFromNonceBody
 * @member {string} nonce
 */
export interface GetGiftCardFromNonceBody {
  nonce : string;
};
/**
 * @interface LinkCustomerToGiftCardBody
 * @member {string} customer_id
 */
export interface LinkCustomerToGiftCardBody {
  customer_id : string;
};
/**
 * @interface PauseSubscriptionBody
 * @member {string} [pause_effective_date]
 * @member {number} [pause_cycle_duration]
 * @member {string} [resume_effective_date]
 * @member {string} [resume_change_timing]
 * @member {string} [pause_reason]
 */
export interface PauseSubscriptionBody {
  pause_effective_date? : string;
  pause_cycle_duration? : number;
  resume_effective_date? : string;
  resume_change_timing? : string;
  pause_reason? : string;
};
/**
 * @interface PayOrderBody
 * @member {string} idempotency_key
 * @member {number} [order_version]
 * @member {string[]} [payment_ids]
 */
export interface PayOrderBody {
  idempotency_key : string;
  order_version? : number;
  payment_ids? : string[];
};
/**
 * @interface PublishInvoiceBody
 * @member {number} version
 * @member {string} [idempotency_key]
 */
export interface PublishInvoiceBody {
  version : number;
  idempotency_key? : string;
};
/**
 * @interface RedeemLoyaltyRewardBody
 * @member {string} idempotency_key
 * @member {string} location_id
 */
export interface RedeemLoyaltyRewardBody {
  idempotency_key : string;
  location_id : string;
};
/**
 * @interface RefundPaymentBody
 * @member {string} idempotency_key
 * @member {Money} amount_money
 * @member {Money} [app_fee_money]
 * @member {string} payment_id
 * @member {string} destination_id
 * @member {boolean} unlinked
 * @member {string} [location_id]
 * @member {string} [customer_id]
 * @member {string} [reason]
 * @member {string} [team_member_id]
 * @member {DestinationDetailsCashRefundDetails} [cash_details]
 * @member {DestinationDetailsExternalRefundDetails} [external_details]
 */
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
};
/**
 * @interface RegisterApplePayDomainBody
 * @member {string} domain_name
 */
export interface RegisterApplePayDomainBody {
  domain_name : string;
};
/**
 * @interface ResumeSubscriptionBody
 * @member {string} [resume_effective_date]
 * @member {string} [resume_change_timing]
 */
export interface ResumeSubscriptionBody {
  resume_effective_date? : string;
  resume_change_timing? : string;
};
/**
 * @interface SearchAvailabilityBody
 * @member {SearchAvailabilityQuery} query
 */
export interface SearchAvailabilityBody {
  query : SearchAvailabilityQuery;
};
/**
 * @interface SearchCatalogItemsBody
 * @member {string} [text_filter]
 * @member {string[]} [category_ids]
 * @member {string[]} [stock_levels]
 * @member {string[]} [enabled_location_ids]
 * @member {string} [cursor]
 * @member {number} [limit]
 * @member {string} [sort_order]
 * @member {string[]} [product_types]
 * @member {CustomAttributeFilter[]} [custom_attribute_filters]
 * @member {string} [archived_state]
 */
export interface SearchCatalogItemsBody {
  text_filter? : string;
  category_ids? : string[];
  stock_levels? : string[];
  enabled_location_ids? : string[];
  cursor? : string;
  limit? : number;
  sort_order? : string;
  product_types? : string[];
  custom_attribute_filters? : CustomAttributeFilter[];
  archived_state? : string;
};
/**
 * @interface SearchCatalogObjectsBody
 * @member {string} [cursor]
 * @member {string[]} [object_types]
 * @member {boolean} [include_deleted_objects]
 * @member {boolean} [include_related_objects]
 * @member {string} [begin_time]
 * @member {CatalogQuery} [query]
 * @member {number} [limit]
 * @member {boolean} [include_category_path_to_root]
 */
export interface SearchCatalogObjectsBody {
  cursor? : string;
  object_types? : string[];
  include_deleted_objects? : boolean;
  include_related_objects? : boolean;
  begin_time? : string;
  query? : CatalogQuery;
  limit? : number;
  include_category_path_to_root? : boolean;
};
/**
 * @interface SearchCustomersBody
 * @member {string} [cursor]
 * @member {number} [limit]
 * @member {CustomerQuery} [query]
 * @member {boolean} [count]
 */
export interface SearchCustomersBody {
  cursor? : string;
  limit? : number;
  query? : CustomerQuery;
  count? : boolean;
};
/**
 * @interface SearchInvoicesBody
 * @member {InvoiceQuery} query
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface SearchInvoicesBody {
  query : InvoiceQuery;
  limit? : number;
  cursor? : string;
};
/**
 * @interface SearchLoyaltyAccountsBody
 * @member {SearchLoyaltyAccountsRequestLoyaltyAccountQuery} query
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface SearchLoyaltyAccountsBody {
  query : SearchLoyaltyAccountsRequestLoyaltyAccountQuery;
  limit? : number;
  cursor? : string;
};
/**
 * @interface SearchLoyaltyEventsBody
 * @member {LoyaltyEventQuery} [query]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface SearchLoyaltyEventsBody {
  query? :LoyaltyEventQuery;
  limit? : number;
  cursor? : string;
};
/**
 * @interface SearchLoyaltyRewardsBody
 * @member {SearchLoyaltyRewardsRequestLoyaltyRewardQuery} [query]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface SearchLoyaltyRewardsBody {
  query? :SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
  limit? : number;
  cursor? : string;
};
/**
 * @interface SearchOrdersBody
 * @member {string[]} [location_ids]
 * @member {string} [cursor]
 * @member {SearchOrdersQuery} [query]
 * @member {number} [limit]
 * @member {boolean} [return_entries]
 */
export interface SearchOrdersBody {
  location_ids? : string[];
  cursor? : string;
  query? : SearchOrdersQuery;
  limit? : number;
  return_entries? : boolean;
};
/**
 * @interface SearchSubscriptionsBody
 * @member {string} [cursor]
 * @member {number} [limit]
 * @member {SearchSubscriptionsQuery} [query]
 * @member {string[]} [include]
 */
export interface SearchSubscriptionsBody {
  cursor? : string;
  limit? : number;
  query? : SearchSubscriptionsQuery;
  include? : string[];
};
/**
 * @interface SearchTerminalActionsBody
 * @member {TerminalActionQuery} [query]
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface SearchTerminalActionsBody {
  query? : TerminalActionQuery;
  cursor? : string;
  limit? : number;
};
/**
 * @interface SearchTerminalCheckoutsBody
 * @member {TerminalCheckoutQuery} [query]
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface SearchTerminalCheckoutsBody {
  query? : TerminalCheckoutQuery;
  cursor? : string;
  limit? : number;
};
/**
 * @interface SearchTerminalRefundsBody
 * @member {TerminalRefundQuery} query
 * @member {string} cursor
 * @member {number} limit
 */
export interface SearchTerminalRefundsBody {
  query : TerminalRefundQuery;
  cursor : string;
  limit : number;
};
/**
 * @interface SearchVendorsBody
 * @member {SearchVendorsRequestFilter} [filter]
 * @member {SearchVendorsRequestSort} [sort]
 * @member {string} [cursor]
 */
export interface SearchVendorsBody {
  filter? : SearchVendorsRequestFilter;
  sort? : SearchVendorsRequestSort;
  cursor? : string;
};
/**
 * @interface SwapPlanBody
 * @member {string} new_plan_variation_id
 * @member {Phase[]} [phases]
 */
export interface SwapPlanBody {
  new_plan_variation_id : string;
  phases? : Phase[];
};
/**
 * @interface UnlinkCustomerFromGiftCardBody
 * @member {string} customer_id
 */
export interface UnlinkCustomerFromGiftCardBody {
  customer_id : string;
};
/**
 * @interface UpdateBookingBody
 * @member {string} [idempotency_key]
 * @member {Booking} booking
 */
export interface UpdateBookingBody {
  idempotency_key? : string;
  booking : Booking;
};
/**
 * @interface UpdateCatalogImageBody
 * @member {string} idempotency_key
 */
export interface UpdateCatalogImageBody {
  idempotency_key : string;
};
/**
 * @interface UpdateCustomerBody
 * @member {string} [given_name]
 * @member {string} [family_name]
 * @member {string} [company_name]
 * @member {string} [nickname]
 * @member {string} [email_address]
 * @member {Address} [address]
 * @member {string} [phone_number]
 * @member {string} [reference_id]
 * @member {string} [note]
 * @member {string} [birthday]
 * @member {number} [version]
 * @member {CustomerTaxIds} [tax_ids]
 */
export interface UpdateCustomerBody {
  given_name? : string;
  family_name? : string;
  company_name? : string;
  nickname? : string;
  email_address? : string;
  address? : Address;
  phone_number? : string;
  reference_id? : string;
  note? : string;
  birthday? : string;
  version? : number;
  tax_ids? : CustomerTaxIds;
};
/**
 * @interface UpdateCustomerCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface UpdateCustomerCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface UpdateInvoiceBody
 * @member {Invoice} invoice
 * @member {string} [idempotency_key]
 * @member {string[]} [fields_to_clear]
 */
export interface UpdateInvoiceBody {
  invoice : Invoice;
  idempotency_key? : string;
  fields_to_clear? : string[];
};
/**
 * @interface UpdateItemModifierListsBody
 * @member {string[]} item_ids
 * @member {string[]} [modifier_lists_to_enable]
 * @member {string[]} [modifier_lists_to_disable]
 */
export interface UpdateItemModifierListsBody {
  item_ids : string[];
  modifier_lists_to_enable? : string[];
  modifier_lists_to_disable? : string[];
};
/**
 * @interface UpdateItemTaxesBody
 * @member {string[]} item_ids
 * @member {string[]} [taxes_to_enable]
 * @member {string[]} [taxes_to_disable]
 */
export interface UpdateItemTaxesBody {
  item_ids : string[];
  taxes_to_enable? : string[];
  taxes_to_disable? : string[];
};
/**
 * @interface UpdateLocationSettingsBody
 * @member {CheckoutLocationSettings} location_settings
 */
export interface UpdateLocationSettingsBody {
  location_settings : CheckoutLocationSettings;
};
/**
 * @interface UpdateMerchantSettingsBody
 * @member {CheckoutMerchantSettings} merchant_settings
 */
export interface UpdateMerchantSettingsBody {
  merchant_settings : CheckoutMerchantSettings;
};
/**
 * @interface UpdateOrderBody
 * @member {Order} order
 * @member {string[]} [fields_to_clear]
 * @member {string} [idempotency_key]
 */
export interface UpdateOrderBody {
  order? : Order;
  fields_to_clear? : string[];
  idempotency_key? : string;
};
/**
 * @interface UpdateOrderCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface UpdateOrderCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface UpdatePaymentBody
 * @member {Payment} payment
 * @member {string} idempotency_key
 */
export interface UpdatePaymentBody {
  payment : Payment,
  idempotency_key : string;
};
/**
 * @interface UpdateSubscriptionBody
 * @member {Subscription} [subscription]
 */
export interface UpdateSubscriptionBody {
  subscription? : Subscription;
};
/**
 * @interface UpdateVendorBody
 * @member {string} [idempotency_key]
 * @member {Vendor} vendor
 */
export interface UpdateVendorBody {
  idempotency_key? : string;
  vendor : Vendor;
};
/**
 * @interface UpdateBookingCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface UpdateBookingCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface UpsertBookingCustomAttributeBody
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
export interface UpsertBookingCustomAttributeBody {
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface UpsertCatalogObjectBody
 * @member {string} idempotency_key
 * @member {CatalogObject} object
 */
export interface UpsertCatalogObjectBody {
  idempotency_key : string;
  object : CatalogObject;
};
/**
 * @interface UpsertCustomerCustomAttributeBody
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
export interface UpsertCustomerCustomAttributeBody {
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface UpdateCustomerGroupBody
 * @member {CustomerGroup} group
 */
export interface UpdateCustomerGroupBody {
  group : CustomerGroup;
};
/**
 * @interface UpsertOrderCustomAttributesBody
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
export interface UpsertOrderCustomAttributesBody {
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface UpsertSnippetBody
 * @member {Snippet} snippet
 */
export interface UpsertSnippetBody {
  snippet : Snippet;
};
/**
 * @interface DeleteCustomerQueryParams
 * @member {number} [version]
 */
export interface DeleteCustomerQueryParams {
  version? : number;
};
/**
 * @interface DeleteInvoiceQueryParams
 * @member {number} [version]
 */
export interface DeleteInvoiceQueryParams {
  version? : number;
};
/**
 * @interface GetBookingCustomAttributeDefinitionQueryParams
 * @member {number} [version]
 */
export interface GetBookingCustomAttributeDefinitionQueryParams {
  version? : number;
};
/**
 * @interface GetBookingCustomAttributeQueryParams
 * @member {boolean} [with_definition]
 * @member {number} [version]
 */
export interface GetBookingCustomAttributeQueryParams {
  with_definition? : boolean;
  version? : number;
};
/**
 * @interface GetCashDrawerShiftsQueryParams
 * @member {string} location_id
 */
export interface GetCashDrawerShiftsQueryParams {
  location_id : string;
};
/**
 * @interface GetCatalogObjectQueryParams
 * @member {boolean} [include_related_objects]
 * @member {number} [catalog_version]
 * @member {boolean} [include_category_path_to_root]
 */
export interface GetCatalogObjectQueryParams {
  include_related_objects? : boolean;
  catalog_version? : number;
  include_category_path_to_root? : boolean;
};
/**
 * @interface GetCustomerCustomAttributeDefinitionQueryParams
 * @member {number} [version]
 */
export interface GetCustomerCustomAttributeDefinitionQueryParams {
  version? : number;
};
/**
 * @interface GetCustomerCustomAttributeQueryParams
 * @member {boolean} [with_definition]
 * @member {number} [version]
 */
export interface GetCustomerCustomAttributeQueryParams {
  with_definition? : boolean;
  version? : number;
};
/**
 * @interface GetInventoryCountQueryParams
 * @member {string} [location_ids]
 * @member {string} [cursor]
 */
export interface GetInventoryCountQueryParams {
  location_ids? : string;
  cursor? : string;
};
/**
 * @interface GetOrderCustomAttributeDefinitionQueryParams
 * @member {number} [version]
 */
export interface GetOrderCustomAttributeDefinitionQueryParams {
  version? : number;
};
/**
 * @interface GetOrderCustomAttributesQueryParams
 * @member {number} [version]
 * @member {boolean} [with_definition]
 */
export interface GetOrderCustomAttributesQueryParams {
  version? : number;
  with_definition? : boolean;
};
/**
 * @interface GetSubscriptionQueryParams
 * @member {string} [include]
 */
export interface GetSubscriptionQueryParams {
  include? : string;
};
/**
 * @interface ListBankAccountsQueryParams
 * @member {string} [cursor]
 * @member {number} [limit]
 * @member {string} [location_id]
 */
export interface ListBankAccountsQueryParams {
  cursor? : string;
  limit? : number;
  location_id? : string;
};
/**
 * @interface ListBookingCustomAttributeDefinitionsQueryParams
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListBookingCustomAttributeDefinitionsQueryParams {
  limit? : number;
  cursor? : string;
};
/**
 * @interface ListBookingCustomAttributesQueryParams
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {boolean} [with_definitions]
 */
export interface ListBookingCustomAttributesQueryParams {
  limit? : number;
  cursor? : string;
  with_definitions? : boolean;
};
/**
 * @interface ListBookingsQueryParams
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {string} [customer_id]
 * @member {string} [team_member_id]
 * @member {string} [location_id]
 * @member {string} [start_at_min]
 * @member {string} [start_at_max]
 */
export interface ListBookingsQueryParams {
  limit? : number;
  cursor? : string;
  customer_id? : string;
  team_member_id? : string;
  location_id? : string;
  start_at_min? : string;
  start_at_max? : string;
};
/**
 * @interface ListCardsQueryParams
 * @member {string} [cursor]
 * @member {string} [customer_id]
 * @member {boolean} [include_disabled]
 * @member {string} [reference_id]
 * @member {string} [sort_order]
 */
export interface ListCardsQueryParams {
  cursor? : string;
  customer_id? : string;
  include_disabled? : boolean;
  reference_id? : string;
  sort_order? : string;
};
/**
 * @interface ListCashDrawerShiftEventsQueryParams
 * @member {string} location_id
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListCashDrawerShiftEventsQueryParams {
  location_id : string;
  limit? : number;
  cursor? : string;
};
/**
 * @interface ListCashDrawerShiftsQueryParams
 * @member {string} location_id
 * @member {string} [sort_order]
 * @member {string} [begin_time]
 * @member {string} [end_time]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListCashDrawerShiftsQueryParams {
  location_id : string;
  sort_order? : string;
  begin_time? : string;
  end_time? : string;
  limit? : number;
  cursor? : string;
};
/**
 * @interface ListCatalogQueryParams
 * @member {string} [cursor]
 * @member {string} [types]
 * @member {number} [catalog_version]
 */
export interface ListCatalogQueryParams {
  cursor? : string;
  types? : string;
  catalog_version? : number;
};
/**
 * @interface ListCustomerCustomAttributeDefinitionsQueryParams
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListCustomerCustomAttributeDefinitionsQueryParams {
  limit? : number;
  cursor? : string;
};
/**
 * @interface ListCustomerCustomAttributesQueryParams
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {boolean} [with_definitions]
 */
export interface ListCustomerCustomAttributesQueryParams {
  limit? : number;
  cursor? : string;
  with_definitions? : boolean;
};
/**
 * @interface ListCustomerGroupsQueryParams
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListCustomerGroupsQueryParams {
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListCustomersQueryParams
 * @member {string} [cursor]
 * @member {number} [limit]
 * @member {string} [sort_field]
 * @member {string} [sort_order]
 * @member {boolean} [count]
 */
export interface ListCustomersQueryParams {
  cursor? : string;
  limit? : number;
  sort_field? : string;
  sort_order? : string;
  count? : boolean;
};
/**
 * @interface ListCustomerSegmentsQueryParams
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListCustomerSegmentsQueryParams {
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListDeviceCodesQueryParams
 * @member {string} [cursor]
 * @member {string} [location_id]
 * @member {string} [product_type]
 * @member {string} [status]
 */
export interface ListDeviceCodesQueryParams {
  cursor? : string;
  location_id? : string;
  product_type? : string;
  status? : string;
};
/**
 * @interface ListDevicesQueryParams
 * @member {string} [cursor]
 * @member {string} [sort_order]
 * @member {number} [limit]
 * @member {string} [location_id]
 */
export interface ListDevicesQueryParams {
  cursor? : string;
  sort_order? : string;
  limit? : number;
  location_id? : string;
};
/**
 * @interface ListDisputesQueryParams
 * @member {string} [cursor]
 * @member {string} [states]
 * @member {string} [location_id] 
 */
export interface ListDisputesQueryParams {
  cursor? : string;
  states? : string;
  location_id? : string;
};
/**
 * @interface ListGiftCardActivitiesQueryParams
 * @member {string} [gift_card_id]
 * @member {string} [type]
 * @member {string} [location_id]
 * @member {string} [begin_time]
 * @member {string} [end_time]
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {string} [sort_order]
 */
export interface ListGiftCardActivitiesQueryParams {
  gift_card_id? : string;
  type? : string;
  location_id? : string;
  begin_time? : string;
  end_time? : string;
  limit? : number;
  cursor? : string;
  sort_order? : string;
};
/**
 * @interface ListGiftCardsQueryParams
 * @member {string} [type]
 * @member {string} [state]
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {string} [customer_id]
 */
export interface ListGiftCardsQueryParams {
  type? : string;
  state? : string;
  limit? : number;
  cursor? : string;
  customer_id? : string;
};
/**
 * @interface ListInvoicesQueryParams
 * @member {string} [location_id]
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListInvoicesQueryParams {
  location_id? : string;
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListLocationBookingProfilesQueryParams
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListLocationBookingProfilesQueryParams {
  limit? : number; 
  cursor? : string;
};
/**
 * @interface ListLoyaltyPromotionsQueryParams
 * @member {string} [status]
 * @member {string} [cursor]
 * @member {string} [list]
 */
export interface ListLoyaltyPromotionsQueryParams {
  status? : string;
  cursor? : string;
  list? : string;
};
/**
 * @interface ListOrderCustomAttributeDefinitionsQueryParams
 * @member {string} [visibility_filter]
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListOrderCustomAttributeDefinitionsQueryParams {
  visibility_filter? : string;
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListOrderCustomAttributesQueryParams
 * @member {string} [visibility_filter]
 * @member {string} [cursor]
 * @member {number} [limit]
 * @member {boolean} [with_definitions]
 */
export interface ListOrderCustomAttributesQueryParams {
  visibility_filter? : string;
  cursor? : string;
  limit? : number;
  with_definitions? : boolean;
};
/**
 * @interface ListPaymentLinksQueryParams
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListPaymentLinksQueryParams {
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListPaymentsQueryParams
 * @member {string} [begin_time]
 * @member {string} [end_time]
 * @member {string} [sort_order]
 * @member {string} [cursor]
 * @member {string} [location_id]
 * @member {number} [total]
 * @member {string} [last_4]
 * @member {string} [card_brand]
 * @member {number} [limit]
 * @member {boolean} [is_offline_payment]
 * @member {string} [offline_begin_time]
 * @member {string} [offline_end_time]
 */
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
/**
 * @interface ListPaymentRefundsQueryParams
 * @member {string} [begin_time]
 * @member {string} [end_time]
 * @member {string} [sort_order]
 * @member {string} [cursor]
 * @member {string} [location_id]
 * @member {string} [status]
 * @member {string} [source_type]
 * @member {number} [limit]
 */
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
/**
 * @interface ListPayoutEntriesQueryParams
 * @member {string} [sort_order]
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListPayoutEntriesQueryParams {
  sort_order? : string;
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListPayoutsQueryParams
 * @member {string} [location_id]
 * @member {string} [status]
 * @member {string} [begin_time]
 * @member {string} [end_time]
 * @member {string} [sort_order]
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListPayoutsQueryParams {
  location_id? : string;
  status? : string;
  begin_time? : string;
  end_time? : string;
  sort_order? : string;
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListSubscriptionEventsQueryParams
 * @member {string} [cursor]
 * @member {number} [limit]
 */
export interface ListSubscriptionEventsQueryParams {
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListTeamMemberBookingProfilesQueryParams
 * @member {boolean} [bookable_only]
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {string} [location_id]
 */
export interface ListTeamMemberBookingProfilesQueryParams {
  bookable_only? : boolean;
  limit? : number;
  cursor? : string;
  location_id? : string;
};
/**
 * @interface CreateShiftBody
 * @member {string} [idempotency_key]
 * @member {Shift} shift
 */
export interface CreateShiftBody {
  idempotency_key? : string;
  shift : Shift;
};
/**
 * @interface ListBreakTypesQueryParams
 * @member {string} [location_id]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListBreakTypesQueryParams {
  location_id? : string;
  limit? : number;
  cursor? : string;
};
/**
 * @interface ListTeamMemberWagesQueryParams
 * @member {string} [team_member_id]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListTeamMemberWagesQueryParams {
  team_member_id? : string;
  limit? : number;
  cursor? : string;
};
/**
 * @interface ListWorkweekConfigsQueryParams
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListWorkweekConfigsQueryParams {
  limit? : number;
  cursor? : string;
};
/**
 * @interface SearchShiftsBody
 * @member {ShiftQuery} [query]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface SearchShiftsBody {
  query? : ShiftQuery;
  limit? : number;
  cursor? : string;
};
/**
 * @interface UpdateBreakTypeBody
 * @member {BreakType} break_type
 */
export interface UpdateBreakTypeBody {
  break_type : BreakType;
};
/**
 * @interface UpdateShiftBody
 * @member {Shift} shift
 */
export interface UpdateShiftBody {
  shift : Shift;
};
/**
 * @interface UpdateWorkweekConfigBody
 * @member {WorkweekConfig} workweek_config
 */
export interface UpdateWorkweekConfigBody {
  workweek_config : WorkweekConfig;
};
/**
 * @interface CreateTeamMemberBody
 * @member {string} [idempotency_key]
 * @member {TeamMember} team_member
 */
export interface CreateTeamMemberBody {
  idempotency_key? : string;
  team_member : TeamMember;
};
/**
 * @interface BulkCreateTeamMembersBody
 * @member {Map<string, CreateTeamMemberRequest>[]} team_members
 */
export interface BulkCreateTeamMembersBody {
  team_members : Map<string, CreateTeamMemberRequest>[];
};
/**
 * @interface BulkUpdateTeamMembersBody
 * @member {Map<string, UpdateTeamMemberRequest>[]} team_members
 */
export interface BulkUpdateTeamMembersBody {
  team_members : Map<string, UpdateTeamMemberRequest>[];
};
/**
 * @interface SearchTeamMembersBody
 * @member {SearchTeamMembersQuery} [query]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface SearchTeamMembersBody {
  query? : SearchTeamMembersQuery;
  limit? : number;
  cursor? : string;
};
/**
 * @interface UpdateTeamMemberBody
 * @member {TeamMember} team_member
 */
export interface UpdateTeamMemberBody {
  team_member : TeamMember;
};
/**
 * @interface UpdateWageSettingBody
 * @member {WageSetting} wage_setting
 */
export interface UpdateWageSettingBody {
  wage_setting : WageSetting;
};
/**
 * @interface ListMerchantsQueryParams
 * @member {number} [cursor]
 */
export interface ListMerchantsQueryParams {
  cursor? : number;
};
/**
 * @interface ListMerchantCustomAttributeDefinitionsQueryParams
 * @member {string} [visibility_filter]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListMerchantCustomAttributeDefinitionsQueryParams {
  visibility_filter? : string;
  limit? : number;
  cursor? : string;
};
/**
 * @interface CreateMerchantCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface CreateMerchantCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface GetMerchantCustomAttributeDefinitionQueryParams
 * @member {number} [version]
 */
export interface GetMerchantCustomAttributeDefinitionQueryParams {
  version? : number;
};
/**
 * @interface UpdateMerchantCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface UpdateMerchantCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface BulkDeleteMerchantCustomAttributesBody
 * @member {Map<string, BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>[]} values
 */
export interface BulkDeleteMerchantCustomAttributesBody {
  values : Map<string, BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>[];
};
/**
 * @interface BulkUpsertMerchantCustomAttributesBody
 * @member {Map<string, BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest>[]} values
 */
export interface BulkUpsertMerchantCustomAttributesBody {
  values : Map<string, BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest>[];
};
/**
 * @interface ListMerchantCustomAttributesQueryParams
 * @member {string} [visibility_filter]
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {boolean} [with_definitions]
 */
export interface ListMerchantCustomAttributesQueryParams {
  visibility_filter? : string;
  limit? : number;
  cursor? : string;
  with_definitions? : boolean;
};
/**
 * @interface UpsertMerchantCustomAttributeBody
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
export interface UpsertMerchantCustomAttributeBody {
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface CreateLocationBody
 * @member {Location} location
 */
export interface CreateLocationBody {
  location : Location;
};
/**
 * @interface UpdateLocationBody
 * @member {Location} location
 */
export interface UpdateLocationBody {
  location : Location;
};
/**
 * @interface ListLocationCustomAttributeDefinitionsQueryParams
 * @member {string} [visibility_filter]
 * @member {number} [limit]
 * @member {string} [cursor]
 */
export interface ListLocationCustomAttributeDefinitionsQueryParams {
  visibility_filter? : string;
  limit? : number;
  cursor? : string;
};
/**
 * @interface CreateLocationCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface CreateLocationCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface GetLocationCustomAttributeDefinitionQueryParams
 * @member {number} [version]
 */
export interface GetLocationCustomAttributeDefinitionQueryParams {
  version? : number;
};
/**
 * @interface UpdateLocationCustomAttributeDefinitionBody
 * @member {CustomAttributeDefinition} custom_attribute_definition
 * @member {string} [idempotency_key]
 */
export interface UpdateLocationCustomAttributeDefinitionBody {
  custom_attribute_definition : CustomAttributeDefinition;
  idempotency_key? : string;
};
/**
 * @interface BulkDeleteLocationCustomAttributesBody
 * @member {Map<string, BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest>[]} values
 */
export interface BulkDeleteLocationCustomAttributesBody {
  values : Map<string, BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest>[];
};
/**
 * @interface BulkUpsertLocationCustomAttributesBody
 * @member {Map<string, BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>[]} values
 */
export interface BulkUpsertLocationCustomAttributesBody {
  values : Map<string, BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>[];
};
/**
 * @interface ListLocationCustomAttributesQueryParams
 * @member {string} [visibility_filter]
 * @member {number} [limit]
 * @member {string} [cursor]
 * @member {boolean} [with_definitions]
 */
export interface ListLocationCustomAttributesQueryParams {
  visibility_filter? : string;
  limit? : number;
  cursor? : string;
  with_definitions? : boolean;
};
/**
 * @interface GetLocationCustomAttributeQueryParams
 * @member {boolean} [with_definition]
 * @member {number} [version]
 */
export interface GetLocationCustomAttributeQueryParams {
  with_definition? : boolean;
  version? : number;
};
/**
 * @interface UpsertLocationCustomAttributeBody
 * @member {CustomAttribute} custom_attribute
 * @member {string} [idempotency_key]
 */
export interface UpsertLocationCustomAttributeBody {
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
};
/**
 * @interface UpdatePaymentLinkBody
 * @member {PaymentLink} payment_link
 */
export interface UpdatePaymentLinkBody {
  payment_link : PaymentLink;
};
/**
 * @interface CancelInvoiceBody
 * @member {number} version
 */
export interface CancelInvoiceBody {
  version : number;
};
/**
 * @interface AuthorizeQueryParams
 * @member {string} client_id
 * @member {string} [scope]
 * @member {string} [locale]
 * @member {boolean} [session]
 * @member {string} [state]
 * @member {string} [code_challenge]
 * @member {string} [redirect_uri]
 */
export interface AuthorizeQueryParams {
  client_id : string;
  scope? : string;
  locale? : string;
  session? : boolean;
  state? : string;
  code_challenge? : string;
  redirect_uri? : string;
};
/**
 * @interface RevokeTokenBody
 * @member {string} [client_id]
 * @member {string} [access_token]
 * @member {string} [merchant_id]
 * @member {boolean} [revoke_only_access_token]
 */
export interface RevokeTokenBody {
  client_id? : string;
  access_token? : string;
  merchant_id? : string;
  revoke_only_access_token? : boolean;
};
/**
 * @interface ObtainTokenBody
 * @member {string} client_id
 * @member {string} [client_secret]
 * @member {string} [code]
 * @member {string} [redirect_uri]
 * @member {string} grant_type
 * @member {string} [refresh_token]
 * @member {string} [migration_token]
 * @member {string[]} [scopes]
 * @member {boolean} [short_lived]
 * @member {string} [code_verifier]
 */
export interface ObtainTokenBody {
  client_id : string;
  client_secret? : string;
  code? : string;
  redirect_uri? : string;
  grant_type : string;
  refresh_token? : string;
  migration_token? : string;
  scopes? : string[];
  short_lived? : boolean;
  code_verifier? : string;
};
/**
 * @interface ListWebhookEventTypesQueryParams
 * @member {string} [api_version]
 */
export interface ListWebhookEventTypesQueryParams {
  api_version? : string;
};
/**
 * @interface ListWebhookSubscriptionsQueryParams
 * @member {string} [cursor]
 * @member {boolean} [include_disabled]
 * @member {string} [sort_order]
 * @member {number} [limit]
 */
export interface ListWebhookSubscriptionsQueryParams {
  cursor? : string;
  include_disabled? : boolean;
  sort_order? : string;
  limit? : number;
};
/**
 * @interface CreateWebhookSubscriptionBody
 * @member {string} [idempotency_key]
 * @member {WebhookSubscription} subscription
 */
export interface CreateWebhookSubscriptionBody {
  idempotency_key? : string;
  subscription : WebhookSubscription;
};
/**
 * @interface UpdateWebhookSubscriptionBody
 * @member {WebhookSubscription} [subscription]
 */
export interface UpdateWebhookSubscriptionBody {
  subscription? : WebhookSubscription;
};
/**
 * @interface UpdateWebhookSubscriptionSignatureKeyBody
 * @member {string} [idempotency_key]
 */
export interface UpdateWebhookSubscriptionSignatureKeyBody {
  idempotency_key? : string;
};
/**
 * @interface TestWebhookSubscriptionBody
 * @member {string} [event_type]
 */
export interface TestWebhookSubscriptionBody {
  event_type? : string;
};
/**
 * @interface SearchEventsBody
 * @member {string} [cursor]
 * @member {number} [limit]
 * @member {SearchEventsQuery} [query]
 */
export interface SearchEventsBody {
  cursor? : string;
  limit? : number;
  query? : SearchEventsQuery;
};
/**
 * @interface ListEventTypesQueryParams
 * @member {string} [api_version]
 */
export interface ListEventTypesQueryParams {
  api_version? : string;
};
export type SquareEnvironment = 'production' | 'sandbox';