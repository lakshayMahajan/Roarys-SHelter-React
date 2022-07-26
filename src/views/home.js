import React from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Roary's SHelter</title>
        <meta property="og:title" content="Roary's SHelter" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <span className="brand-Name">Roary&apos;s Shelter</span>
          </div>
          <div className="home-links">
            <span className="home-text01 navbar-Link">Impact</span>
            <span className="home-text02 navbar-Link">Our Work</span>
            <span className="home-text03 navbar-Link">About</span>
            <span className="home-text04 navbar-Link">Contact</span>
            <button className="button-secondary button">Log in</button>
            <button className="button button-primary">Get started</button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle before-Heading">
              Food Shelter at HSE
            </span>
            <h1 className="home-title">
              <span className="home-text05">Roary&apos;s Shelter</span>
            </h1>
            <span className="home-description">
              <span>
                club memebers to write
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                We will ask our club members to wrtie stuff here so that they
                can actually do work
              </span>
            </span>
            <div className="home-container01">
              <button className="home-button2 button-secondary button color">
                Get started
              </button>
              <button className="home-button3 button-secondary button color">
                Log in
              </button>
            </div>
          </div>
          <div className="home-image">
            <img
              alt="image"
              src="https://readthereporter.com/wp-content/uploads/2021/02/Della-Johnson-HSE-food-pantry.jpg"
              loading="eager"
              className="home-hero-image"
            />
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M224 0c-106.040 0-192 100.288-192 224 0 105.924 63.022 194.666 147.706 217.998l-31.788 518.124c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.788-518.124c84.684-23.332 147.706-112.074 147.706-217.998 0-123.712-85.96-224-192-224zM869.334 0l-53.334 320h-40l-26.666-320h-26.668l-26.666 320h-40l-53.334-320h-26.666v416c0 17.672 14.326 32 32 32h83.338l-31.42 512.122c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.42-512.122h83.338c17.674 0 32-14.328 32-32v-416h-26.666z"></path>
          </svg>
          <span className="home-text08">Meals Served</span>
          <h1 className="home-text09">
            <span>200+</span>
          </h1>
        </div>
        <div className="home-stat1">
          <svg viewBox="0 0 1024 1024" className="home-icon04">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <span className="home-text11">Students Helped</span>
          <h1 className="home-text12">
            <span>60+</span>
          </h1>
        </div>
        <div className="home-stat2">
          <svg viewBox="0 0 1024 1024" className="home-icon06">
            <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
          </svg>
          <span className="home-text14">Locations</span>
          <h1 className="home-text15">
            <span>1</span>
          </h1>
        </div>
      </div>
      <div className="home-section section-container">
        <div className="home-max-width2 max-width">
          <span className="home-text17 before-Heading">Our Work</span>
          <h1 className="home-text18">
            <span>
              We strive to provide food for those insecure of it at HSE
            </span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name2"></Card>
            <Card
              text="Organize"
              text1="The food that we receive is then cataloged and put up onto this website for pickup by other students."
              rootClassName="card-root-class-name"
            ></Card>
            <Card
              text="Distribute"
              rootClassName="card-root-class-name1"
            ></Card>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-image1">
            <img
              alt="image"
              src="https://readthereporter.com/wp-content/uploads/2021/02/Della-Johnson-HSE-food-pantry.jpg"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <h1 className="home-text20">
              <span className="home-text21">About Us</span>
            </h1>
            <span className="home-text22">
              About us description will add later
            </span>
            <div className="home-container02">
              <button className="home-button4 button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero1">
        <div className="home-container03">
          <h1 className="home-text23">Contact Us</h1>
          <span className="home-text24">
            <span>
              <span>aAdd text</span>
            </span>
          </span>
          <div className="home-btn-group"></div>
        </div>
        <div className="home-container04">
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <span className="home-text27">First Name</span>
              </div>
              <form className="home-form"></form>
            </div>
            <div className="home-container08">
              <div className="home-container09">
                <span className="home-text28">Last Name</span>
              </div>
              <div className="home-container10">
                <div className="home-container11">
                  <form className="home-form1"></form>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <div className="home-container14">
                <span className="home-text29">
                  <span>E-mail</span>
                </span>
              </div>
              <form className="home-form2"></form>
            </div>
          </div>
          <div className="home-container15">
            <div className="home-container16">
              <div className="home-container17">
                <span className="home-text31">
                  <span>Message</span>
                </span>
              </div>
              <form className="home-form3"></form>
            </div>
          </div>
          <button className="home-button5 button-secondary button color">
            <span>
              <span>Submit</span>
            </span>
          </button>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container18">
          <img
            alt="logo"
            src="/playground_assets/roary's%20shelter-200h.png"
            className="home-image2"
          />
          <nav className="home-nav">
            <span className="home-text35">Our Work</span>
            <span className="home-text36">About</span>
            <span className="home-text37">Impact</span>
            <span className="home-text38">Contact</span>
          </nav>
        </div>
        <div className="home-separator"></div>
        <div className="home-container19">
          <span className="home-text39">
            © 2022 Roary&apos;s Shelter, All Rights Reserved.
          </span>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
