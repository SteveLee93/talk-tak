import { useState } from 'react';
import Tabs from './Tabs';
import { Person, Event, EmojiEvents, Settings } from '@mui/icons-material';

export default {
  title: 'Atoms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'scrollable', 'fullWidth'],
    },
    indicatorColor: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    textColor: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    centered: {
      control: 'boolean',
    },
  },
};

const basicTabs = [
  { label: '탭 1', value: 0 },
  { label: '탭 2', value: 1 },
  { label: '탭 3', value: 2 },
];

export const Default = {
  args: {
    tabs: basicTabs,
  },
};

export const WithIcons = {
  args: {
    tabs: [
      { label: '참가자', value: 0, icon: <Person /> },
      { label: '대회', value: 1, icon: <Event /> },
      { label: '결과', value: 2, icon: <EmojiEvents /> },
      { label: '설정', value: 3, icon: <Settings /> },
    ],
  },
};

export const IconsOnly = {
  args: {
    tabs: [
      { label: '', value: 0, icon: <Person /> },
      { label: '', value: 1, icon: <Event /> },
      { label: '', value: 2, icon: <EmojiEvents /> },
      { label: '', value: 3, icon: <Settings /> },
    ],
  },
};

export const FullWidth = {
  args: {
    tabs: basicTabs,
    variant: 'fullWidth',
  },
};

export const Centered = {
  args: {
    tabs: basicTabs,
    centered: true,
  },
};

export const Scrollable = {
  args: {
    tabs: [
      { label: '탭 1', value: 0 },
      { label: '탭 2', value: 1 },
      { label: '탭 3', value: 2 },
      { label: '탭 4', value: 3 },
      { label: '탭 5', value: 4 },
      { label: '탭 6', value: 5 },
      { label: '탭 7', value: 6 },
      { label: '탭 8', value: 7 },
    ],
    variant: 'scrollable',
  },
};

export const SecondaryColor = {
  args: {
    tabs: basicTabs,
    indicatorColor: 'secondary',
    textColor: 'secondary',
  },
};

export const Disabled = {
  args: {
    tabs: [
      { label: '활성', value: 0 },
      { label: '비활성', value: 1, disabled: true },
      { label: '활성', value: 2 },
    ],
  },
};

export const Vertical = {
  render: () => (
    <div style={{ display: 'flex', height: 300 }}>
      <Tabs
        tabs={[
          { label: '프로필', value: 0, icon: <Person /> },
          { label: '대회', value: 1, icon: <Event /> },
          { label: '결과', value: 2, icon: <EmojiEvents /> },
          { label: '설정', value: 3, icon: <Settings /> },
        ]}
        orientation="vertical"
      />
    </div>
  ),
};

export const WithContent = {
  render: () => {
    const [value, setValue] = useState(0);

    const tabs = [
      { label: '참가자', value: 0 },
      { label: '일정', value: 1 },
      { label: '결과', value: 2 },
    ];

    const renderContent = () => {
      switch (value) {
        case 0:
          return <div><h3>참가자 목록</h3><p>등록된 참가자들의 목록입니다.</p></div>;
        case 1:
          return <div><h3>대회 일정</h3><p>경기 일정을 확인하세요.</p></div>;
        case 2:
          return <div><h3>경기 결과</h3><p>경기 결과를 확인하세요.</p></div>;
        default:
          return null;
      }
    };

    return (
      <div>
        <Tabs tabs={tabs} value={value} onChange={(e, v) => setValue(v)} />
        <div style={{ padding: '24px' }}>
          {renderContent()}
        </div>
      </div>
    );
  },
};

