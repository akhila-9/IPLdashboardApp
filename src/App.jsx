import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BodySection, EntireDashBoardContainer, HeaderSection, Heading, Logo } from './App.styled'
import CardOfTeam from './Components/CardOfTeam/CardOfTeam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EntireDashBoardContainer>
      <HeaderSection>
<div>
  <Logo src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"/>
</div>
  

<Heading>
  IPL Dashboard
</Heading>
      </HeaderSection>
      <BodySection>
<CardOfTeam/>
      </BodySection>

    </EntireDashBoardContainer>
    </>
    )
}

export default App
