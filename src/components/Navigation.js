import React from "react";
import {Link} from "react-router-dom"

function Navigation(){
    return <div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link> </div>
        {/* Link는 라우터안에서만 사용 가능. */}
        {/* <a href="/">Home</a>
        주의
        <a href="/about">About</a>  페이지가 새로고침되면서 넘어가기에 Link사용*/}
    </div>
}

export default Navigation