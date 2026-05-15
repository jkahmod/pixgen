import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const PhotoCard = ({photo}) => {
    return (
        <div>
            <Card className="border border-gray-400">
            <div className="space-y-3" key={photo.id}>
                <div className="relative w-full aspect-square">
                    <Image src={photo.imageUrl}
                     fill 
                       sizes="(max-width: 768px) 100vw, 50vw"
                     alt={photo.title}
                     className="rounded-xl"   />
                     <Chip className="absolute right-2 top-2">{photo.category}</Chip>
                </div>
                <h1 className="text-lg font-semibold ">
                    {photo.title}
                </h1>
                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <FaHeart /> {photo.likes}
                    </span>
                    <span className="flex items-center gap-2">
                        <FiDownload /> {photo.downloads}

                    </span>
                </div>

      <Link href={`/all-photos/${photo.id}`}><Button variant="outline" className='w-full'>view details  </Button>
        </Link>
                    
            </div>
            </Card>
        </div>
    );
};

export default PhotoCard;