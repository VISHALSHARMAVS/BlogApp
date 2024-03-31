import { useEffect,useState } from "react"
import appwriteService from "../Appwrite/config"
import { Container,PostCard } from "../Components/index"


function Home() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        appwriteService.getPosts([]).then((post)=>{
            if (post) {
                setPosts(post.documents)
            }
        })
    },[])
    {console.log(posts);}
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 my-36 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className=" p-2 w-full">
                            <h1 className=" text-2xl font-bold hover:text-gray-400">
                                Login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else
    return (
        <div className="w-full py-8 my-8">
            <Container>
                <div className="flex flex-wrap">
                  {posts.map((post)=>
                     (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    )
                    )}
                </div>
            </Container>
            
        </div>
    )
  
}

export default Home