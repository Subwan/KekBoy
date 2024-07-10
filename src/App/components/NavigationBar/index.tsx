import React from 'react';
import { Menu, MenuProps } from '@ui';

export const NavigationBar: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: 'Map',
      key: 'map',
    },
  ];

  return <Menu items={items} mode="horizontal" />;
};
