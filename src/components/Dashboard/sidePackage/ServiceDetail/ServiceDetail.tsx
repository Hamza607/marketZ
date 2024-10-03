import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import Modal from "@/components/modals/Modal";
import { IoClose } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
interface serviceRequest {
  setServiceRequest: React.Dispatch<React.SetStateAction<string>>;
  serviceRequest: string;
}
const ServiceDetail: React.FC<serviceRequest> = ({ setServiceRequest }) => {
  const [serviceModal, setServiceModal] = useState(false);
  const cardsData = [
    {
      title: "Abandon Entire Package",
      price: "$0.00",
      description:
        "Upon your instruction we will properly dispose of the merchandise including donation to a local charity",
    },
    {
      title: "Advanced Photos",
      price: "$10.00",
      description:
        "Request up to 20 detailed, high-resolution photos of items in the package. Specify which item is to be photographed in note.",
    },
    {
      title: "Inspect Package",
      price: "$7.00",
      description:
        "Have the contents of this package inspected. This process can take 2-3 business days to complete.",
    },
    {
      title: "Return To Sender",
      price: "$7.00",
      description:
        "Have the contents of this package inspected. This process can take 2-3 business days to complete.",
    },
    {
      title: "Split Package",
      price: "$15.00",
      description:
        "Have the contents of this package split into separate packages. This process can take 2-3 business days to complete.",
    },
  ];
  const handelClose = () => {
    setServiceModal(false);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      return;
    }
  };

  return (
    <>
      <div className="p-4">
        <div className="flex items-center">
          <div
            className="my-2 flex items-center cursor-pointer gap-2 text-[#888888] font-semibold w-fit"
            onClick={() => setServiceRequest("")}
          >
            <span>
              <IoIosArrowRoundBack />
            </span>
            <span>Back</span>
          </div>
          <h3 className="text-center my-4 text-2xl w-full mr-20">Services</h3>
        </div>
        <div className="my-4 flex gap-2 flex-wrap">
          {cardsData.map((item, index: number) => {
            return (
              <div
                key={index}
                className="p-2 border border-gray-200 sm:w-[260px]  rounded-md flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[#8888] font-semibold">{item.title}</h3>
                  <CiCircleInfo />
                </div>
                <h2 className="font-bold text-2xl my-2">{item.price}</h2>
                <p className="text-sm text-gray-500 my-2">{item.description}</p>
                <button
                  onClick={() => setServiceModal(true)}
                  className="text-white text-center mt-4 bg-black px-4 w-full rounded-md py-2"
                >
                  Buy
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Modal isOpen={serviceModal} onClose={handelClose}>
        <div className="flex justify-between items-center mb-4">
          <p className="text-[#8888] font-semibold">
            Return the package to sender
          </p>
          <IoClose onClick={handelClose} />
        </div>
        <div className="flex items-center gap-2 mt-2 mb-2">
          <input type="radio" />
          <p className="text-gray-400">Use previously enclosed Return Label</p>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-2">
          <input type="radio" />
          <p className="text-gray-400">Do not have Return Label</p>
        </div>
        <div className="flex items-center gap-2 my-2 ">
          <label
            htmlFor="fileInput"
            className="relative cursor-pointer bg-gray-100 border border-gray-300 rounded-md px-4 py-2 flex items-center"
          >
            <input
              type="file"
              id="fileInput"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleFileChange}
            />
            <FiPaperclip className="w-5 h-5 mr-2" />
            Browse File
          </label>
          <p className="text-gray-400">Do not have Return Label</p>
        </div>

        <label className="font-semibold text-sm">
          Instructions to Marketsz’s Team (optional)
        </label>
        <textarea
          id="myTextarea"
          // value={text}
          // onChange={handleChange}
          className="outline-none border border-gray-200 p-2 w-full"
          rows={4}
          cols={50}
          placeholder="Type here..."
        />
        <div className="flex gap-2 items-center justify-end text-sm">
          <button
            className="px-4 py-2 border border-gray-200 rounded-md text-red-500"
            onClick={handelClose}
          >
            Cancel Service
          </button>
          <button
            onClick={() => setServiceRequest("checkout")}
            className="px-4 py-2 border text-white bg-black border-gray-200 rounded-md"
          >
            Request Service
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ServiceDetail;
