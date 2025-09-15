import { Component } from "react";
import Child from "./Child";

class Mom extends Component {
    state = {momMessage : null, childMessage : null }

    momOrder = () => { this.setState({momMessage: "Va faire tes devoirs"})}
    childAnswer = () => { this.setState({ childMessage: "Attends, il faut que je finisse de jouer... !!"})}

    render () {
        return (
            <div>
                <h2>Maman</h2>
                <button onClick={this.momOrder}>Ordre de la mère</button>
                <p>{this.state.momMessage}</p>
                <hr />
                <Child nickname="drôle" partage={this.state} childAnswer={this.childAnswer} />
            </div>
        )
    }
}

export default Mom;