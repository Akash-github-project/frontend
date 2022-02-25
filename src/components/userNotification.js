import React from "react";

const userNotification = () => {
	return (
		<div>
			<div className="notification">
				<button className="flex px-1 items-center justify-center" id="notifiy">
					<i className=" fa-regular fa-bell text-xl" area-hidden="true"></i>
				</button>

				<div className="notificaton-box  absolute flex flex-col items-center justify-center w-64 right-32">
					<div className="item bg-white px-4 py-2 border">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
						iste.
					</div>
					<div className="item bg-white px-4 py-2 border">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ea.
					</div>
					<div className="item bg-white px-4 py-2 border">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
						architecto
					</div>
				</div>
			</div>
		</div>
	);
};

export default userNotification;
