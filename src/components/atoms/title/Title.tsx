import React from 'react';

type TitleProps = {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
}

const Title: React.FC<TitleProps> = ({
                                         as: Component = 'h1',
                                         children,
                                         className = ''
                                     }) => {
    return (
        <Component className={className}>
            {children}
        </Component>
    );
};

export default Title;
