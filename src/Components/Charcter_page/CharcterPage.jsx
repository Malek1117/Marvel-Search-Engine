import {useState, useEffect} from "react";
import styles from "./CharcterPage.module.css";
import {useNavigate} from "react-router-dom";

export default function Charter(){
    // const [data, setData] = useState({});
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("character"))

    
    console.log(JSON.parse(localStorage.getItem("character")));
    
    // console.log("1");
    
    // useEffect(()=>{
    //     setData(character);
    //     console.log("3");
    // },[]);

    // console.log("2");

    // // console.log(data.thumbnail);

    const goToHome = ()=>{
        localStorage.removeItem("character");
        navigate("/");
    }

    return(
        <div className={styles.character}>
            <div>
                {/* <img alt="" src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}/> */}
                <p>Name : <span>{data.name}</span></p>
                <p>Description : <span>{data.description}</span></p>
            </div>
            <div>
                <button onClick={goToHome}>Home</button>
            </div>
        </div>
    )
}