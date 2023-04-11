import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweets.css';

interface TweetProps{
    content: string
}

export function Tweet(props: TweetProps) {
    return (
        <a href="#" className="tweet" style={{ borderRadius: 8}}>
            <img src="https://github.com/oi-dante.png" alt="Gustavo Barboza" />

            <div className='tweet-content'>
                <div className="tweet-content-header">
                    <strong>Dante</strong>
                    <span>@gutobbz</span>
                </div>

                <p>
                    {props.content}
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