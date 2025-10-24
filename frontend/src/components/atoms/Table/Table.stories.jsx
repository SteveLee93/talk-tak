import Table from './Table';
import Chip from '../Chip';
import IconButton from '../IconButton';
import { Edit, Delete } from '@mui/icons-material';

export default {
  title: 'Atoms/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    pagination: {
      control: 'boolean',
    },
    stickyHeader: {
      control: 'boolean',
    },
  },
};

const participantColumns = [
  { id: 'name', label: '이름' },
  { id: 'division', label: '부서' },
  { id: 'grade', label: '부' },
  { id: 'event', label: '종목' },
];

const participantRows = [
  { id: 1, name: '김철수', division: '남자부', grade: '1부', event: '단식' },
  { id: 2, name: '이영희', division: '여자부', grade: '1부', event: '복식' },
  { id: 3, name: '박민수', division: '남자부', grade: '2부', event: '단식, 복식' },
  { id: 4, name: '최지원', division: '여자부', grade: '2부', event: '단식' },
];

export const Default = {
  args: {
    columns: participantColumns,
    rows: participantRows,
  },
};

export const Small = {
  args: {
    columns: participantColumns,
    rows: participantRows,
    size: 'small',
  },
};

export const WithPagination = {
  args: {
    columns: participantColumns,
    rows: Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: `참가자 ${i + 1}`,
      division: i % 2 === 0 ? '남자부' : '여자부',
      grade: `${(i % 4) + 1}부`,
      event: i % 3 === 0 ? '단식' : i % 3 === 1 ? '복식' : '단체전',
    })),
    pagination: true,
    rowsPerPage: 10,
  },
};

export const StickyHeader = {
  render: () => (
    <div style={{ maxHeight: 400 }}>
      <Table
        columns={participantColumns}
        rows={Array.from({ length: 50 }, (_, i) => ({
          id: i + 1,
          name: `참가자 ${i + 1}`,
          division: i % 2 === 0 ? '남자부' : '여자부',
          grade: `${(i % 4) + 1}부`,
          event: '단식',
        }))}
        stickyHeader
      />
    </div>
  ),
};

export const WithAlignment = {
  args: {
    columns: [
      { id: 'name', label: '이름', align: 'left' },
      { id: 'age', label: '나이', align: 'center' },
      { id: 'score', label: '점수', align: 'right' },
      { id: 'rank', label: '순위', align: 'right' },
    ],
    rows: [
      { id: 1, name: '김철수', age: 25, score: 95, rank: 1 },
      { id: 2, name: '이영희', age: 23, score: 92, rank: 2 },
      { id: 3, name: '박민수', age: 27, score: 88, rank: 3 },
    ],
  },
};

export const WithCustomRender = {
  render: () => (
    <Table
      columns={[
        { id: 'name', label: '이름' },
        { id: 'division', label: '부서' },
        { id: 'status', label: '상태' },
        { id: 'payment', label: '결제' },
      ]}
      rows={[
        { id: 1, name: '김철수', division: '남자부', status: '승인', payment: '완료' },
        { id: 2, name: '이영희', division: '여자부', status: '대기', payment: '대기' },
        { id: 3, name: '박민수', division: '남자부', status: '거부', payment: '미완료' },
      ]}
      renderCell={(value, row, column) => {
        if (column.id === 'status') {
          const colorMap = {
            '승인': 'success',
            '대기': 'warning',
            '거부': 'error',
          };
          return <Chip label={value} color={colorMap[value]} size="small" />;
        }
        if (column.id === 'payment') {
          const colorMap = {
            '완료': 'success',
            '대기': 'warning',
            '미완료': 'default',
          };
          return <Chip label={value} color={colorMap[value]} size="small" variant="outlined" />;
        }
        return value;
      }}
    />
  ),
};

export const WithActions = {
  render: () => (
    <Table
      columns={[
        { id: 'name', label: '이름' },
        { id: 'division', label: '부서' },
        { id: 'event', label: '종목' },
        { id: 'actions', label: '액션', align: 'center' },
      ]}
      rows={participantRows}
      renderCell={(value, row, column) => {
        if (column.id === 'actions') {
          return (
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
              <IconButton size="small" onClick={() => alert(`편집: ${row.name}`)}>
                <Edit fontSize="small" />
              </IconButton>
              <IconButton size="small" color="error" onClick={() => alert(`삭제: ${row.name}`)}>
                <Delete fontSize="small" />
              </IconButton>
            </div>
          );
        }
        return value;
      }}
    />
  ),
};

