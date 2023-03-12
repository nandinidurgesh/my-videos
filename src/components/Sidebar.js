import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <div className='col-span-1 shadow-lg h-screen'>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <h1>Library</h1>
      </div>
      <div>
        <h1>Watch Later</h1>
      </div>
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Technology</li>
        <li>Fashion</li>
      </ul>
      
    </div>
  )
}

export default Sidebar