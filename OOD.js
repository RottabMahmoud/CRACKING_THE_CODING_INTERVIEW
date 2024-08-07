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
    this.directors = [];
  }

  addEmployee(employee, level) {
    switch (level) {
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
    for (let employee of employees) {
      if (employee.handle(call)) {
        return true;
      }
    }
    return false;
  }

  dispatchCall(call) {
    if (this.assignCall(this.respondents, call)) return;
    if (this.assignCall(this.managers, call)) return;
    if (this.assignCall(this.directors, call)) return;
  }
}

// 7.3 Jukebox: Design a jukebox using object-oriented principles.

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  toString() {
    return `${this.title} by ${this.artist}`;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(title) {
    this.songs = this.songs.filter((song) => song.title !== title);
  }

  getSongs() {
    return this.songs;
  }

  toString() {
    return (
      `${this.name} Playlist:\n` +
      this.songs.map((song) => song.toString()).join("\n")
    );
  }
}

class Jukebox {
  constructor() {
    this.playlists = [];
    this.currentPlaylist = null;
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }

  selectPlaylist(name) {
    this.currentPlaylist =
      this.playlists.find((pl) => pl.name === name) || null;
  }

  playCurrentPlaylist() {
    if (this.currentPlaylist) {
      console.log(
        `Now playing ${
          this.currentPlaylist.name
        } playlist:\n${this.currentPlaylist.toString()}`
      );
    } else {
      console.log("No playlist selected.");
    }
  }

  addSongToCurrentPlaylist(song) {
    if (this.currentPlaylist) {
      this.currentPlaylist.addSong(song);
    } else {
      console.log("No playlist selected.");
    }
  }

  removeSongFromCurrentPlaylist(title) {
    if (this.currentPlaylist) {
      this.currentPlaylist.removeSong(title);
    } else {
      console.log("No playlist selected.");
    }
  }
}

// Create songs
const song1 = new Song("Song One", "Artist A");
const song2 = new Song("Song Two", "Artist B");
const song3 = new Song("Song Three", "Artist C");

// Create playlists
const playlist1 = new Playlist("My Favorites");
const playlist2 = new Playlist("Chill Vibes");

// Add songs to playlists
playlist1.addSong(song1);
playlist1.addSong(song2);
playlist2.addSong(song3);

// Create a jukebox
const jukebox = new Jukebox();

// Add playlists to the jukebox
jukebox.addPlaylist(playlist1);
jukebox.addPlaylist(playlist2);

// Select a playlist and play it
jukebox.selectPlaylist("My Favorites");
jukebox.playCurrentPlaylist();

// Add and remove songs from the current playlist
const song4 = new Song("Song Four", "Artist D");
jukebox.addSongToCurrentPlaylist(song4);
jukebox.removeSongFromCurrentPlaylist("Song One");

// Display the updated playlist
jukebox.playCurrentPlaylist();

// 7.4 Parking Lot: Designa  parking lot using Object oriented principles.

class Vehicle {
  constructor(licensePlate, size) {
    this.licensePlate = licensePlate;
    this.size = size; // size can be 'compact', 'standard', or 'large'
  }
}

class ParkingSpot {
  constructor(id, size) {
    this.id = id;
    this.size = size; // size can be 'compact', 'standard', or 'large'
    this.occupied = false;
    this.vehicle = null;
  }

  isAvailable() {
    return !this.occupied;
  }

  park(vehicle) {
    if (this.isAvailable() && vehicle.size === this.size) {
      this.occupied = true;
      this.vehicle = vehicle;
      return true;
    }
    return false;
  }

  vacate() {
    this.occupied = false;
    this.vehicle = null;
  }
}

class ParkingLot {
  constructor() {
    this.spots = [];
  }

  addSpot(spot) {
    this.spots.push(spot);
  }

  findAvailableSpot(size) {
    return this.spots.find((spot) => spot.size === size && spot.isAvailable());
  }

  parkVehicle(vehicle) {
    const spot = this.findAvailableSpot(vehicle.size);
    if (spot) {
      spot.park(vehicle);
      console.log(`Vehicle ${vehicle.licensePlate} parked in spot ${spot.id}`);
      return spot;
    } else {
      console.log("No available spot for this vehicle.");
      return null;
    }
  }

