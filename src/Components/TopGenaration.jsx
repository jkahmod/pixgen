import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenaration = async () => {
    const res = await fetch('https://pixgen-pied.vercel.app/data.json');
    const photos = await res.json(); 
    const topPhotos =photos.slice(0,8)

    console.log(topPhotos);
    return (
        <div className='w-[1400px] mx-auto space-y-6'>
            <h1 className='text-2xl pt-10 text-center font-bold text-zinc-600'>Top Genaration</h1>
            <div className='grid grid-cols-4 gap-5'>
                {topPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}/>
                )}
            </div>
        </div>
    );
};

export default TopGenaration;