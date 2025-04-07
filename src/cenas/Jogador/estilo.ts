import styled from 'styled-components'

const Caixa= styled.div`
    width: 74rem;
    height: 86rem;
    margin: 3.5rem;

    padding: 0 2rem 0;
  
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background: url('/src/estilos/assests/folha.svg') center no-repeat;
    font-size: 2rem;
    font-family: "Shadows Into Light Two", serif;
    cursor: default;


`
const InformacaoPersonagem= styled.div`

div{
        display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            position: relative;
            
            h1{
                font-size: 4.5rem;
                font-weight: normal;
                padding-top: 1rem;
                
            }
            
            .vidaPersonagem {
                font-size: 6rem;
                align-items: center;
                gap: 1.5rem;
                position: relative;
                left: 6rem;

                & span:first-child {
                    color: ${({ theme: tema }) => tema.CORES.GRAFITE};
                    font-weight: bold;
                }
            
            }

                
}


`

const Atributos= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:first-child{       
        p{
            display: flex;
            justify-content: space-between;
            width: 20rem;
            font-size: 3.5rem;
            margin-top: 1.3rem;

            span{
                font-weight: bold;
            }
        }
    }

    >div:last-child{
        padding-right: 8.5rem;
    }
`

const Inventario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0rem auto;

    width: 100%;
    height: 100%;

    h2{
        font-size: 4.2rem;
        font-weight: normal;
        margin-bottom: 2.5rem;
    }
    
    ul{

        display: flex;
        flex-direction: column;
        position: absolute;
        top: 8.6rem;
        left: 3rem;
        width: 70rem;

        list-style: none;
      
        li{
            font-size: 3rem;

            span{
                color: ${({ theme: tema }) => tema.CORES.GRAFITE};
            }
        }

    }

`

export{
    Caixa,
    InformacaoPersonagem,
    Atributos,
    Inventario
}