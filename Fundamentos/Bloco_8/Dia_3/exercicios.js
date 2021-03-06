const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

//   const newArray = (arr) => arr.map( (book) => `${book.name} - ${book.genre} - ${book.author.name}`);
//   console.log(newArray(books));

//   🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

// const newArrayByAge = (arr) => arr.map((book) => ({
//     age: book.releaseYear - book.author.birthYear,
//     author: book.author.name
// }))
// .sort( (a, b) => a.age - b.age);
// console.log(newArrayByAge(books));

//  3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

// const genreFinder = (arr, genre1, genre2) => arr.filter( (book) => book.genre === genre1 || book.genre === genre2);
// console.log(genreFinder(books, 'Fantasia', 'Ficção Científica'));

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const booksOver60 = (arr) =>
arr.filter((book) => (2022 - book.releaseYear) >= 60).
sort((a, b) => (2022 - b.releaseYear) - (2022 - a.releaseYear));

// console.log(booksOver60(books));


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
// function fantasyOrScienceFictionAuthors() {
//     const wantedGenres = ['Fantasia', 'Ficção Científica'];
//     return books
//       .filter((book) => wantedGenres.includes(book.genre))
//       .map((book) => book.author.name).sort();
//   }
//   fantasyOrScienceFictionAuthors();
//   console.log(fantasyOrScienceFictionAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = (arr) => booksOver60(arr).map((book) => book.name);
console.log(oldBooks(books));

//  7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
function authorWith3DotsOnName() {
    return books.find((book) => (
      book.author.name.split(' ')
        .filter((word) => word.endsWith('.')).length === 3
    )).name;
  }
  authorWith3DotsOnName();