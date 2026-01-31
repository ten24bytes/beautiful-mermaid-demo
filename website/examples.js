// Diagram examples organized by category
const EXAMPLES = {
  flowcharts: [
    {
      name: 'Basic Shapes and Edges',
      description: 'Demonstrates all node shapes and edge styles',
      code: `graph LR
  A[Rectangle] --> B(Rounded)
  B --> C{Diamond}
  C -->|Yes| D([Stadium])
  C -.->|No| E((Circle))
  D ==> F>Asymmetric]`
    },
    {
      name: 'CI/CD Pipeline',
      description: 'A realistic continuous integration pipeline',
      code: `graph TD
  subgraph ci [CI Pipeline]
    A[Push Code] --> B{Tests Pass?}
    B -->|Yes| C[Build Image]
    B -->|No| D[Fix & Retry]
    D -.-> A
  end
  C --> E[Deploy Staging]
  E --> F{Smoke Tests OK?}
  F -->|Yes| G[Deploy Production]
  F -->|No| H[Rollback]
  H --> D`
    },
    {
      name: 'Decision Tree',
      description: 'Customer support routing logic',
      code: `graph TD
  Start[Customer Query] --> Type{Query Type?}
  Type -->|Technical| Tech[Tech Support]
  Type -->|Billing| Bill[Billing Team]
  Type -->|General| Gen[General Inquiries]
  Tech --> Priority{Priority?}
  Priority -->|High| Urgent[Urgent Queue]
  Priority -->|Normal| Regular[Regular Queue]
  Bill --> Account{Has Account?}
  Account -->|Yes| Existing[Existing Customer]
  Account -->|No| New[New Customer]`
    },
    {
      name: 'System Architecture',
      description: 'Microservices architecture overview',
      code: `graph TD
  Client[Web Client] --> LB[Load Balancer]
  LB --> API[API Gateway]
  API --> Auth[Auth Service]
  API --> Users[User Service]
  API --> Orders[Order Service]
  Users --> DB1[(User DB)]
  Orders --> DB2[(Order DB)]
  Orders --> Queue[Message Queue]
  Queue --> Email[Email Service]
  Queue --> Notify[Notification Service]`
    },
    {
      name: 'All Directions',
      description: 'Demonstrates TD, LR, BT, RL graph orientations',
      code: `graph LR
  subgraph lr [Left to Right]
    A1[Start] --> A2[Middle] --> A3[End]
  end
  subgraph td [Top Down]
    direction TD
    B1[Start] --> B2[Middle] --> B3[End]
  end
  lr --> td`
    }
  ],

  state: [
    {
      name: 'Basic State Machine',
      description: 'Simple state transitions',
      code: `stateDiagram-v2
  [*] --> Idle
  Idle --> Active : start
  Active --> Paused : pause
  Paused --> Active : resume
  Active --> Idle : cancel
  Active --> Done : complete
  Done --> [*]`
    },
    {
      name: 'Composite States',
      description: 'States with nested substates',
      code: `stateDiagram-v2
  [*] --> Draft
  Draft --> Review : submit

  state Review {
    [*] --> Pending
    Pending --> Approved : approve
    Pending --> Rejected : reject
    Rejected --> [*]
  }

  Review --> Published : Approved
  Review --> Draft : Rejected
  Published --> Archived : archive
  Archived --> [*]`
    },
    {
      name: 'Connection Lifecycle',
      description: 'Network connection state management',
      code: `stateDiagram-v2
  [*] --> Disconnected
  Disconnected --> Connecting : connect()
  Connecting --> Connected : success
  Connecting --> Disconnected : timeout
  Connected --> Reconnecting : connection_lost
  Reconnecting --> Connected : reconnected
  Reconnecting --> Disconnected : max_retries
  Connected --> Disconnected : disconnect()
  Disconnected --> [*]`
    }
  ],

  sequence: [
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
  ],

  class: [
    {
      name: 'Basic Inheritance',
      description: 'Animal class hierarchy',
      code: `classDiagram
  class Animal {
    +String name
    +int age
    +eat() void
    +sleep() void
  }
  class Dog {
    +String breed
    +bark() void
    +fetch() void
  }
  class Cat {
    +String color
    +meow() void
    +scratch() void
  }
  Animal <|-- Dog
  Animal <|-- Cat`
    },
    {
      name: 'Observer Pattern',
      description: 'Design pattern implementation',
      code: `classDiagram
  class Subject {
    -List~Observer~ observers
    +attach(Observer) void
    +detach(Observer) void
    +notify() void
  }
  class Observer {
    <<interface>>
    +update() void
  }
  class ConcreteSubject {
    -state
    +getState() State
    +setState(State) void
  }
  class ConcreteObserver {
    -Subject subject
    +update() void
  }
  Subject <|-- ConcreteSubject
  Observer <|.. ConcreteObserver
  Subject o-- Observer
  ConcreteObserver --> ConcreteSubject`
    },
    {
      name: 'MVC Architecture',
      description: 'Model-View-Controller pattern',
      code: `classDiagram
  class Model {
    -data
    +getData() Data
    +setData(Data) void
    +notifyObservers() void
  }
  class View {
    -model Model
    +render() void
    +update() void
  }
  class Controller {
    -model Model
    -view View
    +handleInput(Input) void
    +updateModel(Data) void
  }
  Controller --> Model : updates
  Controller --> View : manages
  View --> Model : reads
  Model --> View : notifies`
    }
  ],

  er: [
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
}

// Category metadata
const CATEGORIES = {
  flowcharts: { label: 'Flowcharts', icon: '<i class="fa-solid fa-diagram-project"></i>' },
  state: { label: 'State Diagrams', icon: '<i class="fa-solid fa-arrows-rotate"></i>' },
  sequence: { label: 'Sequence', icon: '<i class="fa-solid fa-arrows-left-right"></i>' },
  class: { label: 'Class Diagrams', icon: '<i class="fa-solid fa-cube"></i>' },
  er: { label: 'ER Diagrams', icon: '<i class="fa-solid fa-database"></i>' }
}

// Theme names for display
const THEME_NAMES = {
  'tokyo-night': 'Tokyo Night',
  'tokyo-night-light': 'Tokyo Night Light',
  'tokyo-night-storm': 'Tokyo Night Storm',
  'dracula': 'Dracula',
  'github-dark': 'GitHub Dark',
  'github-light': 'GitHub Light',
  'solarized-dark': 'Solarized Dark',
  'solarized-light': 'Solarized Light',
  'catppuccin-mocha': 'Catppuccin Mocha',
  'catppuccin-latte': 'Catppuccin Latte',
  'nord': 'Nord',
  'nord-light': 'Nord Light',
  'zinc-dark': 'Zinc Dark',
  'zinc-light': 'Zinc Light',
  'one-dark': 'One Dark',
  'one-light': 'One Light'
}
