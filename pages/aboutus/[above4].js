import { useRouter } from "next/router";
const Developer4=()=>{
    const route=useRouter()
    console.log(route.query.above4)
    return <h1>Developer doesn't exist</h1>
}

export default Developer4;