import "./App.css";

import { Sidebar } from "./Cpmponents/Sidebar";
import { Player } from "./Cpmponents/Player";
import { Display } from "./Cpmponents/Display";
import { PlayerContext } from "./Context/PlayerContext";

import { useContext } from "react";

const App = () => {

 const {audioRef,Track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black ">

      <div className="h-[90%] flex">

        <Sidebar />
        <Display />
      </div>

      <Player />

      <audio ref={audioRef} src={Track.file} preload="auto"></audio>

      

      

    </div>
  )
}

export default App