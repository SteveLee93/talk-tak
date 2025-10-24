import Tooltip from './Tooltip';
import Button from '../Button';
import IconButton from '../IconButton';
import { Info, Delete, Edit, Add, Help } from '@mui/icons-material';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end',
      ],
    },
    arrow: {
      control: 'boolean',
    },
  },
};

export const Default = {
  render: () => (
    <Tooltip title="기본 툴팁입니다">
      <Button>마우스를 올려보세요</Button>
    </Tooltip>
  ),
};

export const WithButton = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip title="참가 신청하기">
        <Button variant="contained">신청</Button>
      </Tooltip>
      <Tooltip title="수정하기">
        <Button variant="outlined">수정</Button>
      </Tooltip>
      <Tooltip title="삭제하기">
        <Button variant="text" color="error">삭제</Button>
      </Tooltip>
    </div>
  ),
};

export const WithIconButton = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip title="정보">
        <IconButton>
          <Info />
        </IconButton>
      </Tooltip>
      <Tooltip title="수정">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="삭제">
        <IconButton color="error">
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="추가">
        <IconButton color="primary">
          <Add />
        </IconButton>
      </Tooltip>
      <Tooltip title="도움말">
        <IconButton>
          <Help />
        </IconButton>
      </Tooltip>
    </div>
  ),
};

export const AllPlacements = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', padding: '40px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Tooltip title="Top Start" placement="top-start">
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip title="Top" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip title="Top End" placement="top-end">
          <Button>Top End</Button>
        </Tooltip>
      </div>

      <div style={{ display: 'flex', gap: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Tooltip title="Left Start" placement="left-start">
            <Button>Left Start</Button>
          </Tooltip>
          <Tooltip title="Left" placement="left">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip title="Left End" placement="left-end">
            <Button>Left End</Button>
          </Tooltip>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Tooltip title="Right Start" placement="right-start">
            <Button>Right Start</Button>
          </Tooltip>
          <Tooltip title="Right" placement="right">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip title="Right End" placement="right-end">
            <Button>Right End</Button>
          </Tooltip>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <Tooltip title="Bottom Start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip title="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip title="Bottom End" placement="bottom-end">
          <Button>Bottom End</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const WithArrow = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip title="화살표 있음" arrow={true}>
        <Button>화살표 있음</Button>
      </Tooltip>
      <Tooltip title="화살표 없음" arrow={false}>
        <Button>화살표 없음</Button>
      </Tooltip>
    </div>
  ),
};

export const LongText = {
  render: () => (
    <Tooltip title="이것은 매우 긴 툴팁 텍스트입니다. 여러 줄로 표시될 수 있으며, 사용자에게 상세한 정보를 제공할 때 유용합니다.">
      <Button>긴 텍스트 툴팁</Button>
    </Tooltip>
  ),
};

export const MultilineText = {
  render: () => (
    <Tooltip
      title={
        <div>
          <div>첫 번째 줄</div>
          <div>두 번째 줄</div>
          <div>세 번째 줄</div>
        </div>
      }
    >
      <Button>여러 줄 툴팁</Button>
    </Tooltip>
  ),
};

export const WithCustomContent = {
  render: () => (
    <Tooltip
      title={
        <div style={{ padding: '4px' }}>
          <strong>참가 정보</strong>
          <div style={{ fontSize: '12px', marginTop: '4px' }}>
            • 부서: 남자부<br />
            • 부: 1부<br />
            • 종목: 단식
          </div>
        </div>
      }
    >
      <Button>상세 정보</Button>
    </Tooltip>
  ),
};

export const FormFieldHelp = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>부서 선택</span>
        <Tooltip title="본인의 성별에 맞는 부서를 선택하세요">
          <IconButton size="small">
            <Help fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>부 선택</span>
        <Tooltip title="실력에 맞는 부를 선택하세요. 1부가 가장 높은 수준입니다.">
          <IconButton size="small">
            <Help fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>종목 선택</span>
        <Tooltip title="단식: 1:1 경기, 복식: 2:2 경기, 단체전: 팀 경기">
          <IconButton size="small">
            <Help fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  ),
};

export const ActionButtons = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Tooltip title="새 대회 만들기">
        <IconButton color="primary">
          <Add />
        </IconButton>
      </Tooltip>
      <Tooltip title="대회 정보 수정">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="대회 삭제" placement="bottom">
        <IconButton color="error">
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="대회 상세 정보">
        <IconButton>
          <Info />
        </IconButton>
      </Tooltip>
    </div>
  ),
};

export const DisabledElements = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip title="비활성화된 버튼에도 툴팁 표시 가능">
        <span>
          <Button disabled>비활성화</Button>
        </span>
      </Tooltip>
      <Tooltip title="정보">
        <span>
          <IconButton disabled>
            <Info />
          </IconButton>
        </span>
      </Tooltip>
    </div>
  ),
};

export const InteractiveExample = {
  render: () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>2024 서울시 탁구 선수권</h4>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>2024.03.15</p>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tooltip title="대회 상세 정보 보기">
          <IconButton>
            <Info />
          </IconButton>
        </Tooltip>
        <Tooltip title="대회 정보 수정">
          <IconButton>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="대회 삭제 (복구 불가)" placement="bottom">
          <IconButton color="error">
            <Delete />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  ),
};
