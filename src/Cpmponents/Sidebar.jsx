import { useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets';


export const Sidebar = () => {

 const navigate = useNavigate();


  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>

          <div className=' flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.spotify_logo} alt="" />
                <p className='font-bold'>Spotify</p>

            </div>


            <div onClick={() => navigate('/')} className=' flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>

            </div>

            

        </div>


   {/* library  */}

        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justfy-between'>
                <div className="flex items-center gap-3">
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibol'>Your Library</p>
                </div>

                <div className="flex items-center gap-3 ml-30">
                    <img src={assets.arrow_icon} alt=""  className='w-4'/>
                    <img src={assets.plus_icon} alt=""  className='w-4'/>

                </div>

            </div>
           
           {/* playlist and podcast  */}

            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                
                <h1>Create Your First PlayList</h1>
                <p className='font-light'>it's easy we will help you!</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full  mt-4'>Create Playlist</button>

            </div>

            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
                
                <h1>Let's Find Some Podcast to Follow</h1>
                <p className='font-light'>we'll keep ypu update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full  mt-4'>Browse Podcast</button>

            </div>

        </div>

    </div>
  )
}
