import React from 'react'

export default function Details() {
    return (
        <div>
            <div id="homeIntro">
                <h3>
                whatLuck is the one-stop potluck organising app. 
                </h3>
                <br/>
                <p>
                whatLuck (name generously suggested by @eilisnifhear) is a full-stack, CRUD, MERN app. The frontend is built using React and the backend is handled by Express, MongoDB, Mongoose, and Node.js.
                </p>
                <p>
                It uses Redux and Axios, a combination of Bootstrap and Material-UI for layout, React-Paginate, and a super useful package called Random Words for generating unique IDs for potlucks.    
                </p>
                <p>
                It consciously doesn’t use authentication or ask users to create accounts in order to have the lowest possible bar for users to take action.    
                </p>
            </div>
        </div>
    )
}
