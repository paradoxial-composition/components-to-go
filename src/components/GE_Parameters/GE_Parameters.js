import React from 'react';

import { Button, Icon } from 'antd';


import './GE_Parameters.css';

import { Table } from 'antd';

const columns = [{
  title: 'Presentation',
  dataIndex: 'presentation',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'Jim',
    value: 'Jim',
  }, {
    text: 'Submenu',
    value: 'Submenu',
    children: [{
      text: 'Green',
      value: 'Green',
    }, {
      text: 'Black',
      value: 'Black',
    }],
  }],
  // specify the condition of filtering result
  // here is that finding the presentation started with `value`
  onFilter: (value, record) => record.presentation.indexOf(value) === 0,
  sorter: (a, b) => a.presentation.length - b.presentation.length,
  sortDirections: ['descend'],
}, {
  title: 'Valeur',
  dataIndex: 'valeur',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.valeur - b.valeur,
  render: (row, rowValue, index) => { return  (<input type="text" ref="valeur" />)},
}, {
  title: 'Action',
  dataIndex: 'action',
  render: (row, rowValue, index) => { 
      return  (
    <div>
      <Button type="primary"><Icon type="edit" /></Button>
      <Button type="primary"><Icon type="delete" /></Button>
      </div>
            )
        },
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.action.indexOf(value) === 0,
  sorter: (a, b) => a.action.length - b.action.length,
  sortDirections: ['descend', 'ascend'],
}];

const data = [{
  key: '1',
  presentation: 'John Brown',
  valeur: 32,
  action: 'New York No. 1 Lake Park',
}, {
  key: '2',
  presentation: 'Jim Green',
  valeur: 42,
  action: 'London No. 1 Lake Park',
}, {
  key: '3',
  presentation: 'Joe Black',
  valeur: 32,
  action: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  presentation: 'Jim Red',
  valeur: 32,
  action: 'London No. 2 Lake Park',
}];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}


const GE_Params = props => (
    <div>
        <div className="contentHeader">
            <div><p>ESTIMATIONS GÉNÉRIQUES ></p></div>
            <div>
                <p>Paramétrage</p>
            </div>
            <div><Button type="primary">+ Ajouter un paramétre</Button></div>
        </div>
        <div>
            <div><p>PARAMETRAGE DE PRESENTATION</p></div>
            <div>
                <div>
                <Table columns={columns} dataSource={data} onChange={onChange} />,
                </div>
            </div>

        </div>
    </div>
);

export default GE_Params;
