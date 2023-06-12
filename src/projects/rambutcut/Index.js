import './Style.css';
import { useState } from 'react';




function Index()
{
	return(
		<>
			{/* NAVBAR */}
			<div className='container-fluid head'>
				<div className='row'>
				<div className="col-md-12 p-0 pt-2 pr-2 " >
					<div className="float-left">
						
						<div className="mb-3 img" onClick="location.href='https://www.rambutcut.com/index.php'"></div>
					</div>

					<div className="float-right">
						<a href="javascript:void(0)" className="bg-success text-white p-1 pl-2 pr-2 mt-1 rounded d-block" onClick="location.href='https://www.rambutcut.com/index.php/RambutCutController/logIn'">Log In</a>
					</div>

					
				</div>
				</div>
			</div>

			{/* SELECT CITY */}
			<div className="overflow-hidden m-2 mt-4 text-center city desktop-show tablet-hide">
				<h1 style={{letterSpacing: '3px'}}> Please Select Cityyy</h1>
				<select name="city" className="cityy">
					<option value="" disabled="true" selected="true">Select Your city</option>
					<option value='1' > Jaipur</option>
				</select>
				<button className="bg-success text-white p-2 rounded border cityValue" > Show Salons</button>
			</div>

			{/* FOOTER */}
			<div style={{marginTop: '300px'}}>
				{/* Newsletter */}
				<div className="newsletter">
					<div className="text-center" style={{width: '100%' ,margin:'0 auto'}}>
						<h1 className="col-md-12 col-12 p-0">NEWSLETTER</h1>
						<h5 className="m-0">GET LATEST TRENDS</h5>
						<h5 className="m-0">NO SPAM. ONLY UNIQUE TRENDS</h5>
						<input type="text" class="col-md-12 col-12" placeholder="Enter your email"/>
						<input type="submit" class="col-12 mt-3"/>
					</div>
				</div>
				{/* Social Media Icons */}
				<div className="information">
					<div className="container social text-center">
						<div className="row">
							<div className="col-md-12">
								<h3>FOLLOW US ON SOCIAL MEDIA</h3>
							</div>
						</div>
					</div>
					<div className="container icons">
						<div className="row m-0">
							<div className="col-md-2 col-4 text-center wow heartBeat delay-1s"><a href="https://www.facebook.com/rambut.cut.9/"><i className="fab fa-facebook-f"></i></a></div>
							<div className="col-md-2 col-4 text-center wow heartBeat delay-1s"><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></div>
							<div className="col-md-2 col-4 text-center wow heartBeat delay-1s"><a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a></div>
							<div className="col-md-2 col-4 text-center wow heartBeat delay-1s"><a href="https://instagram.com/rambutcut?igshid=55tuw44hiiv9"><i className="fab fa-instagram"></i></a></div>
							<div className="col-md-2 col-4 text-center wow heartBeat delay-1s"><a href="javascript:void(0)"><i className="fab fa-youtube"></i></a></div>
							<div className="col-md-2 col-4 text-center wow heartBeat delay-1s"><a href="javascript:void(0)"><i className="fab fa-snapchat-ghost"></i></a></div>
						</div>
					</div>
				</div>
			</div>


		
		
	
	
	
		</>
	)
}
export default Index;
