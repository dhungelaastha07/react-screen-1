import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";
import CardsGrid from './CardsGrid.js';
import Restaurant from "./Restaurant.js";
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  const [restaurants,setRestaurants] = useState([]);
  useEffect(()=>{
    axios.get("https://random-data-api.com/api/restaurant/random_restaurant?size=50")
    .then((res)=>{
      setRestaurants(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/restaurant/:id">
          <Restaurant restaurants = {restaurants} />
        </Route>
        <Route path = "/">
          <CardsGrid restaurants={restaurants} />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
