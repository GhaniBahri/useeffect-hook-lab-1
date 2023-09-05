import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import {useState, useEffect} from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [dogs, setDogs]= useState([])
  const [number, setNumber]= useState("1")
  
  function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/'+number).then(res=>res.json()).then(data=>{
      setDogs(data.message)
      console.log(data)
    })
  }

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random/'+number).then(res=>res.json()).then(data=>{
      setDogs(data.message)
      console.log(data)
    })
  }, [number])

   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumber={setNumber}/>{/* Uncomment  if you are going after the bonus */}
      {/* This page should receive the images array */}
      <DogList dogsList={dogs}/>
    </div>
  );
}

