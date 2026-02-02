import TeamWithAlgae from "../assets/HS Robotics 25 yearbook/20250208_163539.jpg";

const PhotoGallery = () => {
    return (

        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 min-h-screen px-5">
        <div className="flex flex-col items-center max-w-5xl text-center gap-4">
            <h1 className="text-4xl font-bold">Photos</h1>
            <h2 className="font-bold">Coming soon!</h2>
            <p>
            Here are some of our many team photos
            </p>
         <div className="w-48 h-48 overflow-hidden rounded-lg">
          <img
            src={TeamWithAlgae}
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div>
        </div>
        </div>
    );
}
export default PhotoGallery;
