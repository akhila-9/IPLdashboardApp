import React, { useEffect, useState } from "react";
import { CardContainer, Page1, TeamLogo, TeamName } from "./CardOfTeam.styled";
import { useNavigate } from "react-router-dom";

const CardOfTeam = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const TeamDetailsClick = (id) => {
   
    navigate(`/team-matches/${id}`);
  };
  const fetchAPI = async () => {
    const result = await fetch("https://apis.ccbp.in/ipl");
    const response = await result.json();
    // console.log(response);
    setdata(response.teams);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  console.log(data);
  return (
    <>
      <Page1>
        {data.length > 0 && (
          <>
            {data.map((res) => {
              return (
                <>
                  <CardContainer
                    onClick={() => {
                      TeamDetailsClick(res.id);
                    }}
                  >
                    <div>
                      <TeamLogo src={res.team_image_url} />
                    </div>
                    <TeamName>{res.name}</TeamName>
                  </CardContainer>
                </>
              );
            })}
          </>
        )}
      </Page1>
    </>
  );
};

export default CardOfTeam;
