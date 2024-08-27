//https://desishub-docs.vercel.app/programming-tutorials/nextjs/novel
'use client'
import React from "react";
import { Editor } from "novel";
import { type Editor as TipTapEditor } from "@tiptap/core";

type NovelEditorProps = {
  setContent: any;
};
export default function NovelEditor({
  setContent
}: NovelEditorProps) {
  return (
    <div>
      <Editor
        defaultValue={{
          type: "doc",
          content: [],
          // content: content as JSONContent[] | undefined,
        }}
        onDebouncedUpdate={(editor?: TipTapEditor) => {
          setContent(editor?.getHTML());
        }}
        disableLocalStorage={true}
        className="rounded-md border shadow-none"
      />
    </div>
  );
}
