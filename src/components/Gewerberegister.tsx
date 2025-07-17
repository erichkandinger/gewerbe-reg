//import { useState } from 'react'
import {KolHeading, KolTabs } from '@public-ui/react';

function Gewerberegister() {

  return (
    <div className='container'>
      <KolHeading _level='1' _label="Gewerberegister"></KolHeading>
      <KolTabs _label='' _tabs={[
        {"_label":"Suche","_icons":"codicon codicon-home"},
        {"_label":"Gewerbe"},
        {"_label":"Natürliche Person"},
        {"_label":"Juristische Person"}]}>
        <div>Gewerbesuche</div>
        <div>Gewerbe</div>
        <div>Natürliche Person</div>
        <div>Juristische Person</div>
      </KolTabs>
    </div>
  )
}

export default Gewerberegister