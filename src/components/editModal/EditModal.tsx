import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  handleModalClose,
  handleModalOpen,
  updateNote,
} from "../../redux/slices/notesAppSlice";
import { notesDataType } from "../../models/notesType";
import { CircularProgress, IconButton, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 550,
  width: { xs: "90%", sm: "40%"},
  bgcolor: "background.paper",
  border: "none !important",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 3,
  "& > :not(style)": { mb: 2, width: "100%" },
};

const EditModal: React.FC = () => {
  const { loading, openModal, selectedNote } = useSelector(
    (state: RootState) => state.notesApp
  );
  const dispatch = useDispatch<AppDispatch>();

  const [notesData, setNotesData] = useState<notesDataType>({
    _id: "",
    title: "",
    detail: "",
  });

  useEffect(() => {
    if (selectedNote) {
      setNotesData({
        _id: selectedNote._id || "",
        title: selectedNote.title || "",
        detail: selectedNote.detail || "",
      });
    }
  }, [selectedNote]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNotesData({ ...notesData, [name]: value });
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateNote(notesData));
    dispatch(handleModalClose());
  };

  //For Modal
  const handleOpen = () => {
    dispatch(handleModalOpen());
  };
  const handleClose = () => {
    dispatch(handleModalClose());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          {loading ? (
            <Box sx={style}>
              <CircularProgress />
            </Box>
          ) : (
            <Box
              component="form"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEdit(e);
                }
              }}
              onSubmit={handleEdit}
              sx={style}
            >
              <TextField
                id="title"
                name="title"
                value={notesData.title}
                label="Title"
                variant="standard"
                onChange={handleChange}
                // required
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
                // required
              />

              <Button
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: "#2d545e",
                  "&:hover": {
                    bgcolor: "#203d44 !important",
                    color: "#FFFFFF",
                  },
                }}
              >
                Update
              </Button>
            </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
};

export default EditModal;
