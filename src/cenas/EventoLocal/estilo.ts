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
    margin-bottom: 1.3rem;
    position: relative;

    span{
        align-self: flex-end;
        margin-top: .8rem;
        font-size: 2.5rem;
        position: relative;
        top: 5.8rem;
        left: -4rem;

    }

    h1{
        font-size: 5rem;
        margin-bottom: 2.5rem;
        line-height: 1.5rem;
        font-weight: normal;
    }

    div{
        align-self: flex-start;
        margin: 1.5rem 0 0 6rem;

    }
    
`
const EventoDoLocal= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-family: "Special Elite", serif;

    h2{
        font-size: 3.5rem;
    }

    div{
        display: flex;
        align-items: self-end;

        p{
            width: 64.5rem;
            font-size: 2.5rem;
            text-align: justify;
            line-height: 3.1rem;
            margin-top: 1rem;
        }
    }

    `

const Ruas= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h2{
        font-family: "Shadows Into Light Two", serif;
        font-size: 3rem;
        align-self: center;
    }

    div{
        align-self: start;

        span{
            font-family: "Special Elite", serif;
            font-size: 2.5rem;
            display: inline-flex;
            align-items: center;
            gap: 2rem;

            svg{
                margin-right: 2rem;
            }

        }
    }


`

export{
    Caixa,
    Topo,
    EventoDoLocal,
    Ruas
}