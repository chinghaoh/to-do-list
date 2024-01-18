import { useEffect, useState } from "react"

export function NewToDoForm(props) {
   const [newItem, setNewItem] = useState("")

  //Create a new item
  function handleSubmit(e) {
    e.preventDefault()

    if(newItem === "") return
    props.onSubmit(newItem)
    setNewItem("")


  }

    return <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New item</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                id="item">
            </input>
        </div>
        <button className="btn">Add </button>
    </form>

}