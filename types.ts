export interface Root {
  length: number
  id: number
  user_id: number
  title: string
  author: string
  category_name: string | ''
  category_type: string
  picture_url: string
  cover_picture_url: string | null
  description: string
  embeddable_player_settings: object | null
  created_at: string
  updated_at: string
  subscriber_count: number
  publisher: Publisher
}

export interface Publisher {
  id: number
  first_name: string
  last_name: string
  company_name: string
  profile_image_url?: string | null
  created_at: string
  updated_at: string
}

export interface Pagination {
  data: {
    current_page: number
    first_page_url: string
    last_page: string
    last_page_url: string
    next_page_url?: string | null
    per_page: string
    prev_page_url: string
  }
}