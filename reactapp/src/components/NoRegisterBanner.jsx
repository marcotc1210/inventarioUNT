import React from 'react';

const NoRegisterBanner = ({children}) => {
    return (
        <div className="flex items-center justify-center p-4 mt-4 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg shadow-sm">
            <p className="text-center text-lg font-medium"> {children} </p>
        </div>
    );
};

export default NoRegisterBanner;
