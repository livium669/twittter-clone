import React, { useState } from 'react'
import './TweetBox.scss';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Liviu Ionut',
            username: 'liviuionut',
            verified: true,
            text: tweetMessage,
            avatar: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
        });

        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png" />
                    <input
                    onChange={e => setTweetMessage(e.target.value)} 
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text" 
                    />
                </div>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
