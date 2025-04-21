import { Inimigo } from "../interfaces/interfaces";

const Inimigos: Inimigo[] = [
  {
    nome: "Vagante Ensanguentado",
    vida: 20,
    atributos: {
      forca: 3,
      agilidade: 2,
      vigor: 2
    },
    inventario: [
      {
        id: 1,
        nome: "Faca Enferrujada",
        quantidade: 1,
        tipo: "dano",
        valor: 5
      }
    ]
  },
  {
    nome: "Soldado Desgarrado",
    vida: 35,
    atributos: {
      forca: 5,
      agilidade: 4,
      vigor: 4,
      sorte: 1
    },
    inventario: [
      {
        id: 2,
        nome: "Kit de Primeiros Socorros",
        quantidade: 1,
        tipo: "cura",
        valor: 20,
        eConsumivel: true
      },
      {
        id: 3,
        nome: "Revólver descarregado",
        quantidade: 1
      }
    ]
  },
  {
    nome: "Mutante de Esgoto",
    vida: 50,
    atributos: {
      forca: 6,
      agilidade: 3,
      vigor: 5
    },
    inventario: []
  },
  {
    nome: "Cultista Inflamado",
    vida: 28,
    atributos: {
      forca: 4,
      agilidade: 2,
      vigor: 3,
      sorte: 2
    },
    inventario: [
      {
        id: 4,
        nome: "Molotov Improvisado",
        quantidade: 1,
        tipo: "dano",
        valor: 15,
        eConsumivel: true
      }
    ]
  },
  {
    nome: "Androide Corrompido",
    vida: 60,
    atributos: {
      forca: 7,
      agilidade: 5,
      vigor: 6
    },
    inventario: [
      {
        id: 5,
        nome: "Bateria Instável",
        quantidade: 1,
        tipo: "cura",
        valor: 25,
        eConsumivel: true
      }
    ]
  }
];

export default Inimigos;
