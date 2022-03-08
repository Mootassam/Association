import styled from 'styled-components';

const TableWrapper = styled.div`
  .table td {
    white-space: nowrap;
    border-collapse: collapse;
  }
  .itemType {
    background-color: #36a3f7;
    padding: 0.5rem 0.4rem;
    border-radius: 2rem;
    color: #fff;
    
  }
  .p_items {
  padding 0.3rem 1rem ;
  cursor : pointer ;
  }

  .table td,
  .table th {
    vertical-align: middle;
  }

  .table .th-checkbox {
    width: 50px;
    vertical-align: middle;
    text-align: center;
  }

  .table .th-actions,
  .table .td-actions {
    width: 230px;
    vertical-align: middle;
    text-align: right;
  }

  .table .th-actions-sm,
  .table .td-actions-sm {
    width: 100px;
    vertical-align: middle;
    text-align: right;
  }

  .table .td-actions a {
    margin-right: 8px;
  }
`;

export default TableWrapper;
