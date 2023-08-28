import React from "react";
import UserNavbar from "./UserNavbar";
import { Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function MainPage() {
    // Sample data for the cards
    const profileCards = [
        {
            id: 1,
            title: "Welcome!",
            content: "Welcome to WebCentral! We are thrilled to have you here. Get ready to experience a world of endless possibilities.",
            icon: Icon.PersonCheck,
        },
        {
            id: 2,
            title: "Discover Amazing Features",
            content: "Explore a range of powerful features designed to simplify your online experience. From intuitive navigation to advanced settings, we've got you covered.",
            icon: Icon.GearWideConnected,
        },
        // Add more cards as needed
    ];

    return (
        <>
            <UserNavbar />
            <div className="d-flex flex-column p-4 p-3 mb-2 bg-dark text-white">
                <br />
                <h1>Welcome to Your WEB Central!</h1>
                <p>Where Innovation Meets Convenience</p>
                <p>Unleash the Power of WebCentral and Experience:</p>
                <ul>
                    <li>Seamless Navigation</li>
                    <li>Intuitive User Interface</li>
                    <li>Unmatched Performance</li>
                    <li>And Much More!</li>
                </ul>
                <p>Let's embark on a journey of discovery and creativity together.</p>
            </div>

            <div className="d-flex justify-content-center">
                {profileCards.map((profile) => (
                    <Card key={profile.id} style={{ width: "22rem", margin: "10px" }}>
                        <Card.Body>
                            <Card.Title style={{ color: "green" }}><profile.icon /> &nbsp;</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                <br />
                            </Card.Subtitle>
                            <Card.Text>
                                {profile.content}
                            </Card.Text>
                            <Card.Link href="#">Learn More</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default MainPage;
