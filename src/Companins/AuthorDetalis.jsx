import React from 'react';
import './index.css'

export default function AuthorDetalis({ name, bio }){
    return (
        <div className='author-detalis'>
            <h3>Автор: {name}</h3>
            <p>{bio}</p>
        </div>
    );
};

// export default AuthorDetalis;