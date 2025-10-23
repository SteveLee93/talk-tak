# 탁구 대회 운영 시스템 - Frontend

> React + Vite + Material-UI 기반 실시간 탁구 대회 관리 웹 애플리케이션

## 📋 프로젝트 개요

탁구 대회의 참가 신청, 대진표 생성, 실시간 경기 결과 입력 및 모니터링을 지원하는 웹 애플리케이션입니다.

## 🎯 주요 기능

### 관리자
- 대회 생성 및 관리
- 참가자 관리 (Excel 업로드 지원)
- 자동 대진표 생성 (조별 리그 + 토너먼트)
- 실시간 경기 모니터링
- 대진표 프린트

### 심판
- 담당 경기 조회
- 실시간 점수 입력
- 경기 결과 제출

### 참가자
- 대회 신청
- 대진표 조회
- 실시간 경기 결과 확인

### 대표
- 팀 단위 참가 신청
- 팀원 정보 관리

## 🏗️ 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구 (빠른 HMR)
- **Material-UI (MUI)** - UI 컴포넌트 라이브러리
- **React Router** - 라우팅
- **Socket.io Client** - 실시간 통신
- **Emotion** - CSS-in-JS

## 📂 프로젝트 구조

```
src/
├── components/          # 컴포넌트 (Atomic Design 패턴)
│   ├── atoms/          # 기본 UI (Button, Input, Chip 등)
│   ├── molecules/      # 조합 UI (PlayerInfo, ScoreDisplay 등)
│   ├── organisms/      # 복합 블록 (MatchCard, ParticipantCard 등)
│   └── templates/      # 페이지 레이아웃 (AdminLayout, MobileLayout)
├── pages/              # 최종 페이지
│   ├── admin/          # 관리자 화면
│   ├── referee/        # 심판 화면
│   └── participant/    # 참가자 화면
├── hooks/              # 커스텀 React 훅
├── services/           # API 서비스
└── mock/               # Mock 데이터
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

## 🎨 컴포넌트 설계

### Atomic Design 패턴 적용

#### Atoms (원자)
- `Button` - 모든 버튼
- `Input` - 텍스트 입력
- `Chip` - 상태/라벨 표시
- `Select` - 드롭다운 선택
- `Typography` - 텍스트 스타일

#### Molecules (분자)
- `PlayerInfo` - 선수 정보 표시
- `ScoreDisplay` - 점수 표시
- `MatchStatus` - 경기 상태
- `TableBadge` - 테이블 번호
- `SearchBar` - 검색 바

#### Organisms (유기체)
- `MatchCard` - 경기 카드 (4가지 variant)
  - `compact` - 모바일용 간단 뷰
  - `default` - 기본 카드
  - `detailed` - 상세 정보 포함
  - `editable` - 점수 입력 가능 (심판용)
- `ParticipantCard` - 참가자 카드
- `BracketNode` - 대진표 노드
- `GroupTable` - 조별 리그 테이블

#### Templates
- `AdminLayout` - 관리자 페이지 레이아웃
- `MobileLayout` - 모바일 페이지 레이아웃

## 🔌 API 연동

백엔드 서버: `http://localhost:8000`

### REST API
- `/api/tournaments` - 대회 관리
- `/api/participants` - 참가자 관리
- `/api/matches` - 경기 관리

### WebSocket
- `/ws` - 실시간 경기 업데이트

## 📱 반응형 디자인

- **데스크톱** (1200px+): 관리자/심판 화면
- **태블릿** (768px~1199px): 중간 레이아웃
- **모바일** (767px 이하): 참가자 화면

## 🧪 개발 가이드

### 새 컴포넌트 추가

```javascript
// src/components/atoms/Button/Button.jsx
export default function Button({ children, ...props }) {
  return <MuiButton {...props}>{children}</MuiButton>;
}
```

### Mock 데이터 사용

```javascript
// src/mock/matches.js
export const mockMatches = [
  {
    id: 1,
    player1: { name: '홍길동', affiliation: '서울대' },
    player2: { name: '김철수', affiliation: '연세대' },
    score1: 11,
    score2: 9,
    status: 'completed'
  }
];
```

## 📝 개발 우선순위

### Phase 1: MVP 핵심 (1주차)
- ✅ 프로젝트 초기 설정
- ✅ 폴더 구조 생성
- 🔄 Atoms 구현
- ⏳ Molecules 구현
- ⏳ MatchCard 구현

### Phase 2: 관리자 기능 (2주차)
- ⏳ 대진표 컴포넌트
- ⏳ 관리 페이지
- ⏳ 실시간 모니터링

### Phase 3: 추가 기능 (3주차)
- ⏳ 프린트 기능
- ⏳ 통계 화면
- ⏳ 알림 기능

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m '기능 추가: 멋진 기능'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

---

**작성일**: 2025년 10월 23일
**버전**: 1.0.0
