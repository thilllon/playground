import { useCallback } from 'react';

export const useGoBack = (router) => {
  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return goBack;
};
