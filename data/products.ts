export const PRODUCTS = {
  backpack: 'Sauce Labs Backpack',
  boltShirt: 'Sauce Labs Bolt T-Shirt',
  onesie: 'Sauce Labs Onesie',
  fleeceJacket: 'Sauce Labs Fleece Jacket',
} as const;

export type Product = (typeof PRODUCTS)[keyof typeof PRODUCTS];