import { useState } from "react";
import { Sbutton } from "../style/styledComponents";
import useUpdateDocTitle from "./personalised/useUpdateDocTitle";

function ClickSayHello() {
    const [text, setText] = useState('');

    // useEffect(() => {
    //     // console.dir(document);
    //     document.title = `Titre: ${text}`;
    // }, [text]);
    useUpdateDocTitle(text);

    return (
        <Sbutton onClick={() => setText("Hello World")}>
            Cliquez
        </Sbutton>
    )
}

export default ClickSayHello;