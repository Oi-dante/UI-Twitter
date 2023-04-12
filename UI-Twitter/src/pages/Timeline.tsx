import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweets"

import './Timeline.css'
const tweets = [
    'meu primeiro tweet',
    'teste',
    'Deu certo',
]


export function TimeLine() {
    return(
        <main className='timeList'>
          <Header title="Home" />
         

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/oi-dante.png" alt="Gustavo Barboza" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <Separator/> 

          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet} />
          })}

        </main>
    )
}