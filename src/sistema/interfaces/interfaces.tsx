interface Personagem {
  nome: string;
  mestre: string;
  atributos: {
    mecanica: number;
    sabedoria: number;
    energia: number;
  };
}

interface PersonagemProps {
  personagem: Personagem;
}
export type {Personagem, PersonagemProps};