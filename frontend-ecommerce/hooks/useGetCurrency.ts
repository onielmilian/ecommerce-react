import { ProductType } from "../types/product";

enum Currency {
  USD = "$",
  EURO = "€"
}

export const useGetCurrency = (product: ProductType): string => {
  const cur = product.currency

  switch (cur) {
    case "USD":
      return Currency.USD

    case "EURO":
      return Currency.EURO

    default: return "$"
  }
}