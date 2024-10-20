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
                <div className='flex flex-row items-center justify-center py-4 max-h-[40vh]'>
                    <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                        className='h-[30vh] max-w-[100%] rounded-md object-cover'
                    />     
                </div>   
            );
        }

        if (files.length === 2) {
            console.log('Rendering two files:', files.map((file, index) => `${filePath}${file}`));
            return (
                <div className='flex max-w-[100%] flex-row flex-wrap overflow-hidden w-full items-center justify-center gap-2'>
                    <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                        className='h-[19vh] w-auto max-w-[100%] rounded-md object-cover'
                    />
                    <img key='1' src={`${filePath}${files[1]}`} alt={`File 2`}
                        className='h-[19vh] w-auto max-w-[100%] rounded-md object-cover'
                    />        
                </div>  
            );
        }

        if (files.length > 2) {
            console.log('Rendering more than two files:', files.map((file, index) => `${filePath}${file}`));
            return (
                <div className='flex flex-col max-md:flex-wrap justify-center items-center overflow-hidden space-y-2 mr-2 gap-[2%]'>
                    <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                        className='h-[26vh] max-w-[100%] object-cover rounded-md'
                    />
                    <div className='flex max-w-[100%] flex-row gap-2'>
                        <img key='1' src={`${filePath}${files[1]}`} alt={`File 2`}
                            className='h-[12vh] max-w-[100%] object-cover rounded-md'
                        />   
                        <img key='2' src={`${filePath}${files[2]}`} alt={`File 3`}
                            className='h-[12vh] max-w-[100%] object-cover rounded-md'
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
