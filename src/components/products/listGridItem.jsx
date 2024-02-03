import React from "react";
import Image from "next/image";
import style from "./listGridItem.module.css";
import image from "../icon/image 8.jpg";
import Link from "next/link";
import ShareButton from "./shareButton";
import ButtonPrimary from "../buttons/buttonPrimary";
import LikeNewButton from "../buttons/likeNewButton";
import { useDispatch } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";

import furniture from "@/src/public/furniture.jpg";

export default function ListGridItem(props) {
  {
    /*To liked already on load we use wishlist array
  and use i of to check weather that id is present
in array or not and pass that through props*/
  }
  const dispatch = useDispatch();
  return (
    <Link href="/shop/product/pid=987979" className={style.listItemMain}>
      <div className={style.listItem}>
        <div className={style.listItemImage}>
          <Image
            src={props.image ? props.image : furniture}
            alt="Product Image"
            className={style.listItemImg}
            loading="lazy"
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
          func={() => {
            dispatch(
              cartAction.incrementCart({
                id: 1,
                price: 1200,
                subTotal: 1200,
                quantity: 1,
                productName: "Asgaard sofa",
                productImage: "text",
              })
            );
          }}
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
          <LikeNewButton
            title="Like"
            item={{
              id: 1,
              price: 1200,
              productName: "Asgaard sofa",
              productImage: "text",
              productDesc: "abcd",
            }}
          />
        </div>
      </div>
    </Link>
  );
}
