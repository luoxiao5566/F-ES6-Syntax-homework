const parseRow = (dataRow, column) => {
    const row = {};
    for (let i = 0; i < dataRow.length; i++) {
      row[column[i].name] = dataRow[i];
    }
    return row;
  };
  export const parseData = ({ data, column }) => {
    return data.map(dataRow => parseRow(dataRow, column));
  };
