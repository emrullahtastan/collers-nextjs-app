import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
};

export const SecondaryButton: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button
            className="box-border flex flex-row justify-center items-center px-4 py-3 w-[149px] h-[48px] border-2 border-philippine-bronze rounded-lg text-philippine-bronze"
        >
            {children}
        </button>
    );
};
