export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface NewsletterSubscription {
  email: string
  name?: string
  preferences?: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
}