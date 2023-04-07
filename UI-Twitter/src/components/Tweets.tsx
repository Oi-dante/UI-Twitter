import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweets.css';

export function Tweet() {
    return (
        <a href="#" className="tweet" style={{ borderRadius: 8}}>
            <img src="https://github.com/oi-dante.png" alt="Gustavo Barboza" />

            <div className='tweet-content'>
                <div className="tweet-content-header">
                    <strong>Dante</strong>
                    <span>@gutobbz</span>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                    Molestiae, at hic! Dolor voluptatum non rem amet iure sequi, consectetur reprehenderit soluta illo laboriosam assumenda molestiae? <br/> 
                    Porro saepe repellendus aliquam architecto?
                </p>
                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle />
                        20
                    </button>

                    <button type='button'>
                        <ArrowClockwise/>
                        20
                    </button>

                    <button type='button'>
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </a>


    )
}