import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import Layout from '../components/index'
import '../css/become-a-partner.css'

const BecomePartnerPage = () => (
  <Layout>
    <Helmet
      title="Become a Partner | Fitato"
    >
      <meta name="description" content="Become a partner and join our family of over 300 fitness centers. Boost your customer base and revenue upto 100%." />
    </Helmet>
    <div className="become-partner-page">

      <div className="become-partner-section-hero" style={{backgroundImage: 'url(' + withPrefix('/static/become-a-partner/become-a-partner-hero-bg.jpg') + ')'}}>
        <div className="container">
          <div className="become-partner-section-hero__wrapper">
            <h1>Grow Your Health &amp; Fitness Business With Us</h1>
            <p>Our 300+ partner gym and fitness studios form the backbone of our company. Partner up with us on our mission to create the best fitness experience possible and watch as your business reaches unprecedented heights in revenue and visibility.</p>
            <a href="#contact" data-scroll className="button">Get in touch</a>
          </div>
        </div>
      </div>
    
      <div className="become-partner-section-about">
        <div className="container">
          <p>A fitato pass gives access to all our partner gyms, so users can try out multiple activities (gym, yoga, Zumba, MMA, etc.) at different studios and get fit the way they want to!</p>
          <p>Tap into our customer base and put your fitness studio on the map! We're always looking to expand our health and fitness studio network and would love to speak with you about partnering!</p>
        </div>
      </div>

      <div className="become-partner-section-what">
        <div className="container">
          <h2>What Can We Do For You</h2>
          <div className="become-partner-section-what__items">
            <div className="become-partner-section-what__item">
              <div className="become-partner-section-what__item--left">
                <img src={withPrefix('/static/become-a-partner/revenue.png')} alt="revenue"/>
              </div>
              <div className="become-partner-section-what__item--right">
                <h3>Boost Your Revenue</h3>
                <p>Earn up to 100% increased revenue by partnering up with us. Tap into our customer base and let us fill up your unsold and empty spots with our Fitato customers. More revenue with minimal effort on your part.</p>
              </div>
            </div>
            <div className="become-partner-section-what__item">
              <div className="become-partner-section-what__item--right">
                <h3>Get New Leads</h3>
                <p>Increase Your footfall by 50% by letting us supercharge your marketing. With Over 35000 Fitato App downloads, you’ll get yourself a whole new world of fitness enthusiasts.</p>
              </div>
              <div className="become-partner-section-what__item--left">
                <img src={withPrefix('/static/become-a-partner/leads.png')} alt="leads"/>
              </div>
            </div>
            <div className="become-partner-section-what__item">
              <div className="become-partner-section-what__item--left">
                <img src={withPrefix('/static/become-a-partner/visibility.png')} alt="visibility"/>
              </div>
              <div className="become-partner-section-what__item--right">
                <h3>Amp Up Your Brand Visibility</h3>
                <p>Put your gym on the map. We leave no stone unturned when it comes to marketing - Push notifications, corporate sessions, social media celebs, social media posts on Facebook &amp; Instagram, promotional emailers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="become-partner-section-locations">
        <div className="container">
          <div className="become-partner-section-locations__heading">
            <h3>Currently Operating In</h3>
          </div>
          <div className="become-partner-section-locations__imgs">
            <div className="become-partner-section-locations__img">
              <img src={withPrefix('/static/icons/pune.svg')} alt="pune"/>
              <p>Pune</p>
            </div>
            <div className="become-partner-section-locations__img">
              <img src={withPrefix('/static/icons/hyderabad.svg')} alt="hyderabad"/>
              <p>Hyderabad</p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact"></div>

      <div id="mc_embed_signup" className="become-partner-section-contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Please fill out this form, and we will be in touch soon.</p>
          <form action="https://fit.us18.list-manage.com/subscribe/post?u=c70dd7220cee163ff5b3fa95d&amp;id=1f483bc7bf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
            
              <div className="mc-field-group">
                <label htmlFor="mce-FULLNAME">Your Name </label>
                <input type="text" name="FULLNAME" className="required" id="mce-FULLNAME" placeholder="Enter your full name" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FACILITY">Facility Name </label>
                <input type="text" name="FACILITY" className="required" id="mce-FACILITY" placeholder="Enter your facility name" />
              </div>
              <div className="mc-field-group size1of2">
                <label htmlFor="mce-PHONE">Phone Number </label>
                <input type="text" name="PHONE" className="required" id="mce-PHONE" placeholder="Enter your contact number" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Business Email </label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Enter your email address" />
              </div>
              <div className="mc-field-group input-group">
                <label>Your Facility Location </label>
                <ul className="become-partner-section-contact__radio">
                  <li>
                    <input type="radio" value="Pune" name="FLOCATION" id="mce-FLOCATION-0" />
                    <label htmlFor="mce-FLOCATION-0">Pune</label>
                  </li>
                  <li>
                    <input type="radio" value="Hyderabad" name="FLOCATION" id="mce-FLOCATION-1" />
                    <label htmlFor="mce-FLOCATION-1">Hyderabad</label>
                  </li>
                </ul>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
              </div>
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c70dd7220cee163ff5b3fa95d_1f483bc7bf" tabIndex="-1" /></div>
              <div className="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button" style={{marginLeft: '0'}} /></div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </Layout>
)

export default BecomePartnerPage
