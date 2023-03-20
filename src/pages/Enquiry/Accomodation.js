import React, { useEffect, useState } from "react";
import Inputfield from "../../components/TextInput";
import { fetchUserByEmail } from "../../API/call";
import Dropdown from "../../components/Dropdown";

const Accomodation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    kriyaId: "",
    college: "",
    residentialAddress: "",
    city: "",
    phone: "",
    gender: "Male",
  });

  useEffect(() => {
    fetchUserByEmail(localStorage.getItem("email")).then((res) => {
      console.log(res.data.user);
      setFormData({
        ...formData,
        name: res.data.user.name,
        email: res.data.user.email,
        kriyaId: res.data.user.kriyaId,
        college: res.data.user.college,
        phone: res.data.user.phone,
      });
    });
  }, []);

  return (
    <main className="h-full w-full p-8 font-poppins">
      <h2 className="text-xl">Enquiry</h2>
      <h1 className="mt-1 text-4xl font-bold">Apply for Accomodation</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <section className="lg:w-1/3 w-full space-y-4 mt-8 ">
            <p className="font-semibold">Dear
             participant, </p>
          <p className="">
            Upon request from many participants, we are glad to arrange
            accommodation for all the students who are in need of accommodation.
          </p>
          <p className="">
            Rooms are available from the night of{" "}
            <b className="font-semibold"> 23rd March 2023</b> to the{" "}
            <b className="font-semibold"> 26th March 2023 evening</b>. (no accommodation
            will be provided on the 26th of March night).
          </p>
        </section>
        <section className="lg:w-2/3 w-full">
          <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <Inputfield title="Name" isDisabled valueState={[formData.name]} />
            <Inputfield
              title="Email"
              isDisabled
              valueState={[formData.email]}
            />
            <Inputfield
              title="Kriya ID"
              isDisabled
              valueState={[formData.kriyaId]}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <Inputfield
              title="College"
              isDisabled
              valueState={[formData.college]}
            />
            <Inputfield
              placeholder="Enter your current resident address"
              title="Residential Address"
              valueState={[
                formData.residentialAddress,
                (val) => setFormData({ ...formData, residentialAddress: val }),
              ]}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <Dropdown
              title="Gender"
              valueState={[
                formData.gender,
                (val) => setFormData({ ...formData, gender: val }),
              ]}
              options={["Male", "Female"]}
            />
            <Inputfield
              title="City"
              valueState={[
                formData.city,
                (val) => setFormData({ ...formData, city: val }),
              ]}
            />
            <Inputfield
              title="Phone"
              valueState={[
                formData.phone,
                (val) => setFormData({ ...formData, phone: val }),
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Accomodation;
