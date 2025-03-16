const express = require('express');
const app = express();
const port = 8080;

const questions = [
  // Matemática Básica
  {
    id: 1,
    question: "Qual é o valor de 3² + 4²?",
    options: ["16", "25", "34", "20"],
    correctAnswer: "25"
  },
  {
    id: 2,
    question: "Se uma reta paralela a uma das laterais de um triângulo isósceles for desenhada, o que será o ângulo formado com essa reta?",
    options: ["90°", "45°", "30°", "60°"],
    correctAnswer: "90°"
  },
  {
    id: 3,
    question: "Qual é o valor de x na equação 2x + 4 = 10?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3"
  },
  {
    id: 4,
    question: "Qual é o perímetro de um quadrado com lado igual a 6 cm?",
    options: ["24 cm", "18 cm", "30 cm", "36 cm"],
    correctAnswer: "24 cm"
  },
  {
    id: 5,
    question: "Quantos graus possui um ângulo reto?",
    options: ["45°", "90°", "120°", "180°"],
    correctAnswer: "90°"
  },
  
  // Ciências (Biologia, Física e Química)
  {
    id: 6,
    question: "O que é fotossíntese?",
    options: ["Processo de respiração celular", "Conversão de luz solar em energia", "Processo de digestão", "Transformação de nutrientes em oxigênio"],
    correctAnswer: "Conversão de luz solar em energia"
  },
  {
    id: 7,
    question: "Qual é a principal função do coração no sistema circulatório?",
    options: ["Transportar oxigênio", "Bombear sangue", "Filtrar impurezas", "Produzir hormônios"],
    correctAnswer: "Bombear sangue"
  },
  {
    id: 8,
    question: "Qual é o estado físico da água a 0°C?",
    options: ["Sólido", "Gasoso", "Líquido", "Plasma"],
    correctAnswer: "Sólido"
  },
  {
    id: 9,
    question: "A que fenômeno se deve o aumento da temperatura dos oceanos devido ao acúmulo de gases na atmosfera?",
    options: ["Efeito estufa", "Radiação solar", "Inversão térmica", "Reflexão térmica"],
    correctAnswer: "Efeito estufa"
  },
  {
    id: 10,
    question: "Qual é a fórmula química da água?",
    options: ["CO₂", "H₂O", "O₂", "NaCl"],
    correctAnswer: "H₂O"
  },

  // Lógica
  {
    id: 11,
    question: "Qual é o próximo número na sequência: 2, 4, 8, 16, ___?",
    options: ["20", "32", "24", "18"],
    correctAnswer: "32"
  },
  {
    id: 12,
    question: "Se você tem 5 maçãs e dá 2 para um amigo, quantas maçãs você tem agora?",
    options: ["1", "3", "4", "2"],
    correctAnswer: "3"
  },
  {
    id: 13,
    question: "Qual número vem em seguida na sequência: 3, 6, 9, 12, ___?",
    options: ["13", "14", "15", "16"],
    correctAnswer: "15"
  },
  {
    id: 14,
    question: "Quantos segundos há em 2 minutos?",
    options: ["60", "120", "150", "100"],
    correctAnswer: "120"
  },
  {
    id: 15,
    question: "Se Maria é mais velha que José, e José é mais velho que João, quem é o mais jovem?",
    options: ["Maria", "José", "João", "Não é possível determinar"],
    correctAnswer: "João"
  }
];

// Armazenar as perguntas já sorteadas
let drawnQuestions = [];

// Função para obter uma pergunta aleatória que não foi sorteada ainda
function getRandomQuestion() {
  // Se todas as perguntas já foram sorteadas, resetamos o array de sorteadas
  if (drawnQuestions.length === questions.length) {
    drawnQuestions = [];
  }

  // Sorteia uma pergunta que ainda não foi sorteada
  let randomIndex;
  let randomQuestion;
  
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
    randomQuestion = questions[randomIndex];
  } while (drawnQuestions.includes(randomQuestion.id));

  // Marca a pergunta como sorteada
  drawnQuestions.push(randomQuestion.id);

  return randomQuestion;
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpoint para fornecer uma pergunta aleatória
app.get('/', (req, res) => {
  const randomQuestion = getRandomQuestion();  // Obtém uma pergunta aleatória
  res.json(randomQuestion);  // Retorna a pergunta sorteada em formato JSON
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
