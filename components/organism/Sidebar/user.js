import React from "react";

export default function user() {
  return (
    <div
      className="text-center mt-4  mb-4"
      style={{ border: "1px solid rgba(0,0,0,.125)", padding: "20px" }}
    >
      <img src="/img/user.png" width={62} height={62} alt="" />
      <p className="user__name">Gloria Mckinney</p>
      <small className="user__id">@wdlam</small>
    </div>
  );
}
