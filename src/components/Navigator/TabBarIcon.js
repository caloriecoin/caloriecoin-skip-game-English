import React from 'react';

import GameIcon from '@/assets/icon/game.svg';
import HistoryIcon from '@/assets/icon/history.svg';
import AchievementIcon from '@/assets/icon/achievement.svg';
import ShopIcon from '@/assets/icon/shop.svg';
import ActivityIcon from '@/assets/icon/activity.svg';

const TabBarIcon = ({name, focus}) => {
  const iconColor = focus ? '#FF3348' : '#92929D';
  switch (name) {
    case 'game':
      return (
        <GameIcon
          fill={iconColor}
          width={focus ? 24 : 22}
          height={focus ? 24 : 22}
        />
      );
    case 'history':
      return (
        <HistoryIcon
          fill={iconColor}
          width={focus ? 24 : 22}
          height={focus ? 24 : 22}
        />
      );
    case 'achievement':
      return (
        <AchievementIcon
          fill={iconColor}
          width={focus ? 24 : 22}
          height={focus ? 24 : 22}
        />
      );
    case 'shop':
      return (
        <ShopIcon
          fill={iconColor}
          width={focus ? 24 : 22}
          height={focus ? 24 : 22}
        />
      );
    case 'activity':
      return (
        <ActivityIcon
          fill={iconColor}
          width={focus ? 24 : 22}
          height={focus ? 24 : 22}
        />
      );
    default:
      return <></>;
  }
};

export default TabBarIcon;
