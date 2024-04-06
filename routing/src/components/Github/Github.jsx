import React, { useEffect } from 'react'

function Github() {

    const [data, setData] = React.useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/sanjayaniroula11')
        .then((response)=> response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-green-600 text-white p-4 text-3xl' >Github <br />
    Followers: {data.followers} <br />
    Name: {data.name} <br />
    <img src={data.avatar_url} alt="" className='w-1/4 m-auto my-5 rounded-full' /></div>
  )
}

export default Github