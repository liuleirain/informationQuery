import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CardItem from "./components/CardItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computers: [],
      sn: "",
    };
  }

  componentDidMount() {
    axios("http://localhost:8000/api/computer/")
      .then((res) => {
        this.setState({
          computers: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({
      sn: e.target.value,
    });
  };

  render() {
    const { computers, sn } = this.state;

    const regex = new RegExp(`^${sn}`, "gi");

    const matches = computers.filter((computer) => {
      return computer.serial_number.match(regex);
    });

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto text-white">
            <h2 className="text-center mb-3">
              <FontAwesomeIcon icon={faDesktop} /> 主机名查询
            </h2>
            <div className="form-group">
              <input
                onChange={this.handleChange}
                type="test"
                id="search"
                className="form-control from-control-lg"
                placeholder="输入序列号..."
              />
            </div>
            <div id="match-list">
              {matches.length !== computers.length
                ? matches.map((match) => (
                    <CardItem key={match.id} match={match} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
