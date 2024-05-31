import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddDataShop.css";

function CustomSelect({ selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState({
    value: "", // เริ่มต้นด้วยค่าว่าง
    label: "โปรดเลือกประเภท", // ข้อความเริ่มต้น
    imgSrc: "", // ไม่มีรูปภาพเริ่มต้น
  });
  const options = [
    {
      value: "Mangswirat",
      label: "Mangswirat",
      imgSrc: "https://img.kapook.com/u/2021/sutasinee/10/62.jpg",
    },
    {
      value: "Halal",
      label: "Halal",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesnG9cxQafqkSXrcrw2ixYsIcGBn20qcm7g&s",
    },
    {
      value: "Vegetarian",
      label: "Vegetarian",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Vegetarian-mark.svg/1200px-Vegetarian-mark.svg.png",
    },
    {
      value: "Nothing",
      label: "Nothing",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Vegetarian-mark.svg/1200px-Vegetarian-mark.svg.png",
    },
  ];
  const selectRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <div className="select-selected" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedOption.imgSrc} alt={selectedOption.label} />{" "}
        {selectedOption.label}
      </div>
      {isOpen && (
        <div className="select-items">
          {options.map((option) => (
            <div key={option.value} onClick={() => handleOptionClick(option)}>
              <img src={option.imgSrc} alt={option.label} /> {option.label}
            </div>
          ))}
        </div>
      )}
      <select
        name="shop_type"
        id="shop_type"
        style={{ display: "none" }}
        value={selectedOption.value}
        onChange={(e) =>
          setSelectedOption(options.find((opt) => opt.value === e.target.value))
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function AddDataShop() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [addShop, setAddShop] = useState({
    pictureshop: "",
    storename: "",
    location: "",
    phone: "",
    onclose: "",
    shop_type: "",
  });
  const [selectedOption, setSelectedOption] = useState({
    value: "Mangswirat",
    label: "Mangswirat",
    imgSrc: "mangswirat.png",
  });
  const [imageURL, setImageURL] = useState("");

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageURL(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setAddShop((prevShop) => ({
        ...prevShop,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    setAddShop((prevShop) => ({
      ...prevShop,
      shop_type: selectedOption.value,
    }));
  }, [selectedOption]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userToken = localStorage.getItem("token");

    if (userToken) {
      const headers = {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      };

      const formData = new FormData();
      formData.append("shop_name", addShop.storename);
      formData.append("shop_location", addShop.location);
      formData.append("shop_phone", addShop.phone);
      formData.append("shop_time", addShop.onclose);
      formData.append("shop_type", addShop.shop_type);
      formData.append("shop_picture", imageURL);

      axios
        .post("http://127.0.0.1:8000/add_shop/", formData, { headers })
        .then((response) => {
          if (response.data.message === "Shop data added successfully") {
            MySwal.fire({
              html: <i>{response.data.message}</i>,
              icon: "success",
            }).then(() => {
              navigate("/Home");
            });
          } else {
            MySwal.fire({
              html: <i>เพิ่มข้อมูลร้านค้าไม่สำเร็จ</i>,
              icon: "error",
            });
          }
        })
        .catch((error) => {
          console.error(error);
          MySwal.fire({
            html: <i>เกิดข้อผิดพลาดในการเพิ่มข้อมูลร้านค้า</i>,
            icon: "error",
          });
        });
    } else {
      MySwal.fire({
        html: <i>โปรดล็อกอิน</i>,
        icon: "warning",
      });
    }
  };

  const handleReset = () => {
    setAddShop({
      pictureshop: "",
      storename: "",
      location: "",
      phone: "",
      onclose: "",
      shop_type: "",
    });
    setSelectedOption({
      value: "Mangswirat",
      label: "Mangswirat",
      imgSrc: "mangswirat.png",
    });
    setImageURL("");
  };

  return (
    <div className="background">
      <div className="flex flex-col justify-center items-center m-10">
        <div className="m-5 text-center">เพิ่มข้อมูลร้านค้า</div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  ชื่อร้าน
                </label>
                <input
                  className="input-style"
                  name="storename"
                  type="text"
                  placeholder="ชื่อร้าน..."
                  value={addShop.storename}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  สถานที่ Map-link
                </label>
                <input
                  className="input-style"
                  name="location"
                  type="text"
                  placeholder="สถานที่..."
                  value={addShop.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  เบอร์โทรศัพท์
                </label>
                <input
                  className="input-style"
                  name="phone"
                  type="text"
                  placeholder="เบอร์โทรศัพท์..."
                  value={addShop.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  วัน,เวลา เปิด-ปิด
                </label>
                <input
                  className="input-style"
                  name="onclose"
                  type="text"
                  placeholder="วัน,เวลา เปิด-ปิด..."
                  value={addShop.onclose}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  ประเภทร้าน
                </label>
                <select >
                <CustomSelect
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  เพิ่มรูปร้านค้า
                </label>
                <input
                  className="p-2 border rounded-md"
                  name="pictureshop"
                  type="file"
                  onChange={handleChange}
                />
                {imageURL && (
                  <img
                    src={imageURL}
                    alt="Shop"
                    className="mt-2 rounded-md shadow-md"
                    style={{ maxWidth: "300px" }}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              ยืนยัน
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDataShop;
