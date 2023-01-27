import React, {useState } from "react";
import Header from "./components/Header";
import News from "./components/News";
import "./App.css";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress , setProgress] = useState(0)
 
    return (
      <div>
        <Router>
          <Header />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
             />
        <Routes>
          <Route exact path="/" element={<News key="general"  pageSize={5} counrty="in" category="general" setProgress={setProgress}/>}></Route>

          <Route exact path="/business" element={<News key="business"  pageSize={5} counrty="in" category="business" setProgress={setProgress}/>}></Route>

          <Route exact path="/entertainment" element={<News key="entertainment"  pageSize={5} counrty="in" category="entertainment" setProgress={setProgress}/>}></Route>

          <Route exact path="/health" element={<News key="health"  pageSize={5} counrty="in" category="health" setProgress={setProgress}/>}></Route>

          <Route exact path="/science" element={<News key="science"  pageSize={5} counrty="in" category="science" setProgress={setProgress}/>}></Route>

          <Route exact path="/sports" element={<News key="sports"  pageSize={5} counrty="in" category="sports" setProgress={setProgress}/>}></Route>

          <Route exact path="/technology" element={<News key="technology"  pageSize={5} counrty="in" category="technology" setProgress={setProgress}/>}></Route>
        </Routes>
        </Router>
      </div>
    );
}

export default App;