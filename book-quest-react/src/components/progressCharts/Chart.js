import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { loadingTweetData } from '../../redux/actions.js'
import { connect } from 'react-redux'



const Chart = (props) => {
        
    return(
        <div>
            <BarChart width={730} height={250} data={props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar name={props.name} dataKey={props.dataKey} fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadingTweetData: () => { dispatch( loadingTweetData() )},

})

export default connect(null, mapDispatchToProps)(Chart)