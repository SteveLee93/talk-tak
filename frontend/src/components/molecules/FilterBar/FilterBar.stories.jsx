import { useState } from 'react';
import FilterBar from './FilterBar';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';
import Card from '../../atoms/Card';

export default {
  title: 'Molecules/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  argTypes: {
    showIcon: {
      control: 'boolean',
    },
  },
};

const divisionOptions = [
  { value: 'male', label: '남자부' },
  { value: 'female', label: '여자부' },
  { value: 'mixed', label: '혼합부' },
];

const gradeOptions = [
  { value: '1', label: '1부' },
  { value: '2', label: '2부' },
  { value: '3', label: '3부' },
  { value: '4', label: '4부' },
];

const eventOptions = [
  { value: 'singles', label: '단식' },
  { value: 'doubles', label: '복식' },
  { value: 'team', label: '단체전' },
];

const statusOptions = [
  { value: 'pending', label: '대기' },
  { value: 'approved', label: '승인' },
  { value: 'rejected', label: '거부' },
];

export const Default = {
  args: {
    filters: [
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '부서 선택',
      },
    ],
    selectedFilters: {},
  },
};

export const SelectFilters = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '부서 선택',
      },
      {
        key: 'grade',
        type: 'select',
        label: '부',
        options: gradeOptions,
        placeholder: '부 선택',
      },
      {
        key: 'event',
        type: 'select',
        label: '종목',
        options: eventOptions,
        placeholder: '종목 선택',
      },
    ];

    return (
      <div>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            선택된 필터: {JSON.stringify(selectedFilters, null, 2)}
          </Typography>
        </Box>
      </div>
    );
  },
};

export const CheckboxFilters = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
      {
        key: 'paid',
        type: 'checkbox',
        label: '참가비 결제 완료',
      },
      {
        key: 'approved',
        type: 'checkbox',
        label: '승인됨',
      },
      {
        key: 'teamEvent',
        type: 'checkbox',
        label: '단체전 참가',
      },
    ];

    return (
      <div>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            선택된 필터: {JSON.stringify(selectedFilters, null, 2)}
          </Typography>
        </Box>
      </div>
    );
  },
};

export const ChipsFilters = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
      {
        key: 'events',
        type: 'chips',
        options: eventOptions,
      },
    ];

    return (
      <div>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            선택된 종목: {JSON.stringify(selectedFilters.events || [], null, 2)}
          </Typography>
        </Box>
      </div>
    );
  },
};

export const MixedFilters = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '부서 선택',
      },
      {
        key: 'paid',
        type: 'checkbox',
        label: '결제 완료',
      },
      {
        key: 'events',
        type: 'chips',
        options: eventOptions,
      },
    ];

    return (
      <div>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            선택된 필터: {JSON.stringify(selectedFilters, null, 2)}
          </Typography>
        </Box>
      </div>
    );
  },
};

export const WithoutIcon = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '부서 선택',
      },
      {
        key: 'grade',
        type: 'select',
        label: '부',
        options: gradeOptions,
        placeholder: '부 선택',
      },
    ];

    return (
      <FilterBar
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
        showIcon={false}
      />
    );
  },
};

