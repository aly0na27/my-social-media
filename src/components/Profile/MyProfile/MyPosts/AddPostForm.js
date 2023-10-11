import {Field, reduxForm} from "redux-form";
import classes from "./MyPosts.module.css";
import {maxLengthCreator, required} from "../../../../utils/Validators/validators";
import Textarea from "../../../common/FormsControllers/FormsConrtolers";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form className={classes.posts__item2} onSubmit={props.handleSubmit}>
            <Field className={classes.textarea}
                   name={"postText"}
                   component={Textarea}
                   placeholder={"Enter your post"}
                   validate={[required, maxLength10]}
            />

            <button className={classes.btn} >Add post</button>
        </form>
    )
}


const AddPost = (props) => {
    const onAddPost = (newPostText) => {
        props.onAddPost(newPostText.postText)
    }
    return (
        <AddPostReduxForm onSubmit={onAddPost}/>
    )
}
const AddPostReduxForm = reduxForm({
    form: "post"
})(AddPostForm)


export default AddPost;