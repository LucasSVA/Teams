import React from "react"
import TeamInfo from "./components/teamInfo"
import teams from "./teams.json"
import Counter from "./components/counter"
import "./App.css"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 10

    }
  }

  increase = () => {
    if (this.state.count < teams.length) {
      this.setState({
        count: this.state.count + 1

      })
    }

  }
  decrease = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }



  render() {

    const filtered = teams.filter((x, i) => i < this.state.count + 1)


    return (
      <div className="main-container">

        <div className="">
          <Counter
            count={this.state.count}
            increment={this.increase}
            substract={this.decrease}
          />

        </div>
        <div className="team-section">
          {filtered.map(team => {

            return (
              <TeamInfo
                shortName={team.shortName}
                image={team.crestUrl}
                stade={team.venue}
                address={team.address}
                email={team.email}
                tel={team.phone}
                fondation={team.founded}

              />
            )





          })}

        </div>
      </div >
    )
  }




}

export default App