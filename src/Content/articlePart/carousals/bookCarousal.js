import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './books.css';
import habit from '../../../images/habit.jpg';
import goals from '../../../images/goals.png';
import sucexLawByHill from '../../../images/sucexLawByHill.jpg';

function BooksRead() {
    // const [books, setBooks] = useState();
    // const [bookTitle, setBookTitle] = useState();
    // const [bookExtract, setbookExtract] = useState();

    return (
        <div className="row-it">
            <div className="books">
                <div className="book-head">
                    {/* <div className="book-title">
                        <h3>The 7 Habits</h3>
                    </div>
                    <div className="book-author">
                        <h2>Steven Covey</h2>
                    </div> */}
                </div>
                <div className="book-body">
                    <img className="seven-habits" src={habit} alt="Books with title as goals" />
                    <p> 
                        <FontAwesomeIcon icon="fa-regular fa-heart" size="2x" />
                    </p>
                </div>
                {/* <div className="book-footer">
                    <i>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></i>
                </div> */}
            </div>

            <div className="books">
                <div className="book-head">
                    {/* <div className="book-title">
                        <h3>GOALS</h3>
                    </div>
                    <div className="book-author">
                        <h2>Brian Tracy</h2>
                    </div> */}
                </div>
                <div className="book-body">
                    <img className="goals" src={goals} alt="Books with title as goals" />
                    <p><FontAwesomeIcon icon="fa-regular fa-heart" size="2x" /></p>
                </div>
                {/* <div className="book-footer">
                    <i>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></i>
                </div> */}
            </div>

            <div className="books">
                <div className="book-head">
                    {/* <div className="book-title">
                        <h3>Laws of Success</h3>
                    </div>
                    <div className="book-author">
                        <h2>Napolean Hill</h2>
                    </div> */}
                </div>
                <div className="book-body">
                    <img className="sucex-law" src={sucexLawByHill} alt="Books with title as goals" />
                    <p><FontAwesomeIcon icon="fa-regular fa-heart" size="2x" /></p>
                </div>
                {/* <div className="book-footer">
                    <i>love icon <FontAwesomeIcon icon="fa-regular fa-heart" /></i>
                </div> */}
            </div>

            {/* <div className="books">
                <div className="book-head">
                    <div className="book-title">Laws of success</div>
                    <div className="book-author">Napolean Hill</div>
                </div>
                <div className="book-body">
                    <img src="../images/sucexLawByHill.jpg" alt=""></img>
                    <p>Book extract</p>
                </div>
                <div className="book-footer">
                    <i>love icon from Font Awesome</i>
                </div>
            </div>

            <div className="books">
                <div className="book-head">
                    <div className="book-title">The Seven Habit of Highly Effective People</div>
                    <div className="book-author">Steven Covey</div>
                </div>
                <div className="book-body">
                    <img src="../images/habit.jpg" alt=""></img>
                    <p>Book extract</p>
                </div>
                <div className="book-footer">
                    <i>love icon from Font Awesome</i>
                </div>
            </div> */}
        </div>
    )
}

export default BooksRead