import { Header,Input } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 ,alignItems:"center"}}>
        <div style={{ flex: "100px 0 0",marginRight:20 }}>
          <img
            src="/images/sepora.PNG"
            alt="세포라로고"
            style={{ display: "block", width: 130,borderRadius:"100%" }}
          />
        </div>
        <Input icon='search' placeholder='Search...' />
        {/* <Header as="h1">Welcome SEPORA !</Header> */}
      </div>
      <Gnb />
    </div>
  );
}
