import React, { useEffect, useState } from "react";
import { CardContainer, TeamLogo, TeamName } from "./CardOfTeam.styled";

const CardOfTeam = () => {
  const [data, setdata] = useState([]);

  const fetchAPI = async () => {
    const result = await fetch("https://apis.ccbp.in/ipl");
    const response = await result.json();
    // console.log(response);
    setdata(response.teams);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  console.log(data)
  return (
    <>
      {data.length > 0 && (
        <>
          {data.map((res) => {
            return (
              <>
                <CardContainer>
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
    </>
  );
};

export default CardOfTeam;
