export type BrandType = {
  documentId: string,
  name: string,
  slug: string,
  logo: {
    url: string,
    alternativeText?: string,
  },
  image: {
    url: string,
    alternativeText?: string,
  },
  website: string

}