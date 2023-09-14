import PropTypes from 'prop-types'
import Bookmarkkk from '../Bookmarkkk/Bookmarkkk';

const Booksmarks = ({ bookmarks,redingtime }) => {
    return (
        <div className="md:w-1/3 bg-blue-200 ml-6 pt-4 rounded-xl">
            <div>

                <h2 className="text-3xl text-center my-4">
                    Reiding time : {redingtime}
                </h2>
            </div>
            
            <h2 className="text-2xl text-center">BooksMarks Blocks : {bookmarks.length} </h2>

            {
                bookmarks.map((bookmark,idx) => <Bookmarkkk key={idx} bookmark={bookmark}></Bookmarkkk>)
            }

        </div>
    );
};

Booksmarks.propTypes = {
    bookmarks: PropTypes.array,
    redingtime:PropTypes.number
}

export default Booksmarks;