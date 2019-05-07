let i = 0;

export function genClass(className) {
    return `${className}-${i++}`;
}

export const VIEW_SPLIT_COLOR = '#7aa89f';
export const VIEW_SPLIT_THICKNESS = '1px';

export const BOTTOM_SPLIT = `box-shadow: 0px ${VIEW_SPLIT_THICKNESS} ${VIEW_SPLIT_COLOR}`;