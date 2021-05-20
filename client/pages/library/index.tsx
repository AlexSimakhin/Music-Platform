import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if(router.pathname == '/library' ){
      router.push('/library/playlist');
    }
  });

  return (
    <></>
  );
}

export default Index;
