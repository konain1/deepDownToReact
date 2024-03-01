import { useState } from 'react'
import { Header } from './component/Header'
import { Todo } from './component/Todo'
function App() {
  const [title, setTitle] = useState("konain1")

  function handlerTitle(){
    setTitle(`title is ${Math.random()}`)
  }
  return (
    <>
    <div>
    <button onClick={handlerTitle} >click</button>
     <Header title={title} />
     <Header title="neeru" />
     <Header title="konain2" />
     <Header title="neeru2" />
     <Todo/>
    </div>
     


    </>
  )
}

export default App
