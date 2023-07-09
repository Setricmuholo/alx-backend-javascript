import { RowElememnt, RowID } from './interface';

import * as CRUD from 'crud';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
}

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
  ...row,
  age: 23,
}

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
console.log('CRUD.deleteRow(${newRowID})\n// Delete row id ${newRowID}'); 

