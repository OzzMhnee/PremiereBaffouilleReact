// compter les espaces
const Steg = () => {
    const secretInside = "C'est à toi. Gru, devineras-tu le mot qui est caché dans ce texte? Celui-ci n'est pas élaboré. Cet indice devrait. t'aider à trouver !";
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const decodage = () => {
        const secretInsideArray = secretInside.split(".");
        const lettersToFind = [];
        secretInsideArray.forEach(phrase => {
            const spaceConst = (phrase.match(/ /g) || []).length;
            const indexCount = spaceConst % 26;
            lettersToFind.push(alphabet[indexCount]);
        });
        return lettersToFind.join('');    
    }

    return (
        <div>
            <p>Phrase à décoder : {secretInside}</p>
            <p>Secret caché : {decodage()}</p>
        </div>
    )
}

export default Steg;