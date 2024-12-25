interface FichaBasica {
  nome: string
  vida: number
  atributos: {
    forca: number
    agilidade: number
    vigor: number
  }
}

type Item= {
  id: number
  nome: string
  quantidade: number
  dano?: number
  cura?: number
  eConsumivel?: boolean
  acao?: () => void
}
interface Personagem extends FichaBasica{
  inventario: Item[]
}
interface Inimigo extends FichaBasica{}

interface SistemaContextoProps{
  personagemFicha: Personagem | null
  encontrarFicha:(ficha:Personagem)=>void
}
export type {
  Personagem, 
  Inimigo,
  SistemaContextoProps
}