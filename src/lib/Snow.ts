const createSnowflake = () => {
	const snowflake = Object.assign(document.createElement("div"), {
		className: "snowflake",
		style: `
        left: ${Math.random() * innerWidth}px;
        top: -5px;
        opacity: ${Math.random()};
        transform: scale(${Math.random() * 1.5 + 0.5});`,
	});

	document.body.appendChild(snowflake);

	let posY = -5;
	let posX = 0;
	const speed = Math.random() * 3 + 1;
	let wobble = 0;
	const body_height = document.body.clientHeight;

	const fall = () => {
		posY += speed;
		wobble += 0.02;
		snowflake.style.top = posY + "px";
		posX = parseFloat(snowflake.style.left) + Math.sin(wobble) * 2;
		snowflake.style.left = posX < innerWidth ? posX + "px" : "0px";

		if (posY < body_height) requestAnimationFrame(fall);
		else snowflake.remove();

		setTimeout(() => {
			snowflake.remove();
		}, 30000);
	}

	fall();
}

export const generateSnow = () => {
	setInterval(createSnowflake, 300);
}
