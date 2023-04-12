import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweets"

import './Status.css'

const answers = [
    'Concordo...',
    'Olha, faz sentido',
    'Parabens!',
]

export function Status() {
    return (
        <main className='status'>
        <Header title="Tweet" />

        <Tweet content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum maxime nisi sit similique. Soluta excepturi nisi ducimus quod. Incidunt eaque repellat dignissimos aperiam numquam praesentium inventore excepturi quibusdam quo!"/>
      
        <Separator/>  

        <form className='answer-tweet-form'>
          <label htmlFor="tweet">
            <img src="https://github.com/oi-dante.png" alt="Gustavo Barboza" />
            <textarea id="tweet" placeholder="Tweet your answer"/>
          </label>

          <button type='submit'>Answer</button>
        </form>


        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}

      </main>
    )
}