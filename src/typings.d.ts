import { ImageSourcePropType } from "react-native";

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

type ListingType = {
  id: number;
  title: string;
  description?: string;
  price: number;
  categoryId: number;
  location: LocationType;
  images?: [{ thumbnailUrl: string; url: string }];
};

type LocationType = {
  longitude: number;
  latitude: number;
};

type MessageType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type UserType = {
  id: number;
  email: string;
  name: string;
  iat?: number;
};

type CurrentUserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
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
