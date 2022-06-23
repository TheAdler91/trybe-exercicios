const users = (name) => {
    const email = name.toLowerCase().split(' ').join('-');
    return {name: name, email: `${email}@trybe.com`}
}
//   console.log(users('Pedro Guerra'));

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Philip Adler'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Gomez Rodrigos'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
  };
  console.log(newEmployees(users));
 