// const venom = require("venom-bot"); // Controla o venom bot, além de armazenar dentro da variável todas as suas bibliotecas

// venom.create({
//     session: "chatGPT_BOT",
//     multidevice: true
// })
// .then((client) => start(client))
// .catch((err) => console.log(err)); // Criamos uma sessão responsável por requisitar os serviços do chatGPT como o nosso assistente virtual

// const header = {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer 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"
// } // Adicionando a chave da API do chatGPT ao nosso código para poder utilizá-lo.

// const start = (client) =>{
//     client.onMessage((message) =>{
//         axios.post("https://api.openai.com/v1/chat/completions", {
//             "model": "gpt-3.5-turbo",
//             "messages": [{"role": "user", "content": message.body}]
//         }, {
//             headers: header
//         })
//         .then((response)=>{
//             console.log(response.data.choices); 
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     })
// } // Inicia o bot e estabelece uma conexão com o whatsapp   

const venom = require("venom-bot");
const axios = require("axios");

venom.create({
    session: "chatGPT_BOT",
    multidevice: true
})
.then((client) => start(client))
.catch((err) => console.log(err)); // Criamos uma sessão responsável por requisitar os serviços do chatGPT como o nosso assistente virtual

const header = {
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
}; // Adicionando a chave da API do chatGPT ao nosso código para poder utilizá-lo.

const start = (client) => {
    client.onMessage(async (message) => {
        try {
            const response = await axios.post("https://api.openai.com/v1/chat/completions", {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": message.body}]
            }, {
                headers: header
            });

            const reply = response.data.choices[0].message.content;
            await client.sendText(message.from, reply);
        } catch (err) {
            console.error("Erro ao enviar mensagem:", err);
        }
    });
}; // Inicia o bot e estabelece uma conexão com o whatsapp 
