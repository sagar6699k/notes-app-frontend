import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { notesDataType } from "../../models/notesType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  deleteNote,
  fetchNoteById,
  handleModalOpen,
  handleSelectId,
} from "../../redux/slices/notesAppSlice";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteCard: React.FC<notesDataType> = (props) => {
  const { _id, title, detail } = props;
  const { selectedNote, openModal } = useSelector(
    (state: RootState) => state.notesApp
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleLogic = () => {
    dispatch(fetchNoteById(_id));
    dispatch(handleModalOpen());
  };

  const handleDelete = () => {
    dispatch(deleteNote(_id));
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: "100%", sm: "100%" },
        visibility:
          _id === selectedNote._id && openModal ? "hidden" : "visible", // Correct syntax: ;
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 1,
          pl: 2,
          pr: 1,
          "&:hover .deleteButton": {
            visibility: "visible",
          },
        }}
      >
        <Typography
          sx={{ fontSize: 15, fontWeight: 600 }}
          color="text.secondary"
        >
          {title}
        </Typography>
        <IconButton
          aria-label="delete"
          size="small"
          className="deleteButton"
          sx={{ visibility: "hidden" }}
          onClick={handleDelete}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <CardContent onClick={handleLogic} sx={{ cursor: "pointer" }}>
        <Typography variant="body2">{detail}</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
