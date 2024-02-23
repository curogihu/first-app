import {useNavigate} from 'react-router-dom';
import classes from './Modal.module.css';

// not abbr version
// function Modal (props) {
//     return (
//         <>
//             <div className={classes.backdrop} />
//             <dialog className={classes.modal}>{props.children}</dialog>
//         </>
//     );
// }

function Modal ({ children }) {
    const navigate = useNavigate();

    function closeHandler () {
        navigate('..');
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}


// frequently forget the export sentences
export default Modal;