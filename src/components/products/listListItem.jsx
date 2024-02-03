import React from "react";

import style from "./listListItem.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "../icon/image 8.jpg";
import LikeNewButton from "../buttons/likeNewButton";
import CartButton from "../buttons/cartButton";
import StarContainer from "../starContainer";

import furniture from "@/src/public/furniture.jpg";

export default function ListItem(props) {
  return (
    <Link href="/shop/product/pid=09889" className={style.listItemMain}>
      <div className={style.listItemImage}>
        <Image
          src={props.image ? props.image : furniture}
          alt="Product Image"
          className={style.listItemImg}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </div>
      <div className={style.listItemData}>
        <h2 className={style.itemHeading}>Syltherine</h2>
        <p className={style.itemPrice}>Rp 2500.0</p>
        <StarContainer starsRating="2.5" />
        <p className={style.itemDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
          necessitatibus autem delectus. Ullam quis voluptates provident vitae
          quam, tempora ad nemo odio cumque, eveniet, repellendus molestiae est
          corporis repudiandae!
        </p>
        {!props.utilButton && (
          <span className={style.itemButtons}>
            <CartButton
              type="shop"
              styleData={{ marginLeft: "0.2rem", marginTop: "-0.3rem" }}
              item={{
                id: 1,
                price: 1200,
                subTotal: 1200,
                quantity: 1,
                productName: "Asgaard sofa",
                productImage: "text",
              }}
            />
            <LikeNewButton
              type="shop"
              item={{
                id: 1,
                price: 1200,
                productName: "Asgaard sofa",
                productImage: "text",
                productDesc: "abcd",
              }}
            />
          </span>
        )}
      </div>
    </Link>
  );
}
