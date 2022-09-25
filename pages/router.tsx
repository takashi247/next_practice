import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Router = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  });

  return <span>{router.pathname}</span>;
};

export default Router;