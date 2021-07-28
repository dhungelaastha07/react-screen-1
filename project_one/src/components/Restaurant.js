import {useParams} from "react-router-dom";

function toTitleCase(str) {
    return str[0].toUpperCase() + str.substr(1,str.length);
}

export default function Restaurant(props){
    const {id} = useParams()
    const data = props.restaurants.find(item => item.uid === id);
    
    return (
        <div className = "rest-page">
           {data &&  
           <div className = "container"> 
           <div className = "left-col"> 
                <img src = {`${data.logo}?id=${id}`} alt = "" />
            </div>
            
           <div className = "right-col">
                <div>
                    <h1 className = "rest-name">{data.name}</h1>
                    <p className = "rest-type"> {data.type}</p>
                    <p className = "rest-description"> {data.description}</p>
                </div>
                <div className ="review-section">
                    <p className = "reviews"> Reviews </p>
                    <p className = "rest-review"> {data.review}</p>
                </div>
               <div>
                <div className = "rest-phone">
                    <i className="fas fa-phone-alt"></i>
                    <span>{data.phone_number} </span>
                    </div>
                    <div className = "rest-address">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{data.address} </span>
                    </div>
                    <div className = "rest-hours">
                        <i className="fas fa-clock"></i>
                        <div>
                        <span> Hours: </span>
                            <div>
                            {
                                Object.keys(data.hours).map((item)=>{
                                    return <span>
                                        {toTitleCase(item)} : {data.hours[item]["opens_at"]} -  {data.hours[item]["closes_at"]}</span>
                                })
                            }
                            </div>
                        </div>
                    </div>
           
                </div>
           </div>
           </div>
           
           }

        </div>
    )
}