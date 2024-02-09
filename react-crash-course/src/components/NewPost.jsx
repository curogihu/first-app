import classes from './NewPost.module.css'

function NewPost() {
    return (
        <form className={ classes.form }>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={ 3 }  />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required />
            </p>
        </form>
    );
}