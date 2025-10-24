import { useState } from 'react';
import GroupCard from './GroupCard';
import ParticipantChip from '../ParticipantChip';
import Grid from '../../atoms/Grid';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';

export default {
  title: 'Molecules/GroupCard',
  component: GroupCard,
  tags: ['autodocs'],
};

const sampleGroup = {
  id: 1,
  name: 'A 조',
  participants: [
    { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
    { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
  ],
  maxParticipants: 4,
};

export const Default = {
  args: {
    group: sampleGroup,
  },
};

export const Empty = {
  args: {
    group: {
      id: 1,
      name: 'A 조',
      participants: [],
      maxParticipants: 4,
    },
  },
};

export const Full = {
  args: {
    group: {
      id: 2,
      name: 'B 조',
      participants: [
        { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
        { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
        { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
        { id: 4, name: '정수현', affiliation: 'GHI 체육관' },
      ],
      maxParticipants: 4,
    },
  },
};

export const WithWarnings = {
  args: {
    group: {
      id: 3,
      name: 'C 조',
      participants: [
        { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
        { id: 2, name: '이영희', affiliation: 'ABC 클럽' },
      ],
      maxParticipants: 4,
    },
    warnings: ['같은 소속(ABC 클럽)의 참가자가 2명 이상입니다'],
  },
};

export const DragOver = {
  args: {
    group: sampleGroup,
    isDragOver: true,
  },
};

export const WithRemoveButton = {
  render: () => {
    const [group, setGroup] = useState(sampleGroup);

    const handleRemoveParticipant = (groupId, participantId) => {
      setGroup((prev) => ({
        ...prev,
        participants: prev.participants.filter((p) => p.id !== participantId),
      }));
    };

    return (
      <GroupCard
        group={group}
        onRemoveParticipant={handleRemoveParticipant}
      />
    );
  },
};

export const MultipleGroups = {
  render: () => {
    const groups = [
      {
        id: 1,
        name: 'A 조',
        participants: [
          { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
          { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
        ],
        maxParticipants: 4,
      },
      {
        id: 2,
        name: 'B 조',
        participants: [
          { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
        ],
        maxParticipants: 4,
      },
      {
        id: 3,
        name: 'C 조',
        participants: [],
        maxParticipants: 4,
      },
      {
        id: 4,
        name: 'D 조',
        participants: [
          { id: 4, name: '정수현', affiliation: 'GHI 체육관' },
          { id: 5, name: '강민호', affiliation: 'JKL 클럽' },
          { id: 6, name: '최지원', affiliation: 'MNO 체육관' },
          { id: 7, name: '윤서연', affiliation: 'PQR 클럽' },
        ],
        maxParticipants: 4,
      },
    ];

    return (
      <Grid container spacing={2}>
        {groups.map((group) => (
          <Grid item xs={12} md={6} key={group.id}>
            <GroupCard group={group} />
          </Grid>
        ))}
      </Grid>
    );
  },
};

export const Interactive = {
  render: () => {
    const [groups, setGroups] = useState([
      { id: 1, name: 'A 조', participants: [], maxParticipants: 4 },
      { id: 2, name: 'B 조', participants: [], maxParticipants: 4 },
      { id: 3, name: 'C 조', participants: [], maxParticipants: 4 },
    ]);

    const [availableParticipants, setAvailableParticipants] = useState([
      { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
      { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
      { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
      { id: 4, name: '정수현', affiliation: 'GHI 체육관' },
      { id: 5, name: '강민호', affiliation: 'ABC 클럽' },
      { id: 6, name: '최지원', affiliation: 'JKL 체육관' },
    ]);

    const [dragOverGroupId, setDragOverGroupId] = useState(null);

    const handleDrop = (groupId, participant) => {
      // 이미 다른 조에 있는지 확인
      const isAlreadyAssigned = groups.some((g) =>
        g.participants.some((p) => p.id === participant.id)
      );

      if (isAlreadyAssigned) {
        // 다른 조에서 제거
        setGroups((prev) =>
          prev.map((g) => ({
            ...g,
            participants: g.participants.filter((p) => p.id !== participant.id),
          }))
        );
      } else {
        // 대기 목록에서 제거
        setAvailableParticipants((prev) => prev.filter((p) => p.id !== participant.id));
      }

      // 새 조에 추가
      setGroups((prev) =>
        prev.map((g) =>
          g.id === groupId ? { ...g, participants: [...g.participants, participant] } : g
        )
      );

      setDragOverGroupId(null);
    };

    const handleRemoveParticipant = (groupId, participantId) => {
      const participant = groups
        .find((g) => g.id === groupId)
        ?.participants.find((p) => p.id === participantId);

      if (participant) {
        setGroups((prev) =>
          prev.map((g) =>
            g.id === groupId
              ? { ...g, participants: g.participants.filter((p) => p.id !== participantId) }
              : g
          )
        );
        setAvailableParticipants((prev) => [...prev, participant]);
      }
    };

    // 각 조의 소속 중복 경고
    const getWarnings = (group) => {
      const affiliations = group.participants.map((p) => p.affiliation);
      const duplicates = affiliations.filter((a, i) => affiliations.indexOf(a) !== i);
      const uniqueDuplicates = [...new Set(duplicates)];

      return uniqueDuplicates.map(
        (affiliation) => `같은 소속(${affiliation})의 참가자가 2명 이상입니다`
      );
    };

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          대기 중인 참가자
        </Typography>
        <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {availableParticipants.map((participant) => (
              <ParticipantChip
                key={participant.id}
                participant={participant}
                draggable
              />
            ))}
            {availableParticipants.length === 0 && (
              <Typography variant="body2" color="text.secondary">
                모든 참가자가 조에 배정되었습니다
              </Typography>
            )}
          </Box>
        </Box>

        <Typography variant="h6" gutterBottom>
          조 편성
        </Typography>
        <Grid container spacing={2}>
          {groups.map((group) => (
            <Grid item xs={12} md={4} key={group.id}>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOverGroupId(group.id);
                }}
                onDragLeave={() => setDragOverGroupId(null)}
              >
                <GroupCard
                  group={group}
                  onDrop={handleDrop}
                  onRemoveParticipant={handleRemoveParticipant}
                  isDragOver={dragOverGroupId === group.id}
                  warnings={getWarnings(group)}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  },
};

export const TournamentGrouping = {
  render: () => {
    const groups = [
      {
        id: 1,
        name: 'A 조',
        participants: [
          { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
          { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
          { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
        ],
        maxParticipants: 4,
      },
      {
        id: 2,
        name: 'B 조',
        participants: [
          { id: 4, name: '정수현', affiliation: 'GHI 체육관' },
          { id: 5, name: '강민호', affiliation: 'JKL 클럽' },
        ],
        maxParticipants: 4,
      },
      {
        id: 3,
        name: 'C 조',
        participants: [
          { id: 6, name: '최지원', affiliation: 'MNO 체육관' },
          { id: 7, name: '윤서연', affiliation: 'PQR 클럽' },
          { id: 8, name: '한지민', affiliation: 'STU 클럽' },
          { id: 9, name: '오승환', affiliation: 'VWX 체육관' },
        ],
        maxParticipants: 4,
      },
      {
        id: 4,
        name: 'D 조',
        participants: [
          { id: 10, name: '류현진', affiliation: 'YZ 클럽' },
        ],
        maxParticipants: 4,
      },
    ];

    const warnings = {
      1: [],
      2: [],
      3: [],
      4: [],
    };

    return (
      <div>
        <Typography variant="h5" gutterBottom>
          2024 봄 탁구 대회 - 남자부 1부 조 편성
        </Typography>
        <Grid container spacing={2}>
          {groups.map((group) => (
            <Grid item xs={12} sm={6} md={3} key={group.id}>
              <GroupCard
                group={group}
                warnings={warnings[group.id]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  },
};

export const WithDuplicateAffiliation = {
  render: () => {
    const groups = [
      {
        id: 1,
        name: 'A 조',
        participants: [
          { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
          { id: 2, name: '이영희', affiliation: 'ABC 클럽' },
          { id: 3, name: '박민수', affiliation: 'XYZ 체육관' },
        ],
        maxParticipants: 4,
      },
      {
        id: 2,
        name: 'B 조',
        participants: [
          { id: 4, name: '정수현', affiliation: 'DEF 클럽' },
          { id: 5, name: '강민호', affiliation: 'DEF 클럽' },
          { id: 6, name: '최지원', affiliation: 'DEF 클럽' },
        ],
        maxParticipants: 4,
      },
    ];

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <GroupCard
            group={groups[0]}
            warnings={['같은 소속(ABC 클럽)의 참가자가 2명 이상입니다']}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GroupCard
            group={groups[1]}
            warnings={['같은 소속(DEF 클럽)의 참가자가 3명 이상입니다']}
          />
        </Grid>
      </Grid>
    );
  },
};
