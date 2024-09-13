import "./Footer.scss";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaGithub 
} from "react-icons/fa6";
import Image from "next/image";

import image1 from "../../../../public/assets/carousel-bg3.jpg";
import image2 from "../../../../public/assets/carousel-bg.jpg";
import image3 from "../../../../public/assets/carousel-bg2.jpg";
import image4 from "../../../../public/assets/carousel-bg.jpg";
import image5 from "../../../../public/assets/carousel-bg2.jpg";
import image6 from "../../../../public/assets/carousel-bg3.jpg";

const gallery = [image1, image2, image3, image4, image5, image6];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="section-1">
          <div className="footer-intro">
            <Image src="/assets/logo/logo.jpeg" alt="logo" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consectetur amet nisi unde vero libero blanditiis odio
              perferendis, laudantium, facere explicabo ducimus sit omnis.
              Magnam, doloribus aut! Aliquam, enim? Vel?
            </p>
          </div>
          <div className="footer-contact">
            <p>
              <TiHome />
              <span>Address: </span>some address
            </p>
            <p>
              <MdEmail />
              <span>Email: </span>someemail@gmail.com
            </p>
            <p>
              <MdLocalPhone />
              <span>Phone: </span>1234567890
            </p>
          </div>
          <div className="footer-social-media">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="section-2">
          <h5>Links</h5>
          <div>
            <Link href="/helpdesk">
              <span>
                <Image
                  src="/assets/faq-page.jpg"
                  fill
                  alt="image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </span>
              <p>Frequently Asked Questions</p>
            </Link>
          </div>
          <div>
            <Link href="#">
              <span>
                <Image
                  src="/assets/about-page.jpg"
                  fill
                  alt="image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </span>
              <p>About Us</p>
            </Link>
          </div>
          <div>
            <Link href="/donate">
              <span>
                <Image
                  src="/assets/donate-page.jpg"
                  fill
                  alt="image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </span>
              <p>Donate</p>
            </Link>
          </div>
        </div>
        <div className="section-3">
          <h5>Gallery</h5>
          <div>
            {gallery.map((src, i) => (
              <Link href="/gallery" key={i}>
                  <Image
                    src={src}
                    fill
                    alt="image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
              </Link>
            ))}
          </div>
        </div>
        <div className="section-4">
            <h5>Developers</h5>
            <div>
                <div className="dev-profile"><FaUser /></div>
                <div className="dev-title">
                    <span>Rajiv</span>
                    <ul>
                        <li><Link href="https://github.com/7hourspg"><FaGithub />github</Link></li>
                        <li><Link href="#"><FaLinkedin />linkedIn</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="dev-profile"><FaUser /></div>
                <div className="dev-title">
                    <span>Vishal</span>
                    <ul>
                        <li><Link href="https://github.com/vishal-gg"><FaGithub />github</Link></li>
                        <li><Link href="#"><FaLinkedin />linkedIn</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>@Copyright 2023. All rights Reserved</p>
      </div>
    </div>
  )
};

export default Footer;
