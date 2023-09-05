import { useCallback} from 'react';
import { Paper, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';



interface FileDropzoneProps {
    onFileChange: (file: File) => void;
}

function FileDropzone(props: FileDropzoneProps) {
    const onDrop = useCallback((uploadedFile: File[]) => {
        props.onFileChange(uploadedFile[0]);
    }, [props]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });
    const { ref, ...rootProps } = getRootProps()

    return (
        <Paper {...rootProps} sx={{
            border: '2px dashed #e0e0e0',
            borderRadius: '4px',
            padding: '10px',
            textAlign: 'center',
            cursor: 'pointer',
        }}>
            <input {...getInputProps()} />
            <Typography variant="body1">
                Drag and drop resume, or click to select a file
            </Typography>
        </Paper>
    );
}

export default FileDropzone;
