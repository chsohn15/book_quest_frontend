import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

// import { useSelector } from "react-redux";


const TweetProgressChart = (props) => {

    // const { total_points, streak }  = useSelector(state => state.userReducer.currentUser)

    
    const data = [
        {
          "name": "Page A",
          "uv": 4000
        },
        {
          "name": "Page B",
          "uv": 3000
        },
        {
          "name": "Page C",
          "uv": 2000,

        },
        {
          "name": "Page D",
          "uv": 2780
        },
        {
          "name": "Page E",
          "uv": 1890
        },
        {
          "name": "Page F",
          "uv": 2390
        },
        {
          "name": "Page G",
          "uv": 3490
        }
      ]
        
    return(
        <div>
            <div>Tweet Progress Chart</div>
            <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

export default TweetProgressChart