import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: "1",
      title:
        "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "2",
      title: "Dolorem eum magni eos aperiam quia",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "3",
      title: "Ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { deletePost } = postsSlice.actions;

export default postsSlice.reducer;
