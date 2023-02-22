import React, { useEffect } from "react";
import "../../styles/Loading.css";
import {
  fetchPaymentDetailsByTxnId,
  fetchUserVerifyConfirm,
} from "../../API/call";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const PaymentSuccess = () => {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!type) return;
    console.log(searchParams.get("txn"));
    localStorage.setItem("txn", searchParams.get("txn"));
    fetchPaymentDetailsByTxnId(searchParams.get("txn"))
      .then((res) => {
        if (searchParams.get("redirect") === "complete_register")
          navigate(
            `/auth/?type=signup&page=final&email=${res.data.data.email}`
          );
        else navigate(`/`);
      })
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center space-y-6">
      <img
        src="https://res.cloudinary.com/dksmk66vo/image/upload/v1674502647/Kriya_Logo_2023_white_npmqdj.png"
        alt=""
        className="h-24 invert"
      />
      <div class="loadingio-spinner-spinner-o7mafz45j6n">
        <div class="ldio-r21hzjwurfo">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
