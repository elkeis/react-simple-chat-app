import React from 'react';
import {
    genClass, SHADOW_COLOR
} from '../css';


export default function ChatInput({text, onUpdateText, disabled}) {
    return (
        <div className={$component}>
            {STYLE}
            <div className={$input_area}>
                <div className={$padding}>
                    <div className={$text_area_wrapper}>
                        <div className={$expander}>{text + '.'}</div> {/* + '.' cool-hack */}
                        <textarea disabled={disabled} className={$textarea} placeholder="Write a message..." value={text} onChange={e => onUpdateText(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

const $component = genClass('ChatInput');
const $input_area = genClass('input-area');
const $text_area_wrapper = genClass('text-area-wrapper');
const $expander = genClass('expander');
const $textarea = genClass('textarea');
const $padding = genClass('padding');

const STYLE = <style>{`

.${$component} {
    width: 100%;
    height: 100%;
}

.${$input_area} {
    min-height: 30px;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    box-shadow: inset 0 0 1px ${SHADOW_COLOR};
    overflow: hidden;
}

.${$padding} {
    padding: 5px 10px;
}

.${$text_area_wrapper} {
    position: relative;
    width: 100%;
}

.${$textarea}, .${$expander} {
    width: 100%;
    height: 100%;
    min-height: 20px;
    font-family: inherit; 
    font-size: inherit;
}

.${$textarea} {
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    background: transparent;
    box-sizing: border-box;
}

.${$expander} {
    white-space: pre-wrap;
    word-wrap: break-word;
    visibility: hidden;
    content: 'fff';
}

`}</style>