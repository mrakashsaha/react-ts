import './App.css'
import { Person } from './Person'

function App() {

  const fetchUser = () => {
    return {name: "Sky", age: 22, isMarried: true}
  }

  const useFetched = fetchUser();

  return (
    <>
      <Person name= {useFetched.name} age = {useFetched.age} isMarried = {useFetched.isMarried}></Person>
      <Person name= {"Jamil"} age = {46} isMarried = {false}></Person>
      <Person name= {"Akash"} age = {45} isMarried = {true}></Person>
      <Person name={"Tushar"} age={463} isMarried = {false}></Person>
      <Person name={"Tushar"} age={463} isMarried = {false}></Person>
    </>
  )
}

export default App
