import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweets"

import './Timeline.css'


let newTweet = ''

export function TimeLine() {

  const [tweets, setTweets] = useState([
    'meu primeiro tweet',
    'teste',
    'Deu certo',
  ]
  )

  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
  }

  return(
      <main className='timeList'>
        <Header title="Home" />
        

        <form onSubmit={createNewTweet} className='new-tweet-form'>
          <label htmlFor="tweet">
            <img src="https://github.com/oi-dante.png" alt="Gustavo Barboza" />
            <textarea 
              id="tweet"
              placeholder="What's happening?"
              onChange={(event) => {
                newTweet = event.target.value
              }}
             />
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