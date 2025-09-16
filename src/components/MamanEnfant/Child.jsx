const Child = (props) => {
    // const btnAnswer = props.partage.momMessage && <button onClick={props.childAnswer}>Réponse du {props.nickname}</button>;
    const btnAnswer = props.partage.momMessage ? <button onClick={props.childAnswer}>Réponse du {props.nickname}</button> 
        : <p> ... {props.nickname.charAt(0).toUpperCase() + props.nickname.slice(1)} en train de buller ... </p>

    return (
        <>
            <h2>Enfant</h2>
            {btnAnswer}
            <p>{props.partage.childMessage}</p>
        </>
    )
}

export default Child;