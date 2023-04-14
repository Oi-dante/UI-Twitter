import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweets"

import './Status.css'



export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabens!',
  ]
  )

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
    
    //submit answers tweets
  }

  
  return (
      <main className='status'>
      <Header title="Tweet" />

      <Tweet content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum maxime nisi sit similique. Soluta excepturi nisi ducimus quod. Incidunt eaque repellat dignissimos aperiam numquam praesentium inventore excepturi quibusdam quo!"/>
    
      <Separator/>  

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/oi-dante.png" alt="Gustavo Barboza" />
          <textarea 
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }} 
           />
        </label>

        <button type='submit'>Answer</button>
      </form>


      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}