/* eslint-disable react/prop-types */
import { useTable } from "@tanstack/react-table";

// Sample data
const data = [
  {
    action: "deposit",
    amount: 100,
    dateTime: "2025-01-25 12:30:00",
    status: "success",
  },
  {
    action: "withdraw",
    amount: 50,
    dateTime: "2025-01-27 15:00:00",
    status: "failure",
  },
  {
    action: "deposit",
    amount: 200,
    dateTime: "2025-01-28 10:45:00",
    status: "success",
  },
  {
    action: "withdraw",
    amount: 150,
    dateTime: "2025-01-29 09:00:00",
    status: "success",
  },
  // Add more data as necessary
];

// Define columns
const columns = [
  {
    Header: "Action",
    accessor: "action",
    Filter: ({ column: { filterValue, setFilter } }) => (
      <select
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value || undefined)}
        className="p-2"
      >
        <option value="">All</option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
    ),
  },
  {
    Header: "Amount",
    accessor: "amount",
    sortType: "basic", // Default sorting
  },
  {
    Header: "Date-Time",
    accessor: "dateTime",
    sortType: "datetime", // Custom sort function can be added here if needed
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: ({ column: { filterValue, setFilter } }) => (
      <select
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value || undefined)}
        className="p-2"
      >
        <option value="">All</option>
        <option value="success">Success</option>
        <option value="failure">Failure</option>
      </select>
    ),
  },
];

function TransactionTable() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize, filters, sortBy },
    setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setFilter,
    nextPage,
    previousPage,
  } = useTable({
    columns,
    data,
    initialState: {
      pageIndex: 0,
      pageSize: 5,
      sortBy: [{ id: "amount", desc: false }],
    },
  });

  return (
    <div className="p-4">
      <table
        {...getTableProps()}
        className="min-w-full table-auto border-collapse border border-gray-300"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="p-2 border-b border-gray-300 text-left"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                  {column.canFilter && column.render("Filter")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-2 border-b border-gray-300"
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="p-2 bg-blue-500 text-white rounded mr-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="p-2 bg-blue-500 text-white rounded mr-2"
          >
            {"<"}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="p-2 bg-blue-500 text-white rounded mr-2"
          >
            {">"}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {">>"}
          </button>
        </div>
        <div>
          <span className="mr-2">Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="p-2"
          >
            {[5, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;
