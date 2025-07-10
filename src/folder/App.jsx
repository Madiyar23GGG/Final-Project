import { BrowserRouter as Router, Route, Routes, BrowserRouter} from  'react-router-dom'
import Home from './Home'
import Posts  from './Posts'  
import Navbar from './Navbar'
import PostDetails from './PostDetails'
function App() {
    return(
        <Router>
        <Navbar/>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/posts'element={<Posts/>}/>
            <Route path='/posts/:id'element={<PostDetails/>}/>
        </Routes>
        </Router>
    )
}


export default App