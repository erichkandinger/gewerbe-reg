//import { useState } from 'react'
import {KolHeading, KolTabs, KolAccordion } from '@public-ui/react';
import GewerbeSuche from './gewerbe/GewerbeSuche';

function Gewerberegister() {

  return (
    <div className='container px-2'>
      <KolHeading _level={1} _label="Gewerberegister" style={{'background-color':'#ac31d5ff'}}></KolHeading>
      <KolTabs _label='' _tabs={[
        {"_label":"Suche","_icons":"codicon codicon-search"},
        {"_label":"Gewerbe", "_icons":"codicon codicon-file"},
        {"_label":"Natürliche Person", "_icons":"codicon codicon-person"},
        {"_label":"Juristische Person", "_icons":"codicon codicon-law"}]}>
        <div className='px-2'>
          <KolAccordion _label='Kriterien' _open>
            <GewerbeSuche />
          </KolAccordion>
          <KolAccordion _label='Ergebnis'>
          </KolAccordion>
        </div>
        <div>Gewerbe</div>
        <div>Natürliche Person</div>
        <div>Juristische Person</div>
      </KolTabs>
    </div>
  )
}

export default Gewerberegister