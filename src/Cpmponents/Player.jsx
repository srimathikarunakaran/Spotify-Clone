import { assets, } from '../assets/assets'

import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext';


export const Player = () => {


    const { Track, seekBar, seekBg, PlayerStaus, play, pause, Time,previous,next ,seekSong} = useContext(PlayerContext);

    return (
        <div className='h-[10%] bg-black flex justify-betweenitems-center text-white px-4 '>
            <div className="hidden lg:flex items-center gap-4">
                <img className='w-12' src={Track.image} alt="" />
                <div>
                    <p>{Track.name}</p>
                    <p>{Track.desc.slice(0, 12)}</p>
                </div>

            </div>


            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img  onClick={previous}  className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {PlayerStaus
                        ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                        : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    }

                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex items-center gap-4'>
                    <p>
                        {Time?.currentTime?.minute ?? 0}:{Time?.currentTime?.second ?? 0}
                    </p>
                    <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>
                        {Time?.TotalTime?.minute ?? 0}:{Time?.TotalTime?.second ?? 0}
                    </p>

                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img src={assets.plays_icon} alt="" className='w-4' />
                <img src={assets.mic_icon} alt="" className='w-4' />
                <img src={assets.queue_icon} alt="" className='w-4' />
                <img src={assets.speaker_icon} alt="" className='w-4' />
                <img src={assets.volume_icon} alt="" className='w-4' />
                <div className='w-20 bg-slate-50 h-1 rounded'>

                </div>
                <img src={assets.mini_player_icon} alt="" className='w-4' />
                <img src={assets.zoom_icon} alt="" className='w-4' />

            </div>

        </div>
    )
}
