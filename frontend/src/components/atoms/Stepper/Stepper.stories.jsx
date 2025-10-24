import { useState } from 'react';
import Stepper from './Stepper';
import Button from '../Button';
import { Person, Event, Payment, Check } from '@mui/icons-material';

export default {
  title: 'Atoms/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    alternativeLabel: {
      control: 'boolean',
    },
    nonLinear: {
      control: 'boolean',
    },
  },
};

const basicSteps = [
  { label: '1단계' },
  { label: '2단계' },
  { label: '3단계' },
];

export const Default = {
  args: {
    steps: basicSteps,
    activeStep: 0,
  },
};

export const ActiveStepTwo = {
  args: {
    steps: basicSteps,
    activeStep: 1,
  },
};

export const Completed = {
  args: {
    steps: basicSteps,
    activeStep: 3,
  },
};

export const WithIcons = {
  args: {
    steps: [
      { label: '참가자 정보', icon: <Person /> },
      { label: '대회 선택', icon: <Event /> },
      { label: '결제', icon: <Payment /> },
      { label: '완료', icon: <Check /> },
    ],
    activeStep: 1,
  },
};

export const AlternativeLabel = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    alternativeLabel: true,
  },
};

export const Vertical = {
  args: {
    steps: [
      { label: '참가자 정보 입력', description: '이름, 연락처 등을 입력하세요' },
      { label: '대회 선택', description: '참가할 대회를 선택하세요' },
      { label: '결제', description: '참가비를 결제하세요' },
    ],
    activeStep: 0,
    orientation: 'vertical',
  },
};

export const Interactive = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
      { label: '참가자 정보' },
      { label: '대회 선택' },
      { label: '결제' },
      { label: '완료' },
    ];

    const handleNext = () => {
      setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevStep) => prevStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
      <div>
        <Stepper steps={steps} activeStep={activeStep} />
        <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            이전
          </Button>
          {activeStep === steps.length ? (
            <Button onClick={handleReset}>처음으로</Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? '완료' : '다음'}
            </Button>
          )}
        </div>
        {activeStep === steps.length && (
          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>
            모든 단계를 완료했습니다!
          </div>
        )}
      </div>
    );
  },
};

export const RegistrationFlow = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
      { label: '기본 정보', description: '이름, 연락처 입력' },
      { label: '경기 정보', description: '부서, 부, 종목 선택' },
      { label: '결제', description: '참가비 결제' },
      { label: '완료', description: '신청 완료' },
    ];

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return '이름과 연락처를 입력하세요.';
        case 1:
          return '참가하실 부서와 부, 종목을 선택하세요.';
        case 2:
          return '참가비를 결제하세요.';
        case 3:
          return '신청이 완료되었습니다!';
        default:
          return '';
      }
    };

    const handleNext = () => {
      setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
      setActiveStep((prev) => prev - 1);
    };

    return (
      <div>
        <Stepper steps={steps} activeStep={activeStep} alternativeLabel />
        <div style={{ marginTop: '24px', padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 16px 0' }}>{steps[activeStep]?.label}</h3>
          <p>{getStepContent(activeStep)}</p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              이전
            </Button>
            {activeStep < steps.length - 1 && (
              <Button variant="contained" onClick={handleNext}>
                다음
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button variant="contained" color="success">
                완료
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export const VerticalWithContent = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
      { label: '참가자 정보', description: '기본 정보를 입력하세요' },
      { label: '대회 선택', description: '참가할 대회를 선택하세요' },
      { label: '결제', description: '참가비를 결제하세요' },
      { label: '완료', description: '신청이 완료되었습니다' },
    ];

    return (
      <div>
        <Stepper steps={steps} activeStep={activeStep} orientation="vertical" />
        <div style={{ marginTop: '16px', marginLeft: '34px', display: 'flex', gap: '8px' }}>
          <Button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => prev - 1)}
          >
            이전
          </Button>
          <Button
            variant="contained"
            onClick={() => setActiveStep((prev) => prev + 1)}
            disabled={activeStep === steps.length - 1}
          >
            다음
          </Button>
        </div>
      </div>
    );
  },
};

export const TournamentSetup = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
      { label: '대회 기본 정보', icon: <Event /> },
      { label: '참가 부문 설정', icon: <Person /> },
      { label: '일정 설정', icon: <Event /> },
      { label: '완료', icon: <Check /> },
    ];

    return (
      <div>
        <h3>대회 생성</h3>
        <Stepper steps={steps} activeStep={activeStep} alternativeLabel />
        <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 16px 0' }}>
            {activeStep < steps.length ? steps[activeStep].label : '설정 완료'}
          </h4>
          {activeStep === 0 && <p>대회명, 장소, 참가비 등을 입력하세요.</p>}
          {activeStep === 1 && <p>남자부, 여자부, 혼합부 등을 설정하세요.</p>}
          {activeStep === 2 && <p>대회 날짜와 시간을 설정하세요.</p>}
          {activeStep === 3 && (
            <div style={{ color: '#2e7d32' }}>
              <strong>대회 생성이 완료되었습니다!</strong>
            </div>
          )}
          <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
            <Button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              이전
            </Button>
            <Button
              variant="contained"
              onClick={() => setActiveStep((prev) => prev + 1)}
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 2 ? '완료' : '다음'}
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export const NonLinear = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const steps = [
      { label: '단계 1' },
      { label: '단계 2' },
      { label: '단계 3' },
    ];

    const handleStep = (step) => () => {
      setActiveStep(step);
    };

    const handleComplete = () => {
      setCompleted({ ...completed, [activeStep]: true });
      const newActiveStep = Object.keys(completed).length === steps.length - 1
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
      setActiveStep(newActiveStep);
    };

    return (
      <div>
        <Stepper steps={steps} activeStep={activeStep} nonLinear>
          {steps.map((step, index) => (
            <div key={index} onClick={handleStep(index)} style={{ cursor: 'pointer' }}>
              {step.label}
            </div>
          ))}
        </Stepper>
        <div style={{ marginTop: '24px' }}>
          <Button variant="contained" onClick={handleComplete}>
            {completed[activeStep] ? '완료됨' : '완료'}
          </Button>
        </div>
      </div>
    );
  },
};
