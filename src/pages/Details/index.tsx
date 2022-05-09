import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();

  useEffect(() => {
    const { car }: any = state;

    console.log(car);
  }, []);

  return (
    <div />
  );
};

export default Details;
