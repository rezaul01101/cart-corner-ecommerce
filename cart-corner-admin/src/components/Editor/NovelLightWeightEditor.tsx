"use client";
import { Editor } from "novel-lightweight";

const NovelLightWeightEditor = ({ setContent, title }: any) => {
  return (
    <div className="">
      <Editor
        className="relative min-h-[400px] w-full"
        defaultValue={"Write Product Description"}
        disableLocalStorage={true}
        onUpdate={(editor) => {
          // setContent(editor?.storage.markdown.getMarkdown());
          setContent(editor?.getHTML());
        }}
        handleImageUpload={async (file) => {
          // const uploads = await startUpload([file]);
          // if (uploads && uploads.length > 0) {
          //   return uploads[0].url;
          // }
          return "www.example.com/failed-upload.png";
        }}
      />
    </div>
  );
};

export default NovelLightWeightEditor;
