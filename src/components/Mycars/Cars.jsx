const Car = ({children, color, year, annee}) => {

    return (children && color && year) && (
        <div className="main-content hovered">
            <p>Marque : {children}</p>
            <p>Couleur : {color}</p>
            <p>Année : {year}</p>
            <p>Age : {annee}</p>
        </div>
    )
};

export default Car;