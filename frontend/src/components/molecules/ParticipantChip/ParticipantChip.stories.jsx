import { useState } from 'react';
import ParticipantChip from './ParticipantChip';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';

export default {
  title: 'Molecules/ParticipantChip',
  component: ParticipantChip,
  tags: ['autodocs'],
  argTypes: {
    draggable: {
      control: 'boolean',
    },
    hasWarning: {
      control: 'boolean',
    },
    showRemoveButton: {
      control: 'boolean',
    },
  },
};

const sampleParticipant = {
  id: 1,
  name: '김철수',
  affiliation: 'ABC 클럽',
};

export const Default = {
  args: {
    participant: sampleParticipant,
  },
};

export const Draggable = {
  args: {
    participant: sampleParticipant,
    draggable: true,
  },
};

export const NotDraggable = {
  args: {
    participant: sampleParticipant,
    draggable: false,
  },
};

export const WithWarning = {
  args: {
    participant: sampleParticipant,
    hasWarning: true,
  },
};

export const WithRemoveButton = {
  args: {
    participant: sampleParticipant,
    showRemoveButton: true,
    onRemove: (id) => alert(`Remove participant ${id}`),
  },
};

export const DraggableWithRemove = {
  args: {
    participant: sampleParticipant,
    draggable: true,
    showRemoveButton: true,
    onRemove: (id) => alert(`Remove participant ${id}`),
  },
};

export const WarningWithRemove = {
  args: {
    participant: sampleParticipant,
    hasWarning: true,
    showRemoveButton: true,
    onRemove: (id) => alert(`Remove participant ${id}`),
  },
};

export const MultipleParticipants = {
  render: () => {
    const participants = [
      { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
      { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
      { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
      { id: 4, name: '정수현', affiliation: 'GHI 체육관' },
      { id: 5, name: '강민호', affiliation: 'JKL 클럽' },
    ];

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {participants.map((participant) => (
          <ParticipantChip key={participant.id} participant={participant} />
        ))}
      </Box>
    );
  },
};

export const WithRemoveInteractive = {
  render: () => {
    const [participants, setParticipants] = useState([
      { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
      { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
      { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
      { id: 4, name: '정수현', affiliation: 'GHI 체육관' },
    ]);

    const handleRemove = (id) => {
      setParticipants((prev) => prev.filter((p) => p.id !== id));
    };

    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          참가자 목록 ({participants.length}명)
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {participants.map((participant) => (
            <ParticipantChip
              key={participant.id}
              participant={participant}
              showRemoveButton
              onRemove={handleRemove}
            />
          ))}
          {participants.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              참가자가 없습니다
            </Typography>
          )}
        </Box>
      </div>
    );
  },
};

export const DragAndDrop = {
  render: () => {
    const [draggedId, setDraggedId] = useState(null);

    const participants = [
      { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
      { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
      { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
    ];

    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          드래그 가능한 참가자
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {participants.map((participant) => (
            <ParticipantChip
              key={participant.id}
              participant={participant}
              draggable
              onDragStart={() => setDraggedId(participant.id)}
              onDragEnd={() => setDraggedId(null)}
            />
          ))}
        </Box>
        {draggedId && (
          <Box sx={{ mt: 2, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
            <Typography variant="body2">
              드래그 중: ID {draggedId}
            </Typography>
          </Box>
        )}
      </div>
    );
  },
};

export const MixedStates = {
  render: () => {
    const participants = [
      { id: 1, name: '김철수', affiliation: 'ABC 클럽', warning: false, removable: false },
      { id: 2, name: '이영희', affiliation: 'XYZ 체육관', warning: true, removable: false },
      { id: 3, name: '박민수', affiliation: 'DEF 클럽', warning: false, removable: true },
      { id: 4, name: '정수현', affiliation: 'GHI 체육관', warning: true, removable: true },
    ];

    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          다양한 상태의 참가자 칩
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div>
            <Typography variant="caption" color="text.secondary">
              일반
            </Typography>
            <Box sx={{ mt: 1 }}>
              <ParticipantChip participant={participants[0]} />
            </Box>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">
              경고
            </Typography>
            <Box sx={{ mt: 1 }}>
              <ParticipantChip participant={participants[1]} hasWarning />
            </Box>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">
              제거 가능
            </Typography>
            <Box sx={{ mt: 1 }}>
              <ParticipantChip
                participant={participants[2]}
                showRemoveButton
                onRemove={() => alert('Remove')}
              />
            </Box>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">
              경고 + 제거 가능
            </Typography>
            <Box sx={{ mt: 1 }}>
              <ParticipantChip
                participant={participants[3]}
                hasWarning
                showRemoveButton
                onRemove={() => alert('Remove')}
              />
            </Box>
          </div>
        </Box>
      </div>
    );
  },
};

export const ParticipantPool = {
  render: () => {
    const [participants] = useState([
      { id: 1, name: '김철수', affiliation: 'ABC 클럽' },
      { id: 2, name: '이영희', affiliation: 'XYZ 체육관' },
      { id: 3, name: '박민수', affiliation: 'DEF 클럽' },
      { id: 4, name: '정수현', affiliation: 'GHI 체육관' },
      { id: 5, name: '강민호', affiliation: 'JKL 클럽' },
      { id: 6, name: '최지원', affiliation: 'MNO 체육관' },
      { id: 7, name: '윤서연', affiliation: 'PQR 클럽' },
      { id: 8, name: '한지민', affiliation: 'STU 체육관' },
    ]);

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          참가자 풀
        </Typography>
        <Box
          sx={{
            p: 2,
            bgcolor: 'grey.100',
            borderRadius: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            minHeight: 100,
          }}
        >
          {participants.map((participant) => (
            <ParticipantChip
              key={participant.id}
              participant={participant}
              draggable
            />
          ))}
        </Box>
      </div>
    );
  },
};

export const LongAffiliationName = {
  render: () => {
    const participants = [
      { id: 1, name: '김철수', affiliation: '서울시 강남구 탁구동호회' },
      { id: 2, name: '이영희', affiliation: '경기도 성남시 체육관 소속' },
      { id: 3, name: '박민수', affiliation: '인천광역시 남동구 탁구클럽' },
    ];

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {participants.map((participant) => (
          <ParticipantChip key={participant.id} participant={participant} />
        ))}
      </Box>
    );
  },
};
