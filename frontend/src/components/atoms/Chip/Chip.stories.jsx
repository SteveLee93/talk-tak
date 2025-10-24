import Chip from './Chip';
import { CheckCircle, Cancel } from '@mui/icons-material';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'success', 'info'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    clickable: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    label: '기본 칩',
  },
};

export const Primary = {
  args: {
    label: 'Primary',
    color: 'primary',
  },
};

export const Outlined = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
  },
};

export const WithIcon = {
  args: {
    label: '완료',
    icon: <CheckCircle />,
    color: 'success',
  },
};

export const Deletable = {
  args: {
    label: '삭제 가능',
    onDelete: () => alert('삭제됨'),
  },
};

export const Clickable = {
  args: {
    label: '클릭 가능',
    clickable: true,
    onClick: () => alert('클릭됨'),
  },
};

export const Small = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Success" color="success" />
      <Chip label="Info" color="info" />
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <strong>Filled:</strong>
        <Chip label="Primary" color="primary" variant="filled" />
        <Chip label="Secondary" color="secondary" variant="filled" />
        <Chip label="Success" color="success" variant="filled" />
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <strong>Outlined:</strong>
        <Chip label="Primary" color="primary" variant="outlined" />
        <Chip label="Secondary" color="secondary" variant="outlined" />
        <Chip label="Success" color="success" variant="outlined" />
      </div>
    </div>
  ),
};

export const StatusChips = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="대기" color="default" />
      <Chip label="진행중" color="info" />
      <Chip label="완료" color="success" icon={<CheckCircle />} />
      <Chip label="취소" color="error" icon={<Cancel />} />
      <Chip label="보류" color="warning" />
    </div>
  ),
};

export const TagChips = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="남자부" color="primary" variant="outlined" onDelete={() => {}} />
      <Chip label="여자부" color="secondary" variant="outlined" onDelete={() => {}} />
      <Chip label="혼합부" color="info" variant="outlined" onDelete={() => {}} />
      <Chip label="단식" color="success" variant="outlined" onDelete={() => {}} />
      <Chip label="복식" color="warning" variant="outlined" onDelete={() => {}} />
    </div>
  ),
};
