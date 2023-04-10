import React from "react";

function Card(props) {
    return <div>
        <div className="card">
            <div className="top">
                <img className="circle-image"
                    src={props.img}
                    alt="avatar_image"
                />
                <h2 className="name">{props.name}</h2>
            </div>
            <div className="bottom">
                <p className="contact">{props.phone}</p>
                <p className="contact">{props.email}</p>
                <div className="info">{props.info}</div>
            </div>

        </div>
    </div>
}

export default Card;