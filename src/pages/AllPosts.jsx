import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { PostCard, Container } from '../components'

function AllPosts() {
    const [posts, setPost] = useState([])
    useEffect(()=>{}, [])

    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPost(posts.documents)
        }
    })
  return (
    <div>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts