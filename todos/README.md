# Snippets

```javascript
const getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            border: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }

const btnStyle = () => {
        return {
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'
        }
    }
```

```javascript
import React from 'react'

function AddTodo() {
    return (
        <form style={{ display: 'flex' }}>
            <input
                style={{ flex: '10', padding: '5px' }}
                type="text"
                name="title"
                placeholder="Add Todo.."
            />
            <input
                type="submit"
                value="Submit"
                className="btn"
                style={{ flex: '1' }}
            />
        </form>
    )
}

export default AddTodo
```

# UUID
```bash
npm i uuid --save 
```

```javascript
import { v1 as uuid } from "uuid";

id: uuid(),
```
