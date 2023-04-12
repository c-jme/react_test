import './App.css';
import HomePage from './container/HomePage';
import Nav from './components/Nav/Nav';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './container/UserList/UserList';
import { useEffect } from "react";

//http://localhost:5173/
// Home page -> welcome to my page (has h1, p, img) (nav, home + user page (with userlist)npm 
//http://localhost:5173/users
// User page -> user list -> user data fetched from randomuserAPI renders 12 users.
//http://localhost:5173/users/:id
// Dedicated page for each user -> when clicking on user page, takes you to that page.

//create an array of page numbers 
// map the array 
// fetch each page.
// promise.all to wait for all data to come back to then apply json to all promises to return results.

function App() {

  const getUsers = async() => {
    const userPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const promises = userPages.map((num) => {
      return fetch(`https://randomuser.me/api/`)
    })

    const responses = await Promise.all(promises);

    const jsonPromises = responses.map((p) => p.json());

    const jsonResponses = await Promise.all(jsonPromises);

    console.log(jsonResponses);
  }


  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element=
          {<HomePage />}/>
          <Route path="/users" element=
          {<UserList />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
