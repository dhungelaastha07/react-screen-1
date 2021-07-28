import {Link} from "react-router-dom";


export default function CardsGrid(props){
    const restaurantJSX = props.restaurants.map((restaurant)=>{
        return(
          <div key = {restaurant.id} className= "card">
            <Link to = {`/restaurant/${restaurant.uid}`}>
              <img className = "card-image" src = {`${restaurant.logo}?id=${restaurant.uid}`} alt= "restaurant-image" />
              <div className= "card-body">
                <h1 className="rest-name">{restaurant.name}</h1>
                <p className = "rest-type">{restaurant.type}</p>
              <div className = "card-footer">
                <div className = "rest-phone">
                    <i className="fas fa-phone-alt"></i>
                    <span>{restaurant.phone_number} </span>
                  </div>
                  <div className = "rest-address">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{restaurant.address} </span>
                  </div>
              </div>
              </div>
            </Link>
          </div>
        )
      })

      return <div className="grid">
          {restaurantJSX}
      </div>
}