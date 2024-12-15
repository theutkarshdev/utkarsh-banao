import React from "react";
import Facebook from "./images/facebook.png";
import Twitter from "./images/twitter.png";
import Instagram from "./images/instagram.png";
import Pinterest from "./images/pinterest.png";
import Google from "./images/google.png";
import Youtube from "./images/youtube.png";
import Telegram from "./images/telegram.png";
import Email from "./images/email.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
            <div className="content">
              <h6>Hobbycue</h6>
              <div className="links">
                <Link href="">About Us</Link>
                <Link href="">Our Services</Link>
                <Link href="">Work with Us</Link>
                <Link href="">FAQ</Link>
                <Link href="">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
            <div className="content">
              <h6>How Do I</h6>
              <div className="links">
                <Link href="">Sign Up</Link>
                <Link href="">Add a Listing</Link>
                <Link href="">Claim Listing</Link>
                <Link href="">Post a Query</Link>
                <Link href="">Add a Blog Post</Link>
                <Link href="">Other Queries</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
            <div className="content">
              <h6>Quick Links</h6>
              <div className="links">
                <Link href="">Listings</Link>
                <Link href="">Blog Posts</Link>
                <Link href="">Shop / Store</Link>
                <Link href="">Community</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
            <div className="content">
              <h6>Social Media</h6>
              <div className="social-links">
                <Link href="#">
                  <Image width="100" height="100" src={Facebook} alt="SocialImg" />
                </Link>
                <Link href="#">
                  <Image width="100" height="100" src={Twitter} alt="SocialImg" />
                </Link>
                <Link href="#">
                  <Image width="100" height="100" src={Instagram} alt="SocialImg" />
                </Link>
                <Link href="#">
                  <Image width="100" height="100" src={Pinterest} alt="SocialImg" />
                </Link>
                <Link href="#">
                  <Image width="100" height="100" src={Google} alt="SocialImg" />
                </Link>
                <Link href="#">
                  <Image width="100" height="100" src={Youtube} alt="SocialImg" />
                </Link>
                <Link href="#">
                  <Image width="100" height="100" src={Telegram} alt="SocialImg" />
                </Link>
                <Link href="#">
                  <Image width="100" height="100" src={Email} alt="SocialImg" />
                </Link>
              </div>
              <h6 className="mtop">Invite Friends</h6>
              <form className="d-flex justify-content-center align-items-center">
                <input type="email" placeholder="Email ID" className="email-input" />
                <button className="btn-invite " type="submit">
                  Invite
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        © Purple Cues Private Limited made by <Link href="https://theutkarshdev.vercel.app"> Utkarsh Kushwaha</Link>
      </div>
    </>
  );
};

export default Footer;
