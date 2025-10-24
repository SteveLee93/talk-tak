import StatCard from './StatCard';
import { People, Event, EmojiEvents, CheckCircle } from '@mui/icons-material';

export default {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    trend: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
  },
};

export const Default = {
  args: {
    label: '총 참가자',
    value: '128',
    icon: <People sx={{ fontSize: 40 }} />,
    color: 'primary',
  },
};

export const WithTrendUp = {
  args: {
    label: '신규 등록',
    value: '24',
    icon: <People sx={{ fontSize: 40 }} />,
    color: 'success',
    trend: 'up',
    trendValue: '+12% 전주 대비',
  },
};

export const WithTrendDown = {
  args: {
    label: '취소',
    value: '5',
    icon: <People sx={{ fontSize: 40 }} />,
    color: 'error',
    trend: 'down',
    trendValue: '-3명 전주 대비',
  },
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      <StatCard
        label="Primary"
        value="128"
        icon={<People sx={{ fontSize: 40 }} />}
        color="primary"
      />
      <StatCard
        label="Secondary"
        value="64"
        icon={<Event sx={{ fontSize: 40 }} />}
        color="secondary"
      />
      <StatCard
        label="Success"
        value="95%"
        icon={<CheckCircle sx={{ fontSize: 40 }} />}
        color="success"
      />
      <StatCard
        label="Error"
        value="5"
        icon={<People sx={{ fontSize: 40 }} />}
        color="error"
      />
      <StatCard
        label="Warning"
        value="12"
        icon={<Event sx={{ fontSize: 40 }} />}
        color="warning"
      />
      <StatCard
        label="Info"
        value="48"
        icon={<EmojiEvents sx={{ fontSize: 40 }} />}
        color="info"
      />
    </div>
  ),
};

export const Dashboard = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      <StatCard
        label="총 참가자"
        value="128"
        icon={<People sx={{ fontSize: 40 }} />}
        color="primary"
        trend="up"
        trendValue="+15 전주 대비"
      />
      <StatCard
        label="진행 중인 대회"
        value="3"
        icon={<Event sx={{ fontSize: 40 }} />}
        color="info"
      />
      <StatCard
        label="완료된 경기"
        value="45"
        icon={<EmojiEvents sx={{ fontSize: 40 }} />}
        color="success"
        trend="up"
        trendValue="+12 오늘"
      />
      <StatCard
        label="결제 완료율"
        value="95%"
        icon={<CheckCircle sx={{ fontSize: 40 }} />}
        color="success"
        trend="up"
        trendValue="+5% 전주 대비"
      />
    </div>
  ),
};
