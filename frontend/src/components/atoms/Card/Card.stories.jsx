import { useState } from 'react';
import Card from './Card';
import Button from '../Button';
import IconButton from '../IconButton';
import Avatar from '../Avatar';
import { MoreVert, Favorite, Share, Event, Person } from '@mui/icons-material';

export default {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    raised: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: '기본 카드 컨텐츠입니다.',
  },
};

export const WithTitle = {
  args: {
    title: '카드 제목',
    children: '제목이 있는 카드입니다.',
  },
};

export const WithActions = {
  args: {
    title: '액션이 있는 카드',
    children: '하단에 버튼이 있는 카드입니다.',
    actions: (
      <>
        <Button size="small">취소</Button>
        <Button size="small" variant="contained">확인</Button>
      </>
    ),
  },
};

export const WithAvatar = {
  args: {
    title: '김철수',
    avatar: <Avatar>김</Avatar>,
    children: '아바타가 있는 카드입니다.',
  },
};

export const WithHeaderAction = {
  args: {
    title: '헤더 액션',
    action: (
      <IconButton>
        <MoreVert />
      </IconButton>
    ),
    children: '헤더에 액션 버튼이 있는 카드입니다.',
  },
};

export const Raised = {
  args: {
    title: 'Raised 카드',
    raised: true,
    children: '그림자 효과가 강조된 카드입니다.',
  },
};

export const TournamentCard = {
  render: () => (
    <Card
      title="2024 서울시 탁구 선수권"
      avatar={<Avatar sx={{ bgcolor: '#1976d2' }}><Event /></Avatar>}
      action={
        <IconButton>
          <MoreVert />
        </IconButton>
      }
      actions={
        <>
          <Button size="small" startIcon={<Favorite />}>좋아요</Button>
          <Button size="small" startIcon={<Share />}>공유</Button>
          <Button size="small" variant="contained">신청하기</Button>
        </>
      }
      raised
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0 }}><strong>일시:</strong> 2024년 3월 15일</p>
        <p style={{ margin: 0 }}><strong>장소:</strong> 서울시 체육관</p>
        <p style={{ margin: 0 }}><strong>참가비:</strong> 30,000원</p>
        <p style={{ margin: 0 }}><strong>신청:</strong> 15 / 32명</p>
      </div>
    </Card>
  ),
};

export const ParticipantCard = {
  render: () => (
    <Card
      title="김철수"
      avatar={<Avatar sx={{ bgcolor: '#2e7d32' }}>김</Avatar>}
      action={
        <IconButton>
          <MoreVert />
        </IconButton>
      }
      sx={{ maxWidth: 400 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0 }}><strong>부서:</strong> 남자부</p>
        <p style={{ margin: 0 }}><strong>부:</strong> 1부</p>
        <p style={{ margin: 0 }}><strong>종목:</strong> 단식, 복식</p>
        <p style={{ margin: 0 }}><strong>연락처:</strong> 010-1234-5678</p>
      </div>
    </Card>
  ),
};

export const StatCard = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      <Card raised>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '36px', color: '#1976d2' }}>128</h2>
          <p style={{ margin: 0, color: '#666' }}>총 참가자</p>
        </div>
      </Card>
      <Card raised>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '36px', color: '#2e7d32' }}>45</h2>
          <p style={{ margin: 0, color: '#666' }}>완료된 경기</p>
        </div>
      </Card>
      <Card raised>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '36px', color: '#ed6c02' }}>8</h2>
          <p style={{ margin: 0, color: '#666' }}>진행 중</p>
        </div>
      </Card>
    </div>
  ),
};

export const InfoCard = {
  render: () => (
    <Card
      title="대회 안내"
      sx={{ maxWidth: 500 }}
      actions={
        <Button variant="contained">자세히 보기</Button>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0 }}>참가 자격</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>만 18세 이상</li>
          <li>신청서 작성 완료</li>
          <li>참가비 결제 완료</li>
        </ul>

        <h4 style={{ margin: '12px 0 0 0' }}>경기 방식</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>3세트 2선승제</li>
          <li>11점 선취제</li>
          <li>듀스 적용</li>
        </ul>
      </div>
    </Card>
  ),
};

export const InteractiveCard = {
  render: () => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(12);

    const handleLike = () => {
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      } else {
        setLiked(true);
        setLikeCount(likeCount + 1);
      }
    };

    return (
      <Card
        title="2024 경기도 오픈 탁구대회"
        avatar={<Avatar sx={{ bgcolor: '#dc004e' }}><Event /></Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        sx={{ maxWidth: 400 }}
        actions={
          <>
            <Button
              size="small"
              startIcon={<Favorite />}
              color={liked ? 'error' : 'default'}
              onClick={handleLike}
            >
              좋아요 {likeCount}
            </Button>
            <Button size="small" startIcon={<Share />}>공유</Button>
          </>
        }
      >
        <p style={{ margin: 0, color: '#666' }}>
          2024년 4월 20일 | 경기도 체육관
        </p>
        <p style={{ margin: '12px 0 0 0' }}>
          경기도에서 개최되는 대규모 오픈 탁구 대회입니다.
          남녀 구분 없이 실력별로 참가 가능합니다.
        </p>
      </Card>
    );
  },
};

export const CardList = {
  render: () => {
    const tournaments = [
      { id: 1, name: '2024 서울시 탁구 선수권', date: '2024.03.15', participants: '15/32' },
      { id: 2, name: '2024 경기도 오픈', date: '2024.04.20', participants: '28/32' },
      { id: 3, name: '2024 인천시 선수권', date: '2024.05.10', participants: '32/32' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
        {tournaments.map((tournament) => (
          <Card
            key={tournament.id}
            title={tournament.name}
            avatar={<Avatar sx={{ bgcolor: '#1976d2' }}><Event /></Avatar>}
            action={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
            actions={
              <>
                <Button size="small">자세히</Button>
                <Button size="small" variant="contained" disabled={tournament.participants === '32/32'}>
                  {tournament.participants === '32/32' ? '마감' : '신청'}
                </Button>
              </>
            }
          >
            <p style={{ margin: 0 }}><strong>일시:</strong> {tournament.date}</p>
            <p style={{ margin: '4px 0 0 0' }}><strong>참가자:</strong> {tournament.participants}명</p>
          </Card>
        ))}
      </div>
    );
  },
};

export const CustomStyles = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card
        title="Primary"
        sx={{ borderTop: '4px solid #1976d2', maxWidth: 250 }}
      >
        상단 테두리가 있는 카드
      </Card>
      <Card
        title="Success"
        sx={{ borderLeft: '4px solid #2e7d32', maxWidth: 250 }}
      >
        왼쪽 테두리가 있는 카드
      </Card>
      <Card
        title="Gradient"
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          maxWidth: 250,
        }}
      >
        그라데이션 배경 카드
      </Card>
    </div>
  ),
};

export const WithImage = {
  render: () => (
    <Card
      title="이미지가 있는 카드"
      sx={{ maxWidth: 345 }}
      actions={
        <>
          <Button size="small">자세히</Button>
          <Button size="small" variant="contained">신청</Button>
        </>
      }
    >
      <div style={{
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
      }}>
        이미지 영역
      </div>
      <p style={{ margin: 0 }}>
        이미지와 함께 사용할 수 있는 카드입니다.
      </p>
    </Card>
  ),
};
