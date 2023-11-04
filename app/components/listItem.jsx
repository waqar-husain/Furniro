import React from "react";
import Image from "next/image";
import style from "./listItem.module.css";
import image from "./icon/image 8.jpg";
import Link from "next/link";
import ShareButton from "./shareButton";
import ButtonPrimary from "./buttonPrimary";
import LikeNewButton from "./likeNewButton";
import CompareButton from "./compareButton";

export default function ListItem(props) {
  return (
    <Link href="/" className={style.listItemMain}>
      <div className={style.listItem}>
        <div className={style.listItemImage}>
          <Image
            src={props.image ? props.image : image}
            alt="Product Image"
            className={style.listItemImg}
          />
        </div>
        <div className={style.aboutListItem}>
          <h3 className={style.listItemName}>
            {props.name ? props.name : "Respira"}
          </h3>
          <p className={style.listitemDesc}>
            {props.desc ? props.desc : "Luxury big sofa"}
          </p>
          <p className={style.listItemPrice}>
            {props.price ? props.price : "Rp 500.00"}
          </p>
        </div>
      </div>
      <div className={style.onHover}>
        <ButtonPrimary
          style="primary"
          title="Add to cart"
          styleData={{
            fontSize: "1.6rem",
            lineHeight: "1.6",
            padding: "12px  55px",
            backgroundColor: "white",
            color: "var(--color-primary)",
          }}
        />
        <div className={style.onHoverBottom}>
          <ShareButton />
          <CompareButton title="Compare" />
          <LikeNewButton title="Like" />
        </div>
      </div>
    </Link>
  );
}
