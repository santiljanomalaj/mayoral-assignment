import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import useUpdateParams from './useUpdateParams';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('useUpdateParams', () => {
  it('should update the URL with the new params keeping the previous ones', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      pathname: '/test',
      query: { oldParam: 'old' },
      replace: pushMock,
    });

    const { result } = renderHook(() => useUpdateParams());
    result.current.updateUrlParams({ newParam: 'new' });

    expect(pushMock).toHaveBeenCalledWith('/test?oldParam=old&newParam=new');
  });

  it('should update the URL replacing the values for the same query param', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      pathname: '/test',
      query: { oldParam: 'old' },
      replace: pushMock,
    });

    const { result } = renderHook(() => useUpdateParams());
    result.current.updateUrlParams({ oldParam: 'new' });

    expect(pushMock).toHaveBeenCalledWith('/test?oldParam=new');
  });

  it('should update the URL replacing the values for the same query param and keep previous ones', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      pathname: '/test',
      query: { oldParam: 'old' },
      replace: pushMock,
    });

    const { result } = renderHook(() => useUpdateParams());
    result.current.updateUrlParams({ oldParam: 'new', newParam: 'newParamValue' });

    expect(pushMock).toHaveBeenCalledWith('/test?oldParam=new&newParam=newParamValue');
  });
});
