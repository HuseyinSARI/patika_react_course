import { useState, useMemo , useCallback} from 'react'
import Header from "../../components/memo/Header";

function Memo() {

    const [number, setNumber] = useState(0);
    const [text , setText] = useState("");

    const data = useMemo(() => {
        return calculateObject();
    }, []);

    // const data = calculateObject();

    const increment = useCallback(()=>{
        setNumber((prevState)=> prevState + 1);
    },[]);
 
    return (
        <div>
            <br />
            <br />

            <Header number={number < 5 ? 0 : number} data={data} increment={increment} />
            <hr />
            <h1>{number}</h1>
            <button onClick={increment}>Click</button>

            <br />
            <br />

            <input value={text} onChange={(target)=> setText(target.value)}/>

        </div>
    )
}

function calculateObject(){

    // console.log("calculating");
    // for (let index = 0; index < 100000000; index++) {    }
    // console.log("calculate end");


    return { name: "Hüseyin" };
}

export default Memo