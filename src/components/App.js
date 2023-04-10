import React from "react";
import Card from "./Card";
import contacts from "./contact";


function App() {
    return <div>
        <h1 className="heading">Contact Cards</h1>
        <Card
            img={contacts[0].img}
            name={contacts[0].name}
            phone={contacts[0].phone}
            email={contacts[0].email}
            info={contacts[0].info}
        />
        <Card
            img={contacts[1].img}
            name={contacts[1].name}
            phone={contacts[1].phone}
            email={contacts[1].email}
            info={contacts[1].info}

        />
        <Card
            img={contacts[2].img}
            name={contacts[2].name}
            phone={contacts[2].phone}
            email={contacts[2].email}
            info={contacts[2].info}
        />
    </div>                                      
}

export default App;

