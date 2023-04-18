import React, { use } from 'react'
import Layout from '@/components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Index = ({users}) => {
    const router=useRouter();
  return (
    <Layout>
        <h2 className='text-center'>All users list</h2>
        <table className="table">
  <thead>
    <tr>
      <th scope="col" className='text-center'>Name</th>
    </tr>
  </thead>
  <tbody>
  {users.map(user=>(
    <tr key={user.id}>
       <td className='text-center' style={{cursor:'pointer'}} onClick={()=>{router.push(`/users/${user.id}`)}}>{user.name}</td>
    </tr>
  ))}
  </tbody>
</table>
    </Layout>
  )
}

export default Index;

export async function getStaticProps(){
     try{
      const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
      return{
        props:{
            users:data
        }
      }
     }catch(err){
        console.log(err);
     }
}