import { useState } from 'react';
import DatePicker from './DatePicker';
import dayjs from 'dayjs';

export default {
  title: 'Atoms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    label: '날짜 선택',
  },
};

export const WithValue = {
  args: {
    label: '대회 날짜',
    value: dayjs('2024-03-15'),
  },
};

export const WithHelperText = {
  args: {
    label: '대회 시작일',
    helperText: '대회가 시작되는 날짜를 선택하세요',
  },
};

export const WithError = {
  args: {
    label: '날짜',
    error: '날짜를 선택해주세요',
  },
};

export const Disabled = {
  args: {
    label: '비활성화',
    value: dayjs('2024-03-15'),
    disabled: true,
  },
};

export const WithMinDate = {
  args: {
    label: '신청 마감일',
    minDate: dayjs(),
    helperText: '오늘 이후 날짜만 선택 가능',
  },
};

export const WithMaxDate = {
  args: {
    label: '과거 날짜',
    maxDate: dayjs(),
    helperText: '오늘 이전 날짜만 선택 가능',
  },
};

export const WithMinMaxDate = {
  args: {
    label: '대회 기간 선택',
    minDate: dayjs('2024-01-01'),
    maxDate: dayjs('2024-12-31'),
    helperText: '2024년 내의 날짜만 선택 가능',
  },
};

export const CustomFormat = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DatePicker label="YYYY-MM-DD (기본)" format="YYYY-MM-DD" />
      <DatePicker label="YYYY/MM/DD" format="YYYY/MM/DD" />
      <DatePicker label="YYYY년 MM월 DD일" format="YYYY년 MM월 DD일" />
      <DatePicker label="MM/DD/YYYY" format="MM/DD/YYYY" />
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [date, setDate] = useState(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DatePicker
          label="날짜 선택"
          value={date}
          onChange={(newDate) => setDate(newDate)}
        />
        <p>선택된 날짜: {date ? date.format('YYYY-MM-DD') : '없음'}</p>
      </div>
    );
  },
};

export const TournamentDates = {
  render: () => {
    const [dates, setDates] = useState({
      registrationStart: null,
      registrationEnd: null,
      tournamentDate: null,
    });

    const handleChange = (field) => (newDate) => {
      setDates({
        ...dates,
        [field]: newDate,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <h3>대회 일정 설정</h3>

        <DatePicker
          label="신청 시작일"
          value={dates.registrationStart}
          onChange={handleChange('registrationStart')}
          minDate={dayjs()}
        />

        <DatePicker
          label="신청 마감일"
          value={dates.registrationEnd}
          onChange={handleChange('registrationEnd')}
          minDate={dates.registrationStart || dayjs()}
          disabled={!dates.registrationStart}
          helperText={!dates.registrationStart ? '먼저 시작일을 선택하세요' : ''}
        />

        <DatePicker
          label="대회 날짜"
          value={dates.tournamentDate}
          onChange={handleChange('tournamentDate')}
          minDate={dates.registrationEnd || dayjs()}
          disabled={!dates.registrationEnd}
          helperText={!dates.registrationEnd ? '먼저 마감일을 선택하세요' : ''}
        />

        <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>선택된 일정:</strong>
          <p>신청 시작: {dates.registrationStart ? dates.registrationStart.format('YYYY-MM-DD') : '미선택'}</p>
          <p>신청 마감: {dates.registrationEnd ? dates.registrationEnd.format('YYYY-MM-DD') : '미선택'}</p>
          <p>대회 날짜: {dates.tournamentDate ? dates.tournamentDate.format('YYYY-MM-DD') : '미선택'}</p>
        </div>
      </div>
    );
  },
};

export const ValidationExample = {
  render: () => {
    const [birthDate, setBirthDate] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (newDate) => {
      setBirthDate(newDate);

      if (!newDate) {
        setError('생년월일을 선택해주세요');
        return;
      }

      const age = dayjs().diff(newDate, 'year');
      if (age < 18) {
        setError('만 18세 이상만 참가 가능합니다');
      } else if (age > 100) {
        setError('올바른 생년월일을 입력해주세요');
      } else {
        setError('');
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DatePicker
          label="생년월일"
          value={birthDate}
          onChange={handleChange}
          maxDate={dayjs()}
          error={error}
          helperText={!error && birthDate ? `나이: ${dayjs().diff(birthDate, 'year')}세` : ''}
        />
      </div>
    );
  },
};

export const MultipleFields = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <h3>대회 등록</h3>

      <DatePicker
        label="생년월일"
        maxDate={dayjs()}
        helperText="참가 자격 확인을 위해 필요합니다"
      />

      <DatePicker
        label="희망 대회일"
        minDate={dayjs()}
        maxDate={dayjs().add(6, 'month')}
        helperText="6개월 이내의 날짜만 선택 가능"
      />

      <DatePicker
        label="이전 참가 날짜 (선택)"
        maxDate={dayjs()}
      />
    </div>
  ),
};

export const CompactStyle = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ width: '200px' }}>
        <DatePicker label="시작일" />
      </div>
      <div style={{ width: '200px' }}>
        <DatePicker label="종료일" />
      </div>
    </div>
  ),
};
