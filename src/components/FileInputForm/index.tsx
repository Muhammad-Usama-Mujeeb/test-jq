import { TextField, Button, Box, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import { BASE_URL, ENDPOINT_POST_JOB } from "../../constants"
import NotificationBar from "../NotificationBar"
import FileDropzone from "../FileDropzone";
import { useState } from "react";

const FileInputForm = () => {
  const [notificationData, setNotificationData] = useState({
    open: false,
    severity: 'success' as 'success' | 'error', // Specify the type explicitly
    message: '',
  });
  const [file, setFile] = useState<File>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitInput = async (formData: any) => {
    // Create a FormData object and append the file input value
    const formDataToSend = new FormData();
    formDataToSend.append("description", formData.description);
    if (file) {
      formDataToSend.append("file", file);
      try {
        const response = await fetch(`${BASE_URL}${ENDPOINT_POST_JOB}`, {
          method: 'POST',
          body: formDataToSend,
        });

        if (response.ok) {
          setNotificationData({
            open: true,
            severity: 'success', // Green
            message: 'File uploaded successfully!',
          });
          reset();
          setFile(undefined);
        } else {
          setNotificationData({
            open: true,
            severity: 'error', // Red
            message: 'File upload failed!',
          });
          reset();
          setFile(undefined);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const onNotificationBarClose = () => {
    setNotificationData({
      ...notificationData,
      open: false,
      message: '',
    });
  }

  return (
    <Box>
      <NotificationBar
        open={notificationData.open}
        severity={notificationData.severity}
        message={notificationData.message}
        onClose={onNotificationBarClose}
      />
      <form onSubmit={handleSubmit(submitInput)} encType="multipart/form-data">
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', gap: "1rem"}}>
          <TextField
            placeholder="Copy + Paste Job Description"
            {...register("description", {
              required: "Description is required",
            })}
            sx={{
              width: "80vw"
            }
            }
            variant="outlined"
            multiline
            rows={10}
            error={!!errors.description}
            helperText={errors.description?.message?.toString()}
          />
          <FileDropzone onFileChange={(file: File) => setFile(file)} />
          {file &&
            <Typography variant="body1" sx={{ py: '0.5rem', color: "green" }}>
              File Uploaded: {file?.name}
            </Typography>}
          <Button variant="contained" type="submit" sx={{ color: 'black', backgroundColor: '#e5e7eb', "&:hover": { backgroundColor: "#ddd" } }}>Get Free Score</Button>
        </Box>
      </form>
    </Box>
  );
};

export default FileInputForm;