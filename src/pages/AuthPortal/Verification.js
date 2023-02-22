import React, { useEffect } from "react";
import "../../styles/Loading.css";
import { fetchUserVerifyConfirm } from "../../API/call";
import { useNavigate, useParams } from "react-router-dom";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const Verification = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetchUserVerifyConfirm(id)
      .then((res) => {
        console.log(res.data.user);
        if (
          res.data.user.college === PSG_COLLEGE &&
          !res.data.user.email.endsWith("psgtech.ac.in")
        )
          navigate(`/auth/?type=signup&page=psg&email=${res.data.user.email}`);
        else
          navigate(
            `/auth/?type=signup&page=password&email=${res.data.user.email}`
          );
      })
      .catch((err) => console.log(err));
  }, [id]);

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

export default Verification;
