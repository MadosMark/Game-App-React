import React from "react";
import View from "../../components/View";
import Header from "../../components/Header";
import Title from "../../components/Title";
import GameCard from "../../components/GameCard";
import queryString from "query-string";
import "./home.css";

const HomePage = () => {
  const clientId = process.env.REACT_APP_SYSTEMET_CLIENT;
  const { access_token } = queryString.parse(window.location.hash);

  const [AnticipatedGames, setAnticipatedGames] = React.useState([]);

  React.useEffect(() => {
    const url = `https://api.rawg.io/api/games?dates=2021-04-10,2021-05-10&ordering=-added?&key=${clientId}`;

    fetch(`${url}`, {
      headers: {
        Authorization: "Bearer " + access_token,
        token: `${clientId}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAnticipatedGames(json.results);
        
      });
  },[access_token, clientId]);

  return (
    <>
      <Header></Header>

      <Title title={"Most anticipated games"} />
      <View>
        {AnticipatedGames.map((item, key) => {

          return <GameCard key={key} item={item} />;
        })}
      </View>
    </>
  );
};

export default HomePage;
