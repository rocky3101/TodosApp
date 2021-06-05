import React from 'react'

export const TodoForm = () => {
    return (
    <div className="container my-3">
            <h3>Add ToDo</h3>
            <form >
                <div className="mb-3">  
                    <h4><label htmlFor="title" className="form-label">ToDo Title</label></h4>
                    <input type="text" placeholder="Title Of ToDo"/>
                </div>
                <div className="mb-3">
                    <h4><label htmlFor="desc" className="form-label">ToDo Description</label></h4>
                    <input type="text" placeholder="Description Of ToDo"/>
                </div>
                <button className="btn btn-success btn-sm">Add ToDo</button>
            </form>    
        </div>
    )
}

