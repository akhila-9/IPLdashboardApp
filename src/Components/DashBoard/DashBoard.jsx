import React from 'react'

import CardOfTeam from '../CardOfTeam/CardOfTeam'
import TeamDetails from '../TeamDetails/TeamDetails'
import { BodySection, EntireDashBoardContainer, HeaderSection, Heading, Logo } from './DashBoard.styled'

const DashBoard = () => {
  return (
    <EntireDashBoardContainer>
        <HeaderSection>
          <div>
            <Logo src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" />
          </div>

          <Heading>IPL Dashboard</Heading>
        </HeaderSection>
        <BodySection>
          <CardOfTeam />
          <TeamDetails />
        </BodySection>
      </EntireDashBoardContainer>
  )
}

export default DashBoard
