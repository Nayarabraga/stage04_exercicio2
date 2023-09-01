function calculatedAverage(n1, n2) {
  const resultCalc = (n1 + n2) / 2;
  return resultCalc;
}

const students = [
  {
    name: 'Tiago',
    n1: 10,
    n2: 7
  },
  {
    name: 'Pedro',
    n1: 10,
    n2: 5
  },
  {
    name: 'João',
    n1: 2,
    n2: 8
  },
  {
    name: 'Júlia',
    n1: 9,
    n2: 7
  },
  {
    name: 'Maria',
    n1: 3,
    n2: 5
  },
  {
    name: 'Rafael',
    n1: 4,
    n2: 8
  }
];

students.map((student) => {
  const average = calculatedAverage(student.n1, student.n2);
  const gradeResult = average > 7;
  let message = `A média do(a) aluno(a), ${student.name} é: ${average}`;

  if (gradeResult) {
    alert(`${message} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
  } else {
    alert(`${message} \n Não foi dessa vez, ${student.name}! Tente novamente!`);
  }
});