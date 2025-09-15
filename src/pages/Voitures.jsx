import React from 'react';
import Mycars from '../components/Mycars/Mycars';
import { Component } from 'react';


class Voitures extends Component {
    state = {titre:  'Mon catalogue de voitures'}

    render () {
        return (
            <div className="main-content">  
                <Mycars title={this.state.titre} />
            </div>
        );
    };
};

export default Voitures;