import styled from 'styled-components'
import tema from '../../estilos/tema'

const Caixa= styled.div`
    width: 100rem;
    height: 86rem;
    margin: 3.5rem;

    padding: 0 0rem 0 2rem;
  
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    background: url('/src/estilos/assests/folhaC.svg') center no-repeat;
    font-size: 2rem;
    font-family: "Shadows Into Light Two", serif;
    cursor: default;

    /* .quadroPersonagemNPC,.quadroPersonagemPJ{
        border: 1px solid black;
        background-color: #0003;
    } */

    .quadroPersonagemNPC,.quadroPersonagemPJ{
        height: 100%;

        .info{
            > div:first-child{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 4rem;
                margin-top: 3rem;
                
                p{
                    font-weight: bold;
                }
            }
            p{
                font-size: 3.5rem;
            }

            .vidaPersonagem{
                width: 6rem;
                height: 5.5rem;
                display: flex;
                gap: 1rem;

                span{
                    font-size: 4rem;
                    font-weight: bold;

                    strong{
                        color: ${({theme: tema})=> tema.CORES.VERMELHO};
                        -webkit-text-stroke: .01rem ${({theme: tema})=> tema.CORES.GRAFITE};
                    }
                }
                div{
                    margin-top: 0 !important;
                }
                
            }
            
            div:last-child> div{
                display: flex;
                gap: 3rem;
                margin-top: 5rem;
            } 

            >div:nth-child(2){
                margin-top: 3rem;
            }
        }

    }

    .quadroPersonagemPJ{
        flex: 1;
        margin-left: 1.5rem;
      

    }

    .quadroPersonagemNPC{
        flex: 1.15;
        height: 100%;

        li{
            cursor: no-drop !important;
        }

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
    
    li:nth-child(2){
        margin-top: 0;
    }
    li{
        border: .1rem solid black;
        border-radius: 1rem;
        background: #FFF;
        font-size: 3rem;
        padding: 0.5rem 1rem;
        display: flex;
        gap: 2rem;
        list-style: none;
        padding-left: 1.5rem;
        margin-top: 2rem;

        strong{
            color: ${({ theme: tema }) => tema.CORES.VERMELHO};
        }

        span{
            color: ${({ theme: tema }) => tema.CORES.GRAFITE};
        }

        &:hover{
            font-size: 3rem;
            box-shadow: .1rem .1rem 1rem black;
            cursor: pointer;
        }
    }

    

`

export{
    Caixa,
    Inventario
}