import { useState } from 'react';
import TeamMemberRow from './TeamMemberRow';

export default {
  title: 'Molecules/TeamMemberRow',
  component: TeamMemberRow,
  tags: ['autodocs'],
  argTypes: {
    showCheckbox: {
      control: 'boolean',
    },
    showDragHandle: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const mockMember = {
  id: 1,
  name: '홍길동',
  part: '남자부',
  checked: false,
};

export const Default = {
  args: {
    member: mockMember,
    partOptions: [
      { value: '남자부', label: '남자부' },
      { value: '여자부', label: '여자부' },
      { value: '혼합부', label: '혼합부' },
    ],
  },
};

export const WithCheckbox = {
  args: {
    ...Default.args,
    showCheckbox: true,
  },
};

export const WithDragHandle = {
  args: {
    ...Default.args,
    showDragHandle: true,
  },
};

export const WithBoth = {
  args: {
    ...Default.args,
    showCheckbox: true,
    showDragHandle: true,
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Interactive = {
  render: () => {
    const [member, setMember] = useState(mockMember);
    const [members, setMembers] = useState([
      { id: 1, name: '홍길동', part: '남자부', checked: false },
      { id: 2, name: '김철수', part: '여자부', checked: false },
      { id: 3, name: '이영희', part: '혼합부', checked: true },
    ]);

    const handleMemberChange = (id, updatedMember) => {
      setMembers(members.map(m => m.id === id ? updatedMember : m));
    };

    const handleDelete = (id) => {
      setMembers(members.filter(m => m.id !== id));
    };

    const handleCheckChange = (id, checked) => {
      setMembers(members.map(m => m.id === id ? { ...m, checked } : m));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3>팀원 목록 (Interactive)</h3>
        {members.map(member => (
          <TeamMemberRow
            key={member.id}
            member={member}
            showCheckbox
            showDragHandle
            onMemberChange={(updated) => handleMemberChange(member.id, updated)}
            onDelete={() => handleDelete(member.id)}
            onCheckChange={(id, checked) => handleCheckChange(id, checked)}
            partOptions={[
              { value: '남자부', label: '남자부' },
              { value: '여자부', label: '여자부' },
              { value: '혼합부', label: '혼합부' },
            ]}
          />
        ))}
      </div>
    );
  },
};
