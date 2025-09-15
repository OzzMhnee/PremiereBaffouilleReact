import { Component } from "react";
import Cars from './Cars';

class Mycars extends Component {
    state = {
        voitures: [
            { name : 'DKW', color : 'white and red', year : 1870 },
            { name : 'Fuego', color : 'black', year : 1953 },
            { name : 'Mini 1000', color : 'Anis', year : '1989' },
            { name : 'Regal', color : 'Blue', year : '' },
            { name : 'Pégase', color : 'Red', year : 1935 }
        ]
    }

    addTenYears = () => { this.setState(
        initialState => ({
            voitures : initialState.voitures.map(
                voiture => ({...voiture, year: voiture.year && (Number(voiture.year) - 10)})
        )}));
    };

    getAge = year => {
        const now = new Date().getFullYear();
        const age = now - year;

        let frenchYearStr = ""
        if(age === 1 ) {
        frenchYearStr = "an";
        } else if (age>1) {
            frenchYearStr = "ans";
        }
        return `${age} ${frenchYearStr}`;
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.addTenYears}> Ajouter 10 ans </button>
                {this.state.voitures.map((voiture, idx) => (
                    <Cars key={idx} color={voiture.color} year={voiture.year} annee={voiture.year ? this.getAge(voiture.year) : ""} >{voiture.name}</Cars>
                ))}
            </div>
        )
    }
}

export default Mycars;