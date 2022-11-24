import React, { useEffect } from 'react'
import { Link,useNavigate} from 'react-router-dom'


export default function HomePage({data}) {

  const navigation = useNavigate();

    // const [log,setLog] = useEffect(() => {

    //       if(data.login !==  "test@test.fr" || data.mdp !== "0000" ){

    //          return    navigation('/login')
    //       }
    // })


  return (
    <div>
      <Link to="/login"  className="btn btn-primary">Login</Link>
      <Link to="/tasklist" className="btn btn-primary">Liste de tâches</Link>
    </div>
  )
}
