import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
    },
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    gutterBottom: {
      control: 'boolean',
    },
    noWrap: {
      control: 'boolean',
    },
    paragraph: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: '기본 텍스트입니다',
    variant: 'body1',
  },
};

export const Headings = {
  render: () => (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>
    </div>
  ),
};

export const Subtitles = {
  render: () => (
    <div>
      <Typography variant="subtitle1">Subtitle 1 - 중요한 부제목</Typography>
      <Typography variant="subtitle2">Subtitle 2 - 일반 부제목</Typography>
    </div>
  ),
};

export const Body = {
  render: () => (
    <div>
      <Typography variant="body1">
        Body 1 - 기본 본문 텍스트입니다. 이것은 일반적인 단락에 사용됩니다.
      </Typography>
      <Typography variant="body2">
        Body 2 - 작은 본문 텍스트입니다. 부가 설명이나 보조 정보에 사용됩니다.
      </Typography>
    </div>
  ),
};

export const Caption = {
  args: {
    variant: 'caption',
    children: 'Caption - 작은 설명 텍스트',
  },
};

export const Button = {
  args: {
    variant: 'button',
    children: '버튼 텍스트',
  },
};

export const Overline = {
  args: {
    variant: 'overline',
    children: 'Overline - 상단 라벨',
  },
};

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography color="inherit">Inherit - 상속된 색상</Typography>
      <Typography color="primary">Primary - 주 색상</Typography>
      <Typography color="secondary">Secondary - 보조 색상</Typography>
      <Typography color="textPrimary">Text Primary - 주 텍스트 색상</Typography>
      <Typography color="textSecondary">Text Secondary - 보조 텍스트 색상</Typography>
      <Typography color="error">Error - 오류 색상</Typography>
    </div>
  ),
};

export const Alignment = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography align="left">Left - 왼쪽 정렬</Typography>
      <Typography align="center">Center - 가운데 정렬</Typography>
      <Typography align="right">Right - 오른쪽 정렬</Typography>
      <Typography align="justify">
        Justify - 양쪽 정렬. 이것은 긴 텍스트에서 양쪽 정렬이 어떻게 보이는지 확인하기 위한 예시입니다.
        양쪽 정렬은 텍스트의 좌우 끝이 모두 정렬되도록 합니다.
      </Typography>
    </div>
  ),
};

export const GutterBottom = {
  render: () => (
    <div>
      <Typography gutterBottom>
        하단 여백이 있는 텍스트
      </Typography>
      <Typography>
        바로 아래 텍스트
      </Typography>
    </div>
  ),
};

export const NoWrap = {
  render: () => (
    <div style={{ maxWidth: '200px', border: '1px solid #ccc', padding: '8px' }}>
      <Typography noWrap>
        이것은 매우 긴 텍스트입니다. 줄바꿈이 방지되어 말줄임표로 표시됩니다.
      </Typography>
      <Typography>
        이것은 일반 텍스트입니다. 줄바꿈이 발생합니다.
      </Typography>
    </div>
  ),
};

export const Paragraph = {
  render: () => (
    <div>
      <Typography paragraph>
        첫 번째 단락입니다. paragraph 속성을 사용하면 하단에 자동으로 여백이 추가됩니다.
      </Typography>
      <Typography paragraph>
        두 번째 단락입니다. 단락 사이의 간격이 적절하게 유지됩니다.
      </Typography>
      <Typography>
        마지막 단락입니다.
      </Typography>
    </div>
  ),
};

export const CompleteExample = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <Typography variant="h3" color="primary" gutterBottom>
        탁구 대회 안내
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        2024 서울시 탁구 선수권 대회
      </Typography>

      <Typography variant="h6" gutterBottom style={{ marginTop: '24px' }}>
        대회 개요
      </Typography>
      <Typography paragraph>
        본 대회는 서울시 체육회가 주최하는 공식 탁구 대회로, 남자부, 여자부, 혼합부로 구성되어 있습니다.
        각 부문은 1부부터 4부까지 나뉘어 참가자의 실력에 맞는 경기를 진행합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>
        참가 안내
      </Typography>
      <Typography paragraph>
        참가를 원하시는 분들은 온라인 신청을 통해 등록하실 수 있습니다.
        단식, 복식, 단체전 중 원하시는 종목을 선택하여 참가하실 수 있습니다.
      </Typography>

      <Typography variant="caption" color="textSecondary">
        * 자세한 사항은 대회 사무국으로 문의해주시기 바랍니다.
      </Typography>
    </div>
  ),
};
