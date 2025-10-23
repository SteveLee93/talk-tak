import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Table 컴포넌트
 * Material-UI Table을 래핑한 커스텀 데이터 테이블
 *
 * @param {object} props
 * @param {Array<{id: string, label: string, align?: string}>} props.columns - 컬럼 정의
 * @param {Array<object>} props.rows - 행 데이터
 * @param {boolean} props.pagination - 페이지네이션 사용
 * @param {number} props.rowsPerPage - 페이지당 행 수 (기본: 10)
 * @param {Array<number>} props.rowsPerPageOptions - 페이지당 행 수 옵션
 * @param {boolean} props.stickyHeader - 헤더 고정
 * @param {'small'|'medium'} props.size - 테이블 크기
 * @param {function} props.onRowClick - 행 클릭 핸들러
 * @param {function} props.renderCell - 셀 커스텀 렌더링
 */
export default function Table({
  columns = [],
  rows = [],
  pagination = false,
  rowsPerPage: initialRowsPerPage = 10,
  rowsPerPageOptions = [5, 10, 25, 50],
  stickyHeader = false,
  size = 'medium',
  onRowClick,
  renderCell,
  ...props
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // 페이지네이션 적용된 행
  const displayedRows = pagination
    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : rows;

  return (
    <Paper>
      <TableContainer>
        <MuiTable stickyHeader={stickyHeader} size={size} {...props}>
          {/* 헤더 */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  sx={{ fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* 바디 */}
          <TableBody>
            {displayedRows.map((row, rowIndex) => (
              <TableRow
                key={row.id || rowIndex}
                hover={!!onRowClick}
                onClick={() => onRowClick && onRowClick(row)}
                sx={{ cursor: onRowClick ? 'pointer' : 'default' }}
              >
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align || 'left'}>
                    {renderCell
                      ? renderCell(row[column.id], row, column)
                      : row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}

            {/* 빈 행 표시 */}
            {displayedRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  데이터가 없습니다
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {/* 페이지네이션 */}
      {pagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="페이지당 행:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} / 총 ${count}개`
          }
        />
      )}
    </Paper>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  pagination: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  stickyHeader: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  onRowClick: PropTypes.func,
  renderCell: PropTypes.func,
};
