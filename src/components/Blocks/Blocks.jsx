import { useEffect } from "react";
import { useState } from "react";


const Blocks = () => {
    const {blocks,setBlocks} = useState([])
    useEffect(()=>{
        fetch('blocks.json')
        .then(res => res.json())
        .then(data => setBlocks(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blocks;