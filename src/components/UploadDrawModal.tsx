"use client";

import { postDrawing } from "@/actions/loginAction";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

export default function UploadDrawModal({
  username,
}: {
  username: string | null | undefined;
}) {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageurl] = useState("");
  const [description, setDescription] = useState("");
  const [fileItem, setFileItem] = useState<Blob>();

  function handleOpen() {
    setOpen(true);
  }

  function handleChange(e: any) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileName = file.name;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (file) {
      if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
        const src = URL.createObjectURL(file);
        setImageurl(src);
        setFileItem(file);
      } else {
        alert("Only jpg/jpeg and png files are allowed!");
      }
    }
  }

  function publishDrawing() {
    const name = new Date().getTime().toString() + ":" + username;
    alert("publicando..." + name);

    const storageRef = ref(storage, `drawings/${username}/${name}`);
    if (fileItem)
      uploadBytes(storageRef, fileItem).then((snapshot) => {
        console.log(snapshot);
        getDownloadURL(snapshot.ref).then((url) => {
          console.log("File available at", url);
          alert("Posteando...");
          setOpen(!open);
          if (username !== null) postDrawing(username, url, description);
        });
      });
  }

  return (
    <div>
      <button
        className="mx-4 p-2 bg-purple-800 text-white font-bold font-mono hover:bg-purple-600"
        onClick={handleOpen}
      >
        Publicar Dibujo
      </button>
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black bg-opacity-60 fixed z-10 w-screen h-screen top-0 left-0`}
      >
        <div className="bg-white h-2/3 w-2/3 m-auto p-2 flex flex-col items-center">
          <div className="flex h-28 w-full items-center border-b-2 mx-24">
            <p className="font-bold text-center mx-24">
              Publicar nuevo dibujo
            </p>
            <button className="text-red-600 font-bold ml-auto mx-24" onClick={()=> setOpen(!open)}>Cerrar</button>
          </div>

          <label className="m-2 bg-purple-950 p-2 text-white cursor-pointer hover:bg-purple-800">
            <input type="file" className="hidden" onChange={handleChange} />
            Seleccionar dibujo
          </label>
          <img className="object-cover max-h-96 p-2" src={imageUrl} />
          <textarea
            className="h-24 w-80 border-2 border-black bg-background p-2 text-gray-800"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Pon una descripción!"
          ></textarea>
          <button
            onClick={publishDrawing}
            className="mx-4 my-2 p-2 bg-purple-800 text-white font-bold font-mono hover:bg-purple-600"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
