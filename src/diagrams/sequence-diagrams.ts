import type { DiagramExample } from './flowcharts.js'

export const sequenceDiagrams: DiagramExample[] = [
  {
    name: 'Basic Message Flow',
    description: 'Simple interaction between participants',
    code: `sequenceDiagram
  participant Alice
  participant Bob
  Alice->>Bob: Hello Bob!
  Bob-->>Alice: Hi Alice!
  Alice->>Bob: How are you?
  Bob-->>Alice: I'm good, thanks!`
  },
  {
    name: 'OAuth 2.0 Flow',
    description: 'Authorization code grant flow',
    code: `sequenceDiagram
  actor User
  participant App as Client App
  participant Auth as Auth Server
  participant API as Resource API

  User->>App: Click Login
  App->>Auth: Authorization request
  Auth->>User: Login page
  User->>Auth: Credentials
  Auth-->>App: Authorization code
  App->>Auth: Exchange code for token
  Auth-->>App: Access token
  App->>API: Request with token
  API-->>App: Protected resource
  App-->>User: Display data`
  },
  {
    name: 'Microservice Orchestration',
    description: 'Order processing across multiple services',
    code: `sequenceDiagram
  participant Client
  participant Gateway
  participant Order as Order Service
  participant Payment
  participant Inventory
  participant Notify as Notification

  Client->>Gateway: Create Order
  Gateway->>Order: Process Order
  Order->>Payment: Charge Customer
  Payment-->>Order: Payment Confirmed
  Order->>Inventory: Reserve Items
  Inventory-->>Order: Items Reserved
  Order->>Notify: Send Confirmation
  Notify-->>Client: Email Sent
  Order-->>Gateway: Order Complete
  Gateway-->>Client: 201 Created`
  }
]
