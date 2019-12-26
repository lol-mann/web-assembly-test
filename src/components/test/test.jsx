import React, { Component } from 'react'
import {createWorker} from '@ffmpeg/ffmpeg'
var events = []

const trigger = async (files) => {
    const Worker = createWorker({
        progress: p => console.log(p),
    });
    const message = document.getElementById('message');
    message.innerHTML = 'Loading ffmpeg-core.js';
    Worker.load()
    message.innerHTML = 'Load complete';
    console.log(files)
    const { name } = files[0];
    console.log(name)
    const start_time = document.getElementById("start").value
    const end_time = document.getElementById("end").value
    console.log("name : ",name)
    console.log("files : ", files[0])
    await Worker.write(name, files[0]);
    console.log("awaiting worker finished")
    await Worker.trim(name,  'output.mp4',start_time,(end_time-start_time));
    const { data } = await Worker.read('output.mp4');
    console.log(data);
    const video = document.getElementById('output-video');
    video.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
}

export default class cutTime extends Component {
    state={
        files:[]
    }
    render() {
        return (
            <div>
                <h3>Upload a video to transcode to mp4 (x264) and play!</h3>
                <video id="output-video" controls></video><br/>
                <input type="file" id="uploader" name="select your video" onChange={ (e) => events.push (e.target.files) } />
                <p id="message" />
                <div id="cut-box">
                    <input id="start" placeholder="start" />
                    <input id="end" placeholder="end" />
                </div>
                <button id="cut-btn" onClick={()=>trigger(events[0])}>cut</button>
            </div>
        )
    }
}