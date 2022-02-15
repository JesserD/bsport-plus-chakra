import * as React from 'react';



export default function ExempelComponent() {

  return (
    <div >
      <video width="320" height="240" controls>
        <source src="http://localhost:3000/Media/MIB2.mp4" type="video/mp4" />
        <track src="./Media/MIB2-subtitles-pt-BR.vtt" kind="subtitles" srcLang="pt" label="Portugese" />
      </video>
    </div>
  );
}