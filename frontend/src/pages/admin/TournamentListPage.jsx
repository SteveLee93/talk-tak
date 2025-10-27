import { useState } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import TournamentCard from '../../components/molecules/TournamentCard';
import { mockTournaments } from '../../mock';

/**
 * TournamentListPage
 * 대회 목록 페이지
 *
 * @description
 * 모든 대회를 카드 형태로 표시하는 페이지
 * 상태별(ongoing, upcoming, completed) 대회를 확인할 수 있음
 */
export default function TournamentListPage() {
  const [tournaments] = useState(mockTournaments);

  const handleTournamentClick = (tournament) => {
    console.log('대회 클릭:', tournament.name);
    // TODO: 대회 상세 페이지로 이동
  };

  const handleMenuClick = (tournament) => {
    console.log('메뉴 클릭:', tournament.name);
    // TODO: 수정/삭제 메뉴 표시
  };

  // 상태별로 대회 분류
  const ongoingTournaments = tournaments.filter(t => t.status === 'ongoing');
  const upcomingTournaments = tournaments.filter(t => t.status === 'upcoming');
  const completedTournaments = tournaments.filter(t => t.status === 'completed');

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 헤더 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          대회 목록
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          onClick={() => console.log('대회 생성 페이지로 이동')}
        >
          대회 생성
        </Button>
      </Box>

      {/* 진행중인 대회 */}
      {ongoingTournaments.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            진행중인 대회
          </Typography>
          <Grid container spacing={2}>
            {ongoingTournaments.map((tournament) => (
              <Grid item xs={12} sm={6} md={4} key={tournament.id}>
                <TournamentCard
                  tournament={tournament}
                  onClick={() => handleTournamentClick(tournament)}
                  onMenuClick={handleMenuClick}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* 예정된 대회 */}
      {upcomingTournaments.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            예정된 대회
          </Typography>
          <Grid container spacing={2}>
            {upcomingTournaments.map((tournament) => (
              <Grid item xs={12} sm={6} md={4} key={tournament.id}>
                <TournamentCard
                  tournament={tournament}
                  onClick={() => handleTournamentClick(tournament)}
                  onMenuClick={handleMenuClick}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* 완료된 대회 */}
      {completedTournaments.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
            완료된 대회
          </Typography>
          <Grid container spacing={2}>
            {completedTournaments.map((tournament) => (
              <Grid item xs={12} sm={6} md={4} key={tournament.id}>
                <TournamentCard
                  tournament={tournament}
                  onClick={() => handleTournamentClick(tournament)}
                  onMenuClick={handleMenuClick}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* 대회 없음 */}
      {tournaments.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            등록된 대회가 없습니다
          </Typography>
        </Box>
      )}
    </Container>
  );
}
