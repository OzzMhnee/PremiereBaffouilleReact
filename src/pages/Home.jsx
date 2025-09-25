import Button from '../components/Buttons&cie/Button';
import ProgressBar from '../components/hooks/ProgressBar';
import { useCallback, useState } from 'react';

const Home = () => {
    const userName = "Jérémie";
    const [countTwenty, setCountTwenty] = useState({value: 0, btnColor: 'success', increment: 20})
    const [countTwentyFive, setCountTwentyFive] = useState({value: 0, btnColor: 'danger', increment: 25})

    const incrementTwenty = useCallback((val) => {
        console.log(`inside incrementTwenty`);
        countTwenty.value < 100 && setCountTwenty({...countTwenty,value: countTwenty.value + val })
    }, [countTwenty]);    const incrementTwentyFive = useCallback((val) => {
        console.log(`inside incrementTwentyFive`);
        countTwentyFive.value < 100 && setCountTwentyFive({...countTwentyFive,value: countTwentyFive.value + val })
    }, [countTwentyFive]);

    return (
        <div className="main-content">
            <h1>Bonjour, {userName} !</h1>
            <h2>Hair's charging progress !</h2>
            <hr />
            <ProgressBar text='CountTwenty' count={countTwenty.value} bgColor={countTwenty.btnColor} />
            <Button handleClick={incrementTwenty} btnColor={countTwenty.btnColor} increment={countTwenty.increment}>Ajout de 20%</Button>
            <hr />
            <ProgressBar text='CountTwentyFive' count={countTwentyFive.value} bgColor={countTwentyFive.btnColor} />
            <Button handleClick={incrementTwentyFive} btnColor={countTwentyFive.btnColor} increment={countTwentyFive.increment}>Ajout de 25%</Button> 
        </div>
    );
};

export default Home;