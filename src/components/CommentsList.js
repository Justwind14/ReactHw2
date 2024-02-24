import {useState} from "react";
import './CommentsList.css'


function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий самый важный" },
        { id: 2, text: "Это второй комментарий ни о чем" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (id) => {
        const newCommentsList = comments.filter(comment => comment.id !== id);
        setComments(newCommentsList);
    }

    const commentSubmitting = (e) => {
        e.preventDefault();

        // Получаем значение текстового элемента с именем “text” внутри элемента с индексом “elements” на родительском
        // элементе “e.target”
        const userMessage = e.target.elements.text.value;

        //вызываем функцию добавления коммента со считанным текстом
        addComment(userMessage);

        //очищаем поле, в котором был написан комментарий после его отправки на добавление
        e.target.elements.text.value = "";

    }

    const addComment = (text) => {
        // Найти максимальный id из существующих комментариев
        const maxId = comments.length > 0 ?
            Math.max(...comments.map((comment) => comment.id)) : 0;

        // Создать новый комментарий с уникальным id
        const newComment = {
            id: maxId + 1,
            text: text,
        };

        //обновляем статус компонента с нашими комментариями
        setComments([...comments, newComment]);
    };

    return (
        <>
            <ul>
                {comments.map((comment) => (
                        <li key={comment.id} className={'usersComment'}>
                            {comment.text}
                            <button onClick={() => deleteComment(comment.id)}>удалить коммент</button>
                        </li>
                    )
                )}
            </ul>
            <form onSubmit={commentSubmitting}>
                <textarea name="text" placeholder={'Оставьте ваш комментарий'} className={'usersInput'}/>
                <button type={"submit"}>Добавить коммент</button>
            </form>
        </>
    )
        ;
}

export default CommentsList;