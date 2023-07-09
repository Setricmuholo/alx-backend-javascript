import { RowID, RowElememt } from './interface';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowid: RowID): void;
declare function updateRow(rowid: RowID, row: RowElement): number;
