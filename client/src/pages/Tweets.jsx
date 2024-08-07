import React from 'react'

function Tweets() {
  return (
    <div className='tweet-panel'>
        <div className='tweet-input'>
            <input type="text" placeholder='Whats happening!'/>
        </div>
        <div className='tweet-customize'>
            <input type="file" />
            <button>Post</button>
        </div>
    </div>
  )
}

export default Tweets