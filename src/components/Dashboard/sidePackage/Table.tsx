import React from "react";

interface RowData {
  from: string;
  packageId: string;
  dateReceived: string;
  status: string;
  estValue: number;
  weight: number;
}

interface TableProps {
  tableData: RowData[];
  setSelectedRow: (rowData: RowData) => void;
}
const Table: React.FC<TableProps> = ({ tableData, setSelectedRow }) => {
  const handleRowClick = (rowData: RowData) => {
    setSelectedRow(rowData);
  };
  return (
    <>
      <table className="table-fixed  w-full">
        <thead>
          <tr>
            <th className="text-start">From</th>
            <th className="text-start">Package Id</th>
            <th className="text-start">Date Received</th>
            <th className="text-start">Status</th>
            <th className="text-start">EST value - U$D </th>
            <th className="text-start">Weight - LD</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData: RowData, index: number) => (
            <tr
              key={index}
              className="hover:bg-slate-100 "
              onClick={() => handleRowClick(rowData)}
            >
              <td className="text-[#888888] py-2 font-semibold text-sm">
                {rowData.from}
              </td>
              <td className="text-[#888888] py-2 font-semibold text-sm">
                {rowData.packageId}
              </td>
              <td className="text-[#888888] py-2 font-semibold text-sm">
                {rowData.dateReceived}
              </td>
              <td
                className={`font-semibold text-sm ${rowData.status === "Action required" ? "text-red-400" : rowData.status === "Ready to Send" ? "text-green-400" : rowData.status === "In Review" ? "text-yellow-400" : ""}`}
              >
                {rowData.status}
              </td>
              <td className="text-[#888888] py-2 font-semibold text-sm">
                {rowData.estValue}
              </td>
              <td className="text-[#888888] py-2 font-semibold text-sm">
                {rowData.weight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
