const Intro = ({title,bgImage}:IntroProps) => {
    return ( 
        <div className="h-screen w-full flex flex-col justify-center items-center bg-cover backdrop-brightness-50" style={{backgroundImage:`url(${bgImage})`}}>
            <div className='w-full h-full absolute top-0 left-0 z-[1] backdrop-container'></div>
            <h2 className="text-5xl text-md w-full flex justify-center font-bold tracking-wider relative z-[2]">{title}</h2>
            <div className="w-56 h-1.5 rounded-lg bg-white my-4 text-center mx-auto z-[2]"></div>
        </div>
     );
}
 
export default Intro;


type IntroProps= {
    title:string,
    bgImage:string
}