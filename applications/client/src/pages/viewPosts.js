import React, { useEffect, useState, Component } from "react";
import ReactSearchBox from "react-search-box";
import "./viewPosts.css"
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup } from 'reactstrap';


const Providers = (props) => [
  <CardGroup>
    <Card border="dark" style={{ width: '18rem', marginBottom: '2rem', marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem' }} className="text-center">
      <Card.Img variant="top" width="100%" src='/milestones.jpeg' />
      <Card.Body>
        <Card.Title>{props.provider.name}</Card.Title>
        <Card.Text>
          {props.provider.rate}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{props.provider.service}</Card.Footer>
    </Card>
  </CardGroup>
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
    <CardGroup>
      {providerList()}
    </CardGroup>
  )

}



export default SearchViewPosts