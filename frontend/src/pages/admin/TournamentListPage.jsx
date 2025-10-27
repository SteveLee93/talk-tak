import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Divider
} from '@mui/material';
import {
  Add as AddIcon,
  Place as PlaceIcon,
  CalendarMonth as CalendarIcon,
  FilterList as FilterIcon,
  Close as CloseIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import { mockTournaments } from '../../mock';

// 지역별 색상 매핑
const cityColors = {
  "서울": { main: '#1976d2', light: '#e3f2fd', border: '#1976d2', dark: '#1565c0' },
  "부산": { main: '#2e7d32', light: '#e8f5e9', border: '#2e7d32', dark: '#1b5e20' },
  "인천": { main: '#7b1fa2', light: '#f3e5f5', border: '#7b1fa2', dark: '#6a1b9a' },
  "대전": { main: '#f57c00', light: '#fff3e0', border: '#f57c00', dark: '#ef6c00' },
  "광주": { main: '#c2185b', light: '#fce4ec', border: '#c2185b', dark: '#ad1457' },
  "대구": { main: '#0097a7', light: '#e0f7fa', border: '#0097a7', dark: '#00838f' },
  "울산": { main: '#5e35b1', light: '#ede7f6', border: '#5e35b1', dark: '#512da8' },
  "경기": { main: '#00897b', light: '#e0f2f1', border: '#00897b', dark: '#00796b' }
};

// 날짜 포맷팅 함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dayIndex = date.getDay();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][dayIndex];
  return { year, month, day, dayOfWeek, dayIndex, formatted: `${year}.${month}.${day}` };
};

// 요일별 색상 반환 함수
const getDayColor = (dayIndex) => {
  if (dayIndex === 0) return '#d32f2f'; // 일요일 빨강
  if (dayIndex === 6) return '#1976d2'; // 토요일 파랑
  return '#424242'; // 평일 검정
};

