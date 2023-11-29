import { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {Routes , Route, BrowserRouter as Router} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState(false);
  const [search, setSearch] = useState('')

  const changeProgress = (prog) => {
    setProgress(prog)
  }

  const modeHandler = () => {
    setMode(!mode)
  }

  const searchHandler = (value) => {
    setSearch(value)
  }

  return (
    <>
      <Router>
          <NavBar modeHandler={modeHandler} searchHandler={searchHandler} mode={mode}/>
          <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes >
          <Route path='/' key='general' element={<News search={search} mode={mode} changeProgress={changeProgress} country='in' pageSize='5' category='general' />}></Route>
          <Route path='/entertainment' key='entertainment' element={<News search={search} mode={mode} changeProgress={changeProgress} country='in' pageSize='5' category='entertainment' />}></Route>
          <Route path='/health' key='health' element={<News mode={mode} search={search} changeProgress={changeProgress} country='in' pageSize='5' category='health' />}></Route>
          <Route path='/science' key='science' element={<News mode={mode} search={search} changeProgress={changeProgress} country='in' pageSize='5' category='science' />}> </Route>
          <Route path='/sports' key='sports' element={<News mode={mode} search={search} changeProgress={changeProgress} country='in' pageSize='5' category='sports' />}></Route>
          <Route path='/technology' key='technology' element={<News mode={mode} search={search} changeProgress={changeProgress} country='in' pageSize='5' category='technology' />}></Route>
        </Routes >
      </Router>
    </>
  )
}

export default App;
