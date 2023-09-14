import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blok = ({ blok,hendelbookmarks,hendeltime }) => {

    const {id, title, cover, author, author_img,posted_date,  reading_time,hashtags } = blok;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-4' src={cover} alt={`cover picher is the titel ${title}`} />

            <div className="flex justify-between mb-4">
                <div className='flex mb-6'>
                    <img className='w-14 mb-10' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>hendelbookmarks(blok)}
                    className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-2xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={()=>hendeltime(id,reading_time)}
             className='text-2xl font-bold text-blue-600 underline'>
                Markhes red:
             </button>
        </div>
    );
};

Blok.propTypes  = {
    blok: PropTypes.object.isRequired,
    hendelbookmarks:PropTypes.func,
    hendeltime:PropTypes.func
}
export default Blok;