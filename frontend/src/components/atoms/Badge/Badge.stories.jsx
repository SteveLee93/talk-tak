import { useState } from 'react';
import Badge from './Badge';
import Button from '../Button';
import IconButton from '../IconButton';
import Avatar from '../Avatar';
import { Mail, Notifications, ShoppingCart, Person } from '@mui/icons-material';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info', 'default'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
    showZero: {
      control: 'boolean',
    },
    invisible: {
      control: 'boolean',
    },
  },
};

export const Default = {
  render: () => (
    <Badge badgeContent={4}>
      <Mail />
    </Badge>
  ),
};

export const WithButton = {
  render: () => (
    <Badge badgeContent={4} color="primary">
      <Button>알림</Button>
    </Badge>
  ),
};

export const WithIcon = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={10} color="error">
        <Notifications />
      </Badge>
      <Badge badgeContent={3} color="success">
        <ShoppingCart />
      </Badge>
    </div>
  ),
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="success">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="info">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="default">
        <Mail />
      </Badge>
    </div>
  ),
};

export const DotVariant = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Badge variant="dot" color="primary">
        <Mail />
      </Badge>
      <Badge variant="dot" color="error">
        <Notifications />
      </Badge>
      <Badge variant="dot" color="success">
        <ShoppingCart />
      </Badge>
    </div>
  ),
};

export const MaxValue = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Badge badgeContent={99} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={1000} max={999} color="primary">
        <Mail />
      </Badge>
    </div>
  ),
};

export const ShowZero = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge badgeContent={0} showZero={false} color="primary">
          <Mail />
        </Badge>
        <p style={{ fontSize: '12px', marginTop: '8px' }}>showZero: false</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge badgeContent={0} showZero={true} color="primary">
          <Mail />
        </Badge>
        <p style={{ fontSize: '12px', marginTop: '8px' }}>showZero: true</p>
      </div>
    </div>
  ),
};

export const Invisible = {
  render: () => {
    const [invisible, setInvisible] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Badge badgeContent={4} color="primary" invisible={invisible}>
          <Mail />
        </Badge>
        <Button onClick={() => setInvisible(!invisible)}>
          {invisible ? '뱃지 표시' : '뱃지 숨김'}
        </Button>
      </div>
    );
  },
};

export const WithAvatar = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Badge badgeContent={4} color="primary">
        <Avatar>U</Avatar>
      </Badge>
      <Badge variant="dot" color="success">
        <Avatar>A</Avatar>
      </Badge>
      <Badge badgeContent={10} color="error">
        <Avatar src="https://i.pravatar.cc/150?img=1" />
      </Badge>
    </div>
  ),
};

export const OnlineStatus = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="success"
      >
        <Avatar>온</Avatar>
      </Badge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="error"
      >
        <Avatar>오프</Avatar>
      </Badge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="warning"
      >
        <Avatar>자리</Avatar>
      </Badge>
    </div>
  ),
};

export const NotificationExample = {
  render: () => {
    const [notifications, setNotifications] = useState({
      messages: 5,
      alerts: 2,
      cart: 0,
    });

    const clearNotifications = (type) => {
      setNotifications({ ...notifications, [type]: 0 });
    };

    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Badge badgeContent={notifications.messages} color="primary">
          <IconButton onClick={() => clearNotifications('messages')}>
            <Mail />
          </IconButton>
        </Badge>
        <Badge badgeContent={notifications.alerts} color="error">
          <IconButton onClick={() => clearNotifications('alerts')}>
            <Notifications />
          </IconButton>
        </Badge>
        <Badge badgeContent={notifications.cart} showZero color="success">
          <IconButton onClick={() => clearNotifications('cart')}>
            <ShoppingCart />
          </IconButton>
        </Badge>
      </div>
    );
  },
};

export const ParticipantCount = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Badge badgeContent={15} max={32} color="primary">
          <Person />
        </Badge>
        <span>남자 단식 (15/32명)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Badge badgeContent={32} max={32} color="success">
          <Person />
        </Badge>
        <span>여자 복식 (마감)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Badge badgeContent={8} max={16} color="warning">
          <Person />
        </Badge>
        <span>혼합 단체전 (8/16팀)</span>
      </div>
    </div>
  ),
};

export const ButtonWithBadge = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Badge badgeContent={4} color="error">
        <Button variant="contained">메시지</Button>
      </Badge>
      <Badge badgeContent="NEW" color="success">
        <Button variant="outlined">새 대회</Button>
      </Badge>
      <Badge variant="dot" color="error">
        <Button>공지사항</Button>
      </Badge>
    </div>
  ),
};
