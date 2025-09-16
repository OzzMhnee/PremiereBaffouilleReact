const Toto = props => {

    return (
        <div>
            <h1>{props.name}</h1>            
            <button onClick={() => props.reponseTotoProps("Elle me saoule celle là... ")} disabled={props.leState.disabled}>Réponse</button>
            <p>{props.leState.messageToto}</p>
        </div>
    )
}

export default Toto;