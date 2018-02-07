import React, { Component } from 'react';
import CTAButton from './CTAButton.js';
import './Home.css';


class Home extends Component {
    render () {
        return (
            <div>
                <div className='HomeContainer'>
                    <div className='ImageContainer'>
                        <img src={'/angrycomputer.jpg'} className='Image' alt='Frustrated Guy'/>
                    </div>
                    <div className='TextWrap'>
                        <h3>Do You Just Want A Great Website Without All The Hassle?</h3>
                        <p>We handle everything for you, no experience needed. Our professional designer will work with you one on one to build you the perfect website to advertise your small business.</p>
                        <p><b>No hassles.</b></p>
                        <p>Only <s>$750</s> <b>$500</b> for the next 12 customers</p>
                        <CTAButton width='80px' height='50px' text="Order Now For Discount"/>
                    </div>
                </div>
                <div className='HomeContainer AlignItems'>
                    <div className='TextWrap BulletPoints'>
                        <h3>What Exactly Do We Do For You?</h3>
                        <ul>
                            <li>3-7 Page Website</li>
                            <li>Mobile-Ready Design</li>
                            <li>You Choose the Color (We Give You a List to Help You Choose)</li>
                            <li>You choose the Font (We Give You Some Suggestions and a List)</li>
                            <li>Up to 20 Images of Your Own</li>
                            <li>2 High-Quality Royalty-Free Stock Images</li>
                            <li>Free Domain Registration (For New Domains)</li>
                            <li>Excellent Security</li>
                            <li>Free TSL/SSL Certificate (To Have Https Connection)</li>
                            <li>Free Labor on Updates With Hosting Account</li>
                            <li>Simple Contact Form With Spam Filter</li>
                            <li>Regular Back-Ups (With Hosting Account)</li>
                            <li>Free Cloudflare Configuration</li>
                            <li>Google/Bing/Yahoo Sitemap Submission</li>
                            <li>Meta Titles & Page Descriptions</li>
                            <li>Image Alt Tags</li>
                            <li>Schema Code Where Applicable</li>
                            <li>4 Revisions Per Month</li>
                            <li>48 Hr Revision Turnaround Guarantee</li>
                        </ul>
                    </div>
                </div>
                <h3 className='HowHeader'>How Can We Charge So Much Less Than The Other Guys?</h3>
                <div className='HomeContainer AlignItems'>
                    <div className='TextWrap HowBlock'>
                        <p>It is easy. We know what we are doing. The other guys just build on top of Wordpress.</p>
                        <p>Rather than doing that, we actually use html, css and javascript to build websites.</p>
                        <p>There is only so much customization you can pull out of Wordpress before it starts to limit you.</p>
                        <p>We also <b>do not</b> build from scratch, or make complicated APIs or AJAX calls to complicated APIs.</p>
                        <p>No matter how good you are, building an API that is not going to fail takes a lot of developer time. Far more than simple static pages that are good enough for non-tech businesses take.</p>
                        <p>Building from scratch takes a lot of extra and unnecessary time as well. So why do that, when we can simply re-combine our existing components into something new and beautiful for you instead.</p>
                        <p>All these things combine to mean that we do not have to charge you upwards of $5000 for a simple business website.</p>
                        <p>It also means no surprise bills for lisence renewals for the premium Wordpress Theme you <b>did not</b> know you were using.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;