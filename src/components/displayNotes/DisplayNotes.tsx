import "./style.css";
import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import NoteCard from "../cards/NoteCard";
import { fetchNotes } from "../../redux/slices/notesAppSlice";
import EditModal from "../editModal/EditModal";

const DisplayNotes = () => {
  const { notesData, loading, error, openModal } = useSelector(
    (state: RootState) => state.notesApp
  );
  const dispatch = useDispatch<AppDispatch>();
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    dispatch(fetchNotes());

    const handleResize = () => {
      setColumns(window.innerWidth < 600 ? 1 : 4);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value based on current window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading)
    return (
      <Typography
        variant="h4"
        flex={1}
        textAlign="center"
        p={10}
        color="GrayText"
      >
        Loading...
        <CircularProgress />
      </Typography>
    );

  return (
    <>
      <EditModal />
      {/* <Stack
        mt={2}
        // flexDirection="row"
        flexDirection={{ xs: "column", sm: "row" }}
        pb={{ xs: "1rem", sm: "0" }}
        justifyContent="start"
        alignItems="center"
        columnGap={2}
        rowGap={2}
        flexWrap={"wrap"}
      >
        {notesData.length > 0 ? (
          notesData.map((ele) => (
            <NoteCard
              key={ele._id}
              _id={ele._id}
              title={ele.title}
              detail={ele.detail}
            />
          ))
        ) : (
          <Typography
            variant="h4"
            flex={1}
            textAlign="center"
            p={10}
            color="GrayText"
          >
            Notes are not available
          </Typography>
        )}
      </Stack> */}

      <Box>
        <ImageList
          variant="masonry"
          cols={columns}
          gap={15}
        >
          {notesData.length > 0 &&
            notesData.map((ele) => (
              <ImageListItem key={ele._id}>
                <NoteCard
                  key={ele._id}
                  _id={ele._id}
                  title={ele.title}
                  detail={ele.detail}
                />
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </>
  );
};

export default DisplayNotes;
