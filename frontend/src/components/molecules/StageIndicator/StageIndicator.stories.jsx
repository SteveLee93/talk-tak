import { useState } from 'react';
import StageIndicator from './StageIndicator';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';

export default {
  title: 'Molecules/StageIndicator',
  component: StageIndicator,
  tags: ['autodocs'],
  argTypes: {
    currentStage: {
      control: 'number',
    },
  },
};

const registrationStages = ['참가자 정보', '대회 선택', '결제', '완료'];
const tournamentStages = ['예선', '8강', '4강', '결승'];
const setupStages = ['기본 정보', '참가 부문', '일정 설정', '완료'];

export const Default = {
  args: {
    stages: registrationStages,
    currentStage: 0,
  },
};

export const Stage1 = {
  args: {
    stages: registrationStages,
    currentStage: 0,
  },
};

export const Stage2 = {
  args: {
    stages: registrationStages,
    currentStage: 1,
  },
};

export const Stage3 = {
  args: {
    stages: registrationStages,
    currentStage: 2,
  },
};

export const Completed = {
  args: {
    stages: registrationStages,
    currentStage: 3,
  },
};

export const TournamentStages = {
  args: {
    stages: tournamentStages,
    currentStage: 1,
  },
};

export const Interactive = {
  render: () => {
    const [currentStage, setCurrentStage] = useState(0);

    const handleNext = () => {
      if (currentStage < registrationStages.length) {
        setCurrentStage((prev) => prev + 1);
      }
    };

    const handlePrev = () => {
      if (currentStage > 0) {
        setCurrentStage((prev) => prev - 1);
      }
    };

    const handleReset = () => {
      setCurrentStage(0);
    };

    return (
      <div>
        <StageIndicator stages={registrationStages} currentStage={currentStage} />
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          <Button onClick={handlePrev} disabled={currentStage === 0}>
            이전
          </Button>
          <Button
            onClick={handleNext}
            variant="contained"
            disabled={currentStage === registrationStages.length}
          >
            {currentStage === registrationStages.length - 1 ? '완료' : '다음'}
          </Button>
          <Button onClick={handleReset}>처음으로</Button>
        </Box>
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            현재 단계: {currentStage + 1}/{registrationStages.length}
            {currentStage < registrationStages.length && ` - ${registrationStages[currentStage]}`}
            {currentStage === registrationStages.length && ' - 완료!'}
          </Typography>
        </Box>
      </div>
    );
  },
};

export const RegistrationProcess = {
  render: () => {
    const [currentStage, setCurrentStage] = useState(0);

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          대회 참가 신청
        </Typography>
        <StageIndicator stages={registrationStages} currentStage={currentStage} />
        <Box sx={{ mt: 3, p: 3, border: 1, borderColor: 'divider', borderRadius: 1 }}>
          {currentStage === 0 && (
            <div>
              <Typography variant="subtitle1" gutterBottom>
                참가자 정보 입력
              </Typography>
              <Typography variant="body2" color="text.secondary">
                이름, 연락처, 소속 정보를 입력하세요.
              </Typography>
            </div>
          )}
          {currentStage === 1 && (
            <div>
              <Typography variant="subtitle1" gutterBottom>
                대회 선택
              </Typography>
              <Typography variant="body2" color="text.secondary">
                참가할 대회와 종목을 선택하세요.
              </Typography>
            </div>
          )}
          {currentStage === 2 && (
            <div>
              <Typography variant="subtitle1" gutterBottom>
                결제
              </Typography>
              <Typography variant="body2" color="text.secondary">
                참가비를 결제하세요.
              </Typography>
            </div>
          )}
          {currentStage === 3 && (
            <div>
              <Typography variant="subtitle1" gutterBottom color="success.main">
                신청 완료!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                대회 참가 신청이 완료되었습니다.
              </Typography>
            </div>
          )}
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Button onClick={() => setCurrentStage((prev) => Math.max(0, prev - 1))} disabled={currentStage === 0}>
              이전
            </Button>
            <Button
              onClick={() => setCurrentStage((prev) => Math.min(registrationStages.length, prev + 1))}
              variant="contained"
              disabled={currentStage === registrationStages.length}
            >
              {currentStage === registrationStages.length - 1 ? '완료' : '다음'}
            </Button>
          </Box>
        </Box>
      </div>
    );
  },
};

export const TournamentProgress = {
  render: () => {
    const [currentStage, setCurrentStage] = useState(0);

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          2024 봄 탁구 대회 진행 상황
        </Typography>
        <StageIndicator stages={tournamentStages} currentStage={currentStage} />
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          {tournamentStages.map((_, index) => (
            <Button
              key={index}
              size="small"
              variant={currentStage === index ? 'contained' : 'outlined'}
              onClick={() => setCurrentStage(index)}
            >
              {index + 1}단계
            </Button>
          ))}
        </Box>
      </div>
    );
  },
};

export const MultiStepSetup = {
  render: () => {
    const [currentStage, setCurrentStage] = useState(0);

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          대회 생성
        </Typography>
        <StageIndicator stages={setupStages} currentStage={currentStage} />
        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            {currentStage < setupStages.length ? setupStages[currentStage] : '설정 완료'}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Button onClick={() => setCurrentStage((prev) => Math.max(0, prev - 1))} disabled={currentStage === 0}>
              이전
            </Button>
            <Button
              onClick={() => setCurrentStage((prev) => Math.min(setupStages.length, prev + 1))}
              variant="contained"
              disabled={currentStage === setupStages.length}
            >
              {currentStage === setupStages.length - 1 ? '생성' : '다음'}
            </Button>
          </Box>
        </Box>
      </div>
    );
  },
};

export const ThreeStages = {
  args: {
    stages: ['접수', '경기', '시상'],
    currentStage: 1,
  },
};

export const FiveStages = {
  args: {
    stages: ['접수', '예선', '준결승', '결승', '시상'],
    currentStage: 2,
  },
};

export const AllStages = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          1단계 (시작)
        </Typography>
        <StageIndicator stages={registrationStages} currentStage={0} />
      </div>
      <div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          2단계 (진행 중)
        </Typography>
        <StageIndicator stages={registrationStages} currentStage={1} />
      </div>
      <div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          3단계 (거의 완료)
        </Typography>
        <StageIndicator stages={registrationStages} currentStage={2} />
      </div>
      <div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          4단계 (완료)
        </Typography>
        <StageIndicator stages={registrationStages} currentStage={3} />
      </div>
    </Box>
  ),
};
