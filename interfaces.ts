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
};
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
};
interface CardPaymentTimeline {
  authorized_at? : string;
  captured_at? : string;
  voided_at? : string;
};
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
};
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
  stockable_conversion? : CatalogStockConversion;
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
interface CustomerAddressFilter {
  postal_code? : CustomerTextFilter;
  country? : string;
};
interface CustomerCreatedEventEventContext {
  merge? : CustomerCreatedEventEventContextMerge;
};
interface CustomerCreatedEventEventContextMerge {
  from_customer_ids? : string[];
  to_customer_id? : string;
};
interface CustomerCreationSourceFilter {
  values? : string[];
  rule? : string;
};
interface CustomerCustomAttributeFilter {
  key : string;
  filter? : CustomerCustomAttributeFilterValue;
  updated_at? : TimeRange;
};
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
interface CustomerCustomAttributeFilters {
  filters? : CustomerCustomAttributeFilter[];
};
interface CustomerDeletedEventEventContext {
  merge? : CustomerDeletedEventEventContextMerge;
};
interface CustomerDeletedEventEventContextMerge {
  from_customer_ids? : string[];
  to_customer_id? : string;
};
interface CustomerDetails {
  customer_initiated? : boolean;
  seller_keyed_in? : boolean;
};
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
interface CustomerGroup {
  id? : string;
  name : string;
  created_at? : string;
  updated_at? : string;
};
interface CustomerPreferences {
  email_unsubscribed? : boolean;
};
interface CustomerQuery {
  filter? : CustomerFilter;
  sort? : CustomerSort;
};
interface CustomerSegment {
  id? : string;
  name : string;
  created_at? : string;
  updated_at? : string;
};
interface CustomerSort {
  field? : string;
  order? : string;
};
interface CustomerTaxIds {
  eu_vat? : string;
};
interface CustomerTextFilter {
  exact? : string;
  fuzzy? : string;
};
interface DataCollectionOptions {
  title : string;
  body : string;
  input_type : string;
  collected_data? : CollectedData;
};
interface DateRange {
  start_at? : string;
  end_at? : string;
};
interface Destination {
  type? : string;
  id? : string;
};
interface DestinationDetails {
  card_details? : DestinationDetailsCardRefundDetails;
  cash_details? : DestinationDetailsCashRefundDetails;
  external_details? : DestinationDetailsExternalRefundDetails;
};
interface DestinationDetailsCardRefundDetails {
  card? : Card;
  entry_method? : string;
  auth_result_code? : string;
};
interface DestinationDetailsCashRefundDetails {
  seller_supplied_money : Money;
  change_back_money? : Money;
};
interface DestinationDetailsExternalRefundDetails {
  type : string;
  source : string;
  source_id? : string;
};
interface Device {
  id? : string;
  attributes : DeviceAttributes;
  components? : Component[];
  status? : DeviceStatus;
};
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
interface DeviceCheckoutOptions {
  device_id : string;
  skip_receipt_screen? : boolean;
  collect_signature? : boolean;
  tip_settings? : TipSettings;
  show_itemized_cart? : boolean;
};
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
interface DeviceComponentDetailsApplicationDetails {
  application_type? : string;
  version? : string;
  session_location? : string;
  device_code_id? : string;
};
interface DeviceComponentDetailsBatteryDetails {
  visible_percent? : number;
};
interface DeviceComponentDetailsCardReaderDetails {
  version? : string;
};
interface DeviceComponentDetailsEthernetDetails {
  active? : boolean;
  ip_address_v4? : string;
};
interface DeviceComponentDetailsMeasurement {
  value? : number;
};
interface DeviceComponentDetailsNetworkInterfaceDetails {
  ip_address_v4? : string;
};
interface DeviceComponentDetailsWiFiDetails {
  active? : boolean;
  ssid? : string;
  ip_address_v4? : string;
  secure_connection? : string;
  signal_strength? : DeviceComponentDetailsMeasurement;
};
interface DeviceDetails {
  device_id? : string;
  device_installation_id? : string;
  device_name? : string;
};
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
interface DeviceStatus {
  category? : string;
};
interface DigitalWalletDetails {
  status? : string;
  brand? : string;
  cash_app_details? : CashAppDetails;
};
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
interface DisputeEvidence {
  id? : string;
  dispute_id? : string;
  evidence_file? : DisputeEvidenceFile;
  evidence_text? : string;
  uploaded_at? : string;
  evidence_type? : string;
};
interface DisputeEvidenceFile {
  filename? : string;
  filetype? : string;
};
interface DisputedPayment {
  payment_id? : string;
};
interface Error {
  category : string;
  code : string;
  detail? : string;
  field? : string;
};
interface Event {
  merchant_id? : string;
  location_id? : string;
  type? : string;
  event_id? : string;
  created_at? : string;
  data? : EventData;
};
interface EventData {
  type? : string;
  id? : string;
  deleted? : boolean;
  object? : object;
};
interface EventMetadata {
  event_id? : string;
  api_version? : string;
};
interface EventTypeMetadata {
  event_type? : string;
  api_version_introduced? : string;
  release_status? : string;
};
interface ExternalPaymentDetails {
  type : string;
  source : string;
  source_id? : string;
  source_fee_money? : Money;
};
interface FilterValue {
  all? : string[];
  any? : string[];
  none? : string[];
};
interface FloatNumberRange {
  start_at? : string;
  end_at? : string;
};
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
interface FulfillmentFulfillmentEntry {
  uid : string;
  line_item_uid : string;
  quantity : string;
  metadata : Map<string, string>;
};
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
interface FulfillmentPickupDetailsCurbsidePickupDetails {
  curbside_details? : string;
  buyer_arrived_at? : string;
};
interface FulfillmentRecipient {
  customer_id? : string;
  display_name? : string;
  email_address? : string;
  phone_number? : string;
  address? : Address;
};
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
interface GiftCardActivity {
  id? : string;
  type : string;
  gan_source? : string;
  state? : string;
  balance_money? : Money;
  gan? : string;
  created_at? : string;
  customer_ids? : string[];
};
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
interface GiftCardActivityActivate {
  amount_money? : Money;
  order_id? : string;
  line_item_uid? : string;
  reference_id? : string;
  buyer_payment_instrument_ids? : string[];
};
interface GiftCardActivityAdjustDecrement {
  amount_money : Money;
  reason : string;
};
interface GiftCardActivityAdjustIncrement {
  amount_money : Money;
  reason : string;
};
interface GiftCardActivityBlock {
  reason : string;
};
interface GiftCardActivityClearBalance {
  reason : string;
};
interface GiftCardActivityDeactivate {
  reason : string;
};
interface GiftCardActivityImport {
  amount_money : Money;
};
interface GiftCardActivityImportReversal {
  amount_money : Money;
};
interface GiftCardActivityLoad {
  amount_money? : Money;
  order_id? : string;
  line_item_uid? : string;
  reference_id? : string;
  buyer_payment_instrument_ids? : string[];
};
interface GiftCardActivityRedeem {
  amount_money : Money;
  payment_id? : string;
  reference_id? : string;
  status? : string;
};
interface GiftCardActivityRefund {
  redeem_activity_id? : string;
  amount_money? : Money;
  reference_id? : string;
  payment_id? : string;
};
interface GiftCardActivityTransferBalanceFrom {
  transfer_to_gift_card_id : string;
  amount_money : Money;
};
interface GiftCardActivityTransferBalanceTo {
  transfer_from_gift_card_id : string;
  amount_money : Money;
};
interface GiftCardActivityUnblock {
  reason : string;
};
interface GiftCardActivityUnlinkedActivityRefund {
  amount_money : Money;
  reference_id? : string;
  payment_id? : string;
};
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
  source ? : SourceApplication;
  employee_id? : string;
  team_member_id? : string;
  transaction_id? : string;
  refund_id? : string;
  purchase_order_id? : string;
  goods_receipt_id? : string;
  adjustment_group? : InventoryAdjustmentGroup;
};
interface InventoryAdjustmentGroup {
  id? : string;
  root_adjustment_id? : string;
  from_state? : string;
  to_state? : string;
};
interface InventoryChange {
  type? : string;
  physical_count? : InventoryPhysicalCount;
  adjustment? : InventoryAdjustment;
  transfer? : InventoryTransfer;
  measurement_unit? : CatalogMeasurementUnit;
  measurement_unit_id? : string;
};
interface InventoryCount {
  catalog_object_id? : string;
  catalog_object_type? : string;
  state? : string;
  location_id? : string;
  quantity? : string;
  calculated_at? : string;
  is_estimated? : boolean;
};
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
interface InvoiceAcceptedPaymentMethods {
  card? : boolean;
  square_gift_card? : boolean;
  bank_account? : boolean;
  buy_now_pay_later? : boolean;
  cash_app_pay? : boolean;
};
interface InvoiceAttachment {
  id? : string;
  filename? : string;
  description? : string;
  filesize? : number;
  hash? : string;
  mime_type? : string;
  uploaded_at? : string;
};
interface InvoiceCustomField {
  label? : string;
  value? : string;
  placement? : string;
};
interface InvoiceFilter {
  location_ids : string[];
  customer_ids? : string[];
};
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
interface InvoicePaymentReminder {
  uid? : string;
  relative_scheduled_days? : number;
  message? : string;
  status? : string;
  sent_at? : string;
};
interface InvoiceQuery {
  filter : InvoiceFilter;
  sort? : InvoiceSort;
};
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
interface InvoiceRecipientTaxIds {
  eu_vat? : string;
};
interface InvoiceSort {
  field : string;
  order? : string;
};
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
interface JobAssignment {
  job_title : string;
  pay_type : string;
  hourly_rate? : Money;
  annual_rate? : Money;
  weekly_hours? : number;
};
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
interface LocationBookingProfile {
  location_id? : string;
  booking_site_url? : string;
  online_booking_enabled? : boolean;
};
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
interface LoyaltyAccountExpiringPointDeadline {
  points : number;
  expires_at : string;
};
interface LoyaltyAccountMapping {
  id? : string;
  created_at? : string;
  phone_number? : string;
};
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
interface LoyaltyEventAccumulatePoints {
  loyalty_program_id? : string;
  points? : number;
  order_id? : string;
};
interface LoyaltyEventAccumulatePromotionPoints {
  loyalty_program_id? : string;
  loyalty_promotion_id? : string;
  points? : number;
  order_id? : string;
};
interface LoyaltyEventAdjustPoints {
  loyalty_program_id? : string;
  points : number;
  reason? : string;
};
interface LoyaltyEventCreateReward {
  loyalty_program_id? : string;
  reward_id? : string;
  points? : number;
};
interface LoyaltyEventDateTimeFilter {
  created_at : TimeRange;
};
interface LoyaltyEventDeleteReward {
  loyalty_program_id? : string;
  reward_id? : string;
  points? : number;
};
interface LoyaltyEventExpirePoints {
  loyalty_program_id? : string;
  points : number;
};
interface LoyaltyEventFilter {
  loyalty_account_filter? : LoyaltyEventLoyaltyAccountFilter;
  type_filter? : LoyaltyEventTypeFilter;
  date_time_filter? : LoyaltyEventDateTimeFilter;
  location_filter? : LoyaltyEventLocationFilter;
  order_filter? : LoyaltyEventOrderFilter;
};
interface LoyaltyEventLocationFilter {
  location_ids : string[];
};
interface LoyaltyEventLoyaltyAccountFilter {
  loyalty_account_id : string;
};
interface LoyaltyEventOrderFilter {
  order_id : string;
};
interface LoyaltyEventOther {
  loyalty_program_id? : string;
  points : number;
};
interface LoyaltyEventQuery {
  filter? : LoyaltyEventFilter;
};
interface LoyaltyEventRedeemReward {
  loyalty_program_id? : string;
  reward_id? : string;
  order_id? : string;
};
interface LoyaltyEventTypeFilter {
  types : string[];
};
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
interface LoyaltyProgramAccrualRule {
  accrual_type : string;
  points? : number;
  visit_data? : LoyaltyProgramAccrualRuleVisitData;
  spend_data? : LoyaltyProgramAccrualRuleSpendData;
  item_variation_data? : LoyaltyProgramAccrualRuleItemVariationData;
  category_data? : LoyaltyProgramAccrualRuleCategoryData;
};
interface LoyaltyProgramAccrualRuleCategoryData {
  category_id : string;
};
interface LoyaltyProgramAccrualRuleItemVariationData {
  item_variation_id : string;
};
interface LoyaltyProgramAccrualRuleSpendData {
  amount_money : Money
  excluded_category_ids? : string[]
  excluded_item_variation_ids? : string[]
  tax_mode : string
};
interface LoyaltyProgramAccrualRuleVisitData {
  minimum_amount_money? : Money;
  tax_mode : string;
};
interface LoyaltyProgramExpirationPolicy {
  expiration_duration : string;
};
interface LoyaltyProgramRewardTier {
  id? : string
  points : number;
  name? : string;
  created_at? : string;
  pricing_rule_reference : CatalogObjectReference;
};
interface LoyaltyProgramTerminology {
  one : string;
  other : string;
};
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
interface LoyaltyPromotionAvailableTimeData {
  start_date? : string;
  end_date? : string;
  time_periods : string[];
};
interface LoyaltyPromotionIncentive {
  type : string;
  points_multiplier_data? : LoyaltyPromotionIncentivePointsMultiplierData;
  points_addition_data? : LoyaltyPromotionIncentivePointsAdditionData;
};
interface LoyaltyPromotionIncentivePointsAdditionData {
  points_addition : number;
};
interface LoyaltyPromotionIncentivePointsMultiplierData {
  multiplier? : string;
};
interface LoyaltyPromotionTriggerLimit {
  times : number;
  interval? : string;
};
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
interface MeasurementUnitCustom {
  name : string;
  abbreviation : string;
};
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
interface ModifierLocationOverrides {
  location_id? : string;
  price_money? : Money;
  sold_out? : boolean;
};
interface Money {
  amount? : number;
  currency? : string;
};
interface OauthAuthorizationRevokedEventRevocationObject {
  revoked_at? : string;
  revoker_type? : string;
};
interface OfflinePaymentDetails {
  client_created_at? : string;
};
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
interface OrderCreated {
  order_id? : string;
  version? : number;
  location_id? : string;
  state? : string;
  created_at? : string;
};
interface OrderCreatedObject {
  order_created? : OrderCreated;
};
interface OrderEntry {
  order_id? : string;
  version? : number;
  location_id? : string;
};
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
interface OrderFulfillmentFulfillmentEntry {
  uid? : string;
  line_item_uid : string;
  quantity : string;
  metadata? : Map<string, string>;
};
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
interface OrderFulfillmentPickupDetailsCurbsidePickupDetails {
  curbside_details? : string;
  buyer_arrived_at? : string;
};
interface OrderFulfillmentRecipient {
  customer_id? : string;
  display_name? : string;
  email_address? : string;
  phone_number? : string;
  address? : Address;
};
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
interface OrderFulfillmentUpdated {
  order_id? : string;
  version? : number;
  location_id? : string;
  state? : string;
  created_at? : string;
  updated_at? : string;
  fulfillment_update? : OrderFulfillmentUpdatedUpdate[];
};
interface OrderFulfillmentUpdatedObject {
  order_fulfillment_updated? : OrderFulfillmentUpdated;
};
interface OrderFulfillmentUpdatedUpdate {
  fulfillment_uid? : string;
  old_state? : string;
  new_state? : string;
};
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
interface OrderLineItemAppliedDiscount {
  uid? : string;
  discount_uid : string;
  applied_money? : Money;
};
interface OrderLineItemAppliedServiceCharge {
  uid? : string;
  service_charge_uid : string;
  applied_money? : Money;
};
interface OrderLineItemAppliedTax {
  uid? : string;
  tax_uid : string;
  applied_money? : Money;
};
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
interface OrderLineItemPricingBlocklists {
  blocked_discounts? : OrderLineItemPricingBlocklistsBlockedDiscount[];
  blocked_taxes? : OrderLineItemPricingBlocklistsBlockedTax[];
};
interface OrderLineItemPricingBlocklistsBlockedDiscount {
  uid? : string;
  discount_uid? : string;
  discount_catalog_object_id? : string;
};
interface OrderLineItemPricingBlocklistsBlockedTax {
  uid? : string;
  tax_uid? : string;
  tax_catalog_object_id? : string;
};
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
interface OrderMoneyAmounts {
  total_money? : Money;
  tax_money? : Money;
  discount_money? : Money;
  tip_money? : Money;
  service_charge_money? : Money;
};
interface OrderPricingOptions {
  auto_apply_discounts? : boolean;
  auto_apply_taxes? : boolean;
};
interface OrderQuantityUnit {
  measurement_unit? : MeasurementUnit;
  precision? : number;
  catalog_object_id? : string;
  catalog_version? : number;
};
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
interface OrderReturnTip {
  uid? : string;
  applied_money? : Money;
  source_tender_uid? : string;
  source_tender_id? : string;
};
interface OrderReward {
  id : string;
  reward_tier_id : string;
};
interface OrderRoundingAdjustment {
  uid? : string;
  name? : string;
  amount_money? : Money;
};
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
interface OrderSource {
  name : string;
};
interface OrderUpdated {
  order_id? : string;
  version? : number;
  location_id? : string;
  state? : string;
  created_at? : string;
  updated_at? : string;
};
interface OrderUpdatedObject {
  order_updated? : OrderUpdated;
};
interface PaginationCursor {
  order_value? : string;
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
interface PaymentBalanceActivityAppFeeRefundDetail {
  payment_id? : string;
  refund_id? : string;
  location_id? : string;
};
interface PaymentBalanceActivityAppFeeRevenueDetail {
  payment_id? : string;
  location_id? : string;
};
interface PaymentBalanceActivityAutomaticSavingsDetail {
  payment_id? : string;
  payout_id? : string;
};
interface PaymentBalanceActivityAutomaticSavingsReversedDetail {
  payment_id? : string;
  payout_id? : string;
};
interface PaymentBalanceActivityChargeDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityDepositFeeDetail {
  payout_id? : string;
};
interface PaymentBalanceActivityDepositFeeReversedDetail {
  payout_id? : string;
};
interface PaymentBalanceActivityDisputeDetail {
  payment_id? : string;
  dispute_id? : string;
};
interface PaymentBalanceActivityFeeDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityFreeProcessingDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityHoldAdjustmentDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityOpenDisputeDetail {
  payment_id? : string;
  dispute_id? : string;
};
interface PaymentBalanceActivityOtherAdjustmentDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityOtherDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityRefundDetail {
  payment_id? : string;
  refund_id? : string;
};
interface PaymentBalanceActivityReleaseAdjustmentDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityReserveHoldDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityReserveReleaseDetail {
  payment_id? : string;
};
interface PaymentBalanceActivitySquareCapitalPaymentDetail {
  payment_id? : string;
};
interface PaymentBalanceActivitySquareCapitalReversedPaymentDetail {
  payment_id? : string;
};
interface PaymentBalanceActivitySquarePayrollTransferDetail {
  payment_id? : string;
};
interface PaymentBalanceActivitySquarePayrollTransferReversedDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityTaxOnFeeDetail {
  payment_id? : string;
  tax_rate_description? : string;
};
interface PaymentBalanceActivityThirdPartyFeeDetail {
  payment_id? : string;
};
interface PaymentBalanceActivityThirdPartyFeeRefundDetail {
  payment_id? : string;
  refund_id? : string;
};
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
interface PaymentLinkRelatedResources {
  orders? : Order[];
  subscription_plans? : CatalogObject[];
};
interface PaymentOptions {
  autocomplete? : boolean;
  delay_duration? : string;
  accept_partial_authorization? : boolean;
  delay_action? : string;
};
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
interface PayoutFee {
  amount_money? : Money;
  effective_at? : string;
  type? : string;
};
interface Phase {
  uid? : string;
  ordinal? : number;
  order_template_id? : string;
  plan_phase_uid? : string;
};
interface PhaseInput {
  ordinal : number;
  order_template_id? : string;
};
interface PrePopulatedData {
  buyer_email? : string;
  buyer_phone_number? : string;
  buyer_address? : Address;
};
interface ProcessingFee {
  effective_at? : string;
  type? : string;
  amount_money? : Money;
};
interface QrCodeOptions {
  title : string;
  body : string;
  barcode_contents : string;
};
interface QuantityRatio {
  quantity? : number;
  quantity_denominator? : number;
};
interface QuickPay {
  name : string;
  price_money : Money;
  location_id : string;
};
interface Range {
  min? : string;
  max? : string;
};
interface ReceiptOptions {
  payment_id : string; 
  print_only? : boolean; 
  is_duplicate? : boolean; 
};
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
interface RiskEvaluation {
  created_at? : string;
  risk_level? : string;
};
interface SaveCardOptions {
  customer_id : string;
  card_id? : string;
  reference_id? : string;
};
interface SearchAvailabilityFilter {
  start_at_range : TimeRange;
  location_id? : string;
  segment_filters? : SegmentFilter[];
  booking_id? : string;
};
interface SearchAvailabilityQuery {
  filter : SearchAvailabilityFilter;
};
interface SearchEventsFilter {
  event_types? : string[];
  merchant_ids? : string[];
  location_ids? : string[];
  created_at? : TimeRange;
};
interface SearchEventsQuery {
  filter? : SearchEventsFilter;
  sort? : SearchEventsSort;
};
interface SearchEventsSort {
  field? : string;
  order? : string;
};
interface SearchLoyaltyAccountsRequestLoyaltyAccountQuery {
  mappings? : LoyaltyAccountMapping[];
  customer_ids? : string[];
};
interface SearchLoyaltyRewardsRequestLoyaltyRewardQuery {
  loyalty_account_id : string;
  status? : string;
};
interface SearchOrdersCustomerFilter {
  customer_ids? : string[];
};
interface SearchOrdersDateTimeFilter {
  created_at? : TimeRange;
  updated_at? : TimeRange;
  closed_at? : TimeRange;
};
interface SearchOrdersFilter  {
  state_filter? : SearchOrdersStateFilter;
  date_time_filter? : SearchOrdersDateTimeFilter;
  fulfillment_filter? : SearchOrdersFulfillmentFilter;
  source_filter? : SearchOrdersSourceFilter;
  customer_filter? : SearchOrdersCustomerFilter;
};
interface SearchOrdersFulfillmentFilter {
  fulfillment_types? : string[];
  fulfillment_states? : string[];
};
interface SearchOrdersQuery {
  filter? : SearchOrdersFilter;
  sort? : SearchOrdersSort;
};
interface SearchOrdersSort {
  sort_field : string;
  sort_order? : string;
};
interface SearchOrdersSourceFilter {
  source_names? : string[];
};
interface SearchOrdersStateFilter {
  states : string[];
};
interface SearchSubscriptionsFilter {
  customer_ids? : string[];
  location_ids? : string[];
  source_names? : string[];
};
interface SearchSubscriptionsQuery {
  filter? : SearchSubscriptionsFilter;
};
interface SearchTeamMembersFilter {
  location_ids? : string[];
  status? : string;
  is_owner? : boolean;
};
interface SearchTeamMembersQuery {
  filter? : SearchTeamMembersFilter;
};
interface SearchVendorsRequestFilter {
  name? : string[];
  status? : string[];
};
interface SearchVendorsRequestSort {
  field? : string;
  order? : string;
};
interface SegmentFilter {
  service_variation_id : string;
  team_member_id_filter? : FilterValue;
};
interface SelectOption {
  reference_id : string;
  title : string;
};
interface SelectOptions {
  title : string;
  body : string;
  options : SelectOption[];
  selected_option? : SelectOption;
};
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
interface ShiftFilter {
  location_ids? : string[];
  status? : string;
  start? : TimeRange;
  end? : TimeRange;
  workday? : ShiftWorkday;
  team_member_ids? : string[];
};
interface ShiftQuery {
  filter? : ShiftFilter;
  sort? : ShiftSort;
};
interface ShiftSort {
  field? : string;
  order? : string;
};
interface ShiftWage {
  title? : string;
  hourly_rate? : Money;
  job_id? : string;
  tip_eligible? : boolean;
};
interface ShiftWorkday {
  date_range? : DateRange;
  match_shifts_by? : string;
  default_timezone? : string;
};
interface ShippingFee {
  name? : string;
  charge : Money;
};
interface SignatureImage {
  image_type? : string;
  data? : string;
};
interface SignatureOptions {
  title : string;
  body : string;
  signature? : SignatureImage[];
};
interface Site {
  id? : string;
  site_title? : string;
  domain? : string;
  is_published? : boolean;
  created_at? : string;
  updated_at? : string;
};
interface Snippet {
  id? : string;
  site_id? : string;
  content : string;
  created_at? : string;
  updated_at? : string;
};
interface SourceApplication {
  product? : string;
  application_id? : string;
  name? : string;
};
interface SquareAccountDetails {
  payment_source_token? : string;
  errors? : Error[];
};
interface StandardUnitDescription {
  unit? : MeasurementUnit;
  name? : string;
  abbreviation? : string;
};
interface StandardUnitDescriptionGroup {
  standard_unit_descriptions? : StandardUnitDescription[];
  language_code? : string;
};
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
interface SubscriptionAction {
  id? : string;
  type? : string;
  effective_date? : string;
  monthly_billing_anchor_date? : number;
  phases? : Phase[];
  new_plan_variation_id? : string;
};
interface SubscriptionEvent {
  id : string;
  subscription_event_type : string;
  effective_date : string;
  monthly_billing_anchor_date? : number;
  info? : SubscriptionEventInfo;
  phases? : Phase[];
  plan_variation_id : string;
};
interface SubscriptionEventInfo {
  detail? : string;
  code? : string;
};
interface SubscriptionPhase {
  uid? : string;
  cadence : string;
  periods? : number;
  recurring_price_money? : Money;
  ordinal? : number;
  pricing? : SubscriptionPricing;
};
interface SubscriptionPricing {
  type? : string;
  discount_ids? : string[];
  price_money? : Money;
};
interface SubscriptionSource {
  name? : string;
};
interface SubscriptionTestResult {
  id? : string;
  status_code? : number;
  payload? : string;
  created_at? : string;
  updated_at? : string;
};
interface TaxIds {
  eu_vat? : string;
  fr_siret? : string;
  fr_naf? : string;
  es_nif? : string;
  jp_qii? : string;
};
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
interface TeamMemberAssignedLocations {
  assignment_type? : string;
  location_ids? : string[];
};
interface TeamMemberBookingProfile {
  team_member_id? : string;
  description? : string;
  display_name? : string;
  is_bookable? : boolean;
  profile_image_url? : string;
};
interface TeamMemberWage {
  id? : string;
  team_member_id? : string;
  title? : string;
  hourly_rate? : Money;
  job_id? : string;
  tip_eligible? : boolean;
};
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
interface TenderBankAccountDetails {
  status? : string;
};
interface TenderBuyNowPayLaterDetails {
  buy_now_pay_later_brand? : string;
  status? : string;
};
interface TenderCardDetails {
  status? : string;
  card? : Card;
  entry_method? : string;
};
interface TenderCashDetails {
  buyer_tendered_money? : Money;
  change_back_money? : Money;
};
interface TenderSquareAccountDetails {
  status? : string;
};
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
interface TerminalActionQuery {
  filter? : TerminalActionQueryFilter;
  sort? : TerminalActionQuerySort;
};
interface TerminalActionQueryFilter {
  device_id? : string;
  created_at? : TimeRange;
  status? : string;
  type? : string;
};
interface TerminalActionQuerySort {
  sort_order? : string;
};
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
interface TerminalCheckoutQuery {
  filter? : TerminalCheckoutQueryFilter;
  sort? : TerminalCheckoutQuerySort;
};
interface TerminalCheckoutQueryFilter {
  device_id? : string;
  created_at? : TimeRange;
  status? : string;
};
interface TerminalCheckoutQuerySort {
  sort_order? : string;
};
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
interface TerminalRefundQuery {
  filter? : TerminalRefundQueryFilter;
  sort? : TerminalRefundQuerySort;
};
interface TerminalRefundQueryFilter {
  device_id? : string;
  created_at? : TimeRange;
  status? : string;
};
interface TerminalRefundQuerySort {
  sort_order? : string;
};
interface TimeRange {
  start_at? : string;
  end_at? : string;
};
interface TipSettings {
  allow_tipping? : boolean;
  separate_tip_screen? : boolean;
  custom_tip_field? : boolean;
  tip_percentages? : string[];
  smart_tipping? : boolean;
};
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
interface VendorContact {
  id? : string;
  name? : string;
  email_address? : string;
  phone_number? : string;
  removed? : boolean;
  ordinal : number;
};
interface WageSetting {
  team_member_id? : string;
  job_assignments? : JobAssignment[];
  is_overtime_exempt? : boolean;
  version? : number;
  created_at? : string;
  updated_at? : string;
};
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
interface WorkweekConfig {
  id? : string;
  start_of_week : string;
  start_of_day_local_time : string;
  version? : number;
  created_at? : string;
  updated_at? : string;
};














// Request Body Interfaces
export interface CancelPaymentBody {
  idempotency_key : string;
};
export interface CompletePaymentBody {
  version_token? : string;
};
export interface CreateCardBody {
  idempotency_key : string;
  source_id : string;
  verification_token? : string;
  card : Card;

};
export interface CreateDisputeEvidenceFileBody {
  idempotency_key : string;
  evidence_type? : string;
  content_type? : string;
};
export interface CreateDisputeEvidenceTextBody {
  idempotency_key : string;
  evidence_type : string;
  evidence_text : string;
};
export interface CreateInvoiceAttachmentBody {
  idempotency_key? : string;
  description? : string;
};
export interface CreateInvoiceBody {
  invoice : Invoice;
  idempotency_key? : string;
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
export interface CreatePaymentLinkBody {
  idempotency_key? : string;
  description? : string;
  quick_pay? : QuickPay;
  order? : Order;
}
export interface CreateTerminalActionBody {
  idempotency_key : string;
  action : TerminalAction
};
export interface CreateTerminalCheckoutBody {
  idempotency_key : string;
  checkout : TerminalCheckout;
};
export interface CreateTerminalRefundBody {
  idempotency_key : string;
  refund? : TerminalRefund;
};
export interface PublishInvoiceBody {
  version : number;
  idempotency_key? : string;

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
export interface SearchInvoicesBody {
  query : InvoiceQuery;
  limit? : number;
  cursor? : string;
};
export interface SearchTerminalActionsBody {
  query? : TerminalActionQuery;
  cursor? : string;
  limit? : number;
};
export interface SearchTerminalCheckoutsBody {
  query? : TerminalCheckoutQuery;
  cursor? : string;
  limit? : number;
};
export interface SearchTerminalRefundsBody {
  query : TerminalRefundQuery;
  cursor : string;
  limit : number;
};
export interface UpdateInvoiceBody {
  invoice : Invoice;
  idempotency_key? : string;
  fields_to_clear? : string[];
};
export interface UpdateLocationSettingsBody {
  location_settings : CheckoutLocationSettings;
};
export interface UpdateMerchantSettingsBody {
  merchant_settings : CheckoutMerchantSettings;
};
export interface UpdatePaymentBody {
  payment : Payment,
  idempotency_key : string;
};
















// Request Params Interfaces
export interface DeleteInvoiceQueryParams {
  version? : number;
};
export interface ListCardsQueryParams {
  cursor? : string;
  customer_id? : string;
  include_disabled? : boolean;
  reference_id? : string;
  sort_order? : string;
};
export interface ListDisputesParams {
  cursor? : string;
  states? : string;
  location_id? : string;
};
export interface ListInvoicesQueryParams {
  location_id? : string;
  cursor? : string;
  limit? : number;
};
export interface ListPaymentLinksQueryParams {
  cursor? : string;
  limit? : number;
};
/**
 * @interface ListPaymentsQueryParams
 * @description Query parameters for {@link Square.listPayments}
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

