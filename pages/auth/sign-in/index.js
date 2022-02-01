import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputForm from "../../../components/atoms/Input";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="d-flex mt-5 justify-content-center">
          <Card sx={{ maxWidth: 600 }}>
            <CardContent sx={{ margin: 3 }}>
              <h5 className="text-primary text-center">Login</h5>
              <h6 className="card__desc">Hi, Welcome back!</h6>
              <InputForm type="Email" name="Email" />
              <InputForm type="Password" name="Password" />
              <div className="text-end my-4">
                <Link href="/auth/sign-up" passHref>
                  <a className=" card__link">Dont have a account ?</a>
                </Link>
              </div>
              <Button variant="contained" className="card__btn" color="primary">
                Masuk
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
