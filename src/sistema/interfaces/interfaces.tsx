interface FichaBasica {
  nome: string
  vida: number
  inventario?: Item[]
  atributos: {
    forca: number
    agilidade: number
    vigor: number
    sorte?:number
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
  pontosIniciais: number 
  haFicha?: string | null | object
}

interface Inimigo extends FichaBasica{}


export type {
  FichaBasica,
  Personagem, 
  Inimigo,
}