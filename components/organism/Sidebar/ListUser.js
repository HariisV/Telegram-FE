import React from "react";
import Link from "next/link";
export default function ListUser() {
  return (
    // <a href="">
    <Link href={"#"}>
      <div className="listUser mb-4 mt-4 d-flex justify-content-between">
        <img src="/img/global.png" alt="" width={60} className="img__chat" />
        <div className="">
          <h6 className="p-0 m-0 mt-2">Global Chat</h6>
          <p className="p-0 m-0">Will you stop ignoring me?</p>
        </div>
        <div className="">
          <p className="p-0 m-0">7:20</p>
          <img src="/img/read.png" alt="" width={20} height={9} />
        </div>
      </div>
    </Link>
    // </a>
  );
}
