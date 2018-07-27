import React, { Component } from 'react';

const NavComponent = () => (
	<nav>
		<div className="navWide">
			<div className="wideDiv">
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
			</div>
		</div>
	</nav>
);

// 	burgerToggle: function() {
// 		let linksEl = document.querySelector('.narrowLinks');
// 		if (linksEl.style.display === 'block') {
// 			linksEl.style.display = 'none';
// 		} else {
// 			linksEl.style.display = 'block';
// 		}
// 	}
// });

export default NavComponent;
