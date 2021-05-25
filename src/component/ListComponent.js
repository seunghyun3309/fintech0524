// r a f c e 단축키

import React, { useState } from 'react'
import ListItem from "./ListItem";

const ListComponent = () => {
    const [array, setarray] = useState([
        { name: "홍길동", age: "34", height: "184" },
        { name: "고길동", age: "24", height: "164" },
        { name: "김길동", age: "44", height: "144" },
    ]);
    return (
        <div>
            {array.map((user, index) => {
                return <ListItem user={user} key={index}> </ListItem>;
            })}
        </div>
    );
};

export default ListComponent;
