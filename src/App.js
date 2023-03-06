import { useState } from "react";
import Flashcards from "./components/Flashcards";
import Footer from "./components/Footer";
import "./styles/style.css"
import styled from "styled-components";


function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <Container>
        <Top>
          <Logo src="./assets/logo.png" alt="zaprecall-logo"/>
          <Title>ZapRecall</Title>
        </Top>       

        <Flashcards count={{contador: contador, setContador: setContador}}/>

        <Footer contador={contador}/>
      </Container>    
    </>
  )
}

export default App;


const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Top = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`

const Logo = styled.img `
  width: 52px;
  height: 60px;
  margin-right: 25px;
`

const Title = styled.h1 `
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Rigtheous';
  margin-right: 20px;
`