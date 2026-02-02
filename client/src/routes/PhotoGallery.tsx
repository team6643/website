import TeamWithAlgae from "../assets/HS Robotics 25 yearbook/20250208_163539.jpg";
const PhotoGallery = () => {
    return (

        <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 min-h-screen px-5">
        <div class="flex flex-col items-center max-w-5xl text-center gap-4">
            <h1 class="text-4xl font-bold">Photos</h1>
            <h2 class="font-bold">Coming soon!</h2>
            <p>
            Here are some of our many team photos
            </p>
            <ImageBox
        src="TeamWithAlgae"
        width={400}
        height={200}
        borderColor="blue"
      />
            <img class="flex-grow-0 flex-shrink-0 max-w-[500px] h-[300px] bg-[#d9d9d9] rounded-xl col-span-2 lg:col-span-1" src={TeamWithAlgae} />
        </div>
        </div>
    );
}

export default PhotoGallery;
