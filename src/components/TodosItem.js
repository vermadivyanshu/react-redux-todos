import React from 'react';

export default function TodosItem({todo: {id, text, status}, selectedIds, handleChange}) {
return(<li><span><input type="checkbox" onChange={(event) => handleChange(id) } checked={selectedIds.indexOf(id) != -1 ? true : false}/></span><span>{text} {status}</span></li>);
}