import { useEffect } from 'react';
import {useState} from 'react'; 
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {createTodoRequest, editTodoRequest} from '../../action/todoAction';

function AddTodo(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const todosObj = useSelector(state=>state.todos)
    const {todos} = todosObj;
    
    const [todoForm, setTodoForm] = useState( {title:'', completed:false})

    const addHandle = () =>{
        dispatch(createTodoRequest(todoForm))
        setTodoForm({title:'', completed:false})
    }

    const editHandle = () =>{
        dispatch(editTodoRequest({id:Number(id),...todoForm}));
    }

    const handleEditCreateHandle = () =>{
        if(id)return editHandle();
        addHandle()
    }

    useEffect(()=>{
        if(id){
            const editTodoData = todos.find(i=>i.id === Number(id));
            
            if(editTodoData.id){
                setTodoForm({title:editTodoData.title, completed:editTodoData.completed})
            }
        }
    },[id, todos])

    return (
        <div>
            <input type='text' value={todoForm.title} onChange={(e)=>setTodoForm(p=>({...p, title:e.target.value}))} />
            <span>Completed <input type='checkbox' checked={todoForm.completed} onChange={(e)=>setTodoForm(p=>({...p , completed:e.target.checked}))} /></span>
            <button onClick={handleEditCreateHandle}>{id  ? 'Edit Todo' : 'Add Todo'}</button>
        </div>
    )
}

export default AddTodo;