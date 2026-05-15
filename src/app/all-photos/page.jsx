import PhotoCard from "@/Components/PhotoCard";

const AllPhotosPage = async () => {

    const res = await fetch("https://pixgen-pied.vercel.app/data.json");

    const photos = await res.json();
    return (
        <div className="w-[1400px] mx-auto ">
            <h1 className="text-2xl text-center font-bold py-10 capitalize ">all-photos</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;