interface Personagem {
  nome: string
  mestre: string
  vida: number
  atributos: {
    mecanica: number
    sabedoria: number
    energia: number
  }
}

interface PersonagemProps {
  personagem: Personagem
}

interface Inimigo{
  nome: string
  vida: number
  mestre: string
  atributos:{
    mecanica:number
    sabedoria:number
    energia:number
  }
}

interface InimigoProps{
  inimigo: Inimigo
}

interface Mestre {
  nome:string
  atributos:{
    mecanica:number
    sabedoria:number
    energia:number
  }
}

interface MestreProps{
  mestre: Mestre
}

interface SistemaContextoProps{
  personagemFicha: Personagem | null
  encontrarFicha:(ficha:Personagem)=>void
  Teste?: (nivel:number, sucessoMinimo:number)=> boolean | number | object
}
export type {
  Personagem, 
  PersonagemProps,
  Inimigo,
  InimigoProps,
  Mestre,
  MestreProps,
  SistemaContextoProps
}