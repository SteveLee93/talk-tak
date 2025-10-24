import { useState } from 'react';
import Modal from './Modal';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';

export default {
  title: 'Atoms/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fullWidth: {
      control: 'boolean',
    },
    fullScreen: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
  },
};

export const Default = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="기본 모달"
          actions={
            <>
              <Button onClick={() => setOpen(false)} variant="text">
                취소
              </Button>
              <Button onClick={() => setOpen(false)} variant="contained">
                확인
              </Button>
            </>
          }
        >
          <p>모달 내용이 여기에 표시됩니다.</p>
        </Modal>
      </>
    );
  },
};

export const WithoutTitle = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>제목 없는 모달</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          showCloseButton={false}
          actions={
            <Button onClick={() => setOpen(false)} variant="contained">
              닫기
            </Button>
          }
        >
          <p>제목이 없는 모달입니다.</p>
        </Modal>
      </>
    );
  },
};

export const WithoutActions = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>액션 없는 모달</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="정보"
        >
          <p>닫기 버튼(X)으로만 닫을 수 있는 모달입니다.</p>
        </Modal>
      </>
    );
  },
};

export const AllSizes = {
  render: () => {
    const [openSize, setOpenSize] = useState(null);
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    return (
      <>
        <div style={{ display: 'flex', gap: '8px' }}>
          {sizes.map((size) => (
            <Button key={size} onClick={() => setOpenSize(size)}>
              {size.toUpperCase()}
            </Button>
          ))}
        </div>

        {sizes.map((size) => (
          <Modal
            key={size}
            open={openSize === size}
            onClose={() => setOpenSize(null)}
            title={`${size.toUpperCase()} 크기 모달`}
            maxWidth={size}
            actions={
              <Button onClick={() => setOpenSize(null)} variant="contained">
                닫기
              </Button>
            }
          >
            <p>이것은 {size} 크기의 모달입니다.</p>
          </Modal>
        ))}
      </>
    );
  },
};

export const FullScreen = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>전체 화면 모달</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="전체 화면 모달"
          fullScreen
          actions={
            <Button onClick={() => setOpen(false)} variant="contained">
              닫기
            </Button>
          }
        >
          <p>전체 화면으로 표시되는 모달입니다.</p>
          <p>모바일 환경에서 유용합니다.</p>
        </Modal>
      </>
    );
  },
};

export const FormExample = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      part: '',
    });

    const handleSubmit = () => {
      console.log('제출:', formData);
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>참가 신청</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="참가 신청서"
          maxWidth="sm"
          actions={
            <>
              <Button onClick={() => setOpen(false)} variant="text">
                취소
              </Button>
              <Button onClick={handleSubmit} variant="contained">
                신청하기
              </Button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
              label="이름"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="이메일"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Select
              label="부서"
              options={[
                { value: '남자부', label: '남자부' },
                { value: '여자부', label: '여자부' },
                { value: '혼합부', label: '혼합부' },
              ]}
              value={formData.part}
              onChange={(e) => setFormData({ ...formData, part: e.target.value })}
              required
            />
          </div>
        </Modal>
      </>
    );
  },
};

export const ConfirmDialog = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
      alert('삭제되었습니다');
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)} variant="outlined" color="error">
          삭제
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="삭제 확인"
          maxWidth="xs"
          actions={
            <>
              <Button onClick={() => setOpen(false)} variant="text">
                취소
              </Button>
              <Button onClick={handleConfirm} variant="contained" color="error">
                삭제
              </Button>
            </>
          }
        >
          <p>정말로 삭제하시겠습니까?</p>
          <p style={{ color: '#d32f2f', fontSize: '14px' }}>
            이 작업은 되돌릴 수 없습니다.
          </p>
        </Modal>
      </>
    );
  },
};

export const InfoDialog = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>대회 규칙</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="대회 진행 규칙"
          maxWidth="md"
          actions={
            <Button onClick={() => setOpen(false)} variant="contained">
              확인
            </Button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4>1. 경기 방식</h4>
            <p>• 3세트 2선승제로 진행됩니다.</p>
            <p>• 각 세트는 11점 선취제입니다.</p>

            <h4>2. 참가 자격</h4>
            <p>• 만 18세 이상 누구나 참가 가능합니다.</p>
            <p>• 부서별로 참가 신청이 가능합니다.</p>

            <h4>3. 주의 사항</h4>
            <p>• 경기 시작 10분 전까지 대기해야 합니다.</p>
            <p>• 불참 시 사전에 반드시 연락해주세요.</p>
          </div>
        </Modal>
      </>
    );
  },
};

export const NestedModals = {
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen1(true)}>첫 번째 모달 열기</Button>

        <Modal
          open={open1}
          onClose={() => setOpen1(false)}
          title="첫 번째 모달"
          actions={
            <>
              <Button onClick={() => setOpen2(true)} variant="outlined">
                두 번째 모달 열기
              </Button>
              <Button onClick={() => setOpen1(false)} variant="contained">
                닫기
              </Button>
            </>
          }
        >
          <p>첫 번째 모달 내용입니다.</p>
        </Modal>

        <Modal
          open={open2}
          onClose={() => setOpen2(false)}
          title="두 번째 모달"
          maxWidth="xs"
          actions={
            <Button onClick={() => setOpen2(false)} variant="contained">
              닫기
            </Button>
          }
        >
          <p>두 번째 모달 내용입니다.</p>
        </Modal>
      </>
    );
  },
};
