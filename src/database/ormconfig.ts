import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { join } from "path";

dotenv.config() //carrega as variáveis de ambiente do arquivo

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || './db.sqlite',
    entities: [
     // './src/models/*.ts'
     join(__dirname, '..', 'models/*.{ts,js}')
    ],
    logging: true, // log das queries executadas - escreve todo o comando sendo rodado
    synchronize: true // cria as tabelas automaticamente -> ele apaga tudo e cria novamente
  })

// Promises
dataBase.initialize()
    .then(() => {
        console.log("Banco conectado com sucesso")
    })
    .catch((erro) => {
        console.log("Erro ao conectar o banco!", erro)
    })

export default dataBase