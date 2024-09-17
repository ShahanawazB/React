const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(3);
//Destructing
book;
const { title, genres, pages, publicationDate, hasMovieAdaptation } = book;
console.log(title, genres);

//rest
const [primaryGenre, secondaryGenre, ...rest] = genres;
console.log(primaryGenre, secondaryGenre, rest);

//spread
const newArray = [primaryGenre, ...rest];
newArray;

//template literal

const str = `${title} is a book with ${pages}`;
str;

//ternary opertor
const trueOrNot = pages > 1000 ? "yes it over thousand" : "no its not";
trueOrNot;

//Arrow function
function getYear(str) {
  return str.split("-")[0];
}
const year = getYear(publicationDate);
year;

const getYearArrow = (str) => str.split("-");
console.log(getYearArrow(publicationDate));

//Short circuting
console.log(true && "return true");
console.log(false && "return false");
console.log(!hasMovieAdaptation && "this moview has adaptation");

console.log(true || "return string");
console.log(false || "return string");

const isTranslated = book.translations.korean || "NOT TRANSLATED";
isTranslated;
// ?? solves when value itself is 0 or ''
// const checkWrong = book.reviews.librarything.reviewsCount || "no value";
// checkWrong;

// const check = book.reviews.librarything.reviewsCount ?? "no value";
// check;

//optional chaining

function countReview(book) {
  const goodreads = book.reviews.goodreads.ratingsCount;
  const librarything = book.reviews.librarything?.ratingsCount ?? 0;
  return goodreads + librarything;
}
console.log(countReview(book));
*/
/*
//Array mapping
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const books = getBooks();
books;

const title = books.map((title) => title.title);
title;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentialData;

//Array filter

const filter = books
  .filter((book) => book.pages > 1000)
  .filter((book) => book.hasMovieAdaptation);
filter;

const filter2 = books
  .filter((book) => book.genres.includes("adventure"))
  .map((books) => books.title);

filter2;
console.log(filter2);

//Array reduce

const pagesAll = books.reduce((count, book) => count + book.pages, 0);
pagesAll;

// Array sort

const arr = [7, 8, 9, 1, 2, 3];
const sorted = arr.sort((a, b) => b - a);
sorted;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

//immutable arrays

//add

const newobj = {
  id: 6,
  title: "HP Chamber of secrets",
};

const newArr = [...books, newobj];
newArr;

// delete
const delArr = newArr.filter((book) => book.id != 6);
delArr;

const updArr = books.map((book) =>
  book.id == 1 ? { ...book, pages: 1 } : book
);
updArr;
*/

// PROMISE
const result = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((result) => result);
result;
console.log("hello");
console.log(result);

//await asyn

async function fetchTODO(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  const data = await res.json();
  return data;
}

console.log(fetchTODO(1));
console.log("hello");
