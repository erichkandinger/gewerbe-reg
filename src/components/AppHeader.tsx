
import {KolLink, KolAvatar, KolImage } from '@public-ui/react';


function AppHeader() {
  return (
		/* <header className='app-header'> */
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
				<div className="d-flex"> 
					<KolImage className="m-2" _src='vite.svg' _alt='Logo' /> 
					<h4 className='m-2'>Gewerbeanwendungen</h4>
				</div> 
				<div className='d-flex'>
					<KolLink className="m-2" _href="#/" _icons={'codicon codicon-home'} _label='Liste' />
					<KolLink className="m-2" _href="#/gewerbe" _icons={'codicon codicon-home'} _label='Gewerbe' />
					<KolLink className="m-2" _href="#/example" _icons={'codicon codicon-home'} _label='Example' />
				</div>
				<div className="d-flex text-end"> 
					<KolAvatar _label='Erich Kandinger' className='xs' />
				</div> 
			</header>
		</div>
  )
}

export default AppHeader