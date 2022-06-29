import React from 'react'
import './PrivateArea.css'

export const PrivateArea = () => {
  return (
    <div className='pageSplit'>
        <div class="bg-img">
        </div>

        <div class="bg-form">
            <form action="/action_page.php" class="container">
                <h1>
                    Login
                </h1>
                <div className='nameContainer'>
                <label for="email">
                    <h3 className='smallText'>
                        Name
                    </h3>
                </label>
                <input type="text" placeholder="Enter Email" name="email" required />
                </div>
                <div className='pswContainer'>
                <label for="psw">
                    <h3 className='smallText'>
                        Password
                    </h3>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button type="submit" class="private_btn">
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}
