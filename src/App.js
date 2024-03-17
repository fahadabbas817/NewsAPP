import React, { useState } from 'react'
import Navebar from './components/Navebar'
import NewsContainer from './components/NewsContainer'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App=()=> {
  const [progress, setprogress] = useState(0)
  const pageSize = 9; 
    return (

      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Navebar/>
          <Routes>
        <Route exact path='/science' element={<NewsContainer setprogress={setprogress} key="science" pageSize={pageSize}category="science"/>}/>
        <Route exact path='/tech' element={<NewsContainer setprogress={setprogress} key="technology" pageSize={pageSize}category="technology"/>}/>
        <Route exact path='/health' element={<NewsContainer setprogress={setprogress} key="health" pageSize={pageSize}category="health"/>}/>
        <Route exact path='/sports' element={<NewsContainer setprogress={setprogress} key="sports" pageSize={pageSize}category="sports"/>}/>
        <Route exact path='/' element={<NewsContainer setprogress={setprogress} key="general" pageSize={pageSize}category="general"/>}/>
       
        
       </Routes>
       </Router>
      </div>
    )
}

export default App