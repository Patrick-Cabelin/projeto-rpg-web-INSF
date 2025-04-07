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

    span{
        align-self: flex-end;
        margin-top: .8rem;
        color: ${({theme:tema})=> tema.CORES.GRAFITE};
        font-size: 2.5rem;
    }

    h1{
        font-size: 5rem;
        margin-bottom: 3.5rem;
        line-height: 3rem;
    }

    div{
        align-self: flex-start;
        
        >div:last-child{
                opacity: 0;
        }
    }
    
`
const Missoes = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div{
        display: flex;
        gap: 2rem;
        margin-top: .5rem;

        > div{
            width: 2.5rem;
            height: 2.5rem;
            border: .2rem solid ${({theme:tema})=> tema.CORES.AZUL};
        }
            
        p{
            font-size: 3rem;
            font-weight: normal;
            width: 45rem;
            color: ${({theme:tema})=> tema.CORES.AZUL};
        }
    }

    span{
        display: none;
    }

    .feito{
        div{
            background-color: ${({theme:tema})=> tema.CORES.AZUL};
            
        }
        
        p{
            text-decoration: line-through;
            text-decoration-thickness: .2rem;
            
        }
        
        span{
            display: block;
            font-size: 2.2rem;
            color: ${({theme:tema})=> tema.CORES.AZUL};
            height: fit-content;
            margin-left: 7rem;
            padding-top: .5rem;
        }
    }

    
`

export{
    Caixa,
    Topo,
    Missoes
}