import React, { useEffect, useState } from "react";
import "./viewPosts.css"
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


const Providers = (props) => [
  <div class="container">

  {Array.from({ length: 1 }).map((_, idx) => (
    <Col md = {3}>
      <Card style={{marginTop: 50, marginBottom: 50}}>
        <Card.Img variant="top" width="100%" src='/babysit.jpg'/>
        <Card.Body>
          <Card.Title>{props.provider.name}</Card.Title>
          <Card.Text>
          {props.provider.rate}
          </Card.Text>
        </Card.Body>
        <Card.Footer>{props.provider.service}</Card.Footer>
      </Card>
    </Col>
  ))}

  </div>



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
    )
    
    }



export default SearchViewPosts