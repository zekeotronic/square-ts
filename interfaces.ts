interface ACHDetails {
  routing_number? : string;
  account_number_suffix? : string;
  account_type? : string;
};

interface AcceptedPaymentMethods{
  apple_pay? : boolean;
  google_pay? : boolean;
  cash_app_pay? : boolean;
  afterpay_clearpay? : boolean;
};

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

interface AfterpayDetails {
  email_address? : string;
};

interface ApplicationDetails {
  square_product? : string;
  application_id? : string;
};

interface AppointmentSegment {
  duration_minutes? : number;
  service_variation_id? : string;
  team_member_id : string
  service_variation_version? : number;
  intermission_minutes? : number;
  any_team_member? : boolean;
  resource_ids? : string[];
};

interface Availability {
  start_at? : string;
  location_id? : string;
  appointment_segments? : AppointmentSegment[];
};

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

interface BookingCreatorDetails {
  creator_type? : string;
  team_member_id? : string;
  customer_id? : string;
};

interface Break {
  id? : string;
  start_at : string;
  end_at? : string;
  break_type_id : string;
  name : string;
  expected_duration : string;
  is_paid : boolean;
};

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

interface BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute {
  key? : string;
  order_id : string;
};

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

interface BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute {
  custom_attribute : CustomAttribute;
  idempotency_key? : string;
  order_id : string;
};

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

interface BusinessHours {
  periods? : BusinessHoursPeriod[];
};

interface BusinessHoursPeriod {
  day_of_week? : string;
  start_local_time? : string;
  end_local_time? : string;
};

interface BuyNowPayLaterDetails {
  brand? : string;
  afterpay_details? : AfterpayDetails;
  clearpay_details? : ClearpayDetails;
};

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
}

interface CardForgottenEventCard {
  id? : string;
  customer_id? : string;
  enabled? : boolean;
  reference_id? : string;
  version? : number;
  merchant_id? : string;
};

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
}

interface CardPaymentTimeline {
  authorized_at? : string;
  captured_at? : string;
  voided_at? : string;
}

interface CashAppDetails {
  buyer_full_name? : string;
  buyer_country_code? : string;
  buyer_cashtag? : string;
};

interface CashDrawerDevice {
  id? : string;
  name? : string;
};

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

interface CashDrawerShiftEvent {
  id? : string;
  event_type? : string;
  event_money? : Money;
  created_at? : string;
  description? : string;
  team_member_id? : string;
};

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

interface CashPaymentDetails {
  buyer_supplied_money : Money;
  change_back_money? : Money;
};

interface CatalogAvailabilityPeriod {
  start_local_time? : string;
  end_local_time? : string;
  day_of_week? : string;
}

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

interface CatalogCustomAttributeDefinitionNumberConfig {
  precision? :number;
};

interface CatalogCustomAttributeDefinitionSelectionConfig {
  max_allowed_selections? : number;
  allowed_selections? : CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]
};

interface CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection {
  uid? : string;
  name : string;
};

interface CatalogCustomAttributeDefinitionStringConfig {
  enforce_uniqueness? : boolean;
};

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

interface CatalogEcomSeoData {
  page_title? : string;
  page_description? : string;
  permalink? : string;
};

interface CatalogIdMapping {
  client_object_id? : string;
  object_id? : string;
}; 

interface CatalogImage {
  name? : string;
  url? : string;
  caption? : string;
  photo_studio_order_id? : string;
};

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

interface CatalogItemFoodAndBeverageDetails {
  calorie_count? : number;
  dietary_preferences? : CatalogItemFoodAndBeverageDetailsDietaryPreference[];
  ingredients? : CatalogItemFoodAndBeverageDetailsIngredient[];
};

interface CatalogItemFoodAndBeverageDetailsDietaryPreference {
  type? : string;
  standard_name? : string;
  custom_name? : string;
};

interface CatalogItemFoodAndBeverageDetailsIngredient {
  type? : string;
  standard_name? : string;
  custom_name? : string;
};

interface CatalogItemModifierListInfo {
  modifier_list_id : string;
  modifier_overrides? : CatalogModifierOverride[];
  min_selected_modifiers? : number;
  max_selected_modifiers? : number;
  enabled? : boolean;
  ordinal? : number;
};

interface CatalogItemOption {
  name? : string;
  display_name? : string;
  description? : string;
  show_colors? : boolean;
  values? : CatalogObject[];
};

