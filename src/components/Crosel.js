import React from "react";
import LeftNav from "./leftNav";
import RightNav from "./rightNav";
import ImageGallery from "react-image-gallery";
import { useEffect } from "react";
import { useState } from "react";

let called = e => {
	console.log(e.target);
};
export const Crosel = () => {
	//     const images = [
	//   {
	//     original: 'https://picsum.photos/id/1018/1000/600/',
	//   },
	//   {
	//     original: 'https://picsum.photos/id/1015/1000/600/',
	//   },
	//   {
	//     original: 'https://picsum.photos/id/1019/1000/600/',
	//   },
	// ];

	let [images, setImages] = useState([]);
	let imageList = [];
	imageList[0] = { original: "/images/slider1.jpg" };
	imageList[1] = { original: "/images/slider2.png" };
	imageList[2] = { original: "/images/slider3.jpg" };
	imageList[3] = { original: "/images/slider4.jpg" };
	imageList[4] = { original: "/images/slider5.jpg" };
	imageList[5] = { original: "/images/slider6.jpg" };

	// useEffect(() => {
	//     let initial = [];
	//     async function getImages() {
	//         let request = await fetch("https://picsum.photos/v2/list?page=1&limit=4")
	//         let data = await request.json();
	//         console.log(data)

	//         data.forEach((ele)=> console.log(ele.download_url));

	//         imageList = data.map((element) => {
	//             return {original:element.download_url}
	//         });
	//         setImages([...imageList]);
	//         console.log(imageList);
	//     }

	//     getImages();
	//     console.log(images);
	// }, []);

	// setImages([...imageList]);
	return (
		<ImageGallery
			items={imageList}
			onClick={called}
			//   autoPlay={true}
			//   infinite={true}
			showBullets={true}
			showFullscreenButton={false}
			showPlayButton={false}
			showNav={true}
			slideDuration={250}
			lazyLoad={true}
			additionalClass="banner"
			renderLeftNav={function (onClick, disabled) {
				return <LeftNav onClick={onClick} disabled={disabled} />;
			}}
			renderRightNav={function (onClick, disabled) {
				return <RightNav onClick={onClick} disabled={disabled} />;
			}}
		/>
	);
};

{
	/* <i class="fa-solid fa-less-than"></i> */
}
