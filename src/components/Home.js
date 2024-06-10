import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(props) {


    return (
        <div className='container text-center my-5'style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'#343a40'}}>
            <h1>
                Welcome to IWritter
            </h1>
            <Link  to='/textform' style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'#343a40'}}>
            <button type="button" className="btn btn-outline-success my-4" ><b>Let's Go</b></button>
            </Link>
        </div>
    )
}
