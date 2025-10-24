import Divider from './Divider';
import Chip from '../Chip';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    flexItem: {
      control: 'boolean',
    },
  },
};

export const Default = {
  render: () => (
    <div>
      <p>위 내용</p>
      <Divider />
      <p>아래 내용</p>
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ margin: '8px 0' }}>Full Width (기본)</p>
        <Divider variant="fullWidth" />
      </div>
      <div>
        <p style={{ margin: '8px 0' }}>Inset</p>
        <Divider variant="inset" />
      </div>
      <div>
        <p style={{ margin: '8px 0' }}>Middle</p>
        <Divider variant="middle" />
      </div>
    </div>
  ),
};

export const WithText = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Divider>OR</Divider>
      <Divider>또는</Divider>
      <Divider>구분선</Divider>
    </div>
  ),
};

export const TextAlignment = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Divider textAlign="left">왼쪽</Divider>
      <Divider textAlign="center">가운데</Divider>
      <Divider textAlign="right">오른쪽</Divider>
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div style={{ display: 'flex', height: '100px', alignItems: 'center' }}>
      <span>왼쪽</span>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <span>가운데</span>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <span>오른쪽</span>
    </div>
  ),
};

export const InList = {
  render: () => (
    <div style={{ width: '300px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <div style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>참가자 목록</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>총 3명</p>
      </div>
      <Divider />
      <div style={{ padding: '12px 16px' }}>김철수</div>
      <Divider variant="inset" />
      <div style={{ padding: '12px 16px' }}>이영희</div>
      <Divider variant="inset" />
      <div style={{ padding: '12px 16px' }}>박민수</div>
    </div>
  ),
};

export const WithChip = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Divider>
        <Chip label="OR" size="small" />
      </Divider>
      <Divider>
        <Chip label="단계 1" color="primary" size="small" />
      </Divider>
      <Divider textAlign="left">
        <Chip label="중요" color="error" size="small" />
      </Divider>
    </div>
  ),
};

export const SectionDivider = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h3>참가 신청</h3>
      <p>대회에 참가하려면 아래 정보를 입력하세요.</p>

      <Divider sx={{ my: 3 }}>기본 정보</Divider>
      <p>이름, 연락처 등을 입력하세요.</p>

      <Divider sx={{ my: 3 }}>경기 정보</Divider>
      <p>참가할 부서와 부를 선택하세요.</p>

      <Divider sx={{ my: 3 }}>결제 정보</Divider>
      <p>참가비 결제를 진행하세요.</p>
    </div>
  ),
};

export const ContentSeparator = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <div style={{ marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>2024 서울시 탁구 선수권</h4>
        <p style={{ margin: 0, color: '#666' }}>2024.03.15</p>
      </div>

      <Divider />

      <div style={{ marginTop: '16px', marginBottom: '16px' }}>
        <strong>참가 부문:</strong> 남자부 단식<br />
        <strong>등급:</strong> 1부<br />
        <strong>참가비:</strong> 30,000원
      </div>

      <Divider />

      <div style={{ marginTop: '16px' }}>
        <strong>접수 현황:</strong> 15 / 32명
      </div>
    </div>
  ),
};

export const VerticalMenu = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
      <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>홈</a>
      <Divider orientation="vertical" flexItem />
      <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>대회</a>
      <Divider orientation="vertical" flexItem />
      <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>참가신청</a>
      <Divider orientation="vertical" flexItem />
      <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>결과</a>
    </div>
  ),
};

export const CardSections = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      maxWidth: '400px',
    }}>
      <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
        <h3 style={{ margin: 0 }}>대회 정보</h3>
      </div>
      <Divider />
      <div style={{ padding: '16px' }}>
        <p style={{ margin: '0 0 8px 0' }}><strong>대회명:</strong> 2024 서울시 탁구 선수권</p>
        <p style={{ margin: '0 0 8px 0' }}><strong>일시:</strong> 2024.03.15</p>
        <p style={{ margin: 0 }}><strong>장소:</strong> 서울시 체육관</p>
      </div>
      <Divider />
      <div style={{ padding: '16px' }}>
        <p style={{ margin: '0 0 8px 0' }}><strong>참가비:</strong> 30,000원</p>
        <p style={{ margin: 0 }}><strong>마감일:</strong> 2024.03.10</p>
      </div>
    </div>
  ),
};
