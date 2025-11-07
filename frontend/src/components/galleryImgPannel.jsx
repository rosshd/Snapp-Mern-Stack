import React from 'react';

const GalPannel = ({ files = [], className }) => {
    console.log('Files array received:', files);
    const filePath = '/uploads/';
    console.log('Base file path being used:', filePath);

    const renderFiles = () => {
        if (!files || files.length === 0) {
            console.log('No files available');
            return <div>No files available</div>;
        }

        if (files.length === 1) {
            console.log('Rendering one file:', `${filePath}${files[0]}`);
            return (
                <div className='flex flex-col items-center justify-end w-full h-full py-4'>
                    <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                        className='max-h-[40vh] w-auto max-w-full rounded-md object-contain'
                    />     
                </div>   
            );
        }

        if (files.length === 2) {
            console.log('Rendering two files:', files.map((file, index) => `${filePath}${file}`));
            return (
                <div className='flex flex-col w-full h-full items-center justify-end gap-2 py-2'>
                    <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                        className='max-h-[20vh] w-auto max-w-full rounded-md object-contain'
                    />
                    <img key='1' src={`${filePath}${files[1]}`} alt={`File 2`}
                        className='max-h-[20vh] w-auto max-w-full rounded-md object-contain'
                    />        
                </div>  
            );
        }

        if (files.length > 2) {
            console.log('Rendering more than two files:', files.map((file, index) => `${filePath}${file}`));
            return (
                <div className='flex flex-col w-full h-full items-center justify-end gap-2 py-2'>
                    <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                        className='max-h-[26vh] w-auto max-w-full object-contain rounded-md'
                    />
                    <div className='flex flex-row w-full gap-2 items-center justify-center'>
                        <img key='1' src={`${filePath}${files[1]}`} alt={`File 2`}
                            className='max-h-[12vh] w-auto max-w-[48%] object-contain rounded-md'
                        />   
                        <img key='2' src={`${filePath}${files[2]}`} alt={`File 3`}
                            className='max-h-[12vh] w-auto max-w-[48%] object-contain rounded-md'
                        /> 
                    </div>  
                </div>  
            );
        }
    };

    return (
        <div className={className}>
            {renderFiles()}
        </div>
    );
};

export default GalPannel;
