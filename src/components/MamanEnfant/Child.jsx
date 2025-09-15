const Child = (props) => {
    const btnAnswer = props.partage.momMessage && <button onClick={props.childAnswer}>Réponse du {props.nickname}</button>;

    return (
        <>
            <h2>Enfant</h2>
            {btnAnswer}
            <p>{props.partage.childMessage}</p>
        </>
    )
}

export default Child;