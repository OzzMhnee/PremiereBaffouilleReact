import { Sbutton } from "../style/styledComponents";

const Child = (props) => {
    // const btnAnswer = props.partage.momMessage && <button onClick={props.childAnswer}>Réponse du {props.nickname}</button>;
    const btnAnswer = props.partage.momMessage ? <Sbutton style={{backgroundColor:'#000000', color: 'white', borderRadius:'45px', width: '400px'}} onClick={props.childAnswer}>Réponse du {props.nickname}</Sbutton> 
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
