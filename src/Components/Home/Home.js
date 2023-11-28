import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />

                <Body />

                <Footer />
            </div>
        );
    }
}

export default Home;
