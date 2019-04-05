import * as React from "react";
import Jumbotron from "./components/jumbotron"
import Shell from "./components/shell";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron></Jumbotron>
                <Shell></Shell>
            </div>
        );
    }
}