import React from 'react';

import GameIcon from '@/assets/icon/game.svg';
import HistoryIcon from '@/assets/icon/history.svg';
import QuestIcon from '@/assets/icon/quest.svg';
import RankingIcon from '@/assets/icon/ranking.svg';
import ActivityIcon from '@/assets/icon/activity.svg';

const TabBarIcon = ({name, focus}) => {
    const iconColor = focus ? '#FF3348' : '#92929D';
    switch(name)
    {
        case 'game':
            return <GameIcon fill={iconColor}/>
        case 'history':
            return <HistoryIcon fill={iconColor}/>
        case 'quest':
            return <QuestIcon fill={iconColor}/>
        case 'ranking':
            return <RankingIcon fill={iconColor}/>
        case 'activity':
            return <ActivityIcon fill={iconColor}/>                        
        default:
            return <></>
    }
}

export default TabBarIcon;