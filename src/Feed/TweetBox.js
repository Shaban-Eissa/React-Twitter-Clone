import React, { useState } from 'react'
import './TweetBox.css'
import db from '../Firebase'
import {Avatar  , Button} from '@material-ui/core'
function TweetBox() {

    const[tweetMessage , setTweetMessage] = useState('')
    const[tweetImage , setTweetImage] = useState('')


    const sendTweet = (e) => {
        e.preventDefault()

        if(tweetMessage.length !==0  && tweetImage.length !==0) {
            db.collection('posts').add({
                displayName : 'Shaban' ,
                username :  'shiba' ,
                verified : true ,
                text : tweetMessage ,
                avatar : 'data:image/jpeg;base64,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' ,
                image :  tweetImage 
            })
        }

        setTweetImage('')
        setTweetMessage('')
    }
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar 
                    src="data:image/jpeg;base64,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"
                    className='tweetBox__inputAvatar'
                    />

                    <input 
                    value = {tweetMessage} 
                    onChange = {e => setTweetMessage(e.target.value)}
                    placeholder='What is happening now ?' type='text'/>
                   
                </div>

                <input 

                value = {tweetImage}
                onChange  = {e => setTweetImage(e.target.value)}
                className='tweetBox__imageInput'
                placeholder='Enter image URL if you want' type='text' />
                <Button 
                
                onClick={sendTweet}
                className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
