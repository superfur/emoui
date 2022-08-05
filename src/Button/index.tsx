import React, { useCallback } from 'react';

export interface IButtonProps {
    children: React.ReactNode;
    /**
     * @description 是否使用激活状态
     * @default false
     */
    active?: boolean;
    /**
     * @description 是否禁止动画
     * @default false
     */
    noAnimation?: boolean;
    /**
     * @description 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 是否使用外框模式
     * @default false
     */
    outline?: boolean;
    /**
     * @description 是否使用整行
     * @default false
     */
    block?: boolean;
    /**
     * @description 是否使用加载模式
     * @default false
     */
    loading?: boolean;
    /**
     * @description 形状
     * @default default
     */
    shape?: 'default' | 'circle' | 'square';
    /**
     * @description 类型
     * @default default
     */
    type?: ButtonType;
    /**
     * @description 大小
     * @default default
     */
    size?: ButtonSize;
    /**
     * @description 链接
     */
    link?: string;
    /**
     * @description 回调函数
     * @default () => void
     */
    onClick?: () => void;
}

export type ButtonType = 'default' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error' | 'glass';

export type ButtonSize = 'lg' | 'sm' | 'xs';

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
    if (props.disabled) {
        className += ' btn-disabled';
    }
    if (props.shape === 'circle') {
        className += ' btn-circle';
    } else if (props.shape === 'square') {
        className += ' btn-square';
    }
    if (props.outline) {
        className += ' btn-outline';
    }
    if (props.type) {
        className += props.type === 'glass' ? ' glass' : ` btn-${props.type}`;
    }
    if (props.size) {
        className += ` btn-${props.size}`;
    }
    if (props.link) {
        className += ` btn-link`;
    }
    return className;
}

export default (props: IButtonProps) => {
    const {
        children,
        onClick,
        link,
    } = props;
    const className = getClassName(props);
    const handleClick = useCallback(() => {
        if (link) {
            window.open(link, '_blank');
        }
        if (onClick) {
            onClick();
        }
    }, [onClick]);
    return <button className={className} onClick={handleClick}>{children}</button>;
};

/**
 * 用于tree shaking css
 * @returns
 */
function LoadButton() {
    return <button className="btn btn-primary btn-secondary	btn-accent btn-info	btn-success	btn-warning	btn-error btn-ghost	btn-link btn-outline btn-active	btn-disabled loading no-animation btn-lg btn-md	 btn-sm	btn-block btn-circle btn-square	btn-xs">Button</button>;
}
