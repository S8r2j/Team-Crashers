import React from 'react'
import './Home.css'
function Home() {
  return (
    <>
      <div className='main'>
        <div className='sub1'>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://raisingchildren.net.au/__data/assets/image/0028/47656/autism-spectrum-disorder-overviewnarrow.jpg" className="d-block w-100" alt="autism img" />

              </div>
              <div class="carousel-item">
                <img src="https://images.ctfassets.net/zvaujq68yh0h/3U9nFmNsFimUceWYs0Eicc/85c8db95858d6b60fb97064a11736499/1-min.jpg" className="d-block w-100 " alt="autism img" />

              </div>
              <div class="carousel-item">
                <img src="https://images.news18.com/ibnlive/uploads/2021/09/childautism-16304840514x3.png" className="d-block w-100" alt="autism img" />
              </div>
            </div>
            <button class="carousel-control-prev bg-transparent" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next bg-transparent" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='sub2'>
          <h1><p>What is Autism Spectrum Disorder?</p></h1>
          <p>Autism spectrum disorder (ASD) is a developmental disability caused by differences in the brain. Some people with ASD have a known difference, such as a genetic condition. Other causes are not yet known. Scientists believe there are multiple causes of ASD that act together to change the most common ways people develop. We still have much to learn about these causes and how they impact people with ASD.

            People with ASD may behave, communicate, interact, and learn in ways that are different from most other people. There is often nothing about how they look that sets them apart from other people.  The abilities of people with ASD can vary significantly. For example, some people with ASD may have advanced conversation skills whereas others may be nonverbal. Some people with ASD need a lot of help in their daily lives; others can work and live with little to no support.

          </p>
        </div>
      </div>
      <div className='main2'>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://www.cdc.gov/ncbddd/autism/images/boy-having-fun-507031927.jpg?_=47464" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://www.cdc.gov/ncbddd/autism/images/boy-having-fun-507031927.jpg?_=47464" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://www.cdc.gov/ncbddd/autism/images/boy-having-fun-507031927.jpg?_=47464" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://www.cdc.gov/ncbddd/autism/images/boy-having-fun-507031927.jpg?_=47464" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://www.cdc.gov/ncbddd/autism/images/boy-having-fun-507031927.jpg?_=47464" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home
