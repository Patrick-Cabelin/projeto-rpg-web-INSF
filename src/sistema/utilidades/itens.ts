import {Item} from '../interfaces/interfaces'

const Itens: Item[]= [
        {
            id: 1,
            nome: "Lata de ervilhas Pequena",
            quantidade: 3,
            tipo: "cura",
            valor: 3,
            eConsumivel: true,
            acao: () => {
                console.log("Você recupera 20 pontos de vida!");
            }
        },
        {
            id: 2,
            nome: "Pé de Cabra Enferrujado",
            quantidade: 1,
            tipo: "dano",
            valor: 20,
            eConsumivel: false,
            acao: () => {
                console.log("Você acerta com força, causando dano contundente.");}
            },
        {
            id: 3,
            nome: "Lata de Feijão enlatado",
            quantidade: 2,
            valor: 10,
            eConsumivel: true,
            acao: () => {
                console.log("Você se alimenta e recupera um pouco de energia.");
            }
        },
        {
            id: 4,
            nome: "Coquetel Molotov",
            quantidade: 1,
            tipo: "dano",
            valor: 75,
            eConsumivel: true,
            acao: () => {
                console.log("Você lança o coquetel e cria uma explosão incendiária!");
            }
        },
        {
            id: 5,
            nome: "Lanterna com Pilha Fraca",
            quantidade: 1,
            valor: 15,
            eConsumivel: false,
            acao: () => {
                console.log("A lanterna ilumina brevemente os arredores escuros.");
            }
        }
]


export {Itens}