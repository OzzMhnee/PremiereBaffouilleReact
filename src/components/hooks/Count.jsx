import {useReducer} from 'react'

const number = 0;

function reducer(state, action) {
    switch (action.type) {
        case 'incremented_number' : {
            return {
                ...state,
                number: state.number + 1
            };
        }
        case 'decremented_number' : {
            return {
                ...state,
                number: state.number - 1
            };
        }
        case 'carre' : {
            return {
                number: state.number * state.number
            };
        }
        case 'initialized' : {
            return {
                number: number
            };
        }
        default : throw Error('action inconnue');
    }
    
    // if (action.type === 'incremented_number') {
    //     return {
    //         ...state,
    //         number: state.number + 1
    //     };
    // }
    // if (action.type === 'decremented_number') {
    //     return {
    //         number: state.number - 1
    //     };
    // }
    // if (action.type === 'carre') {
    //     return {
    //         number: state.number * state.number
    //     };
    // }
    // throw Error('action inconnue');
}

function Counter () {
    const [state, action] = useReducer(reducer, {number});
    return (
        <>
            <button onClick={() => { action({ type : 'incremented_number'}) }}> Incrémenter le nombre </button>
            <button onClick={() => { action({ type : 'decremented_number'}) }}> Décrémenter le nombre </button>
            <button onClick={() => { action({ type : 'carre'}) }}> Mettre au carré </button>
            <button onClick={() => { action({ type : 'initialized'}) }}> Remettre à zéro </button>
            <p>The actually number is {state.number}</p>
        </>
    )
}

export default Counter;