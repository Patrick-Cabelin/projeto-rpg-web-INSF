import styled from 'styled-components'

const Criacao = styled.form`
    width: 74rem;
    height: 86rem;
    margin: 3.5rem;

    padding: 0 3rem 0;
  
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background: url('/src/estilos/assests/folha.svg') center no-repeat;
    font-size: 2rem;
    font-family: "Shadows Into Light Two", serif;
    cursor: default;

    >div:first-child{
      margin: 0 auto;
      input[type="text"]{
        background: none;
        border: .1rem solid ${({theme:tema})=> tema.CORES.GRAFITE} ;
        font-size: 4.5rem;
        font-weight: normal;

        width: 50rem;
        padding: .5rem 1.5rem;
        margin-top: 2rem;
        color: ${({theme:tema})=> tema.CORES.PRETO};
        text-align: center;

        &::placeholder{
          color: ${({theme:tema})=> tema.CORES.GRAFITE};
          text-align: center;
        }
      }
    }

    >div:last-child{
      margin: auto;

      button{
        width: 30rem;
        height: 10rem;
        border: .1rem solid ${({theme:tema})=> tema.CORES.GRAFITE};
        border-radius: 1rem;
        background: ${({theme:tema})=> tema.CORES.GRAFITE};
        cursor: pointer;
        
        p{
          font-size: 2rem;
          font-weight: bold;
          color: ${({theme:tema})=> tema.CORES.BRANCO};
        }
      }
    }
`



const Atributos= styled.div`
      div{
        display: flex;
        flex-direction: column;

        p{
          font-size: 3.5rem;
          margin: 2rem 0;
          span{
            font-weight: bold;
            font-size: 3.5rem;
            color: ${({theme:tema})=> tema.CORES.GRAFITE};

          }
        }
        div{

            width: 40rem;
            font-size: 3.5rem;
            margin-top: 1.3rem;

            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-direction: row;    

            button{
              background: none;
              width: 3.5rem;
              height: 3.5rem;
              border: .2rem solid ${({theme:tema})=> tema.CORES.PRETO};
              font-size: 3.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
            
            span{
                font-weight: bold;
            }

            >div{
              gap: 2rem;
            }
        }
       
    }
`

export{
    Criacao,
    Atributos,
}