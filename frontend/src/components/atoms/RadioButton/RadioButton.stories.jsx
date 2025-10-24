import { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const genderOptions = [
  { value: 'male', label: '남성' },
  { value: 'female', label: '여성' },
];

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
    label: '성별',
    options: genderOptions,
  },
};

export const WithValue = {
  args: {
    label: '부서',
    options: partOptions,
    value: '남자부',
  },
};

export const RowDirection = {
  args: {
    label: '성별',
    options: genderOptions,
    direction: 'row',
  },
};

export const ColumnDirection = {
  args: {
    label: '부',
    options: divisionOptions,
    direction: 'column',
  },
};

export const Disabled = {
  args: {
    label: '비활성화',
    options: genderOptions,
    value: 'male',
    disabled: true,
  },
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioButton
        label="Primary"
        options={genderOptions}
        value="male"
        color="primary"
      />
      <RadioButton
        label="Secondary"
        options={genderOptions}
        value="male"
        color="secondary"
      />
      <RadioButton
        label="Error"
        options={genderOptions}
        value="male"
        color="error"
      />
      <RadioButton
        label="Success"
        options={genderOptions}
        value="male"
        color="success"
      />
      <RadioButton
        label="Warning"
        options={genderOptions}
        value="male"
        color="warning"
      />
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px' }}>
      <RadioButton
        label="Small"
        options={genderOptions}
        value="male"
        size="small"
      />
      <RadioButton
        label="Medium"
        options={genderOptions}
        value="male"
        size="medium"
      />
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [gender, setGender] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <RadioButton
          label="성별을 선택하세요"
          options={genderOptions}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          direction="row"
        />
        <p>선택된 값: {gender || '없음'}</p>
      </div>
    );
  },
};

export const RegistrationExample = {
  render: () => {
    const [formData, setFormData] = useState({
      part: '',
      division: '',
      experience: '',
    });

    const experienceOptions = [
      { value: '1년 미만', label: '1년 미만' },
      { value: '1-3년', label: '1-3년' },
      { value: '3-5년', label: '3-5년' },
      { value: '5년 이상', label: '5년 이상' },
    ];

    const handleChange = (field) => (e) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
        <h3>참가 신청</h3>

        <RadioButton
          label="부서"
          options={partOptions}
          value={formData.part}
          onChange={handleChange('part')}
        />

        <RadioButton
          label="부"
          options={divisionOptions}
          value={formData.division}
          onChange={handleChange('division')}
          direction="row"
        />

        <RadioButton
          label="경력"
          options={experienceOptions}
          value={formData.experience}
          onChange={handleChange('experience')}
        />

        <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>선택 정보:</strong>
          <p>부서: {formData.part || '미선택'}</p>
          <p>부: {formData.division || '미선택'}</p>
          <p>경력: {formData.experience || '미선택'}</p>
        </div>
      </div>
    );
  },
};

export const EventTypeExample = {
  render: () => {
    const [eventType, setEventType] = useState('');

    const eventOptions = [
      { value: '단식', label: '단식' },
      { value: '복식', label: '복식' },
      { value: '단체전', label: '단체전' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <RadioButton
          label="종목 선택"
          options={eventOptions}
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          color="primary"
        />

        {eventType && (
          <div style={{ padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
            <p><strong>선택된 종목:</strong> {eventType}</p>
            {eventType === '단식' && <p>• 1:1 경기로 진행됩니다</p>}
            {eventType === '복식' && <p>• 2:2 경기로 진행됩니다</p>}
            {eventType === '단체전' && <p>• 팀 단위로 진행됩니다</p>}
          </div>
        )}
      </div>
    );
  },
};
