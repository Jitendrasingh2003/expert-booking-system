import { useEffect, useState } from "react";
import axios from "axios";
import ExpertDetails from "./ExpertDetails";

export default function ExpertsList(){

  const [experts,setExperts] = useState([]);
  const [selectedExpert,setSelectedExpert] = useState(null);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/experts")
      .then(res=>setExperts(res.data));
  },[]);

  return(
    <div>
      <h2>Experts List</h2>

      {experts.map(e=>(
        <div key={e._id}>
          <h4 
            style={{cursor:"pointer",color:"blue"}}
            onClick={()=>setSelectedExpert(e._id)}
          >
            {e.name}
          </h4>
          <p>{e.category}</p>
        </div>
      ))}

      {selectedExpert && <ExpertDetails expertId={selectedExpert} />}
    </div>
  );
}