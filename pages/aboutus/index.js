import { Fragment } from "react";
import Link from 'next/link';
const Developer=()=>{
    return (<Fragment><h1>Developer Page</h1>
    <h2><Link href="/aboutus/1">Yash</Link></h2>
    <h2><Link href="/aboutus/2">Vaibhav</Link></h2>
    <h2><Link href="/aboutus/3">Suresh</Link></h2>
    </Fragment>)
}

export default Developer;