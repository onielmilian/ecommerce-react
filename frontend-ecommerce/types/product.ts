export type ProductType = {
  documentId: string,
  name: string,
  slug: string,
  description: string,
  published: boolean,
  featured: boolean,
  back_camera: number,
  battery_capacity: number,
  bestseller: boolean,
  color: string,
  createdAt: Date,
  discount_end_date: Date,
  discount_start_date: Date,
  discount_price: number,
  front_camera: number,
  gallery?: [],
  id: number,
  image: {
    alternativeText?: string,
    url: string,
  },
  microprocessor: string,
  model: string,
  operating_system: string,
  price: number,
  product_status: string,
  ram: number,
  screen_size: number,
  stock: number,
  storage_capacity: number,
  warranty: string,
  brand: {
    documentId: string,
    id: number,
    description: string,
    name: string,
    slug: string,
    website: string
  },
  currency: string,

}