import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { IFormikExample } from "../types/form";
import { getForms } from "../api/fomikForm-api";

export default function TableFormik() {
  const [rowData, setRowData] = useState<IFormikExample[]>([]);

  const [columnDefs] = useState<ColDef<IFormikExample>[]>([
    { field: "firstName" },
    { field: "lastName" },
    { field: "email" },
    { field: "contact" },
    { field: "gender" },
    { field: "choice" },
    { field: "subjects" },
    { field: "url" },
    { field: "about" },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };

  useEffect(() => {
    getForms().then((res) => {
      setRowData(res.data);
    });
  }, []);

  return (
    <div className="ag-theme-quartz" style={{ height: 300 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
