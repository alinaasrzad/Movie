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
    <div className="container App">
        <div className="grid m-5">
            <h1>
                Movies
            </h1>
        </div>
      {
        events.map((event,index)=>(
            <div className="row font" key={event.id}>
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