"use client";
import React from "react";
import ListItem from "./products/listListItem";
import deleteIco from "./icon/delete.svg";
import NoItem from "./noItem";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { wishlistAction } from "../store/slices/wishlistSlice";
import ListGridItem from "./products/listGridItem";

export default function WishlistItems() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <>
      {wishlist.length !== 0 && (
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "3rem",
          }}
        >
          {wishlist.map((el) => (
            <div key={el.asin} style={{ position: "relative" }}>
              <button
                style={{
                  borderRadius: "50%",
                  padding: "1rem",
                  boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#f7f7f7",
                  border: "none",
                  cursor: "pointer",
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(wishlistAction.removeItem({ asin: el.asin }));
                }}
              >
                <Image alt="delete" src={deleteIco} />
              </button>
              <ListItem
                product={el}
                utilButton="false"
                styleData={{ height: "25rem" }}
              />
            </div>
          ))}
        </div>
      )}
      {wishlist.length === 0 && <NoItem text="No Favorite Item Found!" />}
    </>
  );
}
