import EmptyState from './EmptyState';
import { Inbox, PersonOff, EventBusy, SearchOff, SportsScore, Group } from '@mui/icons-material';
import Box from '../../atoms/Box';
import Card from '../../atoms/Card';

export default {
  title: 'Molecules/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    minHeight: {
      control: 'number',
    },
  },
};

export const Default = {
  args: {
    message: '데이터가 없습니다',
  },
};

export const WithDescription = {
  args: {
    message: '참가자가 없습니다',
    description: '참가 신청을 받아보세요.',
  },
};

export const WithAction = {
  args: {
    message: '대회가 없습니다',
    description: '새로운 대회를 만들어보세요.',
    actionLabel: '대회 만들기',
    onAction: () => alert('대회 생성'),
  },
};

export const CustomIcon = {
  args: {
    icon: <PersonOff sx={{ fontSize: 80 }} />,
    message: '참가자가 없습니다',
    description: '아직 참가 신청한 사람이 없어요.',
  },
};

export const NoParticipants = {
  args: {
    icon: <PersonOff sx={{ fontSize: 80 }} />,
    message: '참가자가 없습니다',
    description: '참가 신청을 시작하면 여기에 표시됩니다.',
    actionLabel: '참가 신청 받기',
    onAction: () => alert('참가 신청 시작'),
  },
};

export const NoTournaments = {
  args: {
    icon: <EventBusy sx={{ fontSize: 80 }} />,
    message: '등록된 대회가 없습니다',
    description: '새로운 대회를 만들어 참가자를 모집하세요.',
    actionLabel: '대회 만들기',
    onAction: () => alert('대회 만들기'),
  },
};

export const SearchNoResults = {
  args: {
    icon: <SearchOff sx={{ fontSize: 80 }} />,
    message: '검색 결과가 없습니다',
    description: '다른 검색어로 시도해보세요.',
  },
};

export const NoMatches = {
  args: {
    icon: <SportsScore sx={{ fontSize: 80 }} />,
    message: '예정된 경기가 없습니다',
    description: '아직 경기 일정이 만들어지지 않았어요.',
    actionLabel: '경기 일정 만들기',
    onAction: () => alert('경기 일정 만들기'),
  },
};

export const NoTeams = {
  args: {
    icon: <Group sx={{ fontSize: 80 }} />,
    message: '등록된 팀이 없습니다',
    description: '팀을 등록하고 대회에 참가하세요.',
    actionLabel: '팀 등록하기',
    onAction: () => alert('팀 등록'),
  },
};

export const SmallHeight = {
  args: {
    message: '데이터가 없습니다',
    minHeight: 150,
  },
};

export const LargeHeight = {
  args: {
    message: '데이터가 없습니다',
    description: '아직 생성된 항목이 없어요.',
    minHeight: 500,
  },
};

export const InCard = {
  render: () => (
    <Card>
      <EmptyState
        message="참가자가 없습니다"
        description="참가 신청을 받아보세요."
        actionLabel="신청 받기"
        onAction={() => alert('신청 받기')}
      />
    </Card>
  ),
};

export const MultipleStates = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card>
        <EmptyState
          icon={<PersonOff sx={{ fontSize: 60 }} />}
          message="참가자 없음"
          minHeight={200}
        />
      </Card>
      <Card>
        <EmptyState
          icon={<EventBusy sx={{ fontSize: 60 }} />}
          message="대회 없음"
          minHeight={200}
        />
      </Card>
      <Card>
        <EmptyState
          icon={<SearchOff sx={{ fontSize: 60 }} />}
          message="검색 결과 없음"
          minHeight={200}
        />
      </Card>
    </Box>
  ),
};

export const ParticipantListEmpty = {
  render: () => (
    <Box>
      <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: '8px 8px 0 0' }}>
        <h3 style={{ margin: 0 }}>참가자 목록</h3>
      </Box>
      <Card sx={{ borderRadius: '0 0 8px 8px' }}>
        <EmptyState
          icon={<PersonOff sx={{ fontSize: 80 }} />}
          message="아직 참가 신청한 사람이 없어요"
          description="참가 신청이 시작되면 여기에 표시됩니다."
          actionLabel="참가 신청 링크 공유"
          onAction={() => alert('링크 공유')}
        />
      </Card>
    </Box>
  ),
};

export const TournamentDashboardEmpty = {
  render: () => (
    <Box>
      <h2>대회 관리</h2>
      <Card>
        <EmptyState
          icon={<EventBusy sx={{ fontSize: 100 }} />}
          message="등록된 대회가 없습니다"
          description="첫 대회를 만들고 참가자를 모집해보세요."
          actionLabel="대회 만들기"
          onAction={() => alert('대회 만들기')}
          minHeight={400}
        />
      </Card>
    </Box>
  ),
};

export const SearchResultsEmpty = {
  render: () => (
    <Box>
      <Box sx={{ p: 2, mb: 2 }}>
        <input
          type="text"
          placeholder="검색..."
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          defaultValue="존재하지 않는 검색어"
        />
      </Box>
      <EmptyState
        icon={<SearchOff sx={{ fontSize: 80 }} />}
        message="검색 결과가 없습니다"
        description='"존재하지 않는 검색어"에 대한 결과를 찾을 수 없어요.'
        minHeight={300}
      />
    </Box>
  ),
};

export const GroupAssignmentEmpty = {
  render: () => (
    <Card>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <h4 style={{ margin: 0 }}>A 조</h4>
      </Box>
      <EmptyState
        icon={<Inbox sx={{ fontSize: 60 }} />}
        message="참가자를 드래그하여 추가하세요"
        minHeight={200}
      />
    </Card>
  ),
};

export const NoSchedule = {
  render: () => (
    <Box>
      <h3>오늘의 경기 일정</h3>
      <Card>
        <EmptyState
          icon={<EventBusy sx={{ fontSize: 80 }} />}
          message="오늘 예정된 경기가 없습니다"
          description="내일 경기 일정을 확인해보세요."
          minHeight={300}
        />
      </Card>
    </Box>
  ),
};

export const AllEmptyStates = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
      <Card>
        <EmptyState
          icon={<PersonOff sx={{ fontSize: 60 }} />}
          message="참가자 없음"
          minHeight={250}
        />
      </Card>
      <Card>
        <EmptyState
          icon={<EventBusy sx={{ fontSize: 60 }} />}
          message="대회 없음"
          minHeight={250}
        />
      </Card>
      <Card>
        <EmptyState
          icon={<SearchOff sx={{ fontSize: 60 }} />}
          message="검색 결과 없음"
          minHeight={250}
        />
      </Card>
      <Card>
        <EmptyState
          icon={<SportsScore sx={{ fontSize: 60 }} />}
          message="경기 없음"
          minHeight={250}
        />
      </Card>
      <Card>
        <EmptyState
          icon={<Group sx={{ fontSize: 60 }} />}
          message="팀 없음"
          minHeight={250}
        />
      </Card>
      <Card>
        <EmptyState
          icon={<Inbox sx={{ fontSize: 60 }} />}
          message="데이터 없음"
          minHeight={250}
        />
      </Card>
    </Box>
  ),
};
