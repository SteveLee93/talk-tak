import { useState } from 'react';
import Menu from './Menu';
import Button from '../Button';
import IconButton from '../IconButton';
import { MoreVert, Edit, Delete, Share, Info, Settings, Logout, Person } from '@mui/icons-material';

export default {
  title: 'Atoms/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export const Default = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
      { label: '편집', value: 'edit' },
      { label: '공유', value: 'share' },
      { label: '삭제', value: 'delete' },
    ];

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
          메뉴 열기
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => alert(`선택: ${item.label}`)}
        />
      </>
    );
  },
};

export const WithIcons = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
      { label: '편집', value: 'edit', icon: <Edit /> },
      { label: '공유', value: 'share', icon: <Share /> },
      { label: '삭제', value: 'delete', icon: <Delete /> },
    ];

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
          아이콘 메뉴
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => alert(`선택: ${item.label}`)}
        />
      </>
    );
  },
};

export const WithDivider = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
      { label: '프로필', value: 'profile', icon: <Person /> },
      { label: '설정', value: 'settings', icon: <Settings />, divider: true },
      { label: '로그아웃', value: 'logout', icon: <Logout /> },
    ];

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
          구분선 있는 메뉴
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => alert(`선택: ${item.label}`)}
        />
      </>
    );
  },
};

export const WithDisabled = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
      { label: '활성', value: 'enabled', icon: <Edit /> },
      { label: '비활성', value: 'disabled', icon: <Delete />, disabled: true },
      { label: '활성', value: 'enabled2', icon: <Share /> },
    ];

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
          비활성화 포함 메뉴
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => alert(`선택: ${item.label}`)}
        />
      </>
    );
  },
};

export const IconButtonMenu = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
      { label: '편집', value: 'edit', icon: <Edit /> },
      { label: '공유', value: 'share', icon: <Share /> },
      { label: '정보', value: 'info', icon: <Info />, divider: true },
      { label: '삭제', value: 'delete', icon: <Delete /> },
    ];

    return (
      <>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <MoreVert />
        </IconButton>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => alert(`선택: ${item.label}`)}
        />
      </>
    );
  },
};

export const TournamentMenu = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
      { label: '대회 정보', value: 'info', icon: <Info /> },
      { label: '참가자 관리', value: 'participants', icon: <Person /> },
      { label: '설정', value: 'settings', icon: <Settings />, divider: true },
      { label: '공유', value: 'share', icon: <Share /> },
      { label: '삭제', value: 'delete', icon: <Delete /> },
    ];

    return (
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h4 style={{ margin: '0 0 4px 0' }}>2024 서울시 탁구 선수권</h4>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>2024.03.15</p>
        </div>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <MoreVert />
        </IconButton>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => alert(`선택: ${item.label}`)}
        />
      </div>
    );
  },
};

export const UserMenu = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
      { label: '내 프로필', value: 'profile', icon: <Person /> },
      { label: '내 대회', value: 'tournaments', icon: <Info /> },
      { label: '설정', value: 'settings', icon: <Settings />, divider: true },
      { label: '로그아웃', value: 'logout', icon: <Logout /> },
    ];

    return (
      <>
        <Button
          variant="outlined"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          endIcon={<Person />}
        >
          김철수
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => {
            if (item.value === 'logout') {
              alert('로그아웃되었습니다');
            } else {
              alert(`선택: ${item.label}`);
            }
          }}
        />
      </>
    );
  },
};

export const PositionedMenus = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [position, setPosition] = useState('bottom-right');

    const items = [
      { label: '옵션 1', value: '1' },
      { label: '옵션 2', value: '2' },
      { label: '옵션 3', value: '3' },
    ];

    const positions = {
      'bottom-right': {
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
      },
      'bottom-left': {
        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
        transformOrigin: { vertical: 'top', horizontal: 'left' },
      },
      'top-right': {
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        transformOrigin: { vertical: 'bottom', horizontal: 'right' },
      },
      'top-left': {
        anchorOrigin: { vertical: 'top', horizontal: 'left' },
        transformOrigin: { vertical: 'bottom', horizontal: 'left' },
      },
    };

    const handleButtonClick = (e, pos) => {
      setAnchorEl(e.currentTarget);
      setPosition(pos);
    };

    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button onClick={(e) => handleButtonClick(e, 'bottom-right')}>
          하단 오른쪽
        </Button>
        <Button onClick={(e) => handleButtonClick(e, 'bottom-left')}>
          하단 왼쪽
        </Button>
        <Button onClick={(e) => handleButtonClick(e, 'top-right')}>
          상단 오른쪽
        </Button>
        <Button onClick={(e) => handleButtonClick(e, 'top-left')}>
          상단 왼쪽
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => alert(`선택: 옵션 ${item.value}`)}
          {...positions[position]}
        />
      </div>
    );
  },
};

export const ActionMenu = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [action, setAction] = useState(null);

    const items = [
      { label: '편집', value: 'edit', icon: <Edit /> },
      { label: '공유', value: 'share', icon: <Share /> },
      { label: '삭제', value: 'delete', icon: <Delete />, divider: true },
      { label: '취소', value: 'cancel' },
    ];

    return (
      <div>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
          액션 메뉴
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={items}
          onItemClick={(item) => {
            setAction(item.label);
          }}
        />
        {action && (
          <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
            선택된 액션: <strong>{action}</strong>
          </div>
        )}
      </div>
    );
  },
};

export const ContextMenu = {
  render: () => {
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (event) => {
      event.preventDefault();
      setContextMenu(
        contextMenu === null
          ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
          : null
      );
    };

    const handleClose = () => {
      setContextMenu(null);
    };

    const items = [
      { label: '복사', value: 'copy' },
      { label: '붙여넣기', value: 'paste', divider: true },
      { label: '삭제', value: 'delete', icon: <Delete /> },
    ];

    return (
      <div>
        <div
          onContextMenu={handleContextMenu}
          style={{
            padding: '40px',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'context-menu',
          }}
        >
          이 영역에서 우클릭하세요
        </div>
        <Menu
          open={contextMenu !== null}
          anchorEl={null}
          onClose={handleClose}
          items={items}
          onItemClick={(item) => alert(`선택: ${item.label}`)}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        />
      </div>
    );
  },
};
