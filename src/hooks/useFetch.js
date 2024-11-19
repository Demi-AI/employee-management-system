import React from 'react';
import useFetch from '../hooks/useFetch';

function DataDisplay() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data && data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
