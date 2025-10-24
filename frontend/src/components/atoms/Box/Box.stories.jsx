import Box from './Box';

export default {
  title: 'Atoms/Box',
  component: Box,
  tags: ['autodocs'],
};

export const Default = {
  render: () => (
    <Box sx={{ p: 2, border: '1px solid #e0e0e0' }}>
      기본 Box 컴포넌트
    </Box>
  ),
};

export const WithPadding = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box sx={{ p: 1, border: '1px solid #e0e0e0' }}>p: 1</Box>
      <Box sx={{ p: 2, border: '1px solid #e0e0e0' }}>p: 2</Box>
      <Box sx={{ p: 3, border: '1px solid #e0e0e0' }}>p: 3</Box>
      <Box sx={{ p: 4, border: '1px solid #e0e0e0' }}>p: 4</Box>
    </div>
  ),
};

export const WithMargin = {
  render: () => (
    <Box sx={{ border: '1px dashed #ccc', p: 1 }}>
      <Box sx={{ m: 1, p: 2, bgcolor: '#e3f2fd' }}>m: 1</Box>
      <Box sx={{ m: 2, p: 2, bgcolor: '#e3f2fd' }}>m: 2</Box>
      <Box sx={{ m: 3, p: 2, bgcolor: '#e3f2fd' }}>m: 3</Box>
    </Box>
  ),
};

export const WithColors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>Primary</Box>
      <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>Secondary</Box>
      <Box sx={{ p: 2, bgcolor: 'error.main', color: 'white' }}>Error</Box>
      <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white' }}>Success</Box>
    </div>
  ),
};

export const FlexLayout = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, p: 2, border: '1px solid #e0e0e0' }}>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>Item 1</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>Item 2</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>Item 3</Box>
    </Box>
  ),
};

export const GridLayout = {
  render: () => (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 2,
      p: 2,
      border: '1px solid #e0e0e0',
    }}>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>1</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>2</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>3</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>4</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>5</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd' }}>6</Box>
    </Box>
  ),
};

export const WithBorderRadius = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd', borderRadius: 1 }}>borderRadius: 1</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd', borderRadius: 2 }}>borderRadius: 2</Box>
      <Box sx={{ p: 2, bgcolor: '#e3f2fd', borderRadius: 3 }}>borderRadius: 3</Box>
    </div>
  ),
};

export const WithShadow = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box sx={{ p: 2, boxShadow: 1 }}>boxShadow: 1</Box>
      <Box sx={{ p: 2, boxShadow: 2 }}>boxShadow: 2</Box>
      <Box sx={{ p: 2, boxShadow: 3 }}>boxShadow: 3</Box>
    </div>
  ),
};

export const CenteredContent = {
  render: () => (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      bgcolor: '#f5f5f5',
      border: '1px solid #e0e0e0',
    }}>
      가운데 정렬된 콘텐츠
    </Box>
  ),
};

export const CardLike = {
  render: () => (
    <Box sx={{
      p: 3,
      bgcolor: 'white',
      borderRadius: 2,
      boxShadow: 2,
      maxWidth: 400,
    }}>
      <h3 style={{ margin: '0 0 8px 0' }}>카드 스타일 Box</h3>
      <p style={{ margin: 0, color: '#666' }}>
        Box 컴포넌트를 사용해 카드 같은 레이아웃을 만들 수 있습니다.
      </p>
    </Box>
  ),
};
