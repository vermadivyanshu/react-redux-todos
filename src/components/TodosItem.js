import React from 'react';
import '../styles/todosItem.css'

export default function TodosItem({todo: {id, text, status}, selectedIds, handleChange}) {
return(<li className="todosItem"><span><input type="checkbox" onChange={(event) => handleChange(id) } checked={selectedIds.indexOf(id) !== -1 ? true : false}/>
</span><span className={status === 1 ? 'completed' : ''} >{text}</span></li>);
}