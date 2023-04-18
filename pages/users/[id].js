import Layout from '@/components/Layout';
import axios from 'axios';
import React from 'react'

const UserId = ({userdata}) => {
  return (
    <Layout>
    <div className='container p-1'>
   <h2>User Details</h2>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>{userdata.name}</td>
    <td>{userdata.email}</td>
    <td>{userdata.address.street}</td>
    <td>{userdata.website}</td>
  </tr>
    
  </tbody>
</table>
    </Layout>
  )
}

export default UserId;


//server side rendering makes our page faster by pre building the html page 
export async function getServerSideProps(context){
    try{
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        return{
            props:{
                userdata:data,
            }
        }
    }catch(err){
        console.log(err)
    }
}