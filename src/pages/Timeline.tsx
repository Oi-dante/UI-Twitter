import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweets"

import './Timeline.css'


let newTweet = ''

export function TimeLine() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'meu primeiro tweet',
    'teste',
    'Deu certo',
  ]
  )

  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
    
    //submit tweet
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
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewTweet(event.target.value)
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