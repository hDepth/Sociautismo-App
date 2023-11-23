const data = [
    {
        question: "Você está no parque e vê uma criança sozinha. O que você faz?",
        options: ["Continua brincando","Vai embora","Pergunta se ela quer brincar","Ignora a situação"],
        imagem: require("../img/SituaçõesSociais1.png"),
        audio: require("../audios/Level2Q1.mp3"),
        correct_option: "Pergunta se ela quer brincar"
    },
    {
        question: "Durante a aula, seu amigo parece triste. O que você faz?",
        options: ["Pergunta se está tudo bem","Continua com suas atividades","não faz nada", "Zomba dele"],
        imagem: require("../img/SituaçõesSociais2.png"),
        audio: require("../audios/Level2Q2.mp3"),
        correct_option: "Pergunta se está tudo bem"
    },
    {
        question: "Quando você conhece alguém novo, o que você faz para cumprimentá-lo?",
        options: ["Fica quieto","Não faz nada","Da um abraço","Diz 'oi' ou Aperta a mão"],
        imagem: require("../img/SituaçõesSociais3.png"),
        audio: require("../audios/Level2Q3.mp3"),
        correct_option: "Diz 'oi' ou Aperta a mão"
    },
    {
        question: "Em uma brincadeira em grupo, o que você faz se alguém não entender as regras?",
        options: ["Explica as regras","Continua jogando","Ri da situação","Para de brincar"],
        imagem: require("../img/SituaçõesSociais4.png"),
        audio: require("../audios/Level2Q4.mp3"),
        correct_option: "Explica as regras"
    },
    {
        question: "Se alguém está sorrindo, o que isso geralmente significa",
        options: ["Está zangado","Está feliz","Está triste","Está surpreso"],
        imagem: require("../img/SituaçõesSociais5.png"),
        audio: require("../audios/Level2Q5.mp3"),
        correct_option: "Está feliz"
    },
    {
        question: "Durante uma atividade silenciosa na sala de aula, o que você faz se precisar de ajuda?",
        options: ["Fica quieto","Não faz nada","Levanta a mão e espera","Grita"],
        imagem: require("../img/SituaçõesSociais6.png"),
        audio: require("../audios/Level2Q6.mp3"),
        correct_option: "Levanta a mão e espera"
    },
    
]
module.exports = data;