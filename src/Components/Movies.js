import {useState} from "react";
import('tailwindcss').Config;
function Movies() {
    
const [name,setName] = useState("alina")
const [events,setEvents] = useState([
   {title : "Friends" , id:1},
   {title : "My bad" , id:2},
   {title : "The sea beast" , id:3},
   {title : "All of us are dead" , id:4},
   {title : "Rick and morty" , id:5}

]) 
const handClick = (id) => {
    setEvents(events.filter((event)=>{
        return id !==event.id
    }))
}
return (
    <div className="container App">
        <div className="grid m-5">
            <h1>
                Movies
            </h1>
        </div>
      {
        events.map((event,index)=>(
            <div className="" key={event.id}>
                <h2 >
                    {index + 1 } - {event.title}
                </h2>
                <button className="btn-blue-600 hover:bg-blue-700" onClick={() => handClick(event.id)}>
                    delete
                </button>
            </div>
        ))
      }
    </div>
)}

export default Movies;