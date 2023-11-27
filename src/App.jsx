import { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {Routes , Route, BrowserRouter as Router} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0)

  const changeProgress = (prog) => {
    setProgress(prog)
  }

  return (
    <>
      <Router>
          <NavBar/>
          <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes >
          <Route path='/' key='general' element={<News changeProgress={changeProgress} country='in' category='general' />}></Route>
          <Route path='/entertainment' key='entertainment' element={<News changeProgress={changeProgress} country='in' category='entertainment' />}></Route>
          <Route path='/health' key='health' element={<News changeProgress={changeProgress} country='in' category='health' />}></Route>
          <Route path='/science' key='science' element={<News changeProgress={changeProgress} country='in' category='science' />}> </Route>
          <Route path='/sports' key='sports' element={<News changeProgress={changeProgress} country='in' category='sports' />}></Route>
          <Route path='/technology' key='technology' element={<News changeProgress={changeProgress} country='in' category='technology' />}></Route>
        </Routes >
      </Router>
    </>
  )
}

export default App
