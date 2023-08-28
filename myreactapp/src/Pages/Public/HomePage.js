import React from "react";
import Navbar from "../Navbar";
import * as Icon from 'react-bootstrap-icons';

function HomePage() {
    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <div style={{...styles.hero, backgroundColor: "#68929483"}}>
                    <h1 style={styles.heading}><Icon.Alexa style={{color:"orange"}}/> &nbsp;Welcome to an Extraordinary World of Possibilities!</h1>
                </div>
                <div style={styles.content}>
                    <h4>Discover Limitless Innovation</h4>
                    <p>
                        Step into a realm where cutting-edge technology and imagination intertwine to create products that redefine the future. Our passion for innovation drives us to challenge the status quo and pioneer groundbreaking solutions that make a difference in your life.
                    </p>

                    <h4>Embrace the Future with Us</h4>
                    <p>
                        As you explore our Home, you'll find a myriad of opportunities to embrace the future. From state-of-the-art gadgets to visionary concepts, each corner of our Home reflects our commitment to pushing the boundaries of what's possible.
                    </p>

                    <h4>A Community of Visionaries</h4>
                    <p>
                        At WEBCentral, we are more than just a team; we are a community of like-minded visionaries. Together, we embark on a journey to shape the world and inspire others to join us on this transformative path. Your presence in our Home enriches this community, and we invite you to be a part of something extraordinary.
                    </p>

                    <h4>Experience Innovation, Unleashed</h4>
                    <p>
                        Prepare to be captivated by a spectrum of experiences that cater to your passions, interests, and desires. Our Home is a playground for the curious minds and adventure-seekers, where innovation and creativity come alive in ways you've never imagined.
                    </p>

                    <h4>Your Dreams, Our Inspiration</h4>
                    <p>
                        We value your dreams and aspirations because they fuel our inspiration. Every product, every idea, and every vision we craft is driven by the desire to make your dreams a tangible reality. Your journey becomes our journey, and together, we paint the canvas of innovation with brilliance.
                    </p>

                    <h4>Join the Movement</h4>
                    <p>
                        As we open the doors of our Home to you, we extend an invitation to join the movement of change and progress. Together, we can redefine the future and create a world where the impossible becomes routine.
                    </p>

                    <p style={styles.signature}>
                        Thank you for visiting our Home. We are thrilled to share this space with you, and we look forward to embarking on an exhilarating journey together.
                        <br />
                        <br />
                        Welcome to WEBCentral - Where Innovation Knows No Boundaries.
                    </p>
                </div>
            </div>
        </>
    );
}

const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
    },
    hero: {
        backgroundColor: "#f0f0f0",
        padding: "100px 0",
        marginBottom: "30px",
    },
    heading: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#333",
    },
    content: {
        textAlign: "left",
        fontSize: "15px",
        lineHeight: "1.6",
        maxWidth: "800px",
        margin: "0 auto",
    },
    signature: {
        fontStyle: "italic",
    },
};

export default HomePage;
