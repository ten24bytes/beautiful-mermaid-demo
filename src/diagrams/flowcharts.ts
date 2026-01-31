export interface DiagramExample {
  name: string
  description: string
  code: string
}

export const flowcharts: DiagramExample[] = [
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
]
