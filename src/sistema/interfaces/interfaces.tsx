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

interface Item{
  id: number
  nome: string
  quantidade: number
  tipo?: 'dano' | 'cura'
  valor?:number
  eConsumivel?: boolean
  acao?: () => void
}
interface Personagem extends FichaBasica{
  pontosIniciais: number 
  haFicha?: string | null | object
}

interface Inimigo extends FichaBasica{
  presente:boolean
  fichaInimigo: object | null}


export type {
  FichaBasica,
  Personagem, 
  Inimigo,
  Item
}