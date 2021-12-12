import styles from "./Comics_page.module.css";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

export default function ComicsPage(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [comic, setComic] = useState({});

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const res = await axios.get(`http://gateway.marvel.com/v1/public/comics?limit=6&offset=${page*6}&dateDescriptor=thisMonth&ts=1&apikey=d45881984c5721ff4ba120d309c0f29c&hash=453fadb137f79d2aa748b62007fd67ea`)
            
                setData(res.data.data.results);
    
                console.log(res.data.data.results);
            } catch (e) {
                setData([]);
                console.log(e);
            }
        }
        getData();
    },[page]);


    const showComic = (e) => {
        setComic(e);
    }

    const chagePage = (e)=>{
        setPage(page+e);
    }

    const goToHome = ()=>{
        navigate("/");
    };

    return (
        <>
            <div className={styles.main}>  
                <div className={styles.comics}>
                    <h1 style={{textAlign: 'center'}}>{"<"}----:Treading Comics:----{">"}</h1>
                    <div className={styles.comicsData}>
                        {data.map((e, i)=><div key={i} onClick={()=>showComic(e)}>
                                            <img alt="" src={`${e.thumbnail.path}/landscape_medium.${e.thumbnail.extension}`}/>
                                            <p>{e.title}</p>
                                        </div> 
                        )}
                    </div>
                    <div className={styles.pages}>
                        <button disabled={page === 0} onClick={()=>{chagePage(-1)}}>Prev</button>
                        <span>{page+1}</span>
                        <button onClick={()=>{chagePage(1)}}>Next</button>
                    </div>
                </div>
                <div className={styles.comicDetails}>
                    <div className={styles.comicBox}>
                        {Object.keys(comic).length === 0 ? <h1>Display</h1> :
                        <>
                            <img alt="" src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}/>
                            <p>{comic.title}</p>
                            <p>Price : {comic.prices[0].price} $</p>
                            <p>No. of pages : {comic.pageCount}</p>
                            <p>Sale On : {comic.dates[0].date.split('T')[0]}</p>
                            <p>Format : {comic.format}</p>
                        </>}
                    </div>    
                </div>
            </div>
            <button onClick={goToHome}>{`<<<<`}Home Page</button>
        </>
    )
}