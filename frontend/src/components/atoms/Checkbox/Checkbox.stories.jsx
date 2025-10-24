import { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    label: '기본 체크박스',
  },
};

export const Checked = {
  args: {
    label: '체크된 상태',
    checked: true,
  },
};

export const Unchecked = {
  args: {
    label: '체크 안된 상태',
    checked: false,
  },
};

export const Disabled = {
  args: {
    label: '비활성화',
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    label: '비활성화 (체크됨)',
    checked: true,
    disabled: true,
  },
};

export const Indeterminate = {
  args: {
    label: '불확정 상태',
    indeterminate: true,
  },
};

export const WithoutLabel = {
  args: {
    checked: true,
  },
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox label="Default" color="default" checked />
      <Checkbox label="Primary" color="primary" checked />
      <Checkbox label="Secondary" color="secondary" checked />
      <Checkbox label="Error" color="error" checked />
      <Checkbox label="Success" color="success" checked />
      <Checkbox label="Warning" color="warning" checked />
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Checkbox label="Small" size="small" checked />
      <Checkbox label="Medium" size="medium" checked />
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox
          label="동의합니다"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p>상태: {checked ? '체크됨' : '체크 안됨'}</p>
      </div>
    );
  },
};

export const GroupExample = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      terms: false,
      privacy: false,
      marketing: false,
    });

    const handleChange = (name) => (event) => {
      setCheckedItems({
        ...checkedItems,
        [name]: event.target.checked,
      });
    };

    const allChecked = Object.values(checkedItems).every(Boolean);
    const someChecked = Object.values(checkedItems).some(Boolean) && !allChecked;

    const handleAllChange = (event) => {
      const newValue = event.target.checked;
      setCheckedItems({
        terms: newValue,
        privacy: newValue,
        marketing: newValue,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox
          label="전체 동의"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={handleAllChange}
          color="primary"
        />
        <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox
            label="이용약관 동의 (필수)"
            checked={checkedItems.terms}
            onChange={handleChange('terms')}
          />
          <Checkbox
            label="개인정보 처리방침 동의 (필수)"
            checked={checkedItems.privacy}
            onChange={handleChange('privacy')}
          />
          <Checkbox
            label="마케팅 정보 수신 동의 (선택)"
            checked={checkedItems.marketing}
            onChange={handleChange('marketing')}
          />
        </div>
      </div>
    );
  },
};

export const ParticipationExample = {
  render: () => {
    const [events, setEvents] = useState({
      singles: false,
      doubles: false,
      team: false,
    });

    const handleChange = (name) => (event) => {
      setEvents({
        ...events,
        [name]: event.target.checked,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4>참가 종목 선택</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox
            label="단식"
            checked={events.singles}
            onChange={handleChange('singles')}
            color="primary"
          />
          <Checkbox
            label="복식"
            checked={events.doubles}
            onChange={handleChange('doubles')}
            color="primary"
          />
          <Checkbox
            label="단체전"
            checked={events.team}
            onChange={handleChange('team')}
            color="primary"
          />
        </div>
        <div>
          <strong>선택된 종목:</strong>
          <p>
            {Object.entries(events)
              .filter(([, checked]) => checked)
              .map(([key]) => {
                const labels = { singles: '단식', doubles: '복식', team: '단체전' };
                return labels[key];
              })
              .join(', ') || '없음'}
          </p>
        </div>
      </div>
    );
  },
};
