export class CartModel {
  constructor(id, productName, productImage, quantity, price, productTotal) {
    this.id = id;
    this.productName = productName;
    this.productImage = productImage;
    this.quantity = quantity;
    this.price = price;
    this.productTotal = productTotal;
  }
}

export class WishlistModel {
  constructor(
    asin,
    product_title,
    product_photo,
    product_price,
    product_star_rating,
    product_num_ratings
  ) {
    this.asin = asin;
    this.product_title = product_title;
    this.product_photo = product_photo;
    this.product_price = product_price;
    this.product_star_rating = product_star_rating;
    this.product_num_ratings = product_num_ratings;
  }
}
