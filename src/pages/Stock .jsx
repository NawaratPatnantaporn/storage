import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Toolbar, Search, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import {  contextMenuItems, stocksGrid, stocksData } from '../data/dummy';
import { Header } from '../components';

const Stock = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl">
      <Header category="Page" title="Stock" />
      <GridComponent
        dataSource={stocksData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={[ 'Search']}
      >
        <ColumnsDirective>
          {stocksGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, Toolbar, Search, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Stock;
