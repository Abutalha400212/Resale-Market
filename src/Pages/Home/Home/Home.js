import React from 'react';
import Footer from '../../../Components/Shared/Footer/Footer';
import Advertise from '../Advertise/Advertise';
import ShopDesk from '../ShopDesk/ShopDesk';
import ExtraHome from './ExtraHome/ExtraHome';

const Home = () => {
    return (
       <div>
        <ExtraHome/>
        <ShopDesk/>
        <Advertise/>
        <Footer/>
       </div>
    );
};

export default Home;