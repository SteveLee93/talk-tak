import Avatar from './Avatar';
import { Person, SportsBaseball } from '@mui/icons-material';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
    },
  },
};

export const Default = {
  args: {
    children: 'U',
  },
};

export const WithImage = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar',
  },
};

export const WithText = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar>김</Avatar>
      <Avatar>이</Avatar>
      <Avatar>박</Avatar>
      <Avatar>최</Avatar>
    </div>
  ),
};

export const WithIcon = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar>
        <Person />
      </Avatar>
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        <SportsBaseball />
      </Avatar>
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="small">S</Avatar>
      <Avatar size="medium">M</Avatar>
      <Avatar size="large">L</Avatar>
      <Avatar size={80}>XL</Avatar>
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar variant="circular" src="https://i.pravatar.cc/150?img=1" />
      <Avatar variant="rounded" src="https://i.pravatar.cc/150?img=2" />
      <Avatar variant="square" src="https://i.pravatar.cc/150?img=3" />
    </div>
  ),
};

export const WithColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar sx={{ bgcolor: '#1976d2' }}>A</Avatar>
      <Avatar sx={{ bgcolor: '#dc004e' }}>B</Avatar>
      <Avatar sx={{ bgcolor: '#9c27b0' }}>C</Avatar>
      <Avatar sx={{ bgcolor: '#ed6c02' }}>D</Avatar>
      <Avatar sx={{ bgcolor: '#2e7d32' }}>E</Avatar>
    </div>
  ),
};

export const ImageGroup = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
      <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
      <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
      <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
      <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 5" />
    </div>
  ),
};

export const FallbackText = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar src="invalid-url.jpg">김철수</Avatar>
      <Avatar src="invalid-url.jpg">이영희</Avatar>
      <Avatar src="invalid-url.jpg">박민수</Avatar>
    </div>
  ),
};

export const TeamMembers = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar sx={{ bgcolor: '#1976d2' }}>김</Avatar>
        <div>
          <div style={{ fontWeight: 'bold' }}>김철수</div>
          <div style={{ fontSize: '12px', color: '#666' }}>남자부 1부</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar sx={{ bgcolor: '#dc004e' }}>이</Avatar>
        <div>
          <div style={{ fontWeight: 'bold' }}>이영희</div>
          <div style={{ fontSize: '12px', color: '#666' }}>여자부 2부</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar sx={{ bgcolor: '#2e7d32' }}>박</Avatar>
        <div>
          <div style={{ fontWeight: 'bold' }}>박민수</div>
          <div style={{ fontSize: '12px', color: '#666' }}>남자부 3부</div>
        </div>
      </div>
    </div>
  ),
};

export const OverlappingAvatars = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
      <div style={{ display: 'flex' }}>
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" sx={{ marginLeft: '-8px' }} />
        <Avatar src="https://i.pravatar.cc/150?img=3" sx={{ marginLeft: '-8px' }} />
        <Avatar sx={{ marginLeft: '-8px', bgcolor: '#bdbdbd' }}>+5</Avatar>
      </div>

      <div style={{ display: 'flex' }}>
        <Avatar size="small" sx={{ bgcolor: '#1976d2' }}>김</Avatar>
        <Avatar size="small" sx={{ bgcolor: '#dc004e', marginLeft: '-6px' }}>이</Avatar>
        <Avatar size="small" sx={{ bgcolor: '#2e7d32', marginLeft: '-6px' }}>박</Avatar>
        <Avatar size="small" sx={{ bgcolor: '#ed6c02', marginLeft: '-6px' }}>최</Avatar>
      </div>
    </div>
  ),
};

export const WithBadge = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ position: 'relative' }}>
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          bgcolor: '#4caf50',
          border: '2px solid white',
        }} />
      </div>
    </div>
  ),
};

export const CustomSize = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size={24}>XS</Avatar>
      <Avatar size={32}>S</Avatar>
      <Avatar size={40}>M</Avatar>
      <Avatar size={56}>L</Avatar>
      <Avatar size={72}>XL</Avatar>
      <Avatar size={96}>XXL</Avatar>
    </div>
  ),
};

export const ParticipantList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {[
        { name: '김철수', division: '남자부 1부', initial: '김', color: '#1976d2' },
        { name: '이영희', division: '여자부 1부', initial: '이', color: '#dc004e' },
        { name: '박민수', division: '남자부 2부', initial: '박', color: '#2e7d32' },
        { name: '최지원', division: '여자부 2부', initial: '최', color: '#ed6c02' },
        { name: '정수현', division: '혼합부 1부', initial: '정', color: '#9c27b0' },
      ].map((participant) => (
        <div key={participant.name} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px',
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#f5f5f5' },
        }}>
          <Avatar sx={{ bgcolor: participant.color }} size="small">
            {participant.initial}
          </Avatar>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 500 }}>{participant.name}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{participant.division}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};
