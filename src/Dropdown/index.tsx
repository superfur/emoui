import React from 'react';

export interface IButtonProps {
    children: React.ReactNode;
    active?: boolean;
    noAnimation?: boolean;
    disable?: boolean;
    outline?: boolean;
    block?: boolean;
    loading?: boolean;
    shape?: 'cicle' | 'square';
    type?: IButtonType;
    state?: IButtonState;
    size?: IButtonSize;
    onClick?: () => void;
}

export type IButtonType = 'default' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';

export type IButtonState = 'info' | 'success' | 'warning' | 'error';

export type IButtonSize = 'lg' | 'sm' | 'xs';

function getClassName(props: IButtonProps) {
    let className = 'btn';
    if (props.noAnimation) {
        className += ' no-animation';
    }
    if (props.loading) {
        className += props.children ? ' loading' : ' loading btn-square';
    }
    if (props.block) {
        className += ' btn-block';
    }
    if (props.disable) {
        className += ' btn-disabled';
    }
    if (props.shape === 'cicle') {
        className += ' btn-cicle';
    } else if (props.shape === 'square') {
        className += ' btn-square';
    }
    if (props.type) {
        className += ` btn-${props.type}`;
    }
    return className;
}

export default (props: IButtonProps) => {
    const {
        children,
        onClick,
    } = props;
    const className = getClassName(props);
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Click</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};
