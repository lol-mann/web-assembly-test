import React from 'react';
import Dropzone from 'react-dropzone';


const FileUpload = ({children}) => (
    state = {
        file:"",
    }

    <Dropzone className='ignore' onDrop={acceptedFiles => console.log(acceptedFiles)}>
    {({getRootProps, getInputProps}) => (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {children}      
          </div>
    )}
    </Dropzone>
);

export default FileUpload;