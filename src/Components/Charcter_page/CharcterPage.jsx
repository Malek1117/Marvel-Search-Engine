import styles from "./CharcterPage.module.css";
import {useNavigate} from "react-router-dom";

export default function Charter(){
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("character"))

    const goToHome = ()=>{
        localStorage.removeItem("character");
        navigate("/");
    }

    return(
        <div className={styles.character}>
            <div className={styles.detail}>
                <img alt="" src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}/>
                <h1>{data.name}</h1>
                {data.description<=0?"":<p title={data.description}>{data.description}</p>}
                <button onClick={goToHome}>Home</button>
            </div>
        </div>
    )
}