export const ParticipantFilter = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [participants] = useState([
      { id: 1, name: '김철수', division: 'male', grade: '1', event: 'singles', paid: true, approved: true },
      { id: 2, name: '이영희', division: 'female', grade: '1', event: 'doubles', paid: true, approved: true },
      { id: 3, name: '박민수', division: 'male', grade: '2', event: 'singles', paid: false, approved: false },
      { id: 4, name: '최지원', division: 'female', grade: '2', event: 'team', paid: true, approved: true },
      { id: 5, name: '정수현', division: 'male', grade: '1', event: 'doubles', paid: true, approved: false },
      { id: 6, name: '강민호', division: 'male', grade: '3', event: 'singles', paid: false, approved: false },
    ]);

    const filters = [
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '전체',
      },
      {
        key: 'grade',
        type: 'select',
        label: '부',
        options: gradeOptions,
        placeholder: '전체',
      },
      {
        key: 'paid',
        type: 'checkbox',
        label: '결제 완료',
      },
      {
        key: 'approved',
        type: 'checkbox',
        label: '승인됨',
      },
    ];

    const filteredParticipants = participants.filter((p) => {
      if (selectedFilters.division && p.division !== selectedFilters.division) return false;
      if (selectedFilters.grade && p.grade !== selectedFilters.grade) return false;
      if (selectedFilters.paid && !p.paid) return false;
      if (selectedFilters.approved && !p.approved) return false;
      return true;
    });

    return (
      <div>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            참가자 목록 ({filteredParticipants.length}명)
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {filteredParticipants.map((participant) => (
              <Card key={participant.id}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <Typography variant="subtitle1">{participant.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {divisionOptions.find((o) => o.value === participant.division)?.label} ·{' '}
                      {gradeOptions.find((o) => o.value === participant.grade)?.label} ·{' '}
                      {eventOptions.find((o) => o.value === participant.event)?.label}
                    </Typography>
                  </div>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography variant="caption" color={participant.paid ? 'success.main' : 'error.main'}>
                      {participant.paid ? '결제 완료' : '미결제'}
                    </Typography>
                    <Typography variant="caption" color={participant.approved ? 'success.main' : 'warning.main'}>
                      {participant.approved ? '승인' : '대기'}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
    );
  },
};

export const TournamentFilter = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [tournaments] = useState([
      { id: 1, name: '2024 봄 대회', status: 'pending', division: 'male', date: '2024-03-15' },
      { id: 2, name: '2024 여름 대회', status: 'approved', division: 'female', date: '2024-06-20' },
      { id: 3, name: '2024 가을 대회', status: 'pending', division: 'mixed', date: '2024-09-10' },
      { id: 4, name: '2024 겨울 대회', status: 'rejected', division: 'male', date: '2024-12-05' },
    ]);

    const filters = [
      {
        key: 'status',
        type: 'chips',
        options: statusOptions,
      },
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '전체',
      },
    ];

    const filteredTournaments = tournaments.filter((t) => {
      if (selectedFilters.status?.length > 0 && !selectedFilters.status.includes(t.status)) return false;
      if (selectedFilters.division && t.division !== selectedFilters.division) return false;
      return true;
    });

    return (
      <div>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            대회 목록 ({filteredTournaments.length}개)
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.id}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle1">{tournament.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {divisionOptions.find((o) => o.value === tournament.division)?.label} · {tournament.date}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 1,
                      display: 'inline-block',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor:
                        tournament.status === 'approved'
                          ? 'success.light'
                          : tournament.status === 'rejected'
                          ? 'error.light'
                          : 'warning.light',
                    }}
                  >
                    {statusOptions.find((o) => o.value === tournament.status)?.label}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
    );
  },
};

export const EventRegistrationFilter = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '부서를 선택하세요',
      },
      {
        key: 'grade',
        type: 'select',
        label: '부',
        options: gradeOptions,
        placeholder: '부를 선택하세요',
      },
      {
        key: 'events',
        type: 'chips',
        options: eventOptions,
      },
    ];

    const isFormComplete = selectedFilters.division && selectedFilters.grade && selectedFilters.events?.length > 0;

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          참가 신청
        </Typography>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2, p: 2, bgcolor: isFormComplete ? 'success.light' : 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2" color={isFormComplete ? 'success.dark' : 'text.secondary'}>
            {isFormComplete
              ? `선택 완료: ${divisionOptions.find((o) => o.value === selectedFilters.division)?.label} ${
                  gradeOptions.find((o) => o.value === selectedFilters.grade)?.label
                } - ${selectedFilters.events.map((e) => eventOptions.find((o) => o.value === e)?.label).join(', ')}`
              : '부서, 부, 종목을 모두 선택해주세요'}
          </Typography>
        </Box>
      </div>
    );
  },
};

export const MultiStageFilter = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const stageOptions = [
      { value: 'preliminary', label: '예선' },
      { value: 'quarterfinal', label: '8강' },
      { value: 'semifinal', label: '4강' },
      { value: 'final', label: '결승' },
    ];

    const filters = [
      {
        key: 'division',
        type: 'select',
        label: '부서',
        options: divisionOptions,
        placeholder: '전체',
      },
      {
        key: 'stages',
        type: 'chips',
        options: stageOptions,
      },
      {
        key: 'completed',
        type: 'checkbox',
        label: '완료된 경기만',
      },
    ];

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          경기 일정 필터
        </Typography>
        <FilterBar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            선택된 필터:
          </Typography>
          <pre style={{ fontSize: '12px', marginTop: '8px' }}>
            {JSON.stringify(selectedFilters, null, 2)}
          </pre>
        </Box>
      </div>
    );
  },
};

export const CompactFilter = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
      {
        key: 'status',
        type: 'chips',
        options: [
          { value: 'all', label: '전체' },
          { value: 'active', label: '진행중' },
          { value: 'completed', label: '완료' },
        ],
      },
    ];

    return (
      <FilterBar
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
        showIcon={false}
      />
    );
  },
};
