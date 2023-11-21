"use client";
import Tiptap from "@/components/Tiptap";
import React, { useState } from "react";

const page = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className=" p-10">
      <Tiptap Content={value} onChange={setValue} />
    </div>
  );
};

export default page;