interface CatalogItemOptionForItem {
  item_option_id? : string;
};

interface CatalogItemOptionValue {
  item_option_id? : string;
  name? : string;
  description? : string;
  color? : string;
  ordinal? : number;
};

interface CatalogItemOptionValueForItemVariation {
  item_option_id? : string;
  item_option_value_id? : string;
};

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
  stockable_conversion? : CatalogStockConversionBeta;
};

interface CatalogMeasurementUnit {
  measurement_unit? : MeasurementUnit;
  precision? : number;
};

interface CatalogModifier {
  name? : string;
  price_money? : Money;
  ordinal? : number;
  modifier_list_id? : string;
  location_overrides? : ModifierLocationOverrides[]
  image_id? : string;
};

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

interface CatalogModifierOverride {
  modifier_id : string;
  on_by_default? : boolean;
};

interface CatalogObject {
  type : string;
  id : string;
  updated_at? : string;
  version? : number;
  is_deleted? : boolean;
  custom_attribute_values? : Map<string, CatalogCustomAttributeValue>[]: 
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

interface CatalogObjectBatch {
  objects : CatalogObject[];
};

interface CatalogObjectCategory {
  id? : string;
  ordinal? : number;
};

interface CatalogObjectReference {
  object_id? : string;
  catalog_version? : number;
};

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

interface CatalogProductSet {
  name? : string;
  product_ids_any? : string[];
  product_ids_all? : string[];
  quantity_exact? : number;
  quantity_min? : number;
  quantity_max? : number;
  all_products? : boolean;
};

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

interface CatalogQueryExact {
  attribute_name : string;
  attribute_value : string;
};

interface CatalogQueryItemVariationsForItemOptionValues {
  item_option_value_ids? : string[];
};

interface CatalogQueryItemsForItemOptions {
  item_option_ids? : string[];
};

interface CatalogQueryItemsForModifierList {
  modifier_list_ids : string[];
};

interface CatalogQueryItemsForTax {
  tax_ids : string[];
};

interface CatalogQueryPrefix {
  attribute_name : string;
  attribute_prefix : string;
};

interface CatalogQueryRange {
  attribute_name : string;
  attribute_min_value? : number;
  attribute_max_value? : number;
};

interface CatalogQuerySet {
  attribute_name : string;
  attribute_values : string[];
};

interface CatalogQuerySortedAttribute {
  attribute_name : string;
  initial_attribute_value? : string;
  sort_order? : string;
};

interface CatalogQueryText {
  keywords : string[];
};

interface CatalogQuickAmount {
  type : string;
  amount : Money;
  score? : number;
  ordinal? : number;
};

interface CatalogQuickAmountsSettings {
  option : string;
  eligible_for_auto_amounts? : boolean;
  amounts? : CatalogQuickAmount[];
};

interface CatalogStockConversion {
  stockable_item_variation_id : string;
  stockable_quantity : string;
  nonstockable_quantity : string;
};

interface CatalogSubscriptionPlan {
  name : string;
  phases? : SubscriptionPhase[];
  subscription_plan_variations? : CatalogObject[];
  eligible_item_ids? : string[];
  eligible_category_ids? : string[];
  all_items? : boolean;
};

interface CatalogSubscriptionPlanVariation {
  name : string;
  phases : SubscriptionPhase[];
  subscription_plan_id? : string;
  monthly_billing_anchor_date? : number;
  can_prorate? : boolean;
  successor_plan_variation_id? : string;
};

interface CatalogTax {
  name? : string;
  calculation_phase? : string;
  inclusion_type? : string;
  applies_to_custom_amounts? : boolean;
  enabled? : boolean;
  applies_to_product_set_id? : string;
};

interface CatalogTimePeriod {
  event? : string;
};

interface CatalogV1Id {
  catalog_v1_id? : string;
  location_id? : string;
};

interface CatalogVersionUpdatedEventCatalogVersion {
  updated_at? : string;
};

interface CategoryPathToRootNode {
  category_id? : string;
  category_name? : string;
};

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

interface CheckoutLocationSettings {
  location_id? : string;
  customer_notes_enabled? : boolean;
  policies? : CheckoutLocationSettingsPolicy[];
  branding? : CheckoutLocationSettingsBranding;
  tipping? : CheckoutLocationSettingsTipping;
  coupons? : CheckoutLocationSettingsCoupons;
  updated_at? : string;
};

interface CheckoutLocationSettingsBranding {
  header_type? : string;
  button_color? : string;
  button_shape? : string;
};

interface CheckoutLocationSettingsCoupons {
  enabled? : boolean;
};

interface CheckoutLocationSettingsPolicy {
  uid? : string;
  title? : string;
  description? : string;
};

interface CheckoutLocationSettingsTipping {
  percentages? : string[];
  smart_tipping_enabled? : boolean;
  default_percent? : number;
  smart_tips? : Money[];
  default_smart_tip? : Money;
};

interface CheckoutMerchantSettings {
  payment_methods? : CheckoutMerchantSettingsPaymentMethods,
  updated_at? : string;
};

interface CheckoutMerchantSettingsPaymentMethods {
  apple_pay? : CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  google_pay? : CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  cash_app? : CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  afterpay_clearpay? : CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay;
};

interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay {
  order_eligibility_range? : CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  item_eligibility_range? : CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  enabled? : boolean;
};

interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange {
  min : Money;
  max : Money;
};

interface CheckoutMerchantSettingsPaymentMethodsPaymentMethod {
  enabled? : boolean;
};

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

interface ClearpayDetails {
  email_address? : string;
};

interface CollectedData{
  input_text? : string;
};

interface Component {
  type : string;
  application_details? : DeviceComponentDetailsApplicationDetails;
  card_reader_details? : DeviceComponentDetailsCardReaderDetails;
  battery_details? : DeviceComponentDetailsBatteryDetails;
  wifi_details? : DeviceComponentDetailsWiFiDetails;
  ethernet_details? : DeviceComponentDetailsEthernetDetails;
};

interface ConfirmationDecision {
  has_agreed? : boolean;
};

interface ConfirmationOptions {
  title : string;
  body : string;
  agree_button_text : string;
  disagree_button_text? : string;
  decision? : ConfirmationDecision;
};

interface Coordinates {
  latitude? : number;
  longitude? : number;
};

interface CustomAttribute {
  key? : string;
  value? : any;
  version? : number;
  visibility? : string;
  definition? : CustomAttributeDefinition;
  updated_at? : string;
  created_at? : string;
};

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

interface CustomAttributeDefinitionEventDataObject {
  custom_attribute_definition? : CustomAttributeDefinition;
};

interface CustomAttributeEventDataObject {
  custom_attribute? : CustomAttribute;
};

interface CustomAttributeFilter {
  custom_attribute_definition_id? : string;
  key? : string;
  string_filter? : string;
  number_filter? : Range;
  selection_uids_filter? : string[];
  bool_filter? : boolean;
};

interface CustomField {
  title : string;
};

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

interface CustomerDetails {
  customer_initiated : boolean;
  seller_keyed_in : boolean;
};



interface DestinationDetailsCashRefundDetails {
  seller_supplied_money : Money;
  change_back_money? : Money;
}

interface DestinationDetailsExternalRefundDetails {
  type : string;
  source : string;
  source_id? : string;
}


interface Error {
  categorty : string;
  code : string;
  detail? : string;
  field? : string;
}
interface ExternalPaymentDetails {
  type : string;
  source : string;
  source_id? : string;
  source_fee_money? : Money;
};



interface OfflinePaymentDetails {
  client_created_at : string;
};

interface Order {
  id? : string;
  location_id : string;
  reference_id? : string;
  source? : OrderSource;
  customer_id? : string;
  line_items? : OrderLineItem[];
}

interface OrderSource {
  name : string;
};

interface OrderLineItem {
  uid? : string;
  name? : string;
  quantity : string;
  quantity_unit? : OrderQuantityUnit;
};

interface OrderQuantityUnit {
  measurement_unit? : MeasurementUnit;
};

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






interface QuickPay {
  name : string;
  price_money : Money;
  location_id : string;
};



interface MeasurementUnit {

};

interface Money {
  amount : number;
  currency : string;
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
};

export interface UpdateLocationSettingsBody {
  location_settings : CheckoutLocationSettings;
};

export interface UpdateMerchantSettingsBody {
  merchant_settings : CheckoutMerchantSettings;
};

export interface ListPaymentLinksQueryParams {
  cursor? : string;
  limit? : number;
};

export interface CreatePaymentLinkBody {
  idempotency_key? : string;
  description? : string;
  quick_pay? : QuickPay;
  order? : Order;
}

