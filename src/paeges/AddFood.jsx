import React from 'react';

function AddFood() {
  return (
    <>
      <div className="flex justify-center items-center-top h-screen bg-gray-100">
        <center>
<from>
  <div>
    <a href=''/>
  </div>
</from>
<div className='text-lg font-medium text-gray-900'>
หน้าแสดงข้อมูลอาหาร 
</div>


          <from>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white" htmlFor="file_input">
                <span className="mr-2">                 
                  <i className="fa fa-image"></i> {<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAABHVJREFUeF7t3Vtu2zAQBVDK/WkD7ynOEhp0P3b2UyRLiLMnI+1PrcKyLAt+BCTv8DHDm58ChUlx5mgo6mV3jn+mM9CZjo7BOQIb3wkITGDjGTAeHiuYwMYzYDw8VjCBjWfAeHisYALjGVh+/7Vyi/2j6/uV67oV3qPxHvp+6/pvL7u/v7dopMkqeEJ1boMOsuH2m93n6wsSfxLg5cPz2hEWcZna7j5fISOo8WUEQ9V2/9achkVsRZDFgIkrizrvDaliOeAfP99ZuWmQiwPzmJsG9tRrUeBxtfyeNsS2ey8LzKk5+d5XFvjhuU8eYeMbKAbM6TnPnlcOmNNzFuFywJyeCZwlA8Y3wgom8N0MQFeyliWm6MOttK7buv3i43Q7bbzQcgjS5J2rNirY4x6p1StqTQCHBFlkZkl4mAiJ/XIYOqbo/eIp5OkGa+fntoH7frv78/YUWiBLQ+fotoEDq3e+I1iZqk0DI8ER2GFvF+ZIIIGdQ3JQ/SILCS7HDhi6Noj5PJKD6oFd5DHY0kraNjBX0ban6GFKC6xiS9V7CN92BY8HLd8greE2Azw6f/kqh0Xc1oDPd4zGu0mzd6B4N+nGEr3+VXTMeYVUm/EOllvsiz4W7Ht4uhU2gb/aGcbFXempn8BSFTvv52LlXvKiCYHlgW8u5kohE1gW+O5KvdRUTWApYI+rZiXuMxNYAtgD97SZ3FM1gVHgANwSyARGgCNwD5vL+QQngRHgwBsZJR4JIvD5gfewB98B3JxTdevA02lN0LQpgDtM1ccveUt6KbNl4KtzVs+Ew18wlnOqbhU49oKEKG6OqbpFYC+kq/PVyBWzzxrOc+bw6erqM60Be+FeVVZC3Glbid6maAk4CHee+JjXX2LKLcVVrlaAo3BjkNA20sgtAKvBTXGVyzqwKtwUq2rLwCpxpZGtAqvGlbzKZRFYPa5kFVsDNoMrhWwJ2ByuxFRtCRg9BTXZnsAmWc9BEZjAdzPAV1cU7BysYAVIyBAJjGRPQVsCK0BChkhgJHsK2hJYARIyRAIj2VPQlsAKkJAhEhjJnoK2BFaAhAyRwEj2FLQlsAIkZIgERrKnoC2BFSAhQyQwkj0FbQmsAAkZIoGR7CloS2AFSMgQCYxkT0FbAitAQoZIYCR7CtoSWAESMkRNwJv5DzsjQbOtXwbyPTYr9L1UfmHxU6cM5AI2+c6Rht0oDzCrt9i+kAUYWSQUy4yRDRPYCOS9MAhM4PsZ8P4+qAzfMmfcKTo8rIIDvrqPx+FoI6ghBHzYsncVH4fJCx0QV3jj3MDhI2SLcr8fHFHB5IrIAHJ4gyuYyBFigU1qAF4Px1f+JclAcWBWcRLXqdMqgImcDrka4AE54Nw4XUps9VwV8FjJPCYL7mPVAZ9iC/qhKsGEWOuqWuAJ+vjrYI+u71fD/3Xd8V/+eWWgemCvKPihJBkQudCRZGTsVCQDBBZJY72dELheG5GREVgkjfV2QuB6bURGRmCRNNbbCYHrtREZGYFF0lhvJwSu10ZkZP8BeHPDlxjndfYAAAAASUVORK5CYII="/>}
                </span>
                เพิ่มรูปภาพ
              </label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
            </div>
          </from>

          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-l font-medium text-gray-900 dark:text-white" htmlFor="first_name">ชื่ออาหาร</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <div>
                <label className="block mb-2 text-l font-medium text-gray-900 dark:text-white" htmlFor="first_name">วัตถุดิบ</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                
              </div>
              </div>
            </div>
          </form>

          <from>
            <div>
              <select className="select select-info w-full max-w-xs">
                <option disabled selected>เพิ่มหมวดการกิน</option>
                <option>เพิ่มมัง</option>
                <option>เพิ่มอาหารเจ</option>
                <option>สัญญาลักษณ์ฮาลาล</option>
              </select>
            </div>
          </from>
          <from>
          <div>
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>เพิ่มหมวดหมู่เจ้าหมาหน้าดำ</option>
              <option>น้ำ</option>
              <option>อาหาร</option>
              <option>ของว่าง</option>
              <option>ของหวาน</option>
            </select>
          </div>
          </from>
          <from>
            <div>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ยืนยัน</button>
          <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ยกเลิก</button>
          </div>
          </from>

        </center>
      </div>
    </>
  );
}

export default AddFood;
