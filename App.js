import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Header from "./components/Header";
import Waces from "./cards.json";

class App extends Component {
  state = {
    Waces,
    clickedFacesIds: [],
    score: 0,
    goal: 8,
    status: "",
    imagenumber: 0,
  };

  shuffleScoreCard = (id) => {
    this.setState({
      imagenumber: this.state.imagenumber > 2 ? 0 : this.state.imagenumber + 1,
    });
    let clickedFacesIds = this.state.clickedFacesIds;
    if (clickedFacesIds.includes(id)) {
      this.setState({
        clickedFacesIds: [],
        score: 0,
        status: "Game Over! You lost. Click to play again!",
      });
      return;
    } else {
      clickedFacesIds.push(id);
      if (clickedFacesIds.length === 8) {
        this.setState({
          score: 8,
          status: "You Won! Click to play again!",
          clickedFacesIds: [],
        });
        console.log("You Win");
        return;
      }
      this.setState({
        Waces,
        clickedFacesIds,
        score: clickedFacesIds.length,
        status: " ",
      });

      for (let i = Waces.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        //reorganizes json file
        [Waces[i], Waces[j]] = [Waces[j], Waces[i]];

        console.log(
          "this is the changing order of faces right here" + Waces[i].image
        );
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text> Simple Text</Text>
        <Score total={this.state.score} goal={8} status={this.state.status} />
        <Wrapper>
          {this.state.Waces.map((face) => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={face.id}
              key={face.id}
              name={face.name}
              image={face.image[this.state.imagenumber]}
            />
          ))}
        </Wrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});


export default App; 