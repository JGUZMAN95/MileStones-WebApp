import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./viewPosts.css"
import { Card } from "react-bootstrap"


const Providers = (props) => [
    <Card style={{ width: "18rem" }} key={props._id} className="box">

            <Card.Img variant="top" src="holder.js/100px180"  />
            <Card.Body>
              <Card.Title>{props.provider.name}</Card.Title>
              <Card.Text>{props.provider.rate}</Card.Text>
            </Card.Body>
            <Card.Footer>{props.provider.service}</Card.Footer>
          </Card>
];


function SearchViewPosts() {
    //----------------------------------------------------------------
    const [providers, setProviders] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getProviders() {
            const response = await fetch(`http://localhost:3001/post/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const providers = await response.json();
            setProviders(providers);
        }

        getProviders();
        return;
    }, [providers.length]);

    // This method will map out the records on the table
    function providerList() {
        return providers.map((provider) => {
            return (
                <Providers
                    provider={provider}
                    key={provider._id}
                />
            );
        });
    }
    //------------------------------------------------

    return (
        <div className="grid">{providerList()}</div>
    );
    
    };



export default SearchViewPosts