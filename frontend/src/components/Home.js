import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faPaw, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1 className="welcome">
                    Welcome to PetAdoptCare! <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                </h1>
                <p className="subheading">Your one-stop solution for pet adoption and pet care products.</p>
            </header>
            <section className="services">
                <h2>Why Choose PetAdoptCare?</h2>
                <p>At PetAdoptCare, we believe every pet deserves a loving home. Whether you're looking to adopt a new furry friend or need high-quality products to care for your pet, we have everything you need. Our mission is to support pet adoption and ensure every pet finds a loving family.</p>
                <h2>Our Services</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faPaw} /> Wide range of adoptable pets</li>
                    <li><FontAwesomeIcon icon={faCat} /> High-quality pet care products</li>
                    <li><FontAwesomeIcon icon={faHeart} /> Expert advice on pet care</li>
                    <li><FontAwesomeIcon icon={faDog} /> Community of pet lovers</li>
                </ul>
            </section>
            <section className="featured">
                <h2>Featured Pets</h2>
                <div className="grid">
                    <div className="grid-item">
                        <div className="card">
                            <img src='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg' alt="Featured Pet 1" />
                            <h3>Buddy</h3>
                            <p>Golden Retriever, 3 years old</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img src='https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1678934108.5188236/everything-you-need-to-know-about-siamese-cats.png' alt="Featured Pet 2" />
                            <h3>Mittens</h3>
                            <p>Siamese, 2 years old</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img src='https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg' alt="Featured Pet 3" />
                            <h3>Whiskers</h3>
                            <p>Tabby Cat, 1 year old</p>
                        </div>
                    </div>
                </div>
                <h2>Featured Products</h2>
                <div className="grid">
                    <div className="grid-item">
                        <div className="card">
                            <img src='https://5.imimg.com/data5/SELLER/Default/2021/5/YU/GC/BI/97348387/pedigree-dog-foods-500x500.jpg' alt="Featured Product 1" />
                            <h3>Dog Food</h3>
                            <p>High quality dog food</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img src='https://headsupfortails.com/cdn/shop/files/TrixieWindUpMouseCatToy-7cm_AssortedColour.jpg?v=1687871100' alt="Featured Product 2" />
                            <h3>Cat Toy</h3>
                            <p>Interactive toy for cats</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img src='https://images-cdn.ubuy.co.in/63ea4a2589eaac2918767213-bird-feeder-for-outside-hanging-bird.jpg' alt="Featured Product 3" />
                            <h3>Bird Feeder</h3>
                            <p>High quality bird feeder</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"PetAdoptCare helped us find the perfect pet for our family. The process was smooth and the staff were very helpful." - Jane Doe</p>
                </div>
                <div className="testimonial">
                    <p>"The quality of the pet products is top-notch. Our pets love them!" - John Smith</p>
                </div>
            </section>
            <section className="cta-banner">
                <h2>Ready to find your new best friend?</h2>
                <p>Browse our available pets and give a loving home to a pet in need.</p>
                <Link to="/adopt-pet">
                    <button className="cta-button">Get Started</button>
                </Link>
            </section>
            <footer className="footer">
                <h2>Contact Us</h2>
                <p>Email: contact@petadoptcare.com</p>
                <p>Phone: +123-456-7890</p>
            </footer>
        </div>
    );
};

export default Home;
