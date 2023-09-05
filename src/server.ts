import express from 'express'
import dotenv from 'dotenv'
import dataBase from './database/ormconfig'
import routes from './routes'
import cors from 'cors'

dotenv.config()
const app = express()
// O último parâmetro substitui caso não exista a variável
const port = process.env.PORT || 3000 

// Receber dados do tipo json
app.use(express.json())
app.use(routes)

// Parâmetros: porta e uma arrow function (função de callback, que não é reutilizada novamente)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log("Banco de dados: ", dataBase.isInitialized ? 'Iniciado' : 'não iniciado')
})

// Habilitar o CORS
app.use(cors({
    origin: ['http://localhost:3000', 'https://meuapp.com']
}))