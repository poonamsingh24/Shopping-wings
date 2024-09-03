import p1_img from "./assets/product_1.png";
import p2_img from "./assets/product_2.png";
import p3_img from "./assets/product_3.png";
import p4_img from "./assets/product_4.png";
import p5_img from "./assets/product_5.png";

export const orders = [
  {
    sr: 1,
    imgUrl: p1_img,
    title: "Order 1",
    amount: 50,
    status: "pending",
  },
  {
    sr: 2,
    imgUrl: p2_img,
    title: "Order 2",
    amount: 30,
    status: "completed",
  },
  {
    sr: 3,
    imgUrl: p3_img,
    title: "Order 3",
    amount: 20,
    status: "pending",
  },
  {
    sr: 4,
    imgUrl: p4_img,
    title: "Order 4",
    amount: 40,
    status: "shipped",
  },
  {
    sr: 5,
    imgUrl: p5_img,
    title: "Order 5",
    amount: 60,
    status: "pending",
  },
];
