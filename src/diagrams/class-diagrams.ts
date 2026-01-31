import type { DiagramExample } from './flowcharts.js'

export const classDiagrams: DiagramExample[] = [
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
]
