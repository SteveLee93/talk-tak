import { useState } from 'react';
import TeamCard from './TeamCard';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';

export default {
  title: 'Molecules/TeamCard',
  component: TeamCard,
  tags: ['autodocs'],
  argTypes: {
    showPaymentCheckbox: {
      control: 'boolean',
    },
    defaultExpanded: {
      control: 'boolean',
    },
  },
};

const sampleTeam = {
  id: 1,
  affiliation: 'ABC 탁구클럽',
  representative: '김철수',
  phone: '010-1234-5678',
  isIndividual: false,
  participants: [
    { id: 1, name: '김철수', part: '남자부 1부', events: ['단식', '복식'] },
    { id: 2, name: '이영희', part: '여자부 1부', events: ['단식'] },
    { id: 3, name: '박민수', part: '남자부 2부', events: ['복식', '단체전'] },
  ],
  paymentStatus: {
    1: true,
    2: true,
    3: false,
  },
};

export const Default = {
  args: {
    team: sampleTeam,
  },
};

export const IndividualTeam = {
  args: {
    team: {
      ...sampleTeam,
      affiliation: '개인 참가자',
      isIndividual: true,
      participants: [
        { id: 1, name: '홍길동', part: '남자부 1부', events: ['단식'] },
      ],
    },
  },
};

export const GroupTeam = {
  args: {
    team: sampleTeam,
  },
};

export const WithPaymentCheckbox = {
  render: () => {
    const [team, setTeam] = useState(sampleTeam);

    const handlePaymentChange = (teamId, participantId, checked) => {
      setTeam((prevTeam) => ({
        ...prevTeam,
        paymentStatus: {
          ...prevTeam.paymentStatus,
          [participantId]: checked,
        },
      }));
    };

    return (
      <TeamCard
        team={team}
        showPaymentCheckbox
        onPaymentChange={handlePaymentChange}
      />
    );
  },
};

export const DefaultExpanded = {
  args: {
    team: sampleTeam,
    defaultExpanded: true,
  },
};

export const AllPaid = {
  args: {
    team: {
      ...sampleTeam,
      paymentStatus: {
        1: true,
        2: true,
        3: true,
      },
    },
    showPaymentCheckbox: true,
  },
};

export const NoPaid = {
  args: {
    team: {
      ...sampleTeam,
      paymentStatus: {
        1: false,
        2: false,
        3: false,
      },
    },
    showPaymentCheckbox: true,
  },
};

export const LargeTeam = {
  args: {
    team: {
      id: 2,
      affiliation: 'XYZ 체육관',
      representative: '정수현',
      phone: '010-9876-5432',
      isIndividual: false,
      participants: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `참가자 ${i + 1}`,
        part: i % 2 === 0 ? '남자부' : '여자부',
        events: ['단식'],
      })),
      paymentStatus: {},
    },
    defaultExpanded: true,
  },
};

export const SingleParticipant = {
  args: {
    team: {
      id: 3,
      affiliation: '개인',
      representative: '최지원',
      phone: '010-1111-2222',
      isIndividual: true,
      participants: [
        { id: 1, name: '최지원', part: '여자부 1부', events: ['단식', '복식'] },
      ],
      paymentStatus: { 1: true },
    },
    showPaymentCheckbox: true,
  },
};

export const MultipleTeams = {
  render: () => {
    const teams = [
      {
        id: 1,
        affiliation: 'A 탁구클럽',
        representative: '김철수',
        phone: '010-1234-5678',
        isIndividual: false,
        participants: [
          { id: 1, name: '김철수', part: '남자부 1부', events: ['단식'] },
          { id: 2, name: '이영희', part: '여자부 1부', events: ['복식'] },
        ],
        paymentStatus: { 1: true, 2: false },
      },
      {
        id: 2,
        affiliation: 'B 체육관',
        representative: '박민수',
        phone: '010-2345-6789',
        isIndividual: false,
        participants: [
          { id: 3, name: '박민수', part: '남자부 2부', events: ['단식', '복식'] },
          { id: 4, name: '정수현', part: '남자부 1부', events: ['단체전'] },
          { id: 5, name: '강민호', part: '남자부 3부', events: ['복식'] },
        ],
        paymentStatus: { 3: true, 4: true, 5: true },
      },
      {
        id: 3,
        affiliation: '개인',
        representative: '최지원',
        phone: '010-3456-7890',
        isIndividual: true,
        participants: [
          { id: 6, name: '최지원', part: '여자부 1부', events: ['단식'] },
        ],
        paymentStatus: { 6: true },
      },
    ];

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} showPaymentCheckbox />
        ))}
      </Box>
    );
  },
};

