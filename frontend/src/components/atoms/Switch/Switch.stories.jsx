import { useState } from 'react';
import Switch from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    labelPlacement: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    label: '알림 받기',
  },
};

export const Checked = {
  args: {
    label: 'ON 상태',
    checked: true,
  },
};

export const Unchecked = {
  args: {
    label: 'OFF 상태',
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
    label: '비활성화 (ON)',
    checked: true,
    disabled: true,
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
      <Switch label="Primary" color="primary" checked />
      <Switch label="Secondary" color="secondary" checked />
      <Switch label="Error" color="error" checked />
      <Switch label="Success" color="success" checked />
      <Switch label="Warning" color="warning" checked />
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Switch label="Small" size="small" checked />
      <Switch label="Medium" size="medium" checked />
    </div>
  ),
};

export const LabelPlacements = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch label="End (기본)" labelPlacement="end" checked />
      <Switch label="Start" labelPlacement="start" checked />
      <Switch label="Top" labelPlacement="top" checked />
      <Switch label="Bottom" labelPlacement="bottom" checked />
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch
          label="알림 받기"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p>상태: {checked ? 'ON' : 'OFF'}</p>
      </div>
    );
  },
};

export const SettingsExample = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      email: false,
      sms: false,
      darkMode: false,
    });

    const handleChange = (name) => (event) => {
      setSettings({
        ...settings,
        [name]: event.target.checked,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <h3>알림 설정</h3>

        <Switch
          label="푸시 알림"
          checked={settings.notifications}
          onChange={handleChange('notifications')}
          color="primary"
        />

        <Switch
          label="이메일 알림"
          checked={settings.email}
          onChange={handleChange('email')}
          disabled={!settings.notifications}
          color="primary"
        />

        <Switch
          label="SMS 알림"
          checked={settings.sms}
          onChange={handleChange('sms')}
          disabled={!settings.notifications}
          color="primary"
        />

        <Switch
          label="다크 모드"
          checked={settings.darkMode}
          onChange={handleChange('darkMode')}
          color="secondary"
        />

        <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>현재 설정:</strong>
          <p>푸시 알림: {settings.notifications ? 'ON' : 'OFF'}</p>
          <p>이메일: {settings.email ? 'ON' : 'OFF'}</p>
          <p>SMS: {settings.sms ? 'ON' : 'OFF'}</p>
          <p>다크 모드: {settings.darkMode ? 'ON' : 'OFF'}</p>
        </div>
      </div>
    );
  },
};

export const TournamentSettingsExample = {
  render: () => {
    const [config, setConfig] = useState({
      autoAssign: false,
      emailNotify: true,
      publicResults: false,
      allowLateRegistration: false,
    });

    const handleChange = (name) => (event) => {
      setConfig({
        ...config,
        [name]: event.target.checked,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <h3>대회 설정</h3>

        <Switch
          label="자동 조 편성"
          checked={config.autoAssign}
          onChange={handleChange('autoAssign')}
          color="primary"
        />

        <Switch
          label="참가자 이메일 알림"
          checked={config.emailNotify}
          onChange={handleChange('emailNotify')}
          color="primary"
        />

        <Switch
          label="결과 공개"
          checked={config.publicResults}
          onChange={handleChange('publicResults')}
          color="success"
        />

        <Switch
          label="늦은 등록 허용"
          checked={config.allowLateRegistration}
          onChange={handleChange('allowLateRegistration')}
          color="warning"
        />
      </div>
    );
  },
};

export const CompactList = {
  render: () => {
    const [features, setFeatures] = useState({
      f1: true,
      f2: false,
      f3: true,
      f4: false,
    });

    const handleChange = (name) => (event) => {
      setFeatures({
        ...features,
        [name]: event.target.checked,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <Switch
          label="단식 참가"
          checked={features.f1}
          onChange={handleChange('f1')}
          size="small"
        />
        <Switch
          label="복식 참가"
          checked={features.f2}
          onChange={handleChange('f2')}
          size="small"
        />
        <Switch
          label="단체전 참가"
          checked={features.f3}
          onChange={handleChange('f3')}
          size="small"
        />
        <Switch
          label="대기자 등록"
          checked={features.f4}
          onChange={handleChange('f4')}
          size="small"
        />
      </div>
    );
  },
};
