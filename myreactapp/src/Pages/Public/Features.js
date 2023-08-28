import React from "react";
import Navbar from "../Navbar";
import { Card } from 'react-bootstrap';
import { LightningFill, Trophy, Alexa } from 'react-bootstrap-icons';

function Feature() {
  // Sample data for the feature cards
  const featureCards = [
    {
      id: 1,
      title: "Lightning Fast Performance",
      description: "Experience blazing-fast loading times and smooth interactions with our high-performance infrastructure.",
      icon: LightningFill,
    },
    {
      id: 2,
      title: "Award-Winning Design",
      description: "Enjoy a visually stunning and intuitive user interface crafted by our award-winning design team.",
      icon: Trophy,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column p-4 p-3 mb-2 bg-dark text-white">
        <h3>Explore the Key Features of &nbsp;<Alexa style={{color:"orange"}}/> WEBCentral </h3>
        <p>Unleash the potential of innovation as we take you on a journey through the extraordinary features of our cutting-edge product. With seamless performance and captivating design, your experience will be nothing short of exceptional.</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center" style= {{backgroundColor: "#68929483"}}>
        {featureCards.map((feature) => (
          <Card key={feature.id} style={{ width: "22rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}><feature.icon /> &nbsp;</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <br />
              </Card.Subtitle>
              <Card.Text>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Feature;
