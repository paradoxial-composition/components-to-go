import React from 'react';

import { Input, Button } from 'antd';


import './GE_Generate.css';

import { Checkbox } from 'antd';
import { InputNumber } from 'antd';

const CheckboxGroup = Checkbox.Group;


const plainOptions = ['Apple', 'Pear'];
const options1 = [
  { label: 'Site e-commerce', value: 'site_e-commerce' },
  { label: 'Site corporate', value: 'site_corporate' },
  { label: 'Application mobile', value: 'application_mobile' },
  { label: 'Application web', value: 'application_web' },
];
const options2 = [
  { label: 'Simple', value: 'simple' },
  { label: 'Medium', value: 'medium' },
  { label: 'Complexe', value: 'complexe' },
];

const GE_Gen = props => (
    <div>
        <div><p>ESTIMATION GENERALES ></p><p>Gérer une éstimation</p></div>
        <div>
          <div><p>Remplissez le formulaire</p></div>
          <div>
            <div>
              <label>Titre du projet</label>
              <Input placeholder="Basic usage" />
            </div>
            <div>
              <label>Sélectionnez type</label>
              <div>
                <CheckboxGroup options={options1} defaultValue={['application_mobile']} />
              </div>
            </div>
            <div>
              <label>Complexité</label>
              <div>
                <CheckboxGroup options={options2} defaultValue={['application_mobile']} />
              </div>
            </div>
            <div>
              <label>Présentation additionnelles</label>
              <div>

              </div>
            </div>
            <div>
              <label>Combien de pages/interfaces</label>
              <InputNumber min={1} max={10} defaultValue={3} />
            </div>
          </div>
          <div>
            <Button>ANNULER</Button>
            <Button type="primary">AFFICHER RESULTAT</Button>
          </div>
        </div>
    </div>
);

export default GE_Gen;
