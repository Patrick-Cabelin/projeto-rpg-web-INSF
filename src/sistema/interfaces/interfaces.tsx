interface FichaBasica {
  nome: string
  vida: number
  inventario?: Item[]
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
}

interface Inimigo extends FichaBasica{}


export type {
  Personagem, 
  Inimigo,
}