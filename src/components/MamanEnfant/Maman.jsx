import { Component } from "react";
import Toto from './Toto';
import { Sbutton } from "../style/styledComponents";

class Maman extends Component{
    state = {messageMaman: null, messageToto: null, disabled:true}

    

    ordreMaman = msg => this.setState({messageMaman: msg, disabled : false});
    reponseToto = msg => this.setState({messageToto: msg});

    render () {
        return (
            <div>
                <h1>Maman</h1>
                <Sbutton onClick={() => this.ordreMaman("Va ranger ta chambre")}>Ordre de la mère</Sbutton>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Toto name="Toto" reponseTotoProps={this.reponseToto} leState={this.state} />
                
            </div>
        );
    }
}



export default Maman;