import Leftbar from "../components/organism/Leftbar";
import ListUser from "../components/organism/Sidebar/ListUser";
import Navbar from "../components/organism/Sidebar/navbar";
import User from "../components/organism/Sidebar/user";

export default function Index() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 pt-3 sidebar">
          <Navbar />
          <User />
          <ListUser />
        </div>
        <div className="col-9 pt-3">
          <Leftbar />
        </div>
      </div>
    </div>
  );
}
