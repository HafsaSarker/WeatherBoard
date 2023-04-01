import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
export default function NotFound(){
    return (
        <div className="not-found">
            <h2>Oh shucks...you've entered an unknown territory!</h2>
            <Link to="/">
                <h3>
                    Take me back home <span><AiFillHome /></span>
                </h3>
            </Link>
        </div>
    )
}