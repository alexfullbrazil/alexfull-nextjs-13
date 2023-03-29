import styled, { css } from 'styled-components';

import { IconProps } from './index';

export const IconWrapper = styled.div<IconProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    height: fit-content;

    transition: 0.2s;

    background: ${(props) => (props.background ? props.background : '')};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius + 'px' : '')};
    margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '')};
    margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '')};
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '')};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '')};

    cursor: ${(props) => (props.cursor ? props.cursor : '')};

    &:hover {
        background: ${(props) => (props.backgroundHover ? props.backgroundHover : '')};

        svg {
            path {
                fill: ${(props) => (props.fileHover ? props.fileHover : '')};
            }
        }
    }

    span {
        width: ${(props) => (props.size ? props.size + 'px' : '')};
        height: ${(props) => (props.size ? props.size + 'px' : '')};

        width: ${(props) => (props.width ? props.width + 'px' : '')};
        height: ${(props) => (props.height ? props.height + 'px' : '')};
    }

    svg {
        width: ${(props) => (props.size ? props.size + 'px' : '')};
        height: ${(props) => (props.size ? props.size + 'px' : '')};

        width: ${(props) => (props.width ? props.width + 'px' : '')};
        height: ${(props) => (props.height ? props.height + 'px' : '')};

        path {
            fill: ${(props) => (props.color ? props.color : '')};
            stroke: ${(props) => (props.stroke ? props.stroke : '')};
        }
    }
`;
