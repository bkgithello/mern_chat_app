import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"
//import Signup from "../signup/Signup"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[55opx] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar/>
        <MessageContainer/> 
    </div>
  )
}

export default Home