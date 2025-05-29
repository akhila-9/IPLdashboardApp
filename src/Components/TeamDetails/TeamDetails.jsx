import React, { useEffect, useState } from "react";
import "./TeamsDetails.css";
import { useParams } from "react-router-dom";
import {
    EachRecentMatchOfTeam,
  EachTeamDetailPage,
  EachTeamLogo,
  FirstSection,
  HeaderDiv,
  Image,
  LastestMatch,
  ParaGraphStyles,
  RecentMatches,
  SecondSection,
  TeamBanner,
  TeamName,
  TeamNameHeading,
  ThirdSection,
} from "./TeamsDetails.styled";

const TeamDetails = () => {
  const [details, setdetails] = useState([]);
  const params = useParams();
  console.log(params, "plp;");
  const TeamDetailsFetchingAPI = async () => {
    const APIResult = await fetch(`https://apis.ccbp.in/ipl/${params.id}`);
    const APIResponse = await APIResult.json();
    console.log(APIResponse);
    setdetails(APIResponse);
  };
  useEffect(() => {
    TeamDetailsFetchingAPI();
  }, []);
  console.log(details);
  return (
    <>
      {details.team_banner_url && (
        <EachTeamDetailPage className={`${params?.id}`}>
          <HeaderDiv>
            <TeamBanner src={details.team_banner_url} />
          </HeaderDiv>
           <TeamNameHeading>Lastest Matches</TeamNameHeading>
          <LastestMatch>
            
            <FirstSection>
              <TeamName>{details.latest_match_details.competing_team}</TeamName>
              <ParaGraphStyles>{details.latest_match_details.date}</ParaGraphStyles>
              <ParaGraphStyles>{details.latest_match_details.venue}</ParaGraphStyles>
              <ParaGraphStyles>{details.latest_match_details.result}</ParaGraphStyles>
            </FirstSection>
            <SecondSection>
              <EachTeamLogo
                src={details.latest_match_details.competing_team_logo}
              />
            </SecondSection>
            <ThirdSection>
              <ParaGraphStyles>First Innings</ParaGraphStyles>
              <ParaGraphStyles>{details.latest_match_details.first_innings}</ParaGraphStyles>
              <ParaGraphStyles>Second Innings</ParaGraphStyles>
              <ParaGraphStyles>{details.latest_match_details.second_innings}</ParaGraphStyles>

              <ParaGraphStyles>Man Of The Match</ParaGraphStyles>
              <ParaGraphStyles>{details.latest_match_details.man_of_the_match}</ParaGraphStyles>

              <ParaGraphStyles> Umpires</ParaGraphStyles>
              <ParaGraphStyles>{details.latest_match_details.umpires}</ParaGraphStyles>
            </ThirdSection>
          </LastestMatch>
          <TeamNameHeading>Recent Matches</TeamNameHeading>
          <RecentMatches>
            {details.recent_matches.map((res) => {
              return (
                <>
                <EachRecentMatchOfTeam>
                    <div>
                        <Image src={res.competing_team_logo}/>
                    </div>
                  <TeamName>{res.competing_team}</TeamName>
                  <ParaGraphStyles>{res.result}</ParaGraphStyles>
                  <ParaGraphStyles className={res.match_status === "Won" ? "styles" : "removestyles"}>{res.match_status}</ParaGraphStyles>
                  </EachRecentMatchOfTeam>
                </>
              );
            })}
          </RecentMatches>
        </EachTeamDetailPage>
      )}
    </>
  );
};

export default TeamDetails;
