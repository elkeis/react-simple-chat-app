let i = 0;

export function genClass(className) {
    return `${className}-${i++}`;
}

export const APP_BACKGROUND_COLOR = '#f9fcfd';//'rgb(87, 143, 132)';
export const APP_TEXT_COLOR = '#121414';//'rgb(255, 255, 238)';

export const VIEW_SPLIT_COLOR = '#e6eef1'; //'#7aa89f';
export const VIEW_SPLIT_THICKNESS = '1px';

export const CHAT_BUBBLE_COLOR = '#dce9ec';
export const CHAT_MINE_BUBBLE_COLOR = '#dcecdc';

export const ACTIVE_BACKGROUND_COLOR = 'rgb(85, 179, 220)';
export const ACTIVE_COLOR = APP_BACKGROUND_COLOR;


export const BOTTOM_SPLIT = `box-shadow: 0px ${VIEW_SPLIT_THICKNESS} ${VIEW_SPLIT_COLOR}`;
export const TOP_SPLIT = `box-shadow: 0px -${VIEW_SPLIT_THICKNESS} ${VIEW_SPLIT_COLOR}`;
export const RIGHT_SPLIT = `box-shadow: ${VIEW_SPLIT_THICKNESS} 0px ${VIEW_SPLIT_COLOR}`;
export const LEFT_SPLIT = `box-shadow: -${VIEW_SPLIT_THICKNESS} 0px ${VIEW_SPLIT_COLOR}`;