export const ClickableRows = {
  render: () => (
    <Table
      columns={participantColumns}
      rows={participantRows}
      onRowClick={(row) => alert(`클릭: ${row.name}`)}
    />
  ),
};

export const TournamentResults = {
  render: () => (
    <Table
      columns={[
        { id: 'rank', label: '순위', align: 'center' },
        { id: 'name', label: '이름' },
        { id: 'division', label: '부서' },
        { id: 'wins', label: '승', align: 'right' },
        { id: 'losses', label: '패', align: 'right' },
        { id: 'winRate', label: '승률', align: 'right' },
      ]}
      rows={[
        { id: 1, rank: 1, name: '김철수', division: '남자부 1부', wins: 10, losses: 2, winRate: '83.3%' },
        { id: 2, rank: 2, name: '이영희', division: '여자부 1부', wins: 9, losses: 3, winRate: '75.0%' },
        { id: 3, rank: 3, name: '박민수', division: '남자부 2부', wins: 8, losses: 4, winRate: '66.7%' },
        { id: 4, rank: 4, name: '최지원', division: '여자부 2부', wins: 7, losses: 5, winRate: '58.3%' },
      ]}
      renderCell={(value, row, column) => {
        if (column.id === 'rank' && row.rank <= 3) {
          const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];
          return (
            <div style={{
              backgroundColor: colors[row.rank - 1],
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              margin: '0 auto',
            }}>
              {value}
            </div>
          );
        }
        return value;
      }}
    />
  ),
};

export const EmptyTable = {
  args: {
    columns: participantColumns,
    rows: [],
  },
};

export const ScheduleTable = {
  render: () => (
    <Table
      columns={[
        { id: 'time', label: '시간' },
        { id: 'court', label: '코트', align: 'center' },
        { id: 'player1', label: '선수 1' },
        { id: 'player2', label: '선수 2' },
        { id: 'status', label: '상태', align: 'center' },
      ]}
      rows={[
        { id: 1, time: '09:00', court: 'A', player1: '김철수', player2: '박민수', status: '완료' },
        { id: 2, time: '09:30', court: 'B', player1: '이영희', player2: '최지원', status: '진행중' },
        { id: 3, time: '10:00', court: 'A', player1: '정수현', player2: '강민호', status: '대기' },
      ]}
      renderCell={(value, row, column) => {
        if (column.id === 'status') {
          const colorMap = {
            '완료': 'default',
            '진행중': 'success',
            '대기': 'warning',
          };
          return <Chip label={value} color={colorMap[value]} size="small" />;
        }
        return value;
      }}
      pagination
      rowsPerPage={5}
    />
  ),
};

export const ComplexTable = {
  render: () => (
    <Table
      columns={[
        { id: 'id', label: 'ID', align: 'center' },
        { id: 'name', label: '이름' },
        { id: 'division', label: '부서' },
        { id: 'grade', label: '부', align: 'center' },
        { id: 'events', label: '종목' },
        { id: 'payment', label: '결제', align: 'center' },
        { id: 'actions', label: '관리', align: 'center' },
      ]}
      rows={Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: `참가자 ${i + 1}`,
        division: i % 2 === 0 ? '남자부' : '여자부',
        grade: `${(i % 4) + 1}부`,
        events: i % 3 === 0 ? '단식' : i % 3 === 1 ? '복식' : '단식, 복식',
        payment: i % 3 === 0 ? '완료' : i % 3 === 1 ? '대기' : '미완료',
      }))}
      renderCell={(value, row, column) => {
        if (column.id === 'payment') {
          const colorMap = { '완료': 'success', '대기': 'warning', '미완료': 'error' };
          return <Chip label={value} color={colorMap[value]} size="small" />;
        }
        if (column.id === 'actions') {
          return (
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
              <IconButton size="small"><Edit fontSize="small" /></IconButton>
              <IconButton size="small" color="error"><Delete fontSize="small" /></IconButton>
            </div>
          );
        }
        return value;
      }}
      pagination
      rowsPerPage={10}
      size="small"
    />
  ),
};
