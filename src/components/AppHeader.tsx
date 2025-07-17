
import {KolForm, KolInputText, KolLink,  KolButton, KolImage } from '@public-ui/react';


function AppHeader() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/">
              <KolImage _src='vite.svg' _alt='Home' />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <KolLink className='nav-link' _href='#/' _label='Gewerberegister' />
              </li>
              <li className="nav-item">
                <KolLink className='nav-link' _href='#/abc' _label='ABC-Register' />
              </li>
              <li className="nav-item">
                <KolLink className='nav-link' _href='#/xyz' _label='XYZ-Register' />
              </li>
              <li className="nav-item dropdown">
                <KolLink className="nav-link dropdown-toggle" _href='#' _label='Aktionen' id='navbarDropdown' data-bs-toggle="dropdown" aria-expanded="false"></KolLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <KolForm className="" _requiredText={false} >
              <div className='d-flex'>
                <KolInputText className="me-2" _type="search" _placeholder="Suchen" _label='' _hideLabel aria-label="Suchen" />
                <KolButton className="me-2" _label='Suchen' _type='submit' style={{'margin-top':'4px'}}></KolButton>
              </div>
            </KolForm>
          </div>
        </div>
      </nav>
  )
}

export default AppHeader