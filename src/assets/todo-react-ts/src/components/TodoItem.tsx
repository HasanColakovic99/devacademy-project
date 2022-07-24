const TodoItem: React.FC<{text: string; deleteTodo: () => void}> = (props) => {
    return (
        <li onClick={props.deleteTodo}>{props.text}</li>
    );
}

export default TodoItem;