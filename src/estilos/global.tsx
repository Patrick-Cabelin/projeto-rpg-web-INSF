import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
:root{
  font-size: 62.5%;
  background:${({theme:tema})=>tema.CORES.PRETO_100};

  width: 100vw;
  height: 100vh;
}

body{
  user-select: none;
}

main{
  display: flex;
}
`
