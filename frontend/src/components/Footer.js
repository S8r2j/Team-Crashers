import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div>
          	<div class="footer">
		<div class="inner-footer">

			<div class="footer-items">
			<img src="images/My project.png" width="100em" height="100em" className="d-inline-block align-baseline pt-2 " alt="logo" />
				<h1>check autism</h1>
				<p>
				Autism spectrum disorder (ASD) is a developmental disability caused by differences in the brain. 
				</p>
			</div>

			<div class="footer-items">
				<h2>Quick Links</h2>
				<div class="border"></div>
				<ul>
					<a href="/"><li>Home</li></a>
					<a href="/"><li>About Us</li></a>
					<a href="/"><li>Services</li></a>
					<a href="/"><li>Portfolio</li></a>
					<a href="/"><li>Contact Us</li></a>
				</ul>
			</div>

			<div class="footer-items">
				<h2>Quick links</h2>
				<div class="border"></div>
				<ul>
					<a href="/"><li>History</li></a>
					<a href="/"><li>Donate</li></a>
					<a href="/"><li>Individual</li></a>
					<a href="/"><li>Privacy Policy</li></a>
					<a href="/"><li>Managements</li></a>
				</ul>
			</div>

			<div class="footer-items">
				<h2>Contact Us</h2>
				<div class="border"></div>
				<ul>
					<li><i class="fa fa-map-marker" aria-hidden="true"></i>Dharan - 1</li>
					<li><i class="fa fa-phone" aria-hidden="true"></i>1234567890</li>
					<li><i class="fa fa-envelope" aria-hidden="true"></i>checkautism@gmail.com</li>
				</ul>
				<div class="social-media">
					<a href="/"><i class="fa fa-facebook" aria-hidden="true"><img src='images/logo/fblogo.png' alt='logo'/></i></a>
					<a href="/"><i class="fa fa-twitter" aria-hidden="true"><img src='images/logo/twitterlogo.png' alt='logo'/></i></a>
					<a href="/"><i class="fa fa-instagram" aria-hidden="true"><img src='images/logo/instagramlogo.png' alt='logo'/></i></a>
					<a href="/"><i class="fa fa-google-plus" aria-hidden="true"><img src='images/logo/tiktoklogo.png' alt='logo'/></i></a>
				</div>
			</div>
			
		</div>
		<div class="footer-bottom">
			Copyright &copy; check autism 2022. All rights reserved.
		</div>
	</div>
    </div>
  )
}

export default Footer
