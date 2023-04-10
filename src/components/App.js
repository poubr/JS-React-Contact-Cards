import React from "react";
import Card from "./Card";
import contacts from "./contact";


function createCard(contacts) {
    return <Card
        key={contacts.id}
        img={contacts.img} 
        name={contacts.name}
        phone={contacts.phone}
        email={contacts.email}
        info={contacts.info}
    />
}

function App() {
    return <div>
        <h1 className="heading">Contact Cards</h1>
        {contacts.map(createCard)}
    </div>                                      
} 

export default App;

