type MessageType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type CategoryType = {
  label: string;
  value: number;
  backgroundColor?: string;
  icon?: string;
};

type InitialFormValuesType = {
  name?: string;
  email?: string;
  password?: string;
  title?: string;
  price?: string;
  description?: "";
  category?: CategoryType | null;
  images?: string[];
};

type LocationType = {
  longitude: number;
  latitude: number;
};

type TextContentTypeType =
  | "none"
  | "URL"
  | "addressCity"
  | "addressCityAndState"
  | "addressState"
  | "countryName"
  | "creditCardNumber"
  | "emailAddress"
  | "familyName"
  | "fullStreetAddress"
  | "givenName"
  | "jobTitle"
  | "location"
  | "middleName"
  | "name"
  | "namePrefix"
  | "nameSuffix"
  | "nickname"
  | "organizationName"
  | "postalCode"
  | "streetAddressLine1"
  | "streetAddressLine2"
  | "sublocality"
  | "telephoneNumber"
  | "username"
  | "password"
  | "newPassword"
  | "oneTimeCode"
  | undefined;
