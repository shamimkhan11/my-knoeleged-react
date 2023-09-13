
import { useEffect } from "react";
import { useState } from "react";


const Blocks = () => {
    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shamimkhan11/namr-manr/main/blocks.json')
            .then(res => res.json())
            .then(data => setBlocks(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl px-2">Blocks:
                {blocks.length}
            </h1>
        </div>
    )
}

export default Blocks;