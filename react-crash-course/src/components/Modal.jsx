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

function Modal ({ children, onClose }) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}


// frequently forget the export sentences
export default Modal;