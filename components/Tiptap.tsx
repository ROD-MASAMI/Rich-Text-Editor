"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import { Heading } from "@tiptap/extension-heading";

interface Props {
  Content: string;
  onChange: (text: string) => void;
}
const Tiptap = (props: Props) => {
  const { Content, onChange } = props;
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: {
          class: " text-xl font-bold",
          levels: [2],
        },
      }),
    ],
    content: Content,
    editorProps: {
      attributes: {
        class: " rounded-md border min-h-[150px] border-input mt-3 ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className=" flex flex-col justify-stretch ">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
