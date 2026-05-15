import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


const PhotoDetailsPage = async ({params}) => {
     
    const {id}=await params ;
    
    const res = await fetch("https://pixgen-pied.vercel.app/data.json");
    const photos = await res.json();
    
    const photo = photos.find(p=>p.id == id);
    console.log(photo);
    return (
        <div>
            <div className="w-[1400px] mx-auto flex gap-10 justify-between">
                
                <div className="relative w-[50%] h-[600px]">                                      
                       <Image  src={photo.imageUrl}
                                fill 
                                alt={photo.title}
                                className="rounded-xl" />                                    
                </div>
                
                <div className="w-[50%]">
                    <h1>{photo.title}</h1>
                    <p>{photo.prompt}</p>

                    <div className="flex justify-between">
                                        <span className="flex items-center gap-2">
                                            <FaHeart /> {photo.likes}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FiDownload /> {photo.downloads}
                    
                                        </span>
                                    </div>

                </div>

            </div>
        </div>
    );
};

export default PhotoDetailsPage;

// {id: 9, title: 'Mystic Forest Spirit', 
//     imageUrl: 'https://i.pinimg.com/1200x/c3/5b/a1/c35ba1249f08c1ce028e27787abf47fb.jpg', 
//     prompt: 'A giant glowing wolf spirit walking through a mystical forest, moonlight, fog, ethereal', 
//     category: 'Fantasy', …}
    