// 월별로 그룹화하는 함수
const groupByMonth = (tournaments) => {
  const sorted = [...tournaments].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  return sorted.reduce((acc, tournament) => {
    const date = new Date(tournament.startDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthKey = `${year}년 ${month}월`;

    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(tournament);
    return acc;
  }, {});
};

// 년도별로 그룹화
const groupByYear = (tournaments) => {
  return tournaments.reduce((acc, tournament) => {
    const year = new Date(tournament.startDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(tournament);
    return acc;
  }, {});
};

// 특정 년도의 월별 그룹화
const groupByMonthInYear = (tournaments, year) => {
  return tournaments
    .filter(t => new Date(t.startDate).getFullYear() === year)
    .reduce((acc, tournament) => {
      const month = new Date(tournament.startDate).getMonth() + 1;
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(tournament);
      return acc;
    }, {});
};

/**
 * TournamentListPage
 * 대회 목록 페이지
 *
 * @description
 * 모든 대회를 월별로 그룹화하여 리스트 형태로 표시
 * 날짜를 큰 박스로 강조하고 지역별 색상 코딩 적용
 * 과거 대회 탐색 및 지역 필터링 기능 포함
 */
export default function TournamentListPage() {
  const [tournaments] = useState(mockTournaments);

  // 필터 상태
  const [selectedCities, setSelectedCities] = useState([]);
  const [showPastTournaments, setShowPastTournaments] = useState(false);
  const [showCityFilter, setShowCityFilter] = useState(false);

  // 과거 대회 탐색 상태
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // 새 대회 만들기 모달 상태
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newTournament, setNewTournament] = useState({
    name: '',
    date: '',
    location: '',
    city: ''
  });

  // 현재 날짜
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // 이번달 첫날과 다음달 마지막날
  const thisMonthStart = new Date(currentYear, currentMonth, 1);
  const nextMonthEnd = new Date(currentYear, currentMonth + 2, 0, 23, 59, 59);

  // 필터 적용 함수
  const applyFilters = (tournamentsToFilter) => {
    return tournamentsToFilter
      .filter(t => {
        const city = t.venue.split(' ')[0];
        return selectedCities.length === 0 || selectedCities.includes(city);
      })
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  };

  // 대회를 기간별로 분류
  const currentTournamentsBeforeFilter = tournaments.filter(t => {
    const date = new Date(t.startDate);
    return date >= thisMonthStart && date <= nextMonthEnd;
  });

  const pastTournamentsBeforeFilter = tournaments.filter(t => {
    const date = new Date(t.startDate);
    return date < thisMonthStart;
  });

  // 현재 보이는 대회들에 존재하는 지역만 추출
  const allCities = Array.from(
    new Set(currentTournamentsBeforeFilter.map(t => t.venue.split(' ')[0]))
  );

  // 필터 적용
  const currentTournaments = applyFilters(currentTournamentsBeforeFilter);
  const pastTournaments = applyFilters(pastTournamentsBeforeFilter).reverse();

  // 도시 필터 토글
  const toggleCity = (city) => {
    setSelectedCities(prev =>
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  // 월별로 그룹화
  const currentByMonth = groupByMonth(currentTournaments);
  const pastByYear = groupByYear(pastTournaments);
  const pastYears = Object.keys(pastByYear).map(Number).sort((a, b) => b - a);

  // 과거 대회 보기 버튼 클릭 핸들러
  const handlePastTournamentsToggle = () => {
    setShowPastTournaments(!showPastTournaments);
    setSelectedYear(null);
    setSelectedMonth(null);
  };

  // 새 대회 생성 핸들러
  const handleCreateTournament = () => {
    console.log('새 대회 생성:', newTournament);
    setIsCreateModalOpen(false);
    setNewTournament({
      name: '',
      date: '',
      location: '',
      city: ''
    });
  };

  // 대회 관리 페이지로 이동
  const handleManageTournament = (tournamentId) => {
    console.log('대회 관리:', tournamentId);
    // TODO: 대회 관리 페이지로 이동
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              대회 관리
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              size="large"
              onClick={() => setIsCreateModalOpen(true)}
              sx={{
                bgcolor: '#1976d2',
                '&:hover': { bgcolor: '#1565c0' },
                px: 3,
                py: 1.5
              }}
            >
              새 대회 만들기
            </Button>
          </Box>

          {/* Filters */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {pastTournaments.length > 0 && (
                <Button
                  variant="outlined"
                  startIcon={<CalendarIcon />}
                  onClick={handlePastTournamentsToggle}
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  과거 대회 보기
                  <Chip
                    label={pastTournaments.length}
                    size="small"
                    sx={{ ml: 1, height: 20 }}
                  />
                </Button>
              )}

              <Button
                variant="outlined"
                startIcon={<FilterIcon />}
                onClick={() => setShowCityFilter(!showCityFilter)}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                지역
                {selectedCities.length > 0 && (
                  <Chip
                    label={selectedCities.length}
                    size="small"
                    sx={{ ml: 1, height: 20 }}
                  />
                )}
              </Button>

              {selectedCities.length > 0 && (
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setSelectedCities([])}
                  sx={{ color: 'text.secondary' }}
                >
                  필터 초기화
                </Button>
              )}
            </Box>

            {showCityFilter && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 3, bgcolor: 'white', borderRadius: 2 }}>
                {allCities.map(city => {
                  const cityColor = cityColors[city] || cityColors["서울"];
                  const isSelected = selectedCities.includes(city);

                  return (
                    <Button
                      key={city}
                      onClick={() => toggleCity(city)}
                      variant={isSelected ? "contained" : "outlined"}
                      sx={{
                        bgcolor: isSelected ? cityColor.dark : cityColor.light,
                        color: isSelected ? 'white' : cityColor.main,
                        borderColor: cityColor.border,
                        borderWidth: 2,
                        '&:hover': {
                          bgcolor: isSelected ? cityColor.main : cityColor.light,
                          borderWidth: 2
                        }
                      }}
                    >
                      {city}
                    </Button>
                  );
                })}
              </Box>
            )}
          </Box>

          <Divider sx={{ mt: 3 }} />
        </Box>

        {/* Past Tournaments Section */}
        {pastTournaments.length > 0 && showPastTournaments && (
          <Box sx={{ mb: 8, pb: 4, borderBottom: '1px solid', borderColor: 'divider' }}>
            {/* Breadcrumb */}
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1, fontSize: 14, color: 'text.secondary' }}>
              <Button
                size="small"
                onClick={() => {
                  setSelectedYear(null);
                  setSelectedMonth(null);
                }}
                sx={{ minWidth: 'auto', p: 0.5 }}
              >
                과거 대회
              </Button>
              {selectedYear !== null && (
                <>
                  <ChevronRightIcon sx={{ fontSize: 16 }} />
                  <Button
                    size="small"
                    onClick={() => setSelectedMonth(null)}
                    sx={{ minWidth: 'auto', p: 0.5 }}
                  >
                    {selectedYear}년
                  </Button>
                </>
              )}
              {selectedMonth !== null && (
                <>
                  <ChevronRightIcon sx={{ fontSize: 16 }} />
                  <Typography sx={{ color: 'text.primary' }}>{selectedMonth}월</Typography>
                </>
              )}
            </Box>

            {/* Year List */}
            {selectedYear === null && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {pastYears.map(year => {
                  const yearTournaments = pastByYear[year];
                  return (
                    <Paper
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      sx={{
                        p: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderLeft: '4px solid #757575',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          boxShadow: 3,
                          borderLeftColor: '#616161'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Box
                          sx={{
                            background: 'linear-gradient(135deg, #757575 0%, #616161 100%)',
                            color: 'white',
                            px: 4,
                            py: 2,
                            borderRadius: 2
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            {year}년
                          </Typography>
                        </Box>
                        <Typography variant="body1" color="text.secondary">
                          {yearTournaments.length}개 대회
                        </Typography>
                      </Box>
                      <ChevronRightIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    </Paper>
                  );
                })}
              </Box>
            )}

            {/* Month List */}
            {selectedYear !== null && selectedMonth === null && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {Object.entries(groupByMonthInYear(pastTournaments, selectedYear))
                  .sort(([a], [b]) => Number(b) - Number(a))
                  .map(([month, monthTournaments]) => {
                    const monthNum = Number(month);
                    return (
                      <Paper
                        key={month}
                        onClick={() => setSelectedMonth(monthNum)}
                        sx={{
                          p: 4,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderLeft: '4px solid #757575',
                          cursor: 'pointer',
                          opacity: 0.75,
                          transition: 'all 0.2s',
                          '&:hover': {
                            opacity: 1,
                            boxShadow: 3,
                            borderLeftColor: '#616161'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          <Box
                            sx={{
                              background: 'linear-gradient(135deg, #757575 0%, #616161 100%)',
                              color: 'white',
                              px: 4,
                              py: 2,
                              borderRadius: 2
                            }}
                          >
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                              {monthNum}월
                            </Typography>
                          </Box>
                          <Typography variant="body1" color="text.secondary">
                            {monthTournaments.length}개 대회
                          </Typography>
                        </Box>
                        <ChevronRightIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                      </Paper>
                    );
                  })}
              </Box>
            )}

            {/* Tournament List for Selected Month */}
            {selectedYear !== null && selectedMonth !== null && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {pastTournaments
                  .filter(t => {
                    const date = new Date(t.startDate);
                    return date.getFullYear() === selectedYear && date.getMonth() + 1 === selectedMonth;
                  })
                  .map(tournament => {
                    const city = tournament.venue.split(' ')[0];
                    const cityColor = cityColors[city] || cityColors["서울"];
                    const dateInfo = formatDate(tournament.startDate);

                    return (
                      <Paper
                        key={tournament.id}
                        sx={{
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderLeft: `4px solid ${cityColor.border}`,
                          opacity: 0.75,
                          transition: 'all 0.2s',
                          '&:hover': {
                            opacity: 1,
                            boxShadow: 3
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1 }}>
                          {/* 날짜 박스 */}
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: '#f5f5f5',
                              borderRadius: 2,
                              p: 1.5,
                              minWidth: 80
                            }}
                          >
                            <Typography variant="caption" color="text.secondary">
                              {dateInfo.month}월
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                              {dateInfo.day}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: getDayColor(dateInfo.dayIndex),
                                fontWeight: 'bold',
                                mt: 0.5
                              }}
                            >
                              {dateInfo.dayOfWeek}
                            </Typography>
                          </Box>

                          {/* 대회 정보 */}
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                              {tournament.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <PlaceIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                {tournament.venue}
                              </Typography>
                            </Box>
                          </Box>

                          {/* 지역 배지 */}
                          <Chip
                            label={city}
                            sx={{
                              bgcolor: cityColor.light,
                              color: cityColor.main,
                              border: `2px solid ${cityColor.border}`,
                              fontWeight: 'bold',
                              px: 2,
                              py: 1.5,
                              height: 'auto'
                            }}
                          />
                        </Box>

                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ ml: 2 }}
                          onClick={() => handleManageTournament(tournament.id)}
                        >
                          보기
                        </Button>
                      </Paper>
                    );
                  })}
              </Box>
            )}
          </Box>
        )}

        {/* Current Tournaments */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {currentTournaments.length === 0 ? (
            <Paper sx={{ p: 8, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                조건에 맞는 대회가 없습니다
              </Typography>
              <Button variant="text" onClick={() => setSelectedCities([])}>
                필터 초기화
              </Button>
            </Paper>
          ) : (
            Object.entries(currentByMonth).map(([monthLabel, monthTournaments]) => (
              <Box key={monthLabel}>
                {/* 월 헤더 */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                      color: 'white',
                      px: 3,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: 2
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {monthLabel}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {monthTournaments.length}개 대회
                  </Typography>
                </Box>

                {/* 대회 리스트 */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {monthTournaments.map((tournament) => {
                    const city = tournament.venue.split(' ')[0];
                    const cityColor = cityColors[city] || cityColors["서울"];
                    const dateInfo = formatDate(tournament.startDate);

                    return (
                      <Paper
                        key={tournament.id}
                        elevation={1}
                        sx={{
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderLeft: `4px solid ${cityColor.border}`,
                          transition: 'all 0.2s',
                          '&:hover': {
                            boxShadow: 3
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1 }}>
                          {/* 날짜 박스 */}
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: '#f5f5f5',
                              borderRadius: 2,
                              p: 1.5,
                              minWidth: 80
                            }}
                          >
                            <Typography variant="caption" color="text.secondary">
                              {dateInfo.month}월
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                              {dateInfo.day}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: getDayColor(dateInfo.dayIndex),
                                fontWeight: 'bold',
                                mt: 0.5
                              }}
                            >
                              {dateInfo.dayOfWeek}
                            </Typography>
                          </Box>

                          {/* 대회 정보 */}
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                              {tournament.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <PlaceIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                {tournament.venue}
                              </Typography>
                            </Box>
                          </Box>

                          {/* 지역 배지 */}
                          <Chip
                            label={city}
                            sx={{
                              bgcolor: cityColor.light,
                              color: cityColor.main,
                              border: `2px solid ${cityColor.border}`,
                              fontWeight: 'bold',
                              px: 2,
                              py: 1.5,
                              height: 'auto'
                            }}
                          />
                        </Box>

                        {/* 관리 버튼 */}
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            ml: 2,
                            bgcolor: '#1976d2',
                            '&:hover': { bgcolor: '#1565c0' }
                          }}
                          onClick={() => handleManageTournament(tournament.id)}
                        >
                          관리하기
                        </Button>
                      </Paper>
                    );
                  })}
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Container>

      {/* Create Tournament Modal */}
      <Dialog
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            새 대회 만들기
          </Typography>
          <IconButton onClick={() => setIsCreateModalOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, py: 2 }}>
            <TextField
              label="대회명"
              fullWidth
              placeholder="예: 2025 서울 탁구 챔피언십"
              value={newTournament.name}
              onChange={(e) => setNewTournament({ ...newTournament, name: e.target.value })}
            />

            <TextField
              label="날짜"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={newTournament.date}
              onChange={(e) => setNewTournament({ ...newTournament, date: e.target.value })}
            />

            <TextField
              label="장소"
              fullWidth
              placeholder="예: 서울올림픽공원"
              value={newTournament.location}
              onChange={(e) => setNewTournament({ ...newTournament, location: e.target.value })}
            />

            <FormControl fullWidth>
              <InputLabel>지역</InputLabel>
              <Select
                value={newTournament.city}
                label="지역"
                onChange={(e) => setNewTournament({ ...newTournament, city: e.target.value })}
              >
                <MenuItem value="서울">서울</MenuItem>
                <MenuItem value="부산">부산</MenuItem>
                <MenuItem value="인천">인천</MenuItem>
                <MenuItem value="대전">대전</MenuItem>
                <MenuItem value="광주">광주</MenuItem>
                <MenuItem value="대구">대구</MenuItem>
                <MenuItem value="울산">울산</MenuItem>
                <MenuItem value="경기">경기</MenuItem>
              </Select>
            </FormControl>

            {/* 미리보기 */}
            {newTournament.name && newTournament.date && newTournament.location && newTournament.city && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
                  미리보기
                </Typography>
                <Paper
                  sx={{
                    p: 2,
                    borderLeft: `4px solid ${cityColors[newTournament.city]?.border || '#1976d2'}`,
                    bgcolor: '#fafafa'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#f5f5f5',
                        borderRadius: 2,
                        p: 1.5,
                        minWidth: 80
                      }}
                    >
                      {(() => {
                        const dateInfo = formatDate(newTournament.date);
                        return (
                          <>
                            <Typography variant="caption" color="text.secondary">
                              {dateInfo.month}월
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                              {dateInfo.day}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: getDayColor(dateInfo.dayIndex),
                                fontWeight: 'bold',
                                mt: 0.5
                              }}
                            >
                              {dateInfo.dayOfWeek}
                            </Typography>
                          </>
                        );
                      })()}
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        {newTournament.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PlaceIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {newTournament.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Chip
                      label={newTournament.city}
                      sx={{
                        bgcolor: cityColors[newTournament.city]?.light || '#e3f2fd',
                        color: cityColors[newTournament.city]?.main || '#1976d2',
                        border: `2px solid ${cityColors[newTournament.city]?.border || '#1976d2'}`,
                        fontWeight: 'bold',
                        px: 2,
                        py: 1.5,
                        height: 'auto'
                      }}
                    />
                  </Box>
                </Paper>
              </Box>
            )}
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button
            variant="outlined"
            onClick={() => setIsCreateModalOpen(false)}
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={handleCreateTournament}
            disabled={!newTournament.name || !newTournament.date || !newTournament.location || !newTournament.city}
            sx={{
              bgcolor: '#1976d2',
              '&:hover': { bgcolor: '#1565c0' }
            }}
          >
            대회 만들기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
