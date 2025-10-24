import Button from './Button';
import { Add, Delete, Send } from '@mui/icons-material';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: '기본 버튼',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
};

export const Outlined = {
  args: {
    children: '아웃라인 버튼',
    variant: 'outlined',
    color: 'primary',
  },
};

export const Text = {
  args: {
    children: '텍스트 버튼',
    variant: 'text',
  },
};

export const Loading = {
  args: {
    children: '로딩중',
    loading: true,
    variant: 'contained',
  },
};

export const Disabled = {
  args: {
    children: '비활성화',
    disabled: true,
    variant: 'contained',
  },
};

export const WithStartIcon = {
  args: {
    children: '추가',
    startIcon: <Add />,
    variant: 'contained',
  },
};

export const WithEndIcon = {
  args: {
    children: '전송',
    endIcon: <Send />,
    variant: 'contained',
  },
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="contained" color="info">Info</Button>
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};
