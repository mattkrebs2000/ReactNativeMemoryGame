import React, { Component } from "react";
import { Dimensions, StyleSheet, View, SafeAreaView } from "react-native";
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
    imagenumber: 0,
    status: " ",
    direction: " ",
    width:null,
    height:null, 
  };

changing(e) {
  console.log("cmon");
this.setState({
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
});
}

  shuffleScoreCard = (id, name) => {
    // debugger
    this.setState({
      imagenumber: this.state.imagenumber > 2 ? 0 : this.state.imagenumber + 1,
      status: " " + name,
    });
    let clickedFacesIds = this.state.clickedFacesIds;
    if (clickedFacesIds.includes(id)) {
      this.setState({
        clickedFacesIds: [],
        score: 0,
        status: "Game Over! You clicked " + name + " twice.",
        direction: "Click to play again!",
      });

      return;
    } else {
      clickedFacesIds.push(id);
      this.setState({ direction: name });

      if (clickedFacesIds.length === 8) {
        this.setState({
          score: 8,
          status: "You Won!",
          clickedFacesIds: [],
          direction: "Click to play again!",
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
      }
    }
  };

  render() {
    console.log("WHTAT");
    return (
      <SafeAreaView onLayout = {this.changing.bind(this)}>
        <View style={styles.container}>
          <Header style={styles.header} />
          <Score
            total={this.state.score}
            goal={8}
            status={this.state.status}
            direction={this.state.direction}
            style={styles.score}
          />

          <Wrapper style={styles.wrapper}>
            {this.state.Waces.map((face) => (
              <Card
                shuffleScoreCard={this.shuffleScoreCard}
                id={face.id}
                key={face.id}
                image={face.image[this.state.imagenumber]}
                name={face.name}
                // orientation = {this.tallerscreen}
              />
            ))}
          </Wrapper>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  },
  wrapper: {
    flex: 50,
  },
  score: {
    flex: 20,
  },
  header: {
    flex: 20,
  },
});

export default App;
