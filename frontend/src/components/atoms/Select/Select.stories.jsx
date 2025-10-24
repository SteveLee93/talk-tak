import { useState } from 'react';
import Select from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    required: {
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

const partOptions = [
  { value: '남자부', label: '남자부' },
  { value: '여자부', label: '여자부' },
  { value: '혼합부', label: '혼합부' },
];

const divisionOptions = [
  { value: '1부', label: '1부' },
  { value: '2부', label: '2부' },
  { value: '3부', label: '3부' },
  { value: '4부', label: '4부' },
];

export const Default = {
  args: {
    label: '부서 선택',
    options: partOptions,
  },
};

export const WithValue = {
  args: {
    label: '부서 선택',
    options: partOptions,
    value: '남자부',
  },
};

export const WithPlaceholder = {
  args: {
    label: '부서 선택',
    options: partOptions,
    placeholder: '부서를 선택하세요',
  },
};

export const Required = {
  args: {
    label: '필수 선택',
    options: partOptions,
    required: true,
  },
};

export const WithError = {
  args: {
    label: '부서 선택',
    options: partOptions,
    error: '부서를 선택해주세요',
  },
};

export const WithHelperText = {
  args: {
    label: '부 선택',
    options: divisionOptions,
    helperText: '본인의 실력에 맞는 부를 선택하세요',
  },
};

export const Disabled = {
  args: {
    label: '비활성화',
    options: partOptions,
    value: '남자부',
    disabled: true,
  },
};

export const Interactive = {
  render: () => {
    const [part, setPart] = useState('');
    const [division, setDivision] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Select
          label="부서"
          options={partOptions}
          value={part}
          onChange={(e) => setPart(e.target.value)}
          placeholder="부서를 선택하세요"
        />

        <Select
          label="부"
          options={divisionOptions}
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          disabled={!part}
          helperText={!part ? '먼저 부서를 선택하세요' : '부를 선택하세요'}
        />

        <div>
          <strong>선택된 값:</strong>
          <p>부서: {part || '없음'}</p>
          <p>부: {division || '없음'}</p>
        </div>
      </div>
    );
  },
};

export const FormExample = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <h3>참가 신청 폼</h3>
      <Select
        label="부서"
        options={partOptions}
        placeholder="부서 선택"
        required
      />
      <Select
        label="부"
        options={divisionOptions}
        placeholder="부 선택"
        required
      />
      <Select
        label="종목"
        options={[
          { value: '단식', label: '단식' },
          { value: '복식', label: '복식' },
          { value: '단체전', label: '단체전' },
        ]}
        placeholder="종목 선택"
        required
      />
    </div>
  ),
};
