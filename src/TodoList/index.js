import React from "react";
import './TodoList.css';

function TodoList( props ){
    const renderFunc = props.children || props.render;
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            { (!props.loading && !props.totalTodos ) && props.onEmptyTodos() }

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            { (props.sincronizeTodos && !props.loading) 
                && props.searchedTodos.map( renderFunc )} {//todo => props.render(todo)
            }

            <ul>
                { props.children }
            </ul>
        </section>
    );
}

export { TodoList };