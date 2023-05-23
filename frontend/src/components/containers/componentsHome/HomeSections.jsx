import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../../assets/home1.png";
import img2 from "../../../assets/home2.png";
import img3 from '../../../assets/home3.png';
import img4 from '../../../assets/home4.png';
export const Carousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src={img3} className="d-block" alt="..." id='img-home' />
                    <div className="carousel-caption d-block bg-light p-2 text-dark bg-opacity-75">
                        <h2 className="fw-bold fs-1 text-success">Today's special</h2>
                        <p className='fw-bold fs-3'>Ottawa Senators Pizza</p>
                        <Link className='btn btn-primary text-capitalize' to='/products'>¡ Order Now !</Link>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={img1} className="d-block" alt="..." id='img-home' />
                    <div className="carousel-caption d-block bg-light p-2 text-dark bg-opacity-75">
                        <h2 className="fw-bold fs-1 text-success">Today's special</h2>
                        <p className='fw-bold fs-3'>Ollie's pizza</p>
                        <Link className='btn btn-primary text-capitalize' to='/products'>¡ Order Now !</Link>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={img2} className="d-block" alt="..." id='img-home' />
                    <div className="carousel-caption d-block bg-light p-2 text-dark bg-opacity-75">
                        <h2 className="fw-bold fs-1 text-success">Today's special</h2>
                        <p className='fw-bold fs-3'>Our Yummy Pepperoni</p>
                        <Link className='btn btn-primary text-capitalize' to='/products'>¡ order now !</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AboutUs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-success text-center fw-bold'>About us</h2>
            <h3 className='text-center fw-bold'>Ah&Co</h3>
            <div className="aboutUs-content">
                <div className='aboutUs-Img'>
                    <img src={img4} alt="" />
                </div>
                <div className='aboutUs-Text'>
                    <h2>The Best Pizza in Town</h2>
                    <p>Today, Ah&Co specializes in pizza and Italian food dining and delivery with franchised locations throughout Eastern Ontario and Western Quebec. Ah&Co is passionate about delivering the ultimate guest experience and with innovation new products and services
                    <br />
                    Thanks to the support of our loyal and amazing patrons, Ah&Co continues to grow.  We look forward to serving you with great products and services for many years to come.</p>
                    <div className='aboutUs-services'>
                        <p className='btn btn-secondary d-flex align-items-center'> <box-icon className='' name='timer' type='solid' animation='burst' ></box-icon> - Free Delivery</p>
                        <p className='btn btn-secondary d-flex align-items-center'> <box-icon name='shopify' type='logo' animation='burst' ></box-icon> - Easy Payments</p>
                        <p className='btn btn-secondary d-flex align-items-center'> <box-icon name='support' animation='burst' ></box-icon> - Support 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const HomeSections = () => {
    return (
        <div>
            <Carousel />
            <AboutUs />
        </div>
    )
}
