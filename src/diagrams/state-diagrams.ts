import type { DiagramExample } from './flowcharts.js'

export const stateDiagrams: DiagramExample[] = [
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
]
