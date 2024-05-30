import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { notesDataType } from "../../models/notesType";
import config from "../../config";

const { BASE_URL } = config;
export interface NotesState {
  notesData: notesDataType[];
  loading: boolean;
  error: boolean;
  openModal: boolean;
  selectedId: string;
  selectedNote: notesDataType;
}

const initialState: NotesState = {
  notesData: [],
  loading: false,
  error: false,
  openModal: false,
  selectedId: "",
  selectedNote: {
    _id: "",
    title: "",
    detail: "",
    createdAt: "",
    updatedAt: "",
  },
};

//async thunk for Creating the notes using api
export const createNote = createAsyncThunk(
  "notesApp/createNote",
  async (note: notesDataType) => {
    const response = await fetch(`${BASE_URL}/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    if (!response.ok) {
      throw new Error("Failed to add note");
    }
    const data = await response.json();
    return data;
  }
);

//async thunk for fetching the note by id
export const fetchNoteById = createAsyncThunk(
  "notesApp/fetchNoteById",
  async (noteId: string | undefined) => {
    const response = await fetch(`${BASE_URL}/api/notes/${noteId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }

    const data = await response.json();
    return data;
  }
);

// Async thunk for updating a note
export const updateNote = createAsyncThunk(
  "notesApp/updateNote",
  async (note: notesDataType) => {
    const response = await fetch(
      `${BASE_URL}/api/notes/${note._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update note");
    }
    const data = await response.json();
    return data;
  }
);

// Async thunk for searching a note
export const searchNote = createAsyncThunk(
  "notesApp/searchNote",
  async (searchQuery: string) => {
    const response = await fetch(
      `${BASE_URL}/api/notes/search?query=${searchQuery}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to search note");
    }
    const data = await response.json();
    return data;
  }
);

// Async thunk for deleting a note
export const deleteNote = createAsyncThunk(
  "notesApp/deleteNote",
  async (noteId: string | undefined) => {
    const response = await fetch(`${BASE_URL}/api/notes/${noteId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
    return noteId;
  }
);

//async thunk for fetching the notes from the api
export const fetchNotes = createAsyncThunk("notesApp/fetchNotes", async () => {
  const response = await fetch(`${BASE_URL}/api/notes`);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  const data = await response.json();
  return data;
});

export const notesAppSlice = createSlice({
  name: "notesApp",
  initialState,
  reducers: {
    handleModalOpen: (state) => {
      return {
        ...state,
        openModal: true,
      };
    },
    handleModalClose: (state) => {
      return {
        ...state,
        openModal: false,
      };
    },
    handleSelectId: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        selectedId: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      //FetchNotes
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchNotes.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = false;
        state.notesData = action.payload;
      })
      .addCase(fetchNotes.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      //FetchNoteById
      .addCase(fetchNoteById.pending, (state) => {
        // state.loading = true;
        state.error = false;
      })
      .addCase(fetchNoteById.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = false;
        state.selectedNote = action.payload;
      })
      .addCase(fetchNoteById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      //CreateNote
      .addCase(createNote.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createNote.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = false;
        state.notesData.unshift(action.payload);
      })
      .addCase(createNote.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      //EditNote
      .addCase(updateNote.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateNote.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = false;
        const updatedNote = action.payload;
        const index = state.notesData.findIndex(
          (note) => note._id === updatedNote._id
        );
        if (index !== -1) {
          state.notesData[index] = updatedNote;
        }
      })
      .addCase(updateNote.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      //SearchNote
      .addCase(searchNote.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchNote.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = false;
        state.notesData = action.payload;
      })
      .addCase(searchNote.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      //DeleteNote
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteNote.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = false;
        state.notesData = state.notesData.filter(
          (note) => note._id !== action.payload
        );
      })
      .addCase(deleteNote.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { handleModalOpen, handleModalClose, handleSelectId } =
  notesAppSlice.actions;

export default notesAppSlice.reducer;