export const Interactive = {
  render: () => {
    const [teams, setTeams] = useState([
      {
        id: 1,
        affiliation: 'A 탁구클럽',
        representative: '김철수',
        phone: '010-1234-5678',
        isIndividual: false,
        participants: [
          { id: 1, name: '김철수', part: '남자부 1부', events: ['단식'] },
          { id: 2, name: '이영희', part: '여자부 1부', events: ['복식'] },
          { id: 3, name: '박민수', part: '남자부 2부', events: ['단체전'] },
        ],
        paymentStatus: { 1: false, 2: false, 3: false },
      },
      {
        id: 2,
        affiliation: 'B 체육관',
        representative: '정수현',
        phone: '010-2345-6789',
        isIndividual: false,
        participants: [
          { id: 4, name: '정수현', part: '남자부 1부', events: ['단식', '복식'] },
          { id: 5, name: '강민호', part: '남자부 2부', events: ['단식'] },
        ],
        paymentStatus: { 4: false, 5: false },
      },
    ]);

    const handlePaymentChange = (teamId, participantId, checked) => {
      setTeams((prevTeams) =>
        prevTeams.map((team) =>
          team.id === teamId
            ? {
                ...team,
                paymentStatus: {
                  ...team.paymentStatus,
                  [participantId]: checked,
                },
              }
            : team
        )
      );
    };

    const totalParticipants = teams.reduce((sum, team) => sum + team.participants.length, 0);
    const paidCount = teams.reduce(
      (sum, team) => sum + Object.values(team.paymentStatus).filter(Boolean).length,
      0
    );

    return (
      <div>
        <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="h6">결제 현황</Typography>
          <Typography variant="body2">
            전체: {totalParticipants}명 | 완료: {paidCount}명 | 미완료: {totalParticipants - paidCount}명
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              showPaymentCheckbox
              onPaymentChange={handlePaymentChange}
              defaultExpanded
            />
          ))}
        </Box>
      </div>
    );
  },
};

export const TeamManagement = {
  render: () => {
    const [selectedTeamId, setSelectedTeamId] = useState(null);

    const teams = [
      {
        id: 1,
        affiliation: 'A 탁구클럽',
        representative: '김철수',
        phone: '010-1234-5678',
        isIndividual: false,
        participants: [
          { id: 1, name: '김철수', part: '남자부 1부', events: ['단식'] },
          { id: 2, name: '이영희', part: '여자부 1부', events: ['복식'] },
        ],
        paymentStatus: {},
      },
      {
        id: 2,
        affiliation: 'B 체육관',
        representative: '박민수',
        phone: '010-2345-6789',
        isIndividual: false,
        participants: [
          { id: 3, name: '박민수', part: '남자부 2부', events: ['단식', '복식'] },
          { id: 4, name: '정수현', part: '남자부 1부', events: ['단체전'] },
        ],
        paymentStatus: {},
      },
    ];

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          팀 관리
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              onTeamClick={(id) => setSelectedTeamId(id)}
            />
          ))}
        </Box>
        {selectedTeamId && (
          <Box sx={{ mt: 2, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
            <Typography variant="body2">선택된 팀 ID: {selectedTeamId}</Typography>
          </Box>
        )}
      </div>
    );
  },
};

export const DifferentEventTypes = {
  render: () => {
    const teams = [
      {
        id: 1,
        affiliation: '단식 전문팀',
        representative: '김철수',
        phone: '010-1234-5678',
        isIndividual: false,
        participants: [
          { id: 1, name: '김철수', part: '남자부 1부', events: ['단식'] },
          { id: 2, name: '이영희', part: '남자부 1부', events: ['단식'] },
          { id: 3, name: '박민수', part: '남자부 2부', events: ['단식'] },
        ],
        paymentStatus: {},
      },
      {
        id: 2,
        affiliation: '복식 전문팀',
        representative: '정수현',
        phone: '010-2345-6789',
        isIndividual: false,
        participants: [
          { id: 4, name: '정수현', part: '여자부 1부', events: ['복식'] },
          { id: 5, name: '강민호', part: '여자부 1부', events: ['복식'] },
        ],
        paymentStatus: {},
      },
      {
        id: 3,
        affiliation: '종합팀',
        representative: '최지원',
        phone: '010-3456-7890',
        isIndividual: false,
        participants: [
          { id: 6, name: '최지원', part: '혼합부', events: ['단식', '복식', '단체전'] },
          { id: 7, name: '윤서연', part: '혼합부', events: ['단식', '복식'] },
        ],
        paymentStatus: {},
      },
    ];

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} defaultExpanded />
        ))}
      </Box>
    );
  },
};
