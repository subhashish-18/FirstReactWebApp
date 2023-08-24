import React from 'react'
import vg from "../assets/2.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram  } from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">
      <main>
        <h1>WebStark</h1>
        <p>Solutions to all your problems</p>
      </main>
    </div>

    <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are a team of passionate people who love what we do. We believe in the power of technology and how it can help us solve real.
            </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vitae pariatur! Perspiciatis voluptates consequatur eligendi rem fugiat dicta deserunt. Provident ducimus repudiandae nesciunt voluptatem temporibus, sequi dolore esse quisquam inventore beatae ea itaque soluta, saepe recusandae, odit corrupti ipsa obcaecati reiciendis sunt.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                {/* GOOGLE */}
                <div style={{
                animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>  
                {/* Amazon */}
                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>  
                {/* Youtube */}
                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>  
                {/* Youtube */}
                <div style={{
                    animationDelay:"1s"
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>  
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
