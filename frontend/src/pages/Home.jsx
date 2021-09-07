import { Fragment } from 'react';
import Heading from '../components/banner/Heading';
import Feature from '../components/feature/Feature';
import Footer from '../components/footer/Footer';
import Header from '../components/Header/Header';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Heading/>
            <Feature/>
            <Footer/>
        </Fragment>
    )
}

export default Home
