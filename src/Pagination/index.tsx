import React, { useCallback } from 'react';

export interface IPaginationProps {
    children: React.ReactNode;
    onClick?: () => void;
}

function getClassName(props: IPaginationProps) {
    let className = 'btn-group';
    return className;
}

export default (props: IPaginationProps) => {
    const {
        children,
    } = props;
    // const className = getClassName(props);
    return (
        <div className="btn-group">
            <button className="btn">1</button>
            <button className="btn btn-active">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
        </div>
    );
};

/**
 * 用于tree shaking css
 * @returns
 */
function LoadPagination() {
    return <div className="btn-group"></div>;
}
