import React from 'react';
import Link from 'next/link';

const Button = ({ title, url }) => {
  return (
    <Link href={`/${url}`}>
      <button style={{ backgroundColor: '#ADD8E6', margin: 10, padding: 20 }}>
        {title}
      </button>
    </Link>
  );
};

export default Button;
