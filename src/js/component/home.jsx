import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";


//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue,setInputValue]= useState("")
	const [todos,setTodos]= useState([])
	
	const DeleteAllTasks = ()=>{
		setTodos([])
	}

	return (
		<div className="container">
			<h1>ToDo LiSt</h1>
			<ul>
				<li><input type="text"
				 	onChange={(e)=> setInputValue(e.target.value)}
					value={inputValue} placeholder="Add Tasks"
					onKeyUp={(e)=>{
					if(e.key === "Enter" && inputValue.trim()=== "") {
						return alert( "add tasks lazy");
							}
							else if(e.key === "Enter"){
								setTodos(todos.concat(inputValue));
								setInputValue(""); 
									}
						}}
						></input>
				</li>
				{todos.map((item,index) => (
					<li>
						<FontAwesomeIcon 
						onClick={()=> setTodos(todos.filter((t,currentIndex)=> index != currentIndex))}className="icono" icon={faTrash}/>
						{item}{" "}
					</li>
				))}
			</ul>
			<div className="totaltasks"> {todos.length}  All Tasks</div>
			<button className="DeleteAllTasks" onClick={DeleteAllTasks}> Delete All Tasks </button>

		</div>	
	);
};

export default Home;




/*me ayude con le video de guia, y desarrolle el resto de componentes, como el boton de eliminar
 todas la tareas, el alert, el que al dar enter no devolviera nada porque devolvia (,) y los estilos, les di un toque diferente, aun me falta mucha logica, pero le voy dando */ 
