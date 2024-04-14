import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { notesDataType } from "../../models/notesType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { createNote, fetchNotes } from "../../redux/slices/notesAppSlice";

const initialData = {
  title: "",
  detail: "",
};

const CreateNote: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [notesData, setNotesData] = useState<notesDataType>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimStart();
    setNotesData({ ...notesData, [name]: trimmedValue });
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedTitle = notesData.title.trim();
    const trimmedDetail = notesData.detail.trim();

    if (!trimmedTitle || !trimmedDetail) {
      return;
    }

    dispatch(createNote({ title: trimmedTitle, detail: trimmedDetail }));
    // Reset the form
    setNotesData(initialData);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleCreate}
        width={{ xs: "100%", sm: "60%" }}
        m="auto"
        p={2}
        borderRadius={1}
        sx={{
          border: "1px solid gray",
          "& > :not(style)": { mb: 2, width: "100%" },
        }}
        autoComplete="off"
      >
        <TextField
          id="title"
          name="title"
          value={notesData.title}
          label="Title"
          variant="standard"
          onChange={handleChange}
          required
        />
        <TextField
          id="detail"
          name="detail"
          value={notesData.detail}
          label="Make a note..."
          variant="standard"
          multiline
          maxRows={4}
          onChange={handleChange}
          required
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "#2d545e",
            "&:hover": { bgcolor: "#203d44 !important", color: "#FFFFFF" },
          }}
        >
          Create
        </Button>
      </Box>
    </>
  );
};

export default CreateNote;
