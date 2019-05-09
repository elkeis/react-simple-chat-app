import React from 'react';

import  {
    genClass,
    LEFT_SPLIT,
    ACTIVE_COLOR,
    ACTIVE_BACKGROUND_COLOR
} from '../css';

export default function ViewSwitch({views, activeView, onChooseView}) {
    const getViewSwitchClass = view => {
        if (activeView === view.type) {
            return `${$view_switch} ${$active}`;
        } else {
            return $view_switch;
        }
    }
    return (
        <div className={$component}>
            {STYLE}
            {views.map(v => (
                <div 
                    className={getViewSwitchClass(v)} 
                    key={v.type} 
                    onClick={() => onChooseView(v)}
                >{v.description}</div>
            ))}
        </div>
    )
}
const $component = genClass('ViewSwitch');
const $view_switch = genClass('view-switch');
const $active = genClass('active');
const STYLE = <style>{`
.${$component} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    position: relative;
}

.${$view_switch} {
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${LEFT_SPLIT};
}

.${$active} {
    background: ${ACTIVE_BACKGROUND_COLOR};
    color: ${ACTIVE_COLOR};
}
`}</style>