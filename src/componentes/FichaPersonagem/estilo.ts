import styled from 'styled-components'

const Caixa= styled.div`
    width: 30rem;
    height: 50rem;

    margin: 3.5rem;
    padding: 4rem;
  
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: #3aff;
    font-size: 2rem;

    p{
        color: #a20;
        font-weight: 900;
        font-size: 3rem;

        strong{
            color: #084909;
            -webkit-text-stroke: #e50db7 0.17rem;

        }
    }

    button{
        width: 100%;
        background: #affa;
        font-size: 2rem;
        color: #a20;
        border: .1rem solid #a20;
        &:hover{
            background: #aff;
            color: #f20;
            border: .5rem solid #f20;
            padding: .5rem;
        }
    }
    h1{
        color: #fff9;
        -webkit-text-stroke: #d92311 0.2rem;
        font-size: 4.5rem;
    }
  
`

export{
    Caixa
}