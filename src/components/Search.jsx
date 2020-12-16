import React,{useState,useEffect} from 'react';

export default function Search(props){
    const [term, setTerm] = useState("");
    useEffect(() => {
       console.log('adsada')
    }, [term])

    return(
        <>
        <div className="ui form">
            <div className="field">
                <label htmlFor="">Enter Search Term</label>
                <input className="input" type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/>

            </div>

        </div>
        </>
       

    )
}