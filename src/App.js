import React, { Component } from 'react'
import Navebar from './components/Navebar'
import NewsContainer from './components/NewsContainer'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navebar/>
          <Routes>
        <Route exact path='/science' element={<NewsContainer key="science" pageSize="9" category="science"/>}/>
        <Route exact path='/tech' element={<NewsContainer key="technology" pageSize="9" category="technology"/>}/>
        <Route exact path='/health' element={<NewsContainer key="health" pageSize="9" category="health"/>}/>
        <Route exact path='/sports' element={<NewsContainer key="sports" pageSize="9" category="sports"/>}/>
        <Route exact path='/' element={<NewsContainer key="general" pageSize="9" category="general"/>}/>
       
        
       </Routes>
       </Router>
      </div>
    )
  }
}

export default App