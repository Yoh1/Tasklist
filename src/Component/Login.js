import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {} from 'react-router-dom'

export default function Login({setData}) {

    const navigation = useNavigate();

    const [login,setLogin] = useState('')
    const [mdp,setMdp] = useState('')
    

  return (
    <div>
      <Link to="/" className="btn btn-primary">Retour a l'accueil</Link>
      <div>
        <form  onSubmit={(e) =>{
            e.preventDefault()
            if(login === "test@test.fr" && mdp == "0000" ){
                    
                setData(login,mdp)
                navigation('/')

                

            } else {

                alert('login ou password incorect')
            }

            e.preventDefault()

          
        }} className='mt-3'>
            <div className='mb-3'>
                <label>Login</label>
                <input onChange={(e) => {
                    
                    setLogin(e.target.value)
                }} type="texte" />
            </div>
            <div>
                <label>Mot de passe</label>
                <input onChange={(e) => {
                    setMdp(e.target.value)
                }} type="password" />
            </div>
            <input className='btn btn-primary ' type="submit" value="Connexion" />
        </form>
      </div>
    </div>
  )
}
