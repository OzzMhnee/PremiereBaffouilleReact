import { Component } from "react";
import Cars from './Cars';
import ImgDKW from '../../data/img/68aef2a2c2aea.webp'
import ImgFuego from "../../data/img/68aefead136ac.jpg"
import ImgMini1000 from "../../data/img/68aefead136ac.jpg"
import ImgRegal from "../../data/img/68aefead136ac.jpg"
import ImgPégase from "../../data/img/68aefead136ac.jpg"

class Mycars extends Component {
    state = {
        voitures: [
            { name : 'DKW', color : 'white and red', year : 1870, img : "68aef2a2c2aea.webp"},
            { name : 'Fuego', color : 'black', year : 1953, img : "68aefead136ac.jpg" },
            { name : 'Mini 1000', color : 'Anis', year : '1989', img :"68af00043644b.jpg" },
            { name : 'Regal', color : 'Blue', year : '', img: "68af0d54d7b8d.jpg" },
            { name : 'Pégase', color : 'Red', year : 1935, img: "68af032517fb4.jpg" }
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
                    <Cars key={idx} color={voiture.color} year={voiture.year} img={voiture.img} annee={voiture.year ? this.getAge(voiture.year) : ""} >{voiture.name}</Cars>
                ))}
            </div>
        )
    }
}

export default Mycars;