  removeVehicle(licensePlate) {
    const spot = this.spots.find(
      (spot) => spot.vehicle && spot.vehicle.licensePlate === licensePlate
    );
    if (spot) {
      spot.vacate();
      console.log(
        `Vehicle ${licensePlate} has been removed from spot ${spot.id}`
      );
      return true;
    } else {
      console.log("Vehicle not found.");
      return false;
    }
  }
}

// Create parking spots
const spot1 = new ParkingSpot(1, "compact");
const spot2 = new ParkingSpot(2, "standard");
const spot3 = new ParkingSpot(3, "large");

// Create a parking lot
const parkingLot = new ParkingLot();

// Add spots to the parking lot
parkingLot.addSpot(spot1);
parkingLot.addSpot(spot2);
parkingLot.addSpot(spot3);

// Create vehicles
const vehicle1 = new Vehicle("ABC123", "compact");
const vehicle2 = new Vehicle("XYZ789", "large");

// Park vehicles
parkingLot.parkVehicle(vehicle1); // Should park in spot1
parkingLot.parkVehicle(vehicle2); // Should park in spot3

// Remove a vehicle
parkingLot.removeVehicle("ABC123"); // Should vacate spot1

// 7.5 Online Book Reader: Design the data structures for an online book reader system.

// The User class will represent a user of the system. It will have attributes like userID, name, email, and readingHistory.

class User {
  constructor(userID, name, email) {
    this.userID = userID;
    this.name = name;
    this.email = email;
    this.readingHistory = [];
  }

  addBookToHistory(book) {
    this.readingHistory.push(book);
  }
}

// 2. Book
// The Book class will represent a book in the system. It will have attributes like bookID, title, author, and content.

class Book {
  constructor(bookID, title, author, content) {
    this.bookID = bookID;
    this.title = title;
    this.author = author;
    this.content = content;
  }
}

// 3. Library
// The Library class will manage a collection of books. It will have methods to add books and search for books.

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  searchBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  searchBookByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }
}

// 4. Reading Session
// The ReadingSession class will manage the reading session for a user. It will have attributes like user, book, and currentPage.

class ReadingSession {
  constructor(user, book) {
    this.user = user;
    this.book = book;
    this.currentPage = 0;
  }

  goToPage(pageNumber) {
    if (pageNumber >= 0 && pageNumber <= this.book.content.length) {
      this.currentPage = pageNumber;
    }
  }

  nextPage() {
    if (this.currentPage < this.book.content.length - 1) this.currentPage++;
  }

  previousPage() {
    if (this.currentPage >= 0) {
      this.currentPage--;
    }
  }

  getCurrentPageContent() {
    return this.book.content[this.currentPage];
  }
}

// Create a new library
const library = new Library();

// Create some books
const book1 = new Book("1", "Book Title 1", "Author 1", [
  "Page 1 content",
  "Page 2 content",
]);
const book2 = new Book("2", "Book Title 2", "Author 2", [
  "Page 1 content",
  "Page 2 content",
]);

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// Create a new user
const user = new User("1", "John Doe", "john@example.com");

// Create a new reading session
const readingSession = new ReadingSession(user, book1);

// Navigate through the book
readingSession.nextPage();
console.log(readingSession.getCurrentPageContent());

readingSession.previousPage();
console.log(readingSession.getCurrentPageContent());

// Add the book to the user's reading history
user.addBookToHistory(book1);

// 7.6 Jigsaw:  IMplement an NxN jigsaw pizzle. Design the data structures and exaplain an algorithm to solve the pizzle. 
// You can assume that you have a fitsWith method which, when passed two pizzle edges, return true if the two edges belong together.

// 7.7 Chat Server: Explain how you would design a chat server. In particular, procide details about the various backend components,
// classes, and methods. What would be the hardest problems to solve?

// 7.9 Circular Array: Implement a CircularArray class that supports an array-like data structure which can be efficiently rotated.
// If possible, the class should use a a generic type (also called a template), and should support iteration via the standard for 
// (Obj o : curcularArray) notation.

// 7.11 File System: Explain the data structures and algorithms that you would use to design an in-memory file system. Illustrate with
// an example in code where possible.

// 7.12 Hash Table: Design and Implement a hash table which uses chaining (linked lists) to handle collisions.
 
