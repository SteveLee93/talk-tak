import { useState } from 'react';
import Input from './Input';
import { Search, Lock } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';

export default {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'email', 'password', 'tel', 'url'],
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    multiline: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
};

export const WithValue = {
  args: {
    label: '이름',
    value: '홍길동',
  },
};

export const Required = {
  args: {
    label: '필수 입력',
    required: true,
    placeholder: '필수 입력 필드',
  },
};

export const WithError = {
  args: {
    label: '이메일',
    value: 'invalid-email',
    error: '올바른 이메일 형식이 아닙니다',
  },
};

export const WithHelperText = {
  args: {
    label: '비밀번호',
    type: 'password',
    helperText: '8자 이상, 영문/숫자/특수문자 조합',
  },
};

export const Disabled = {
  args: {
    label: '비활성화',
    value: '수정 불가',
    disabled: true,
  },
};

export const Multiline = {
  args: {
    label: '상세 설명',
    multiline: true,
    rows: 4,
    placeholder: '상세 설명을 입력하세요',
  },
};

export const WithStartAdornment = {
  args: {
    label: '검색',
    placeholder: '검색어 입력',
    startAdornment: (
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    ),
  },
};

export const WithEndAdornment = {
  args: {
    label: '비밀번호',
    type: 'password',
    endAdornment: (
      <InputAdornment position="end">
        <Lock />
      </InputAdornment>
    ),
  },
};

export const AllTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input label="Text" type="text" placeholder="텍스트 입력" />
      <Input label="Number" type="number" placeholder="숫자 입력" />
      <Input label="Email" type="email" placeholder="이메일 입력" />
      <Input label="Password" type="password" placeholder="비밀번호 입력" />
      <Input label="Tel" type="tel" placeholder="전화번호 입력" />
      <Input label="URL" type="url" placeholder="URL 입력" />
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
      const val = e.target.value;
      setValue(val);

      if (val.length < 3) {
        setError('3자 이상 입력하세요');
      } else {
        setError('');
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input
          label="실시간 검증"
          value={value}
          onChange={handleChange}
          error={error}
          helperText={error || `${value.length}자 입력됨`}
        />
        <p>입력값: {value}</p>
      </div>
    );
  },
};
