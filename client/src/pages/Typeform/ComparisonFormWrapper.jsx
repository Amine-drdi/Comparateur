import React from 'react';
import { useParams } from 'react-router-dom';
import ComparisonForm from './ComparisonForm';

function ComparisonFormWrapper() {
  const { id } = useParams();
  return <ComparisonForm id={id} />;
}

export default ComparisonFormWrapper;
