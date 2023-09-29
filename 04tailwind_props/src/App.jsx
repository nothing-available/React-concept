import './App.css'
import Card from './component/Card'

function App() {

  const ishitaObj = {
    name: "ishita",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind css</h1>

      <Card name="ishita" obj={ishitaObj} about="chandigarh-university" />

      <Card  about="software-engineer" />

    </>
  )
}

export default App
