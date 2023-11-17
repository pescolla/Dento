import React from 'react';

/**
 * @name Maps
 * @description Maps component
 */

// Display google maps in a div
const Maps = () => {
	return (
		<iframe
			title="maps"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5254.8016186647!2d9.112847724311548!3d45.42204283491274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c37507960fab%3A0x3153382b1b9315a9!2sStudio%20dentistico%20Stenis!5e0!3m2!1sit!2sit!4v1700261522990!5m2!1sit!2sit"
			width="100%"
			height="420"
			style={{ border: 0 }}
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	);
};

export default Maps;
