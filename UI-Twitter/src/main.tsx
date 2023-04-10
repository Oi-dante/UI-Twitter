import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle } from 'phosphor-react'

import './global.css'

import { Tweet } from './components/Tweets'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

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

          

          <Tweet />
          <Tweet />
          

        </main>
      </div>




    </div>
    

  </React.StrictMode>,
)
