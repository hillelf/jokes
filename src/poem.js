/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/display-name
export default ({poem}) => (
	<div data-testid="poem-text" className="poem">
	  <p><strong>{poem.title}</strong><br />by {poem.poet.name}</p>
		<p><pre>{poem.content}</pre></p>
	</div>
);