export const TournamentTabs = {
  render: () => {
    const [value, setValue] = useState(0);

    const tabs = [
      { label: '대회 정보', value: 0, icon: <Event /> },
      { label: '참가자', value: 1, icon: <Person /> },
      { label: '결과', value: 2, icon: <EmojiEvents /> },
    ];

    const renderContent = () => {
      switch (value) {
        case 0:
          return (
            <div>
              <h3>대회 정보</h3>
              <p><strong>대회명:</strong> 2024 서울시 탁구 선수권</p>
              <p><strong>일시:</strong> 2024년 3월 15일</p>
              <p><strong>장소:</strong> 서울시 체육관</p>
              <p><strong>참가비:</strong> 30,000원</p>
            </div>
          );
        case 1:
          return (
            <div>
              <h3>참가자 목록</h3>
              <ul>
                <li>김철수 - 남자부 1부</li>
                <li>이영희 - 여자부 1부</li>
                <li>박민수 - 남자부 2부</li>
              </ul>
            </div>
          );
        case 2:
          return (
            <div>
              <h3>경기 결과</h3>
              <p>아직 경기가 진행되지 않았습니다.</p>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
        <Tabs tabs={tabs} value={value} onChange={(e, v) => setValue(v)} variant="fullWidth" />
        <div style={{ padding: '24px' }}>
          {renderContent()}
        </div>
      </div>
    );
  },
};

export const DivisionTabs = {
  render: () => {
    const [division, setDivision] = useState('all');

    const tabs = [
      { label: '전체', value: 'all' },
      { label: '남자부', value: 'male' },
      { label: '여자부', value: 'female' },
      { label: '혼합부', value: 'mixed' },
    ];

    const participants = {
      all: ['김철수', '이영희', '박민수', '최지원'],
      male: ['김철수', '박민수'],
      female: ['이영희', '최지원'],
      mixed: [],
    };

    return (
      <div>
        <Tabs tabs={tabs} value={division} onChange={(e, v) => setDivision(v)} centered />
        <div style={{ padding: '24px' }}>
          <h4>참가자 목록 ({participants[division].length}명)</h4>
          {participants[division].length > 0 ? (
            <ul>
              {participants[division].map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          ) : (
            <p style={{ color: '#666' }}>참가자가 없습니다.</p>
          )}
        </div>
      </div>
    );
  },
};

export const StatusTabs = {
  render: () => {
    const [status, setStatus] = useState('upcoming');

    const tabs = [
      { label: '예정', value: 'upcoming' },
      { label: '진행중', value: 'ongoing' },
      { label: '완료', value: 'completed' },
    ];

    const tournaments = {
      upcoming: [
        { name: '2024 서울시 탁구 선수권', date: '2024.03.15' },
        { name: '2024 경기도 오픈', date: '2024.04.20' },
      ],
      ongoing: [
        { name: '2024 인천시 선수권', date: '2024.02.25' },
      ],
      completed: [
        { name: '2024 부산시 탁구대회', date: '2024.01.20' },
      ],
    };

    return (
      <div>
        <Tabs tabs={tabs} value={status} onChange={(e, v) => setStatus(v)} />
        <div style={{ padding: '24px' }}>
          <h4>{tabs.find(t => t.value === status)?.label} 대회</h4>
          {tournaments[status].map((tournament, index) => (
            <div key={index} style={{ padding: '12px', border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '8px' }}>
              <div style={{ fontWeight: 'bold' }}>{tournament.name}</div>
              <div style={{ fontSize: '14px', color: '#666' }}>{tournament.date}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ScrollableManyTabs = {
  render: () => {
    const [value, setValue] = useState(0);

    const tabs = Array.from({ length: 15 }, (_, i) => ({
      label: `대회 ${i + 1}`,
      value: i,
    }));

    return (
      <div>
        <Tabs
          tabs={tabs}
          value={value}
          onChange={(e, v) => setValue(v)}
          variant="scrollable"
        />
        <div style={{ padding: '24px' }}>
          <h4>대회 {value + 1}</h4>
          <p>선택된 대회의 정보가 여기에 표시됩니다.</p>
        </div>
      </div>
    );
  },
};
