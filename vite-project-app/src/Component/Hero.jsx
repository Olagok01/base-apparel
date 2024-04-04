import { useState } from "react"
import "./Hero/Hero.css"


const Hero = () => {
	const [email, setEmail] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [error, setError] = useState(false)

	const handleSubmit = (e) =>{
		e.preventDefault();
		if (!email) {
			setErrorMessage("Email address is required")
			setError(true)
		}
		else if (!/\S+@\S+.\S/.test(email)){
			setErrorMessage("Please provide a valid email address")
		}
		else {
			setErrorMessage("")
			console.log("Form submitted successfully with email:", email)
		}
	}

	const handleChange = (e) =>{
		/* console.log(e.target.value) */
		const { value }= e.target
		/* console.log(value) */
		setEmail(value)
		/* console.log(email) */
		if (errorMessage && /\S+@\S+.\S/.test(value)){
			setErrorMessage("")
			setError(false)
		}
	}


    return (
				<section className="h-wrapper">
					<div className="flexContainer">
						<div className="flex-left hero-left">
							<img src="./logo.svg" alt="" className="h-icon" />
							<div className="primary-text hero-title">
								<h1>
									<span>WE'RE </span>
									<br />
									COMING
									<br />
									SOON
								</h1>
							</div>
							<div className="secondary-text">
								<span>Hello fellow shoppers! We are currently building out new</span>
								<span>fashion store. Add your email below to stay up-to date with</span>
								<span>announcements and our launch deals.</span>
							</div>
							
							<form onSubmit={handleSubmit}>
								<div className="email-container">
									<input 
										type="email" 
										placeholder="Email Address" 
										id="email-input" 
										className={error ? "error" : "no-error"}
										onChange={handleChange}
										value={email}
									/>

									{errorMessage && (
										<img 
										src="./icon-error.svg" 
										className="icon-error" 
										alt="icon-error" 
										/>
									)}
									
									<button id="email-button" type="sumbit">
										<img src="./icon-arrow.svg" alt="icon-arrow" />
									</button>
								</div>
								<p className="error-info">{errorMessage}</p>
							</form>
						</div>

						<div className="image-container">	
								<img src='./hero-desktop.jpg' alt="hero-mobile" />	
						</div>

					</div>
				</section>
    )
}

export default Hero
