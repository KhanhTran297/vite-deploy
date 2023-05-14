import React from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMyToast from "./useMyToast";
import { createPostApi, deletePostApi, getListPostApi, updatePostApi } from "@/api/post";
import { setListPost } from "@/redux/slice/post";

function usePost() {
  const navigate = useNavigate();
  const { useSuccess, useError } = useMyToast();
  const dispatch = useDispatch();

  //getListPost
  const {
    data: listPost,
    refetch: getListPost,
    isLoading: loadingPage,
  } = useQuery({
    queryKey: ["listPost"],
    queryFn: getListPostApi,
    enabled: false,
    retry: 0,
    onSuccess: (listPost) => {
      dispatch(setListPost(listPost.data));
    },
  });

  //createPost
  const { mutate: createPost } = useMutation({
    mutationFn: createPostApi,
    onSuccess: (respone) => {
        if (respone.result) {
          getListPost();
          useSuccess("Create post success!");
        } else {
          useError("Create post fail!");
        }
    },
    onError: () => {
      useError("Save fail!!!!");
    },
  });
  
  //deletePost
  const {mutate: deletePost} = useMutation({
    mutationFn: deletePostApi,
    onSuccess: (respone) => {
        if (respone.result) {
          getListPost();
          useSuccess("Delete post success!");
        } else {
          useError("Delete post fail!");
        }
      },
      onError: () => {
        useError("Save fail!!!!");
      },
  });

  //editPost
  const {mutation: updatePost} = useMutation({
    mutationFn: updatePostApi,
    onSuccess: (respone) => {
        if (respone.result) {
          getListPost();
          useSuccess("Update post success!");
        } else {
          useError("Update post fail!");
        }
      },
      onError: () => {
        useError("Save fail!!!!");
      },
  });

  return {
    listPost,
    getListPost,
    loadingPage,
    updatePost,
    deletePost,
    createPost,
  };
}

export default usePost;
