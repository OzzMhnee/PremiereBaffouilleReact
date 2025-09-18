import { Component } from "react";
import Child from "./Child";
import { Sbutton } from "../style/styledComponents";
class Mom extends Component {
    state = {momMessage : null, childMessage : null }

    momOrder = () => { this.setState({momMessage: "Va faire tes devoirs"})}
    childAnswer = () => { this.setState({ childMessage: "Attends, il FAUT ABSOLUMENT que je finisse de jouer... !!"})}
    btnReset = () => <Sbutton  style={{backgroundColor:'#929292', color: 'black', borderRadius:'25px',border:'1px solid black', width:'200px'}}  onClick={() => this.setState({momMessage: null, childMessage: null})}> Reset </Sbutton>


    render () {
        return (
            <div>
                <h2>Maman</h2>
                <Sbutton style={{backgroundColor:'#c0ffea', color: 'black', border:'1px solid black', width:'600px' }} onClick={this.momOrder}>Ordre de la mère</Sbutton>
                <p>{this.state.momMessage}</p>
                <hr />
                <Child nickname="drôle" partage={this.state} childAnswer={this.childAnswer} />
                {this.state.childMessage && this.btnReset()}
            </div>
        )
    }
}

export default Mom;