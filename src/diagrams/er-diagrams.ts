import type { DiagramExample } from './flowcharts.js'

export const erDiagrams: DiagramExample[] = [
  {
    name: 'E-commerce Schema',
    description: 'Online store database design',
    code: `erDiagram
  CUSTOMER {
    int id PK
    string name
    string email UK
    string phone
    date created_at
  }
  ORDER {
    int id PK
    date created_at
    string status
    int customer_id FK
    decimal total
  }
  PRODUCT {
    int id PK
    string name
    text description
    decimal price
    int stock
  }
  LINE_ITEM {
    int id PK
    int order_id FK
    int product_id FK
    int quantity
    decimal price
  }
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE_ITEM : contains
  PRODUCT ||--o{ LINE_ITEM : includes`
  },
  {
    name: 'Blog Platform Schema',
    description: 'Content management system database',
    code: `erDiagram
  USER {
    int id PK
    string username UK
    string email UK
    string password_hash
    date joined_at
  }
  POST {
    int id PK
    string title
    text content
    int author_id FK
    date published_at
    string status
  }
  COMMENT {
    int id PK
    text content
    int post_id FK
    int author_id FK
    date created_at
  }
  TAG {
    int id PK
    string name UK
    string slug UK
  }
  POST_TAG {
    int post_id FK
    int tag_id FK
  }
  USER ||--o{ POST : writes
  USER ||--o{ COMMENT : writes
  POST ||--o{ COMMENT : has
  POST ||--o{ POST_TAG : has
  TAG ||--o{ POST_TAG : tagged`
  }
]
