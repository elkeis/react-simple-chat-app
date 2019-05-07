import React from 'react';
import {
    genClass,

    BOTTOM_SPLIT,
} from '../css';

export default function Navigation({
    onGoBack,
    description,
}) {
    return (
        <div className={$component}>
            {STYLE}
            <div className={$back_button} onClick={() => onGoBack()}></div>
            <div className={$description}>{description}</div>
        </div>
    )
}
const $component = genClass('Navigation');
const $description = genClass('description');
const $back_button = genClass('back-button');

const STYLE = <style>{`
.${$component} {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    ${BOTTOM_SPLIT};
}
.${$description} {
    display: flex;
    align-items: center;
    width: 100%;
}

.${$back_button} {
    font-size: 32px;     
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    cursor: pointer;

}
.${$back_button}:before {
    font: 35px arial, sans-serif;
    content: "<";
    transform: translate3d(-3px, 0, 0);
}

`}</style>