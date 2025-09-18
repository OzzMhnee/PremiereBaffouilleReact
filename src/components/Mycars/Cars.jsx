import Form from "../Form/Form";

const Car = ({children, color, year, annee, img}) => {

    return (children && color && year) && (
        <div className="main-content hovered" style={{ margin: 20, display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
            <div>
                <p>Marque : {children}</p>
                <p>Couleur : {color}</p>
                <p>Année : {year}</p>
                <p>Age : {annee}</p>
            </div>

            <img src={`./../src/data/img/${img}`} alt={children} style={{ width : 200, height : 180, borderRadius : 15, objectFit: "cover"}} />
            <Form />
        </div>
    )
};

export default Car;


// <img src={`./../src/data/img/${img}`} alt={children} style={{ width : 200, height : 180, borderRadius : 15, objectFit: "cover"}} />
// en déployé code ne fonctionnant que si img dans public sinon need require() mais require() ne fonctionne pas avec Vite.