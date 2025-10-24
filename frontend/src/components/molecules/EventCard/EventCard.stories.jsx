import { useState } from 'react';
import EventCard from './EventCard';

export default {
  title: 'Molecules/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  argTypes: {
    showApplyButton: {
      control: 'boolean',
    },
    showParticipantCount: {
      control: 'boolean',
    },
    isApplied: {
      control: 'boolean',
    },
    defaultExpanded: {
      control: 'boolean',
    },
  },
};

const mockEvent = {
  id: 1,
  name: '남자 단식',
  type: '단식',
  divisionRange: '1-4부',
  maxParticipants: 32,
  currentParticipants: 15,
  description: '남자 단식 경기입니다.',
  rules: '3세트 2선승제로 진행됩니다.',
};

export const Default = {
  args: {
    event: mockEvent,
  },
};

export const Applied = {
  args: {
    event: mockEvent,
    isApplied: true,
  },
};

export const Full = {
  args: {
    event: {
      ...mockEvent,
      currentParticipants: 32,
    },
  },
};

export const Expanded = {
  args: {
    event: mockEvent,
    defaultExpanded: true,
  },
};

export const 복식 = {
  args: {
    event: {
      ...mockEvent,
      name: '남자 복식',
      type: '복식',
      currentParticipants: 8,
      maxParticipants: 16,
    },
  },
};

export const 단체전 = {
  args: {
    event: {
      ...mockEvent,
      name: '단체전',
      type: '단체전',
      currentParticipants: 4,
      maxParticipants: 8,
      divisionRange: '전체',
    },
  },
};

export const Interactive = {
  render: () => {
    const [events, setEvents] = useState([
      {
        id: 1,
        name: '남자 단식',
        type: '단식',
        divisionRange: '1-4부',
        maxParticipants: 32,
        currentParticipants: 15,
        description: '남자 단식 경기입니다.',
        rules: '3세트 2선승제로 진행됩니다.',
        applied: false,
      },
      {
        id: 2,
        name: '남자 복식',
        type: '복식',
        divisionRange: '1-4부',
        maxParticipants: 16,
        currentParticipants: 8,
        description: '남자 복식 경기입니다.',
        rules: '3세트 2선승제로 진행됩니다.',
        applied: false,
      },
      {
        id: 3,
        name: '단체전',
        type: '단체전',
        divisionRange: '전체',
        maxParticipants: 8,
        currentParticipants: 4,
        description: '단체전 경기입니다.',
        rules: '5경기 3선승제로 진행됩니다.',
        applied: true,
      },
    ]);

    const handleApply = (id) => {
      setEvents(events.map(e =>
        e.id === id ? { ...e, applied: true, currentParticipants: e.currentParticipants + 1 } : e
      ));
    };

    const handleCancel = (id) => {
      setEvents(events.map(e =>
        e.id === id ? { ...e, applied: false, currentParticipants: e.currentParticipants - 1 } : e
      ));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3>종목 선택 (Interactive)</h3>
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            isApplied={event.applied}
            onApply={handleApply}
            onCancel={handleCancel}
          />
        ))}
      </div>
    );
  },
};
