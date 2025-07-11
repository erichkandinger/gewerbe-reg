import { useState } from 'react'
import { KolSpin, KolNav, KolButton } from '@public-ui/react';
import {Routes, Link, HashRouter as Router, Route } from "react-router-dom";
import { LINKS, LINKS_WITHOUT_SUBMENU } from './MainNav';

function AppHeader() {
//   const [hasIconsWhenExpanded, setHasIconsWhenExpanded] = useState(false);

  return (
    <header className="App-header">
		<p>Hello Vite + React + KoliBri!</p>
		<p className="flex gap-4">
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
		</p>
		<p className="flex gap-4">
			<Link to="/">Liste</Link>
			<Link to="/gewerbe">Gewerbe</Link>
			<Link to="/example">Example</Link>
		</p>
	</header>
  )
}

export default AppHeader