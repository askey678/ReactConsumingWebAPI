import React from "react";
import UserNavbar from "./UserNavbar";
import { Card } from 'react-bootstrap';
import { CodeSlash, Phone, Megaphone, CloudUpload, Cart4, Headset } from 'react-bootstrap-icons';

function UserService() {
    const serviceCards = [
        {
            id: 1,
            title: "Web Design",
            content: "Our expert designers will create stunning and responsive websites that make a lasting impression.",
            icon: CodeSlash,
        },
        {
            id: 2,
            title: "App Development",
            content: "Get powerful and user-friendly mobile applications tailored to meet your specific needs.",
            icon: Phone,
        },
        {
            id: 3,
            title: "Digital Marketing",
            content: "Enhance your online presence and reach a wider audience with our strategic digital marketing services.",
            icon: Megaphone,
        },
        {
            id: 4,
            title: "Cloud Solutions",
            content: "Leverage the power of the cloud to optimize your business operations and data management.",
            icon: CloudUpload,
        },
        {
            id: 5,
            title: "E-commerce Solutions",
            content: "Set up a robust online store and boost your sales with our customizable e-commerce solutions.",
            icon: Cart4,
        },
        {
            id: 6,
            title: "24/7 Support",
            content: "We provide round-the-clock support to ensure your experience with WebCentral is smooth and hassle-free.",
            icon: Headset,
        },
    ];

    return (
        <>
            <UserNavbar />
            <div className="d-flex flex-column p-4 p-3 mb-2 bg-dark text-white">
                <h4>Discover Our Range of Premium Services</h4>
                <br/>
                <p>Unlock the full potential of your business with WebCentral's exceptional services tailored to meet your unique needs.</p>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {serviceCards.map((service) => (
                    <Card key={service.id} style={{ width: "22rem", margin: "10px" }}>
                        <Card.Body>
                            <Card.Title style={{ color: "green" }}><service.icon /> &nbsp;</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                <br />
                            </Card.Subtitle>
                            <Card.Text>
                                {service.content}
                            </Card.Text>
                            <Card.Link href="#">Learn More</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default UserService;
