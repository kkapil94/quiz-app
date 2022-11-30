import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import App from '../App'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'

export default createBrowserRouter( 
    [
        {
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Home/>,
                },
                {
                    path:'/quiz',
                    element:<Quiz/>
                }
            ]
        }
    ]
)
