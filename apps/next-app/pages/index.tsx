import React, { useEffect } from 'react';

export const Index = () => {
  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(res => console.log);
  }, []);

  return <div>Next App</div>;
};

export default Index;
