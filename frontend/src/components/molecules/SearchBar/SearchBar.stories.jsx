import { useState } from 'react';
import SearchBar from './SearchBar';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';
import Card from '../../atoms/Card';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    placeholder: '검색...',
  },
};

export const WithPlaceholder = {
  args: {
    placeholder: '참가자 이름으로 검색',
  },
};

export const FullWidth = {
  args: {
    placeholder: '검색...',
    fullWidth: true,
  },
};

export const CustomPlaceholders = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <SearchBar placeholder="참가자 검색" />
      <SearchBar placeholder="대회 검색" />
      <SearchBar placeholder="팀/소속 검색" />
      <SearchBar placeholder="이름, 연락처, 소속으로 검색" fullWidth />
    </Box>
  ),
};

export const Interactive = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div>
        <SearchBar
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            검색어: {value || '(입력 없음)'}
          </Typography>
        </Box>
      </div>
    );
  },
};

export const WithClear = {
  render: () => {
    const [value, setValue] = useState('김철수');

    return (
      <SearchBar
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        placeholder="검색..."
      />
    );
  },
};

export const ParticipantSearch = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');

    const participants = [
      { id: 1, name: '김철수', affiliation: 'ABC 클럽', division: '남자부 1부' },
      { id: 2, name: '이영희', affiliation: 'XYZ 체육관', division: '여자부 1부' },
      { id: 3, name: '박민수', affiliation: 'DEF 클럽', division: '남자부 2부' },
      { id: 4, name: '정수현', affiliation: 'GHI 체육관', division: '남자부 1부' },
      { id: 5, name: '강민호', affiliation: 'JKL 클럽', division: '남자부 3부' },
    ];

    const filteredParticipants = participants.filter(
      (p) =>
        p.name.includes(searchQuery) ||
        p.affiliation.includes(searchQuery) ||
        p.division.includes(searchQuery)
    );

    return (
      <div>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="이름, 소속, 부서로 검색"
          fullWidth
        />
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            검색 결과: {filteredParticipants.length}명
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
            {filteredParticipants.map((participant) => (
              <Card key={participant.id} sx={{ p: 2 }}>
                <Typography variant="subtitle1">{participant.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {participant.affiliation} · {participant.division}
                </Typography>
              </Card>
            ))}
            {filteredParticipants.length === 0 && (
              <Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>
                <Typography variant="body2">검색 결과가 없습니다</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </div>
    );
  },
};

export const TournamentSearch = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');

    const tournaments = [
      { id: 1, name: '2024 봄 탁구 대회', city: '서울', date: '2024-03-15' },
      { id: 2, name: '2024 여름 선수권', city: '경기', date: '2024-06-20' },
      { id: 3, name: '2024 가을 페스티벌', city: '인천', date: '2024-09-10' },
      { id: 4, name: '2024 겨울 토너먼트', city: '부산', date: '2024-12-05' },
    ];

    const filteredTournaments = tournaments.filter(
      (t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.city.includes(searchQuery)
    );

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          대회 검색
        </Typography>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="대회명 또는 지역으로 검색"
          fullWidth
        />
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {filteredTournaments.length}개 대회
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.id} sx={{ p: 2 }}>
                <Typography variant="subtitle1">{tournament.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {tournament.city} · {tournament.date}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
    );
  },
};

export const RealTimeSearch = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const allItems = [
      '김철수', '이영희', '박민수', '정수현', '강민호',
      '최지원', '윤서연', '한지민', '오승환', '류현진',
    ];

    const handleSearch = (e) => {
      const query = e.target.value;
      setSearchQuery(query);

      if (query) {
        const filtered = allItems.filter((item) => item.includes(query));
        setResults(filtered);
      } else {
        setResults([]);
      }
    };

    return (
      <div>
        <SearchBar
          value={searchQuery}
          onChange={handleSearch}
          placeholder="실시간 검색"
          fullWidth
        />
        {searchQuery && (
          <Box sx={{ mt: 1, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 2 }}>
            {results.length > 0 ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {results.map((result, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'grey.100' },
                    }}
                  >
                    <Typography variant="body2">{result}</Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography variant="body2" color="text.secondary">
                검색 결과가 없습니다
              </Typography>
            )}
          </Box>
        )}
      </div>
    );
  },
};

export const WithHeader = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
      <Box sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          참가자 관리
        </Typography>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="참가자 검색"
          fullWidth
        />
      </Box>
    );
  },
};

export const InToolbar = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
      <Box
        sx={{
          p: 2,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          대회 목록
        </Typography>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="검색"
          sx={{ bgcolor: 'background.paper', minWidth: 300 }}
        />
      </Box>
    );
  },
};

export const MultipleSearchBars = {
  render: () => {
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');
    const [search3, setSearch3] = useState('');

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            참가자 검색
          </Typography>
          <SearchBar
            value={search1}
            onChange={(e) => setSearch1(e.target.value)}
            placeholder="참가자 이름"
            fullWidth
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            대회 검색
          </Typography>
          <SearchBar
            value={search2}
            onChange={(e) => setSearch2(e.target.value)}
            placeholder="대회명"
            fullWidth
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            소속 검색
          </Typography>
          <SearchBar
            value={search3}
            onChange={(e) => setSearch3(e.target.value)}
            placeholder="팀/클럽명"
            fullWidth
          />
        </Box>
      </Box>
    );
  },
};
