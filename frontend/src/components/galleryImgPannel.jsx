import React from 'react';

const GalPannel = ({ files = [], className }) => {
    console.log('Images Prop:', files);

    const filePath = 'http://localhost:3000/uploads/';
    

    const renderFiles = () => {
        if (!files || files.length === 0) {
            return <div>No files available</div>;
        }
        if (files.length === 1) {
            return <div className='flex flex-row items-center justify-center py-4 max-h-[40vh]'>
                <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                    className='h-[100%] rounded-md object-cover'
                />     
            </div>   
        }

        if (files.length === 2) {
            return <div className='flex flex-row flex-wrap overflow-hidden max-h-[50vh] w-full items-center justify-center gap-2'>
                <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                    className='w-[50%] h-auto rounded-md object-cover'
                />
                <img key='1' src={`${filePath}${files[1]}`} alt={`File 2`}
                    className='w-[50%] h-auto rounded-md object-cover'
                />        
            </div>  
        }

        if (files.length > 2) {
            return <div className='flex flex-row flex-wrap justify-center items-center overflow-hidden max-h-[55vh] space-y-2 gap-[2%]'>
                <img key='0' src={`${filePath}${files[0]}`} alt={`File 1`}
                    className=' w-[80%] object-cover rounded-md'
                />
                <img key='1' src={`${filePath}${files[1]}`} alt={`File 2`}
                    className=' w-[39%] object-cover rounded-md'
                />   
                <img key='2' src={`${filePath}${files[2]}`} alt={`File 3`}
                    className=' w-[39%] object-cover rounded-md'
                />   
            </div>  
        }
        
    };

    return (
        <div className={className}>
            {renderFiles()}
        </div>
    );
};

export default GalPannel;