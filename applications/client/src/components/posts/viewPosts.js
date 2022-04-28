import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./viewPosts.css"

const Providers = (props) => (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.email}</td>
    </tr>
);
    export default function SearchViewPosts() {
        const [providers, setProviders] = useState([]);

        // This method fetches the records from the database.
        useEffect(() => {
            async function getProviders() {
                const response = await fetch(`http://localhost:3001/provider/`);
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
                        providers={provider}
                        key={provider._id}
                    />
                );
            });
        }

        return (
            /* <div className="search-view-posts flex-col-hstart-vstart clip-contents">
                <div className="group-547">

                    <button onClick={"schedule"} className="info flex-row" >
                        <div className="pictureofserivceprovider" />
                        <div className="group-30 flex-col">
                            <div className="group-867 flex-row">
                                <p className="txt-055">Name</p>
                                <p className="txt-3910">Rate:</p>
                            </div>

                            <p className="txt-696">Services:</p>
                            <p className="txt-042">Location:</p>
                            <p className="txt-3910">Bio:</p>
                        </div>
                    </button>

                    <p className="txt-194">Math Tutors Near You</p>
                </div>
                <div className="navbar">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/939oav208ct-597%3A250?alt=media&token=9ff701a5-a36c-4ff0-b215-d026afe4e18d"
                        alt="Not Found"
                        className="ellipse-1"
                    />
                    <div className="ellipse-11" />
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/939oav208ct-597%3A256?alt=media&token=8ec76d3b-fd68-4ec7-8aa0-99dc7a680881"
                        alt="Not Found"
                        className="rectangle-9"
                    />
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/939oav208ct-597%3A255?alt=media&token=9806bd0f-9935-4de0-ac17-6d9c6a867f72"
                        alt="Not Found"
                        className="rectangle-8"
                    />
                    <div className="searchbar flex-col-hstart-vstart">
                        <div className="content flex-row-vcenter-hstart">
                            <input className="txt-817"  placeholder="Name or Service"/>
                        </div>
                    </div>
                </div>
                <button className="logo" onClick={event => window.location.href='/'}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/939oav208ct-597%3A258?alt=media&token=b4bf9225-2365-47c4-93c5-a15e32715e70"
                        alt="Not Found"
                        className="business-plan-12"
                    />
                    <p className="txt-404 flex-hcenter">ilestones</p>
                </button>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/939oav208ct-597%3A247?alt=media&token=e451d829-a1d0-4090-b6d5-2ca2ddda678f"
                    alt="Not Found"
                    className="user-icon"
                />
            /divv>*/
            <div>
                <h3>Record List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>

                    <tbody>{providerList()}</tbody>
                </table>
            </div>
        );
    }