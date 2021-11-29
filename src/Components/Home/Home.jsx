import {useNavigate} from "react-router-dom";
import { useCallback, useState} from "react";
import axios from "axios";
import styles from "./Home.module.css";

export default function Home (){
    const [result, setResult] = useState([]);
    const navigate = useNavigate();
    
    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
            }, 500);
        };
    };

    async function search(value){
        try{
            if(value.length<0){
                return false
            }
            const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&ts=1&apikey=d45881984c5721ff4ba120d309c0f29c&hash=453fadb137f79d2aa748b62007fd67ea`)
        
            setResult(res.data.data.results);
        } catch (e) {
            setResult([]);
            console.log(e);
        }
    }

    const optimizedFn = useCallback(debounce(search), []);

    const goToChar = (e)=>{
        localStorage.setItem('character', JSON.stringify(e));
        navigate("/character")
    }

    const goToComics = ()=>{
        navigate("/comics_page")
    }

    return( 
        <>
            <div className={styles.container}>
                <img src="/images/marvel_logo.svg" alt=""/>
                <div className={styles.main}>
                    <input className={styles.input} type="text" placeholder="Search charcter here...." onChange={e=>optimizedFn(e.target.value)} />
                    <div className={styles.results}>
                        {result.map((e, i)=><p onClick={()=>goToChar(e)} key={i}>{e.name}</p>)}
                    </div>
                </div>
            </div>
            <button onClick={goToComics}>Comics Page{`>>>>`}</button>
        </>
    )
}