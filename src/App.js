import { Link, Outlet } from "react-router-dom";
import { useGetUsersQuery } from "./services/randomUserApi";
import { useEffect, useState } from "react";

import './App.css';

function App() {
  const { data: users } = useGetUsersQuery();
  console.log('checking', users);

  const [ feed, setFeed ] = useState([]);
  const [ pageNumber, setPageNumber ] = useState(1);
  const [ feedNumber ] = useState(20);

  
useEffect(() => {
  setFeed(users);
},[feed]);

  const currentPageNumber = (pageNumber * feedNumber) - feedNumber
  const paginatedFeed = feed?.splice(currentPageNumber, feedNumber)
  
const handlePrev = () => {
  if(pageNumber === 1)return
  setPageNumber(pageNumber -1)
}
const handleNext = () => {
  setPageNumber(pageNumber + 1)
}


  return (
    <> 
    <main className="app"> 
    <h2> All Available Persons</h2>
      {paginatedFeed?.results?.map((f) => (
        <div key={f.id}>
          {f.gender}
        </div>
      ) )}
    
    <div className="nav">
    <button onClick={handlePrev} >prev</button>
      <div>{pageNumber}</div>
    <button onClick={handleNext}>next</button>
    </div>
    <div>
      Feel Free to navigate any route you want!
    </div>
    </main>
      <Outlet />
    </>
  );
}

export default App;
