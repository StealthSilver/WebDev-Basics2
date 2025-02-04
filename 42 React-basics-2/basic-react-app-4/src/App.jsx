import './App.css';

import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
    return (
        <>
            <MsgBox userName="pogo" textColor="orange" />
            <MsgBox userName="bye" textColor="green" />
            <ProductTab />
        </>
    );
}

export default App;