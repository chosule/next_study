import React from "react";
import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href="/view/[id]" as={`/view/${item.id}`}>
                <Grid.Column>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <strong className={styles.num_price}>${item.price}</strong>
                    <span className={styles.txt_info}>
                      {item.category}
                      {item.product_type}
                    </span>
                  </div>
                </Grid.Column>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
