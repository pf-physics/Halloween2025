import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";

const AudioControl = () => {
  const [audio, setAudio] = useState<any>();
  const aud = useAppSelector((state) => state.audio.value);
  const fadeIn = useAppSelector((state) => state.audio.fadeIn);
  const fadeOut = useAppSelector((state) => state.audio.fadeOut);
  const loop = useAppSelector((state) => state.audio.loop);
  const [id, setId] = useState(0);

  useEffect(() => {
    setAudio(aud);
    setId(id + 1);
  }, [aud]);

  return (
    <div>
      <audio
        id={"main-audio-player"}
        key={`${id}`}
        style={{ opacity: 0 }}
        autoPlay={true}
        loop={loop}
        controls
        src={audio}
      ></audio>
    </div>
  );
};

export default AudioControl;
