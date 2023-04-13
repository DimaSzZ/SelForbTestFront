export interface FilterRequest {
  number?:string | null,
  lowDate?:string | null,
  highDate?:string | null,
  providerId?: number | null,
  productName?: string | null,
  unit?: string | null,
  providerName?: string | null
}
