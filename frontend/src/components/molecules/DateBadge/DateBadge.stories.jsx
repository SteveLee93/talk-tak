import DateBadge from './DateBadge';
import Box from '../../atoms/Box';
import Card from '../../atoms/Card';
import Typography from '../../atoms/Typography';
import Grid from '../../atoms/Grid';

export default {
  title: 'Molecules/DateBadge',
  component: DateBadge,
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'select',
      options: ['full', 'short', 'custom'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'success', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    showIcon: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    date: '2024-03-15',
  },
};

export const FullFormat = {
  args: {
    date: '2024-03-15',
    format: 'full',
  },
};

export const ShortFormat = {
  args: {
    date: '2024-03-15',
    format: 'short',
  },
};

export const CustomFormat = {
  args: {
    date: '2024년 3월 15일',
    format: 'custom',
  },
};

export const WithoutIcon = {
  args: {
    date: '2024-03-15',
    showIcon: false,
  },
};

export const Small = {
  args: {
    date: '2024-03-15',
    size: 'small',
  },
};

export const Medium = {
  args: {
    date: '2024-03-15',
    size: 'medium',
  },
};

export const AllColors = {
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      <DateBadge date="2024-03-15" color="default" />
      <DateBadge date="2024-03-15" color="primary" />
      <DateBadge date="2024-03-15" color="secondary" />
      <DateBadge date="2024-03-15" color="error" />
      <DateBadge date="2024-03-15" color="warning" />
      <DateBadge date="2024-03-15" color="success" />
      <DateBadge date="2024-03-15" color="info" />
    </Box>
  ),
};

export const AllFormats = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          Full Format (YYYY.MM.DD)
        </Typography>
        <Box sx={{ mt: 1 }}>
          <DateBadge date="2024-03-15" format="full" />
        </Box>
      </div>
      <div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          Short Format (MM.DD)
        </Typography>
        <Box sx={{ mt: 1 }}>
          <DateBadge date="2024-03-15" format="short" />
        </Box>
      </div>
      <div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          Custom Format
        </Typography>
        <Box sx={{ mt: 1 }}>
          <DateBadge date="3월 15일" format="custom" />
        </Box>
      </div>
    </Box>
  ),
};

export const InTournamentCard = {
  render: () => (
    <Card sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
        <div>
          <Typography variant="h6">2024 서울시 탁구 선수권 대회</Typography>
          <Typography variant="body2" color="text.secondary">
            서울시 체육관
          </Typography>
        </div>
        <DateBadge date="2024-03-15" color="primary" />
      </Box>
      <Typography variant="body2">참가자: 128명</Typography>
    </Card>
  ),
};

export const MultipleCards = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ p: 2 }}>
          <Box sx={{ mb: 1 }}>
            <DateBadge date="2024-03-15" color="primary" size="small" />
          </Box>
          <Typography variant="subtitle1">봄 대회</Typography>
          <Typography variant="body2" color="text.secondary">
            서울시 체육관
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ p: 2 }}>
          <Box sx={{ mb: 1 }}>
            <DateBadge date="2024-06-20" color="success" size="small" />
          </Box>
          <Typography variant="subtitle1">여름 대회</Typography>
          <Typography variant="body2" color="text.secondary">
            경기도 체육관
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ p: 2 }}>
          <Box sx={{ mb: 1 }}>
            <DateBadge date="2024-09-10" color="warning" size="small" />
          </Box>
          <Typography variant="subtitle1">가을 대회</Typography>
          <Typography variant="body2" color="text.secondary">
            인천시 체육관
          </Typography>
        </Card>
      </Grid>
    </Grid>
  ),
};

export const UpcomingTournaments = {
  render: () => {
    const tournaments = [
      { id: 1, name: '서울 대회', date: '2024-03-15', status: 'upcoming' },
      { id: 2, name: '경기 대회', date: '2024-04-20', status: 'upcoming' },
      { id: 3, name: '인천 대회', date: '2024-05-05', status: 'in-progress' },
      { id: 4, name: '부산 대회', date: '2024-06-15', status: 'completed' },
    ];

    const getColor = (status) => {
      switch (status) {
        case 'upcoming':
          return 'primary';
        case 'in-progress':
          return 'success';
        case 'completed':
          return 'default';
        default:
          return 'default';
      }
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {tournaments.map((tournament) => (
          <Card key={tournament.id} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle1">{tournament.name}</Typography>
              <DateBadge date={tournament.date} color={getColor(tournament.status)} />
            </Box>
          </Card>
        ))}
      </Box>
    );
  },
};

export const CalendarView = {
  render: () => {
    const events = [
      { date: '2024-03-01', title: '참가 신청 시작' },
      { date: '2024-03-10', title: '참가 신청 마감' },
      { date: '2024-03-15', title: '대회 당일' },
    ];

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6">대회 일정</Typography>
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              bgcolor: 'grey.50',
              borderRadius: 1,
            }}
          >
            <DateBadge
              date={event.date}
              color={index === events.length - 1 ? 'error' : 'primary'}
            />
            <Typography variant="body1">{event.title}</Typography>
          </Box>
        ))}
      </Box>
    );
  },
};

export const Timeline = {
  render: () => {
    const timeline = [
      { date: '2024-01-15', event: '대회 공고', color: 'default' },
      { date: '2024-02-01', event: '참가 신청 시작', color: 'primary' },
      { date: '2024-02-28', event: '참가 신청 마감', color: 'warning' },
      { date: '2024-03-10', event: '조 추첨', color: 'info' },
      { date: '2024-03-15', event: '대회 당일', color: 'error' },
      { date: '2024-03-15', event: '시상식', color: 'success' },
    ];

    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          2024 봄 대회 타임라인
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
          {timeline.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                pl: 2,
                borderLeft: 3,
                borderColor: `${item.color}.main`,
              }}
            >
              <DateBadge date={item.date} format="short" color={item.color} size="small" />
              <Typography variant="body2">{item.event}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    );
  },
};

export const CompactList = {
  render: () => {
    const dates = [
      '2024-03-15',
      '2024-04-20',
      '2024-05-05',
      '2024-06-10',
      '2024-07-15',
    ];

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {dates.map((date, index) => (
          <DateBadge key={index} date={date} format="short" size="small" />
        ))}
      </Box>
    );
  },
};
