import React, { useEffect } from 'react';

const Apply = () => {
  useEffect(() => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfLYXyFD21hRxNxZRSoAA1UX7cAjDc_hcptE33wa8uK9y4Nvg/viewform';
  }, []);

  return (
    <div>Redirecting...</div>
  );
};

export default Apply;
