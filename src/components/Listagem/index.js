import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import api from '../../services/api';
import { TextField } from './styles';


const Filter = ({ onFilter }) => (
  <TextField id="search" type="search" role="search" placeholder="Search Title" onChange={e => onFilter(e.target.value)} />
);

const columns = [
  {
    name: 'Todo',
    selector: 'titulo',
    sortable: true,
  },
  {
    name: 'Finalizado',
    selector: 'finalizado',
    sortable: true,
    format: (v) => v == true ? 'true' : 'false'
  },
];

export default function Listagem(props) {
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = props.data.filter(item => item.titulo.includes(filterText));
  const subHeaderComponentMemo = React.useMemo(() => <Filter onFilter={value => setFilterText(value)} />, []);

  return (
    <DataTable
      title="Movie List"
      columns={columns}
      data={filteredItems}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
};