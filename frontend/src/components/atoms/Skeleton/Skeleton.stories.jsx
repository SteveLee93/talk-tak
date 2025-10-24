import Skeleton from './Skeleton';
import Avatar from '../Avatar';
import Typography from '../Typography';

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rectangular', 'rounded', 'circular'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', false],
    },
    count: {
      control: 'number',
    },
    spacing: {
      control: 'number',
    },
  },
};

export const Default = {
  args: {
    variant: 'text',
  },
};

export const Text = {
  args: {
    variant: 'text',
    width: '100%',
  },
};

export const Rectangular = {
  args: {
    variant: 'rectangular',
    width: 210,
    height: 118,
  },
};

export const Rounded = {
  args: {
    variant: 'rounded',
    width: 210,
    height: 118,
  },
};

export const Circular = {
  args: {
    variant: 'circular',
    width: 40,
    height: 40,
  },
};

export const WaveAnimation = {
  args: {
    variant: 'rectangular',
    width: 210,
    height: 118,
    animation: 'wave',
  },
};

export const NoAnimation = {
  args: {
    variant: 'rectangular',
    width: 210,
    height: 118,
    animation: false,
  },
};

export const MultipleSkeleton = {
  args: {
    variant: 'text',
    count: 5,
    spacing: 1,
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Text</h4>
        <Skeleton variant="text" width="100%" />
      </div>
      <div>
        <h4>Rectangular</h4>
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
      <div>
        <h4>Rounded</h4>
        <Skeleton variant="rounded" width={210} height={118} />
      </div>
      <div>
        <h4>Circular</h4>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
    </div>
  ),
};

export const AllAnimations = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Pulse (기본)</h4>
        <Skeleton variant="rectangular" width={210} height={118} animation="pulse" />
      </div>
      <div>
        <h4>Wave</h4>
        <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
      </div>
      <div>
        <h4>No Animation</h4>
        <Skeleton variant="rectangular" width={210} height={118} animation={false} />
      </div>
    </div>
  ),
};

export const LoadingCard = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '345px'
    }}>
      <Skeleton variant="rectangular" width="100%" height={194} />
      <div style={{ marginTop: '16px' }}>
        <Skeleton variant="text" width="60%" height={32} />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <Skeleton variant="rectangular" width={80} height={36} />
        <Skeleton variant="rectangular" width={80} height={36} />
      </div>
    </div>
  ),
};

export const LoadingList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Skeleton variant="circular" width={40} height={40} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const LoadingTable = {
  render: () => (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '16px',
        padding: '16px',
        backgroundColor: '#f5f5f5'
      }}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
      </div>
      {/* Rows */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '16px',
            padding: '16px',
            borderTop: '1px solid #e0e0e0'
          }}
        >
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="60%" />
        </div>
      ))}
    </div>
  ),
};

export const TournamentCardLoading = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '400px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="70%" height={28} />
          <Skeleton variant="text" width="50%" />
        </div>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <Skeleton variant="rounded" width={80} height={24} />
        <Skeleton variant="rounded" width={80} height={24} />
        <Skeleton variant="rounded" width={80} height={24} />
      </div>
      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="20%" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="25%" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="30%" />
        </div>
      </div>
    </div>
  ),
};

export const ParticipantListLoading = {
  render: () => (
    <div>
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Skeleton variant="text" width={200} height={32} />
        <Skeleton variant="rectangular" width={100} height={36} />
      </div>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            padding: '12px',
            borderBottom: '1px solid #e0e0e0'
          }}
        >
          <Skeleton variant="circular" width={48} height={48} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="40%" height={24} />
            <Skeleton variant="text" width="60%" />
          </div>
          <Skeleton variant="rounded" width={60} height={24} />
          <Skeleton variant="rounded" width={80} height={24} />
        </div>
      ))}
    </div>
  ),
};

export const UserProfileLoading = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '600px'
    }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'start' }}>
        <Skeleton variant="circular" width={80} height={80} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="40%" height={32} />
          <Skeleton variant="text" width="60%" />
          <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
            <Skeleton variant="rounded" width={100} height={32} />
            <Skeleton variant="rounded" width={100} height={32} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e0e0e0' }}>
        <Skeleton variant="text" width="30%" height={24} />
        <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="70%" />
          </div>
          <div>
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="70%" />
          </div>
          <div>
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="70%" />
          </div>
          <div>
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="70%" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DashboardLoading = {
  render: () => (
    <div>
      <Skeleton variant="text" width={300} height={40} style={{ marginBottom: '24px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px'
            }}
          >
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" height={48} />
            <Skeleton variant="text" width="50%" />
          </div>
        ))}
      </div>
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px'
      }}>
        <Skeleton variant="text" width={200} height={28} style={{ marginBottom: '16px' }} />
        <Skeleton variant="rectangular" width="100%" height={300} />
      </div>
    </div>
  ),
};

export const FormLoading = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <Skeleton variant="text" width={200} height={32} style={{ marginBottom: '24px' }} />
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Skeleton variant="text" width="30%" style={{ marginBottom: '8px' }} />
          <Skeleton variant="rectangular" width="100%" height={40} />
        </div>
      ))}
      <div style={{ marginTop: '24px', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Skeleton variant="rectangular" width={80} height={36} />
        <Skeleton variant="rectangular" width={80} height={36} />
      </div>
    </div>
  ),
};

export const WithRealContent = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>로딩 완료</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar>김</Avatar>
          <div>
            <Typography variant="h6">김철수</Typography>
            <Typography variant="body2" color="textSecondary">남자부 1부</Typography>
          </div>
        </div>
      </div>
      <div>
        <h3>로딩 중</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Skeleton variant="circular" width={40} height={40} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
      </div>
    </div>
  ),
};
