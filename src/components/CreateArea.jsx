import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const[isExpanded, setExpanded] = useState(false);
  const [task, setTask] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTask(prevTask => {
      return {
        ...prevTask,
        [name]: value
      };
    });
  }

  function submitTask(event) {
    props.onAdd(task);
    setTask({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-task">
       {isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Title"
        /> : null }
        
        <textarea
          name="content"
          onClick ={expand}
          onChange={handleChange}
          value={task.content}
          placeholder="Add Your Task Here"
          rows= {isExpanded ? 3 : 1}
        />
        <Zoom in = {isExpanded ? true : false}>
        <Fab onClick={submitTask}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
