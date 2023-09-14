
import { useEffect } from "react";
import { useState } from "react";
import Blok from "../Blok/Blok";
import PropTypes from "prop-types"

const Blocks = ({ hendelbookmarks,hendeltime }) => {
    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shamimkhan11/namr-manr/main/blocks.json')
            .then(res => res.json())
            .then(data => setBlocks(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blocks:
                {blocks.length}

            </h1>
            {
                blocks.map(blok => <Blok
                    key={blok.id}
                    blok={blok}
                    hendelbookmarks = {hendelbookmarks}
                    hendeltime ={hendeltime}
                    >
                    
                </Blok>)
            }
        </div>
    )
}

Blocks.propTypes = {
    hendelbookmarks : PropTypes.func,
    hendeltime: PropTypes.func
}

export default Blocks;