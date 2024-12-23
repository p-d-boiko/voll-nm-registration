interface RegistrationFormData {
  "user-id": string;
  password: string;
  account: string;
  email: string;
  verification: string;
  "service-terms": boolean;
  "privacy-policy": boolean;
  "promotions-consent"?: boolean;
}

export type { RegistrationFormData };
