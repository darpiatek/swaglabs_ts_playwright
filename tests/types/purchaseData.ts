export interface PurchaseData {
  productsToAdd: string[];
  productsToRemove: string[];
  expectedTotal: number;
  checkoutInformation: {
    firstName: string;
    lastName: string;
    postalCode: string;
  };
}