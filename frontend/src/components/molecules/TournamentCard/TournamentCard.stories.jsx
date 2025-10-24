import { useState } from 'react';
import TournamentCard from './TournamentCard';
import Box from '../../atoms/Box';
import Grid from '../../atoms/Grid';
import Typography from '../../atoms/Typography';

export default {
  title: 'Molecules/TournamentCard',
  component: TournamentCard,
  tags: ['autodocs'],
};

const sampleTournament = {
  id: 1,
  name: '2024 서울시 탁구 선수권 대회',
  date: '2024-03-15',
  city: '서울',
  location: '서울시 체육관',
  participantCount: 128,
  status: '예정',
};

export const Default = {
  args: {
    tournament: sampleTournament,
  },
};

export const Upcoming = {
  args: {
    tournament: {
      ...sampleTournament,
      status: '예정',
    },
  },
};

export const InProgress = {
  args: {
    tournament: {
      ...sampleTournament,
      status: '진행중',
      participantCount: 64,
    },
  },
};

export const Completed = {
  args: {
    tournament: {
      ...sampleTournament,
      name: '2024 봄 탁구 대회',
      date: '2024-02-20',
      status: '완료',
      participantCount: 32,
    },
  },
};

export const DifferentCities = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TournamentCard
          tournament={{
            id: 1,
            name: '서울 대회',
            date: '2024-03-15',
            city: '서울',
            location: '서울시 체육관',
            participantCount: 128,
            status: '예정',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TournamentCard
          tournament={{
            id: 2,
            name: '경기 대회',
            date: '2024-04-10',
            city: '경기',
            location: '수원시 체육관',
            participantCount: 96,
            status: '예정',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TournamentCard
          tournament={{
            id: 3,
            name: '인천 대회',
            date: '2024-05-05',
            city: '인천',
            location: '인천시 체육관',
            participantCount: 64,
            status: '진행중',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TournamentCard
          tournament={{
            id: 4,
            name: '부산 대회',
            date: '2024-06-20',
            city: '부산',
            location: '부산시 체육관',
            participantCount: 80,
            status: '완료',
          }}
        />
      </Grid>
    </Grid>
  ),
};

export const AllStatuses = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TournamentCard
          tournament={{
            id: 1,
            name: '예정된 대회',
            date: '2024-06-15',
            city: '서울',
            location: '서울시 체육관',
            participantCount: 150,
            status: '예정',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TournamentCard
          tournament={{
            id: 2,
            name: '진행중인 대회',
            date: '2024-03-10',
            city: '경기',
            location: '성남시 체육관',
            participantCount: 100,
            status: '진행중',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TournamentCard
          tournament={{
            id: 3,
            name: '완료된 대회',
            date: '2024-01-20',
            city: '인천',
            location: '인천시 체육관',
            participantCount: 75,
            status: '완료',
          }}
        />
      </Grid>
    </Grid>
  ),
};

export const WithActions = {
  render: () => {
    const [action, setAction] = useState(null);

    return (
      <div>
        <TournamentCard
          tournament={sampleTournament}
          onView={(id) => setAction(`상세보기: ${id}`)}
          onEdit={(id) => setAction(`수정: ${id}`)}
          onDelete={(id) => setAction(`삭제: ${id}`)}
          onManageParticipants={(id) => setAction(`참가자 관리: ${id}`)}
          onManageSchedule={(id) => setAction(`일정 관리: ${id}`)}
        />
        {action && (
          <Box sx={{ mt: 2, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
            <Typography variant="body2">액션: {action}</Typography>
          </Box>
        )}
      </div>
    );
  },
};

export const SmallParticipants = {
  args: {
    tournament: {
      ...sampleTournament,
      name: '소규모 친선 대회',
      participantCount: 8,
      status: '예정',
    },
  },
};

export const LargeParticipants = {
  args: {
    tournament: {
      ...sampleTournament,
      name: '전국 규모 대회',
      participantCount: 512,
      status: '진행중',
    },
  },
};

export const NoParticipants = {
  args: {
    tournament: {
      ...sampleTournament,
      name: '신규 등록 대회',
      participantCount: 0,
      status: '예정',
    },
  },
};

export const TournamentList = {
  render: () => {
    const tournaments = [
      {
        id: 1,
        name: '2024 봄 탁구 선수권 대회',
        date: '2024-03-15',
        city: '서울',
        location: '서울시 체육관',
        participantCount: 128,
        status: '예정',
      },
      {
        id: 2,
        name: '2024 여름 탁구 챔피언십',
        date: '2024-06-20',
        city: '경기',
        location: '수원시 체육관',
        participantCount: 96,
        status: '예정',
      },
      {
        id: 3,
        name: '2024 가을 탁구 페스티벌',
        date: '2024-09-10',
        city: '인천',
        location: '인천시 체육관',
        participantCount: 64,
        status: '진행중',
      },
      {
        id: 4,
        name: '2024 겨울 탁구 토너먼트',
        date: '2024-12-05',
        city: '부산',
        location: '부산시 체육관',
        participantCount: 80,
        status: '완료',
      },
      {
        id: 5,
        name: '2024 신년 탁구 대회',
        date: '2024-01-10',
        city: '서울',
        location: '올림픽공원 체육관',
        participantCount: 150,
        status: '완료',
      },
      {
        id: 6,
        name: '2024 청소년 탁구 대회',
        date: '2024-04-25',
        city: '경기',
        location: '안양시 체육관',
        participantCount: 45,
        status: '예정',
      },
    ];

    return (
      <Grid container spacing={2}>
        {tournaments.map((tournament) => (
          <Grid item xs={12} sm={6} md={4} key={tournament.id}>
            <TournamentCard tournament={tournament} />
          </Grid>
        ))}
      </Grid>
    );
  },
};

export const Interactive = {
  render: () => {
    const [selectedId, setSelectedId] = useState(null);
    const [actionLog, setActionLog] = useState([]);

    const tournaments = [
      {
        id: 1,
        name: '서울 대회',
        date: '2024-03-15',
        city: '서울',
        location: '서울시 체육관',
        participantCount: 128,
        status: '예정',
      },
      {
        id: 2,
        name: '경기 대회',
        date: '2024-04-20',
        city: '경기',
        location: '수원시 체육관',
        participantCount: 96,
        status: '진행중',
      },
      {
        id: 3,
        name: '인천 대회',
        date: '2024-02-10',
        city: '인천',
        location: '인천시 체육관',
        participantCount: 64,
        status: '완료',
      },
    ];

    const handleAction = (action, id) => {
      const timestamp = new Date().toLocaleTimeString();
      setActionLog((prev) => [`[${timestamp}] ${action} - ID: ${id}`, ...prev].slice(0, 5));
      setSelectedId(id);
    };

    return (
      <div>
        <Grid container spacing={2}>
          {tournaments.map((tournament) => (
            <Grid item xs={12} sm={6} md={4} key={tournament.id}>
              <TournamentCard
                tournament={tournament}
                onView={(id) => handleAction('상세보기', id)}
                onEdit={(id) => handleAction('수정', id)}
                onDelete={(id) => handleAction('삭제', id)}
                onManageParticipants={(id) => handleAction('참가자 관리', id)}
                onManageSchedule={(id) => handleAction('일정 관리', id)}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom>
            액션 로그
          </Typography>
          {actionLog.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              카드를 클릭하거나 메뉴를 사용해보세요
            </Typography>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {actionLog.map((log, index) => (
                <Typography key={index} variant="body2" sx={{ fontFamily: 'monospace' }}>
                  {log}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </div>
    );
  },
};

export const SeasonalTournaments = {
  render: () => (
    <div>
      <Typography variant="h6" gutterBottom>
        2024 시즌별 대회
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TournamentCard
            tournament={{
              id: 1,
              name: '2024 봄 대회',
              date: '2024-03-20',
              city: '서울',
              location: '서울시 체육관',
              participantCount: 100,
              status: '예정',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TournamentCard
            tournament={{
              id: 2,
              name: '2024 여름 대회',
              date: '2024-06-15',
              city: '경기',
              location: '수원시 체육관',
              participantCount: 120,
              status: '예정',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TournamentCard
            tournament={{
              id: 3,
              name: '2024 가을 대회',
              date: '2024-09-10',
              city: '인천',
              location: '인천시 체육관',
              participantCount: 80,
              status: '예정',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TournamentCard
            tournament={{
              id: 4,
              name: '2024 겨울 대회',
              date: '2024-12-05',
              city: '부산',
              location: '부산시 체육관',
              participantCount: 90,
              status: '예정',
            }}
          />
        </Grid>
      </Grid>
    </div>
  ),
};

export const RegionalTournaments = {
  render: () => (
    <div>
      <Typography variant="h6" gutterBottom>
        지역별 대회
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            수도권
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TournamentCard
                tournament={{
                  id: 1,
                  name: '서울 지역 대회',
                  date: '2024-03-15',
                  city: '서울',
                  location: '서울시 체육관',
                  participantCount: 128,
                  status: '예정',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TournamentCard
                tournament={{
                  id: 2,
                  name: '경기 지역 대회',
                  date: '2024-04-10',
                  city: '경기',
                  location: '수원시 체육관',
                  participantCount: 96,
                  status: '진행중',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            기타 지역
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TournamentCard
                tournament={{
                  id: 3,
                  name: '인천 지역 대회',
                  date: '2024-05-05',
                  city: '인천',
                  location: '인천시 체육관',
                  participantCount: 64,
                  status: '완료',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TournamentCard
                tournament={{
                  id: 4,
                  name: '부산 지역 대회',
                  date: '2024-06-20',
                  city: '부산',
                  location: '부산시 체육관',
                  participantCount: 80,
                  status: '예정',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ),
};

export const TournamentDashboard = {
  render: () => (
    <div>
      <Typography variant="h5" gutterBottom>
        대회 관리 대시보드
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          진행 예정 대회
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TournamentCard
              tournament={{
                id: 1,
                name: '2024 봄 탁구 대회',
                date: '2024-03-15',
                city: '서울',
                location: '서울시 체육관',
                participantCount: 128,
                status: '예정',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TournamentCard
              tournament={{
                id: 2,
                name: '2024 여름 선수권',
                date: '2024-06-20',
                city: '경기',
                location: '수원시 체육관',
                participantCount: 96,
                status: '예정',
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom color="success.main">
          진행중인 대회
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TournamentCard
              tournament={{
                id: 3,
                name: '2024 신년 토너먼트',
                date: '2024-01-10',
                city: '인천',
                location: '인천시 체육관',
                participantCount: 64,
                status: '진행중',
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom color="text.secondary">
          완료된 대회
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TournamentCard
              tournament={{
                id: 4,
                name: '2023 겨울 대회',
                date: '2023-12-05',
                city: '부산',
                location: '부산시 체육관',
                participantCount: 80,
                status: '완료',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TournamentCard
              tournament={{
                id: 5,
                name: '2023 가을 페스티벌',
                date: '2023-09-15',
                city: '서울',
                location: '올림픽공원 체육관',
                participantCount: 150,
                status: '완료',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  ),
};
