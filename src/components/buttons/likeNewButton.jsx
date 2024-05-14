"use client";
import React, { useEffect, useState } from "react";
import style from "./likeButton.module.css";
import Heart from "../icon/Heart";
import { useDispatch, useSelector } from "react-redux";
import { wishlistAction } from "@/src/store/slices/wishlistSlice";
import { useRouter } from "nextjs-progressloader";

export default function LikeNewButton(props) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const router = useRouter();

  const clickHandler = (e) => {
    e.preventDefault();
    if (!user) {
      router.push("login", {
        queryStrings: [{ key: "mode", value: "login" }],
      });
      return;
    }

    setClicked((oldState) => !oldState);
    if (!clicked) {
      dispatch(wishlistAction.addItem(props.item));
    } else {
      dispatch(wishlistAction.removeItem(props.item));
    }
  };

  useEffect(() => {
    if (props.liked) setClicked(true);
  }, []);
  return (
    <abbr title="Like" style={{ display: "flex", textDecoration: "none" }}>
      <button
        className={style.likeButton}
        style={props?.styleData}
        onClick={clickHandler}
      >
        <Heart
          fill={clicked ? "red" : props.type === "list" ? "none" : "white"}
          type={props?.type}
        />
        {props?.title && (
          <span className={style.buttonName}>{props?.title}</span>
        )}
      </button>
    </abbr>
  );
}
