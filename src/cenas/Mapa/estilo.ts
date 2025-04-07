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

const Topo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2.5rem;

    

    h1{
        font-size: 5.5rem;
        margin-top: 3.8rem;
    }

    div{
        align-self: flex-start;
        
        svg:nth-child(2){
            opacity: 0;
        }
    }
    
`

const Lugares = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    overflow: auto;

    div{
        p,li{
            padding-bottom: 2.5rem;
        }
        p{
            font-size: 2.5rem;
            padding-top: 3rem;
        }

        li{
            font-size: 2.5rem;
            width: 30rem;
            margin-left: 4.5rem;
            color: ${({theme:tema})=> tema.CORES.AZUL};
            
            &:hover{
                text-decoration: underline;
                cursor: pointer;
                list-style: square;
                color: ${({theme:tema})=> tema.CORES.VERMELHO};
            }
        }
    }

`

export{
    Caixa,
    Topo,
    Lugares
}