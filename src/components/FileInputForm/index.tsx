import { TextField, Button, Box, Input } from "@mui/material"
import { useForm } from "react-hook-form";
import { BASE_URL,ENDPOINT_POST_JOB } from "../../constants"

const FileInputForm = () => {

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
            alert('File uploaded successfully!');
            reset();
          } else {
            alert('File upload failed.');
            reset();
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

    return (
        <form onSubmit={handleSubmit(submitInput)} encType="multipart/form-data">
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', gap: "1rem", py: '5rem' }}>
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
    );
};

export default FileInputForm;