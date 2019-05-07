let i = 0;

export function genClass(className) {
    return `${className}-${i++}`;
}

export const VIEW_SPLIT_COLOR = '#7aa89f';
export const VIEW_SPLIT_THICKNESS = '1px';
export const APP_BACKGROUND_COLOR = 'rgb(87, 143, 132)';
export const APP_TEXT_COLOR = 'rgb(255, 255, 238)';


export const BOTTOM_SPLIT = `box-shadow: 0px ${VIEW_SPLIT_THICKNESS} ${VIEW_SPLIT_COLOR}`;
export const TOP_SPLIT = `box-shadow: 0px -${VIEW_SPLIT_THICKNESS} ${VIEW_SPLIT_COLOR}`;
export const RIGHT_SPLIT = `box-shadow: ${VIEW_SPLIT_THICKNESS} 0px ${VIEW_SPLIT_COLOR}`;
export const LEFT_SPLIT = `box-shadow: -${VIEW_SPLIT_THICKNESS} 0px ${VIEW_SPLIT_COLOR}`;