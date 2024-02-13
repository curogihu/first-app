import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
<<<<<<< HEAD
    const [modalIsVisible, setModalIsVisible] = useState(true);
=======
    const {modalIsVisible, setModalIsVisible } = useState(true);
>>>>>>> a4e7b324b69f78395050f21e09bc203c7b3bd240
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = <Modal onClose={hideModalHandler}>
    //     <NewPost 
    //         onBodyChange={bodyChangeHandler} 
    //         onAuthorChange={authorChangeHandler} 
    //     />
    // </Modal> 

    return (
        <>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost 
                        onBodyChange={bodyChangeHandler} 
                        onAuthorChange={authorChangeHandler} 
                    />
                </Modal>
            )}
            <ul className={ classes.posts }>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    );
}

export default PostsList;