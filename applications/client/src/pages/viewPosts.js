import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import "./viewPosts.css"
import './Cards.css';
import CardItem from './CardItem';

const Providers = (props) => (
          <CardItem
            src='/babysit.jpg'
            text={props.provider.name}
            label={props.provider.service}
            path='/services'
          />

        
);
    export default function SearchViewPosts() {
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

        return (
            <div className='cards'>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            {providerList()}
            </ul>
            </div>
            </div>
            </div>

            /*
            <div>
                <h3>Record List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Bio</th>
                        <th>Expirence</th>
                        <th>Services</th>
                    </tr>
                    </thead>
                    <tbody>{providerList()}</tbody>
                </table>
            </div>
        */
        );
    }