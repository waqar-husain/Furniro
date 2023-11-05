"use client";
import React from "react";

import style from "./filterTopBar.module.css";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import ChangeViewButton from "./changeViewButton";
import Image from "next/image";
import BigRound from "./icon/bigRound";
import List from "./icon/list";
import SortItem from "./sortItem";

export default function FilterTopBar() {
  const totalNoOfResults = useSelector((state) => state.shop.data).length;
  const noOfItem = useSelector((state) => state.shop.noOfItems);
  const noOfPage = Number(useSearchParams().get("page"));
  const layoutActive = useSelector((state) => state.shop.itemToShow);

  return (
    <div className={style.topBar}>
      <div className={style.innerTopBar}>
        <div className={style.barLeft}>
          <ChangeViewButton buttonHeight="2.8rem">
            <BigRound active={layoutActive} />
          </ChangeViewButton>
          <ChangeViewButton buttonHeight="2.4rem">
            <List active={layoutActive} />
          </ChangeViewButton>

          <span className={style.barLeftText}>
            Showing {noOfItem * noOfPage - noOfItem + 1}-
            {noOfItem * noOfPage > totalNoOfResults
              ? totalNoOfResults
              : noOfItem * noOfPage}{" "}
            of {totalNoOfResults} results
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
