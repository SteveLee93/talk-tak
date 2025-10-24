import { useState } from 'react';
import Accordion from './Accordion';
import { Add, Info } from '@mui/icons-material';

export default {
  title: 'Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    defaultExpanded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    title: '아코디언 제목',
    children: '아코디언 내용입니다.',
  },
};

export const DefaultExpanded = {
  args: {
    title: '기본 펼침',
    children: '처음부터 펼쳐진 상태입니다.',
    defaultExpanded: true,
  },
};

export const Disabled = {
  args: {
    title: '비활성화',
    children: '비활성화된 아코디언입니다.',
    disabled: true,
  },
};

export const CustomIcon = {
  args: {
    title: '커스텀 아이콘',
    children: 'Add 아이콘을 사용합니다.',
    icon: <Add />,
  },
};

export const MultipleAccordions = {
  render: () => (
    <div>
      <Accordion title="첫 번째 아코디언" defaultExpanded>
        첫 번째 아코디언의 내용입니다.
      </Accordion>
      <Accordion title="두 번째 아코디언">
        두 번째 아코디언의 내용입니다.
      </Accordion>
      <Accordion title="세 번째 아코디언">
        세 번째 아코디언의 내용입니다.
      </Accordion>
    </div>
  ),
};

export const ControlledAccordion = {
  render: () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? '닫기' : '열기'}
        </button>
        <Accordion
          title="제어되는 아코디언"
          expanded={expanded}
          onChange={(e, isExpanded) => setExpanded(isExpanded)}
        >
          제어되는 아코디언의 내용입니다.
        </Accordion>
      </div>
    );
  },
};

export const FAQExample = {
  render: () => (
    <div>
      <h3>자주 묻는 질문</h3>
      <Accordion title="참가 자격이 어떻게 되나요?">
        만 18세 이상이면 누구나 참가 가능합니다.
        신청서 작성과 참가비 결제를 완료하시면 됩니다.
      </Accordion>
      <Accordion title="참가비는 얼마인가요?">
        단식 30,000원, 복식 50,000원, 단체전 100,000원입니다.
      </Accordion>
      <Accordion title="취소 환불은 가능한가요?">
        대회 3일 전까지 전액 환불 가능합니다.
        그 이후는 환불이 불가능합니다.
      </Accordion>
      <Accordion title="준비물이 있나요?">
        라켓과 운동화는 개인이 준비하셔야 합니다.
        공은 대회 측에서 제공합니다.
      </Accordion>
    </div>
  ),
};

export const TournamentRulesExample = {
  render: () => (
    <div>
      <h3>대회 규칙</h3>
      <Accordion title="경기 방식" defaultExpanded>
        <h4>기본 규칙</h4>
        <ul>
          <li>3세트 2선승제</li>
          <li>각 세트는 11점 선취제</li>
          <li>10:10 듀스 시 2점 차로 승부</li>
        </ul>
      </Accordion>
      <Accordion title="참가 부문">
        <h4>남자부</h4>
        <p>1부, 2부, 3부, 4부로 구분</p>
        <h4>여자부</h4>
        <p>1부, 2부, 3부, 4부로 구분</p>
        <h4>혼합부</h4>
        <p>남녀 혼성 복식</p>
      </Accordion>
      <Accordion title="시상 내역">
        <ul>
          <li>우승: 트로피 + 상금 100만원</li>
          <li>준우승: 트로피 + 상금 50만원</li>
          <li>3위: 트로피 + 상금 30만원</li>
        </ul>
      </Accordion>
    </div>
  ),
};

export const NestedContent = {
  render: () => (
    <Accordion title="대회 정보">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <strong>대회명:</strong> 2024 서울시 탁구 선수권
        </div>
        <div>
          <strong>일시:</strong> 2024년 3월 15일
        </div>
        <div>
          <strong>장소:</strong> 서울시 체육관
        </div>
        <Accordion title="상세 일정">
          <ul>
            <li>09:00 - 개회식</li>
            <li>09:30 - 예선전</li>
            <li>13:00 - 점심 식사</li>
            <li>14:00 - 본선</li>
            <li>17:00 - 결승전</li>
            <li>18:00 - 시상식</li>
          </ul>
        </Accordion>
      </div>
    </Accordion>
  ),
};

export const WithRichContent = {
  render: () => (
    <Accordion title="참가 신청 안내">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
          <strong>신청 기간:</strong> 2024.02.01 ~ 2024.03.10
        </div>
        <div>
          <h4>신청 절차</h4>
          <ol>
            <li>온라인 신청서 작성</li>
            <li>참가비 결제</li>
            <li>신청 확인 이메일 수신</li>
            <li>대회 당일 참가</li>
          </ol>
        </div>
        <div>
          <h4>준비 서류</h4>
          <ul>
            <li>신분증</li>
            <li>참가비 영수증</li>
          </ul>
        </div>
      </div>
    </Accordion>
  ),
};

export const DivisionAccordions = {
  render: () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <div>
        <h3>부서별 참가자</h3>
        <Accordion
          title="남자부 (15명)"
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <ul>
            <li>김철수 - 1부</li>
            <li>박민수 - 2부</li>
            <li>정수현 - 1부</li>
          </ul>
        </Accordion>
        <Accordion
          title="여자부 (12명)"
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <ul>
            <li>이영희 - 1부</li>
            <li>최지원 - 2부</li>
          </ul>
        </Accordion>
        <Accordion
          title="혼합부 (8명)"
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <ul>
            <li>김철수 & 이영희</li>
            <li>박민수 & 최지원</li>
          </ul>
        </Accordion>
      </div>
    );
  },
};

export const WithCustomSummary = {
  render: () => (
    <Accordion
      summary={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info color="primary" />
          <div>
            <strong>중요 안내사항</strong>
            <div style={{ fontSize: '12px', color: '#666' }}>필독 사항입니다</div>
          </div>
        </div>
      }
    >
      <p>대회 당일 신분증을 반드시 지참하세요.</p>
      <p>늦으시면 실격 처리됩니다.</p>
    </Accordion>
  ),
};
