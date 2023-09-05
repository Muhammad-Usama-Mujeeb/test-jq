import { TextField, Button, Box, Input } from "@mui/material"
import { useForm } from "react-hook-form";
import { BASE_URL, ENDPOINT_POST_JOB } from "../../constants"
import { useState } from "react";
import NotificationBar from "../NotificationBar"

const FileInputForm = () => {

  const [notificationData, setNotificationData] = useState({
    open: false,
    severity: 'success' as 'success' | 'error', // Specify the type explicitly
    message: '',
  });

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
    formDataToSend.append("file", formData.file[0]);

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
      } else {
        setNotificationData({
          open: true,
          severity: 'error', // Red
          message: 'File upload failed!',
        });
      }
    } catch (error) {
      console.error('Error uploading file:', error);
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
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', gap: "1rem", py: '10rem' }}>
          <TextField
            label="Job Description"
            {...register("description", {
              required: "Description is required",
            })}
            sx={{
              width: "80vw"
            }
            }
            variant="outlined"
            multiline
            rows={8}
            error={!!errors.description}
            helperText={errors.description?.message?.toString()}
          />
          <Input  {...register("file")}
            type='file' required></Input>
          <Button variant="contained" type="submit" sx={{ color: 'black', backgroundColor: '#e5e7eb', "&:hover": { backgroundColor: "#ddd" } }}>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default FileInputForm;