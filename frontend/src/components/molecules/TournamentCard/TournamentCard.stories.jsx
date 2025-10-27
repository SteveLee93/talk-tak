import TournamentCard from './TournamentCard';

export default {
  title: 'Molecules/TournamentCard',
  component: TournamentCard,
  tags: ['autodocs'],
};

const mockTournament = {
  name: '2025 신년 탁구 대회',
  startDate: '2025-01-15',
  endDate: '2025-01-16',
  venue: '올림픽공원 체육관',
  status: 'ongoing',
};

// 1. Default (진행중)
export const Default = {
  args: {
    tournament: mockTournament,
  },
};

// 2. Upcoming (예정)
export const Upcoming = {
  args: {
    tournament: {
      ...mockTournament,
      name: '2025 봄맞이 탁구 대회',
      startDate: '2025-03-20',
      endDate: '2025-03-21',
      status: 'upcoming',
    },
  },
};

// 3. Completed (완료)
export const Completed = {
  args: {
    tournament: {
      ...mockTournament,
      name: '2024 송년 탁구 대회',
      startDate: '2024-12-20',
      endDate: '2024-12-21',
      status: 'completed',
    },
  },
};

// 4. Single Day (하루 대회)
export const SingleDay = {
  args: {
    tournament: {
      ...mockTournament,
      startDate: '2025-02-15',
      endDate: '2025-02-15',
    },
  },
};

// 5. With Click Handler
export const WithClickHandler = {
  args: {
    tournament: mockTournament,
    onClick: () => alert('대회 카드 클릭!'),
  },
};

// 6. With Menu
export const WithMenu = {
  args: {
    tournament: mockTournament,
    onClick: () => alert('대회 카드 클릭!'),
    onMenuClick: (tournament) => alert(`메뉴 클릭: ${tournament.name}`),
  },
};

// 7. Tournament List Example (목록 예제)
export const TournamentListExample = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
      <TournamentCard
        tournament={{
          name: '2025 신년 탁구 대회',
          startDate: '2025-01-15',
          endDate: '2025-01-16',
          venue: '올림픽공원 체육관',
          status: 'ongoing',
        }}
        onClick={() => console.log('Clicked')}
        onMenuClick={(t) => console.log('Menu:', t.name)}
      />
      <TournamentCard
        tournament={{
          name: '2025 봄맞이 탁구 대회',
          startDate: '2025-03-20',
          endDate: '2025-03-21',
          venue: '잠실 체육관',
          status: 'upcoming',
        }}
        onClick={() => console.log('Clicked')}
        onMenuClick={(t) => console.log('Menu:', t.name)}
      />
      <TournamentCard
        tournament={{
          name: '2024 송년 탁구 대회',
          startDate: '2024-12-20',
          endDate: '2024-12-21',
          venue: '고척 스카이돔',
          status: 'completed',
        }}
        onClick={() => console.log('Clicked')}
        onMenuClick={(t) => console.log('Menu:', t.name)}
      />
    </div>
  ),
};

// 8. All Statuses (모든 상태)
export const AllStatuses = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <TournamentCard
        tournament={{ ...mockTournament, status: 'upcoming' }}
      />
      <TournamentCard
        tournament={{ ...mockTournament, status: 'ongoing' }}
      />
      <TournamentCard
        tournament={{ ...mockTournament, status: 'completed' }}
      />
    </div>
  ),
};
