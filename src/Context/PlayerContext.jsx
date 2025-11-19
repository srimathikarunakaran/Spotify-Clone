import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [Track, setTrack] = useState(songsData[0]);
    const [PlayerStaus, setPlayerStaus] = useState(false);

    const [Time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        TotalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setPlayerStaus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayerStaus(false);
    };



    const playWithId = async(id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStaus(true);

    }

    const previous = async () => {
        if(Track.id>0){
            await setTrack(songsData[Track.id-1]);
            await audioRef.current.play();
            setPlayerStaus(true)
        }
    }


    const next = async () => {
        if(Track.id< songsData.length-1){
            await setTrack(songsData[Track.id+1]);
            await audioRef.current.play();
            setPlayerStaus(true)
        }
    }



    const seekSong = async (e) => {
      
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)

    }


    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
               
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"; 
                

                setTime(
                    {
                        currentTime: {
                            second: Math.floor(audioRef.current.currentTime % 60),
                            minute: Math.floor(audioRef.current.currentTime / 60)
                        },
                        TotalTime: {
                           second: Math.floor(audioRef.current.duration % 60),
                            minute: Math.floor(audioRef.current.duration / 60)
                        }
                    }

                )
            }
        })
    })

    return (
        <PlayerContext.Provider
            value={{
                audioRef,
                seekBg,
                seekBar,
                Track,
                setTrack,
                PlayerStaus,
                setPlayerStaus,
                Time,
                setTime,
                play,
                pause,
                playWithId,
                previous,next,
                seekSong
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
