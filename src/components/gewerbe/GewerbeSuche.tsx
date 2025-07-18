//import { useState } from 'react'
import {KolHeading, KolForm, KolAccordion, KolInputText } from '@public-ui/react';

function GewerbeSuche() {

  return (
        <KolForm _requiredText={false}>

            <KolInputText _label='Wortlaut' />
        </KolForm>
  );
};

export default GewerbeSuche;
