import React from "react";

import style from "./listListItem.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "./icon/image 8.jpg";
import LikeNewButton from "./likeNewButton";
import CompareButton from "./compareButton";
import CartButton from "./cartButton";

export default function ListItem(props) {
  return (
    <Link href="/" className={style.listItemMain}>
      <div className={style.listItemImage}>
        <Image
          src={props.image ? props.image : image}
          alt="Product Image"
          className={style.listItemImg}
          width="100%"
          height="100%"
        />
      </div>
      <div className={style.listItemData}>
        <h2 className={style.itemHeading}>Syltherine</h2>
        <p className={style.itemPrice}>Rp 2500.0</p>
        <p className={style.itemDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
          necessitatibus autem delectus. Ullam quis voluptates provident vitae
          quam, tempora ad nemo odio cumque, eveniet, repellendus molestiae est
          corporis repudiandae!
        </p>
        <span className={style.itemButtons}>
          <CartButton type="shop" styleData={{ marginLeft: "0.2rem" }} />
          <LikeNewButton type="shop" />
          <CompareButton type="shop" />
        </span>
      </div>
    </Link>
  );
}
