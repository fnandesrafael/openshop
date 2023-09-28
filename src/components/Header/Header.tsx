import React from 'react';

export default function Header() {
  return (
    <header
      className="flex h-16 w-full flex-row items-center justify-between bg-gray-200 p-4 shadow-sm"
      role="header"
    >
      <h1 className="text-base font-medium" role="heading">
        openshop
      </h1>
    </header>
  );
}
