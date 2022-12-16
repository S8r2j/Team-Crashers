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
          <h5 class="card-title">Autism spectrum</h5>
          <p class="card-text">The autism spectrum, often referred to as just autism or in the context of a professional diagnosis autism spectrum disorder (ASD) or autism spectrum condition (ASC), is a neurodevelopmental condition.</p>
          <a href="https://en.wikipedia.org/wiki/Autism_spectrum" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://th.bing.com/th/id/R.cc0fbe4f21ab248c6c7a694854b707fb?rik=R7xxWLXZazRGnA&pid=ImgRaw&r=0&sres=1&sresct=1" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Autism Awareness</h5>
          <p class="card-text">Research indicates that early diagnosis is associated with significantly better outcomes for children with autism. The earlier a child is diagnosed, the earlier the child can begin benefiting from one of the many specialized intervention approaches.</p>
          <a href="https://www.dshs.wa.gov/dda/consumers-and-families/autism-awareness" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://mediacloud.theweek.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1608185570/41529_article_full.jpg" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Autism Speaks</h5>
          <p class="card-text">The time following a diagnosis of autism can be overwhelming. You likely have a lot of questions and concerns about what lies ahead. You have come to the right place.</p>
          <a href="https://www.autismspeaks.org/" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://cdn.cdnparenting.com/articles/2018/02/528601450-H.jpg" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Nonverbal Autism</h5>
          <p class="card-text">Nonverbal autism is a subset of autism where the person does not learn how to speak.[1] It is estimated that 25% to 50% of children diagnosed with autism spectrum disorder (ASD) never develop spoken language beyond a few words or utterances..</p>
          <a href="https://en.wikipedia.org/wiki/Nonverbal_autism" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="https://th.bing.com/th/id/OIP.4MgFahHDQAa-ESR_yCwNuQHaIj?pid=ImgDet&rs=1" class="card-img-top" alt="autism" />
        <div class="card-body">
          <h5 class="card-title">Little girl with autism</h5>
          <p class="card-text"> self-stimulating behaviors (stims), or extreme speech and language difficulty.</p>
          <a href="https://www.verywellhealth.com/signs-of-autism-in-girls-260304" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home
