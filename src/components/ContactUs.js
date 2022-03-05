import React from "react";
import Wrapper from "./wrapper";
import { Input } from "./input";
import "../css/ContactUs.css";

const ContactUs = () => {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">Contact Us</h1>
				</div>
				<div className="flex flex-col lg:grid  lg:grid-cols-2 gap-4 py-2">
					<div className="px-4 ">
						<div className="mapouter ">
							<div className="gmap_canvas  ">
								<iframe
									id="gmap_canvas"
									src="https://maps.google.com/maps?q=25.609185332850462,%2085.20234712809093&t=&z=13&ie=UTF8&iwloc=&output=embed"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
								></iframe>
							</div>
						</div>
					</div>
					<div className="px-4">
						<div className=" mt-1 mb-1  flex items-center">
							<h2 className="text-2xl">Get in touch</h2>
						</div>
						<hr className="mb-4" />
						{/* content start from here */}
						<div>
							{/* <p className="text-gray-primary ">
								For Customer Support and Query, get in touch with us
							</p> */}
							<div className="flex flex-col relative pl-10 my-3 gap-1">
								<div className="details">
									<svg
										className="svg-inline--fa fa-map-marker-alt fa-w-12"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="map-marker-alt"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
										></path>
									</svg>
								</div>
								<h3 className="px-2">RechargeAXN</h3>
								<p className="px-2 text-gray-primary text-justify">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Error, at! Lorem, ipsum dolor sit amet consectetur adipisicing
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
									voluptate rerum aut ad aperiam recusandae et itaque asperiores
									commodi fuga porro minima sunt voluptatum saepe, nulla omnis
									excepturi voluptas suscipit.
								</p>
							</div>

							<div className="flex flex-col relative pl-10 my-2 gap-1">
								<div className="details">
									<svg
										className="svg-inline--fa fa-phone fa-w-16"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="phone"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
										></path>
									</svg>
								</div>
								<h3 className="px-2">Telephone</h3>
								<p className="px-2 text-gray-primary">Lorem, ipsum.</p>
							</div>
							<div className="flex flex-col relative pl-10 my-2 gap-1">
								<div className="details">
									<svg
										className="svg-inline--fa fa-whatsapp fa-w-14"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="whatsapp"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
										></path>
									</svg>
								</div>
								<h3 className="px-2">Whatsapp</h3>
								<p className="px-2  text-gray-primary">Lorem, ipsum.</p>
							</div>
							<div className="flex flex-col relative pl-10  my-2 gap-1">
								<div className="details">
									<svg
										className="svg-inline--fa fa-envelope fa-w-16"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="envelope"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
										></path>
									</svg>
								</div>
								<h3 className="px-2">Enquiries</h3>
								<p className="px-2 text-gray-primary">
									Lorem ipsum dolor sit amet.
								</p>
							</div>
							<div className="flex flex-col relative pl-10  my-2 gap-1">
								<div className="details">
									<svg
										id="Layer_1"
										data-name="Layer 1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<defs></defs>
										<title>oval-padlock-unlocked-outline</title>

										<path
											fill="currentColor"
											className="cls-1"
											d="M256,128a191.12,191.12,0,0,0-64,11V106.67a64,64,0,0,1,126-16A21.33,21.33,0,0,0,359.32,80a106.69,106.69,0,0,0-210,26.67v53.77A192,192,0,0,0,64,320c0,105.86,86.13,192,192,192s192-86.14,192-192S361.87,128,256,128Zm0,341.33c-82.34,0-149.33-67-149.33-149.33s67-149.33,149.33-149.33,149.33,67,149.33,149.33S338.34,469.33,256,469.33Z"
										/>
										<path
											fill="currentColor"
											class="cls-1"
											d="M256,234.67A64,64,0,0,0,234.67,359v46.34a21.33,21.33,0,0,0,42.67,0V359A64,64,0,0,0,256,234.67ZM256,320a21.33,21.33,0,1,1,21.33-21.33A21.36,21.36,0,0,1,256,320Z"
										/>
									</svg>
								</div>
								<h3 className="px-2">Unlock Account</h3>
								<p className="px-2 text-gray-primary flex gap-1">
									<Input extraClasses="w-48 focus:text-black" />
									<button className="rounded bg-pink-primary hover:bg-pink-600 text-white p-2 text-sm">
										OTP
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default ContactUs;
