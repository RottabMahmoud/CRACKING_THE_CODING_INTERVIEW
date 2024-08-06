// 7.1 Deck of Cards: Design the data structures for a generic deck of cards. Explain how you would subclass the data structures to
// implement blackjack.

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    this.ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    this.cards = [];

    this.intialize();
    this.shuffle();
  }

  intialize() {
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop();
  }
}

class BlackjackCard extends Card {
  value() {
    if (["Jack", "Queen", "King"].includes(this.rank)) {
      return 10;
    } else if (this.rank === "Ace") {
      return 11;
    } else {
      return parseInt(this.rank);
    }
  }
}

class BlackjackDeck extends Deck {
  initialize() {
    this.cards = [];
    for (let suit of this.suits) {
      for (let rank of this.ranks) {
        this.cards.push(new BlackjackCard(suit, rank));
      }
    }
  }
}

// 7.2 Call Center: Imagine you have a call center with three levels of employees: respondent, manager, and director. An incomding
// telephone call must be first allocated to a respondent who is free. if the respondent can't handle the call, he or she must
// escalate the call to a manager, if the manager is not free or not able to handle it, then the call should be escalated to a director.
// Design the classes and data structures for this problem. Implement a method dispatchCall() which assign a call to the first
// available employee.

class Employee {
  constructor(name) {
    this.name = name;
    this.isAvailable = true;
  }

  isAvailable() {
    return this.isAvailable;
  }

  setAvailable(status) {
    this.isAvailable = status;
  }

  handleCall(call) {
    if (this.isAvailable()) {
      console.log(`${this.name} is handling the call.`);
      this.isAvailable = false;
      return true;
    }
    return false;
  }
}

class Respondent extends Employee {
  constructor(name) {
    super(name);
  }
}

class Manager extends Employee {
  constructor(name) {
    super(name);
  }
}

class Director extends Employee {
  constructor(name) {
    super(name);
  }
}

class CallCenter {
  constructor() {
    this.respondents = [];
    this.managers = [];
    this.directors [];
  }

  addEmployee(employee, level) {
    switch(level) {
        case "respondent":
            this.respondents.push(employee);
            break;
        case "manager":
            this.managers.push(employee);
            break;
        case "director":
            this.directors.push(employee);
            break;
    }
  }

  assignCall(employees, call) {
    for(let employee of employees) {
        if(employee.handle(call)){
            return true;
        }
    }
    return false;

  }

  dispatchCall(call) {
    if(this.assignCall(this.respondents,call)) return;
    if(this.assignCall(this.managers,call)) return;
    if(this.assignCall(this.directors,call)) return;
  }
}
