import React from 'react'
import Spotter from '../images/spotter.png'
import Crowdsurf from '../images/crowdsurf.jpeg'
import Remarque from "../images/remarque.png"


export default function Portfolio() {
  return (
    <div className="flex flex-row flex-wrap justify-center space-x-10">
      <div className="m-5 card w-96 bg-base-100 shadow-xl">
  <figure><img src={Spotter} alt="picture of spotter app" /></figure>
  <div className="card-body">
    <h2 className="card-title">Spotter</h2>
    <p>The perfect application for a consistent gym-goer. Spotter allows a user to build a weekly routine to allow for more efficient time spent at the gym.</p>
    <div className="card-actions justify-end">
      <a href="https://project-2-spotter.herokuapp.com/login" className="btn btn-primary" id="explain-project">Check out this App!</a>
    </div>
  </div>
</div>
<div className="m-5 card w-96 bg-base-100 shadow-xl">
  <figure><img src={Crowdsurf} alt="picture of crowdsurf" /></figure>
  <div className="card-body">
    <h2 className="card-title">Crowdsurf</h2>
    <p>his project was created collaboratively and is a VIP for an app that will allow the user to view the top trending songs on Spotify, and see upcoming events for the chosen artist.</p>
    <div className="card-actions justify-end">
      <a href="https://bogartdme.github.io/crowd-surf-music-app/" className="btn btn-primary" id="explain-project">Check out this App!</a>
    </div>
  </div>
</div>
<div className="m-5 card w-96 bg-base-100 shadow-xl">
  <figure><img src={Remarque} alt="picture of remarque" /></figure>
  <div className="card-body">
    <h2 className="card-title">Remarque</h2>
    <p>Simply put - A Bullet Journal Application</p>
    <div className="card-actions justify-end">
      <a href="https://remarque-bullet.herokuapp.com/signup" className="btn btn-primary" id="explain-project">Check out this App!</a>
    </div>
  </div>
</div>
    </div>
  )
}
