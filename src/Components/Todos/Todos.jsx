import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getAllTodos, deleteTodoRequest} from '../../action/todoAction';

function TodosList(){
    const navigate = useNavigate();
    const todosObj = useSelector(state=>state.todos)
    const {todos, error, isLoading} = todosObj;
    const [deletingTodoId, setDeletingTodoId] = useState('')
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!todos.length) dispatch(getAllTodos())
    }, [dispatch, todos.length]);

    const handleDelete = (id) =>{
        setDeletingTodoId(id)
        dispatch(deleteTodoRequest(id))
    }

    const handleEditClick = (id) =>{
        navigate(`/edit/${id}`)
    }

    if(isLoading.initial){
        return <h2>Loading...</h2>
    }

    if(error.errorMsg){
        return <h2>{error.errorMsg}</h2>
    }

    return (
        
        <div>
            <Link to={`/create`}>
                <div > 
                    Create todo
                </div>
            </Link> 
            {todos?.map((todo, index)=>{
                return (
                    <div key={`${todo.id}${index}`}>
                      <p style={todo.completed ?{ color:'green'}: { color:'red'}}>{todo.title}</p>  
                      <button onClick={()=>handleEditClick(todo.id)}>Edit</button>
                      <button onClick={()=>{handleDelete(todo.id)}} >{(todo.id === deletingTodoId && isLoading.delete) ? 'Deleting' :'Delete'}</button>
                    </div>
                )
            })}
        </div>
    )
}


export default TodosList;