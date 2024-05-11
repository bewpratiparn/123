import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ onChange }) {
  const onDrop = (acceptedFiles) => {
    // เรียกใช้ onChange prop ที่ถูกส่งมาจาก AddDataShop เพื่อส่งไฟล์ที่ถูกเลือกใหม่กลับไป
    onChange(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/png": [".png"] }, // กำหนดให้ Dropzone ยอมรับเฉพาะไฟล์รูปภาพ
    multiple: false, // กำหนดให้ Dropzone รับไฟล์เพียงหนึ่งไฟล์เท่านั้น
  });

  return (
    <div className="containeruploadfile" {...getRootProps()}>
      <input {...getInputProps()} />
    </div>
  );
}

export default Dropzone;
