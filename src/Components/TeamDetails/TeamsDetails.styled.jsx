import styled from 'styled-components';

export const EachTeamDetailPage=styled.div`
height:100%;

    display: flex
;
    flex-direction: column;
    align-items: center;
    
`;

export const HeaderDiv=styled.div`
    height:400px;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding-top:20px;
`;
export const TeamBanner=styled.img`
    height:350px;
    width:70%;
`;
export const LastestMatch=styled.div`
display:flex;
    color: #FFFFFF;
flex-direction:row;
align-items:center;
justify-content:center;

background-color:#0f172a;
padding:15px;
    height:280px;
    width:900px;
    border-radius:8px;
`;
export const EachTeamLogo=styled.img`
    height:120px;
    width:120px;
`;
export const FirstSection=styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:280px;
    
`;
export const ThirdSection=styled.div`
    display:flex;
    flex-direction:column;
    gap:4px;
    width:280px;
        align-items: flex-end;
`;

export const SecondSection=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    width:280px;
    
`;
export const TeamName=styled.div`
font-family:"Bree Serif";
font-weight:bold;
font-size:20px;
color:#FFFFFF;
    
`;
export const TeamNameHeading=styled.div`
font-family:"Bree Serif";
font-weight:bold;
font-size:20px;
width:100%;
 justify-content:center;
 display:flex;
color:#FFFFFF;
    
`;
export const RecentMatches=styled.div`
   padding:20px;
     display:grid;
     grid-template-columns: repeat(3, 1fr);
     gap:20px;

`;
export const ParaGraphStyles=styled.div`
    font-family:"Bree Serif";
    font-size:12px;
    
`
export const EachRecentMatchOfTeam=styled.div`
     display:flex;
      height:260px;
      background-color:#0f172a;
    width:280px;
    border-radius:7px;
        justify-content: center;
    flex-direction:column;
  color:#FFFFFF;
      gap: 16px;
    padding-top: 20px;
  align-items:center;  
`;
export const Image=styled.img`
    height:70px;
    width:70px;
`
