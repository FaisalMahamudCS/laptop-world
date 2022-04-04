import React from 'react';
import { useEffect, useState } from "react";
import {AreaChart,Area, PieChart,Pie,LineChart,BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setData(data))

    },[data])
  
  
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-lg-6 mt-5">
                <h5 class='text-primary text-center'>MONTH WISE SELL</h5>

       <LineChart width={500} height={300} data={data}>

<Line type="monotone" dataKey={'sell'}  stroke="#8884d8" strokeWidth={2}></Line>
<XAxis dataKey={'month'}></XAxis>
<YAxis dataKey={'sell'}></YAxis>
<Tooltip></Tooltip>
       </LineChart>

       </div>
       <div  className='col-lg-6 mt-5'>
       <h5 class='text-primary text-center'>Investment Vs Revenue</h5>
       <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
        </div>
        </div>
        <div className="row">
            <div className="col-lg-6 mt-5">
            <h5 class='text-primary text-center'>Investment Vs Revenue</h5>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
         
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        
        </AreaChart>
        </div>
        <div className="col-lg-6 mt-5 ml-5 container" >
            <h5 class='text-primary text-center'>Investment Vs Revenue</h5>
          <PieChart width={300} height={300}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        </div>
        </div>
       </div>

       );
};

export default Dashboard;