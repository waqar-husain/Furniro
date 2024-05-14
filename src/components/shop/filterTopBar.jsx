"use client";
import React, { useEffect } from "react";

import style from "./filterTopBar.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import ChangeViewButton from "./changeViewButton";
import BigRound from "../icon/BigRound";
import List from "../icon/List";
import SortItem from "./sortItem";
import { shopAction } from "@/src/store/slices/filterProductSlice";
import { type } from "os";

export default function FilterTopBar(props) {
  const dispatch = useDispatch();
  const totalNoOfResults =
    props.totalProducts &&
    Number(props.totalProducts.toString().replaceAll(",", ""));
  const noOfItem = 14;
  const noOfPage = Number(useSearchParams().get("page"));
  const layoutActive = useSelector((state) => state.shop.itemToShow);

  return (
    <div className={style.topBar}>
      <div className={style.innerTopBar}>
        <div className={style.barLeft}>
          <div className={style.barLeftButtonContainer}>
            <ChangeViewButton type={true} buttonHeight="2.8rem">
              <BigRound active={layoutActive} />
            </ChangeViewButton>
            <ChangeViewButton type={false} buttonHeight="2.4rem">
              <List active={layoutActive} />
            </ChangeViewButton>
          </div>
          <span className={style.barLeftText}>
            Showing {noOfItem * noOfPage - noOfItem + 1}-
            {noOfItem * noOfPage > totalNoOfResults
              ? totalNoOfResults
              : noOfItem * noOfPage}{" "}
            of {props.totalProducts} results
          </span>
        </div>
        <div className={style.barRight}>
          <span className={style.show}>
            <p className={style.showText}>Show</p>
            <p className={style.showItem}>{noOfItem}</p>
          </span>
          <SortItem />
        </div>
      </div>
    </div>
  );
}
