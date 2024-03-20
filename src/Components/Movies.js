import {useState} from "react"
function Movies() {
    
const [name,setName] = useState("alina")
const [events,setEvents] = useState([
   {title : "friends" , id:1},
   {title : "my bad" , id:2},
   {title : "the sea beast" , id:3},
   {title : "all of us are dead" , id:4},
   {title : "rick anf morty" , id:5}

]) 
const handClick = (id) => {
    setEvents(events.filter((event)=>{
        return id !==event.id
    }))
}
return (
    <div className="App">
      {
        events.map((event,index)=>(
            <div key={event.id}>
                <h2>
                    {index + 1 } - {event.title}
                </h2>
                <button onClick={() => handClick(event.id)}>
                    delete
                </button>
            </div>
        ))
      }
    </div>
)}

export default Movies;