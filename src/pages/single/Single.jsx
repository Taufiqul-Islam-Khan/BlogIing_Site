import "./single.css"
import { SideBar } from '../../components/sidebar/SideBar';
import { SinglePost } from "../../components/singlePost/SinglePost";
export const Single = () => {
    return (
        <div>
           {/*post*/}
           <SinglePost/>
           <SideBar/>
        </div>
    )
}
