import React from "react";
import "./AddDataShop.css";

function AddDataShop() {
  return (
    <>
      <div
        className="flex justify-center items-center-top bk-screen "
        style={{
          backgroundImage:
            "url('')",
        }}
      >
        <center>
          <from>
            <div>
              <a href="" />
            </div>
          </from>
          <div className="text-lg font-medium text-gray-900">
            เพิ่มข้อมูลร้านค้า
          </div>

          <div>
            <label
              htmlFor="file_input"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              <span className="mr-2">
                <i className="fa fa-image"></i>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAABHVJREFUeF7t3Vtu2zAQBVDK/WkD7ynOEhp0P3b2UyRLiLMnI+1PrcKyLAt+BCTv8DHDm58ChUlx5mgo6mV3jn+mM9CZjo7BOQIb3wkITGDjGTAeHiuYwMYzYDw8VjCBjWfAeHisYALjGVh+/7Vyi/2j6/uV67oV3qPxHvp+6/pvL7u/v7dopMkqeEJ1boMOsuH2m93n6wsSfxLg5cPz2hEWcZna7j5fISOo8WUEQ9V2/9achkVsRZDFgIkrizrvDaliOeAfP99ZuWmQiwPzmJsG9tRrUeBxtfyeNsS2ey8LzKk5+d5XFvjhuU8eYeMbKAbM6TnPnlcOmNNzFuFywJyeCZwlA8Y3wgom8N0MQFeyliWm6MOttK7buv3i43Q7bbzQcgjS5J2rNirY4x6p1StqTQCHBFlkZkl4mAiJ/XIYOqbo/eIp5OkGa+fntoH7frv78/YUWiBLQ+fotoEDq3e+I1iZqk0DI8ER2GFvF+ZIIIGdQ3JQ/SILCS7HDhi6Noj5PJKD6oFd5DHY0kraNjBX0ban6GFKC6xiS9V7CN92BY8HLd8greE2Azw6f/kqh0Xc1oDPd4zGu0mzd6B4N+nGEr3+VXTMeYVUm/EOllvsiz4W7Ht4uhU2gb/aGcbFXempn8BSFTvv52LlXvKiCYHlgW8u5kohE1gW+O5KvdRUTWApYI+rZiXuMxNYAtgD97SZ3FM1gVHgANwSyARGgCNwD5vL+QQngRHgwBsZJR4JIvD5gfewB98B3JxTdevA02lN0LQpgDtM1ccveUt6KbNl4KtzVs+Ew18wlnOqbhU49oKEKG6OqbpFYC+kq/PVyBWzzxrOc+bw6erqM60Be+FeVVZC3Glbid6maAk4CHee+JjXX2LKLcVVrlaAo3BjkNA20sgtAKvBTXGVyzqwKtwUq2rLwCpxpZGtAqvGlbzKZRFYPa5kFVsDNoMrhWwJ2ByuxFRtCRg9BTXZnsAmWc9BEZjAdzPAV1cU7BysYAVIyBAJjGRPQVsCK0BChkhgJHsK2hJYARIyRAIj2VPQlsAKkJAhEhjJnoK2BFaAhAyRwEj2FLQlsAIkZIgERrKnoC2BFSAhQyQwkj0FbQmsAAkZIoGR7CloS2AFSMgQCYxkT0FbAitAQoZIYCR7CtoSWAESMkRNwJv5DzsjQbOtXwbyPTYr9L1UfmHxU6cM5AI2+c6Rht0oDzCrt9i+kAUYWSQUy4yRDRPYCOS9MAhM4PsZ8P4+qAzfMmfcKTo8rIIDvrqPx+FoI6ghBHzYsncVH4fJCx0QV3jj3MDhI2SLcr8fHFHB5IrIAHJ4gyuYyBFigU1qAF4Px1f+JclAcWBWcRLXqdMqgImcDrka4AE54Nw4XUps9VwV8FjJPCYL7mPVAZ9iC/qhKsGEWOuqWuAJ+vjrYI+u71fD/3Xd8V/+eWWgemCvKPihJBkQudCRZGTsVCQDBBZJY72dELheG5GREVgkjfV2QuB6bURGRmCRNNbbCYHrtREZGYFF0lhvJwSu10ZkZP8BeHPDlxjndfYAAAAASUVORK5CYII="
                  alt="รูปภาพ"
                  style={{ width: "70px", height: "70px" }} // กำหนดขนาดของรูปภาพ
                />
              </span>
              เพิ่มรูปภาพ
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
                htmlFor="first_name"
              >
                ชื่อร้าน
              </label>
              <textarea
                placeholder="ชื่อร้าน"
                className="textarea-white  text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"
              ></textarea>

              <label
                className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
                htmlFor="first_name"
              >
                สถานที่
              </label>
              <textarea
                placeholder="สถานที่"
                className="textarea-white  text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"
              ></textarea>

              <label
                className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
                htmlFor="first_name"
              >
                เบอร์โทรศัพท์
              </label>
              <textarea
                placeholder="เบอร์โทรศัพท์"
                className="textarea-white text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"
              ></textarea>

              <label
                className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
                htmlFor="first_name"
              >
                map link
              </label>
              <textarea
                placeholder="map link"
                className="textarea-white text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"
              ></textarea>

              <label
                className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
                htmlFor="first_name"
              >
                เวลาเปิด-ปิด
              </label>
              <textarea
                placeholder="เวลาเปิด-ปิด"
                className="textarea-white text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"
              ></textarea>
            </div>
          </div>

          <div>
            <label className="inline-flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-black">เพิ่มมังสวิรัติ</span>
              <img
                src="https://media.istockphoto.com/id/1311125920/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-100-%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%8C-%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C-eco-bio-%E0%B9%81%E0%B8%A5%E0%B8%B0-organic.jpg?s=612x612&w=0&k=20&c=FvYOIGvyyb941-1vz-_s2ZGgOUz-AZMEJ5zW8yFhU5g="
                alt="มังสวิรัติ"
                style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
              />
            </label>
          </div>

          <div>
            <label className="inline-flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-black">เพิ่มอาหารเจ</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-b1-Nxx_cbgUySvFd2emKL8rQwR39810zYZp2U9PMgLXojLNnR8XlPJcUXEEs4ucfq0&usqp=CAU"
                alt="อาหารเจ"
                style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
              />
            </label>
          </div>

          <div>
            <label className="inline-flex items-center  mb-4 ">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-black ">เพิ่มฮาลาน</span>
              <img
                src="https://assets.brandinside.asia/uploads/2017/09/HALAL.jpg"
                alt="ฮาลาน"
                style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
              />
            </label>
          </div>

          <from>
            <div>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ยืนยัน
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ยกเลิก
              </button>
            </div>
          </from>
        </center>
      </div>
    </>
  );
}

export default AddDataShop;
