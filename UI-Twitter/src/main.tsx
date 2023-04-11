import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle } from 'phosphor-react'

import './global.css'

import { Tweet } from './components/Tweets'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

const tweets = [
  'meu primeiro tweet',
  'teste',
  'Deu certo',
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      

      <div className="content">
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
            return <Tweet key={tweet} content={tweets} />
          })}

        </main>
      </div>




    </div>
    

  </React.StrictMode>,
)
