const data = [
    {
        question: "Como você se sente quando está muito feliz?",
        options: ["Triste","Surpreso","Bravo","Alegre"],
        imagem: require("../img/EntendoEmocoes1.png"),
        audio: require("../audios/Level3Q1.mp3"),
        correct_option: "Alegre"
    },
    {
        question: "O que você sente quando algo engraçado acontece?",
        options: ["Feliz","Cansado","Assustado"," Irritado"],
        imagem: require("../img/EntendoEmocoes2.png"),
        audio: require("../audios/Level3Q2.mp3"),
        correct_option: "Feliz"
    },
    {
        question: "Como você se sente quando está com medo?",
        options: ["Animado","Calmo","Assustado","Chateado"],
        imagem: require("../img/EntendoEmocoes3.png"),
        audio: require("../audios/Level3Q3.mp3"),
        correct_option: "Assustado"
    },
    {
        question: "Quando algo não sai como planejado, como você geralmente se sente?",
        options: ["Irritado","Surpreso","Triste","Contente"],
        imagem: require("../img/EntendoEmocoes4.png"),
        audio: require("../audios/Level3Q4.mp3"),
        correct_option: "Triste"
    },
    {
        question: "Como você se sente quando está prestes a fazer algo divertido?",
        options: ["Preocupado","Animado","Surpreso","Desanimado"],
        imagem: require("../img/EntendoEmocoes6.png"),
        audio: require("../audios/Level3Q5.mp3"),
        correct_option: "Animado"
    },
    {
        question: "O que significa estar cansado?",
        options: ["Cheio de energia","Precisando de descanso","Pronto para brincar","Estar com fome"],
        imagem: require("../img/EntendoEmocoes7.png"),
        audio: require("../audios/Level3Q6.mp3"),
        correct_option: "Precisando de descanso"
    }
]
module.exports = data;