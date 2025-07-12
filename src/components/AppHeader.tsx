import { useState } from 'react'
import { KolSpin, KolNav, KolButton } from '@public-ui/react';
import {Routes, Link, HashRouter as Router, Route } from "react-router-dom";
import { LINKS, LINKS_WITHOUT_SUBMENU } from './MainNav';

function AppHeader() {
//   const [hasIconsWhenExpanded, setHasIconsWhenExpanded] = useState(false);
  return (
    <header className='app-header'>
		<div className='d-grid horizontal gap-4'>
			<div className='d-flex'>Hello Vite + React + KoliBri!</div>
			<div className='d-flex flex-warp gap-2'>
				<KolButton
					_label="Primary"
					_on={{
						onClick: () => {
							console.log('Clicked primary');
						},
					}}
					_variant="primary"
				/>
				<KolButton
				_label="Secondary"
				_on={{
					onClick: () => {
						console.log('Clicked secondary');
					},
				}}
				_variant="secondary"
			/>
			<KolButton
				_hideLabel
				_label="Danger"
				_icons="codicon codicon-trash"
				_on={{
					onClick: () => {
						console.log('Clicked danger');
					},
				}}
				_variant="danger"
			/>
			</div>
			<div className='d-flex gap-2'>
				<Link to="/">Liste</Link>
				<Link to="/gewerbe">Gewerbe</Link>
				<Link to="/example">Example</Link>
			</div>
		</div>
	</header>
  )
}

export default AppHeader