"use client";
import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Alignment,
  Underline,
  Heading,
  Font,
  BlockQuote,
  Link,
  Table,
  List,
  Strikethrough,
  ListProperties,
  Image,
  ImageInsert,
  ImageResize,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

export default function RichTextEditor({
  data,
  onChange,
}: {
  data: string;
  onChange: (data: string) => void;
}) {
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);
  }, []);

  return (
    <div className="prose w-full max-w-none">
      <style>{`.ck-editor__editable_inline { min-height: 400px; }`}</style>
      {isLayoutReady ? (
        <CKEditor
          onChange={(_, editor) => {
            const html = editor.getData();
            onChange(html);
          }}
          editor={ClassicEditor as any}
          data={data}
          config={{
            licenseKey: "GPL",
            plugins: [
              Heading,
              Essentials,
              Paragraph,
              Bold,
              Italic,
              Alignment,
              Underline,
              Font,
              BlockQuote,
              Link,
              Table,
              List,
              Strikethrough,
              ListProperties,
              Image,
              ImageInsert,
              ImageCaption,
              ImageResize,
              ImageToolbar,
              ImageStyle,
            ],
            toolbar: [
              "heading",
              "|",
              "alignment",
              "fontSize",
              "fontColor",
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "numberedList",
              "bulletedList",
              "|",
              "insertTable",
              "|",
              "imageInsert",
              "|",
              "undo",
              "redo",
            ],
            alignment: {
              options: ["left", "center", "right", "justify"],
            },
            heading: {
              options: [
                {
                  model: "paragraph",
                  title: "Paragraph",
                  class: "ck-heading_paragraph",
                },
                {
                  model: "heading1",
                  view: "h1",
                  title: "Heading 1",
                  class: "ck-heading_heading1",
                },
                {
                  model: "heading2",
                  view: "h2",
                  title: "Heading 2",
                  class: "ck-heading_heading2",
                },
              ],
            },
            fontSize: {
              options: [10, 12, 14, "default", 18, 20, 24, 28, 36],
            },
            list: {
              enableListItemMarkerFormatting: true,

              properties: {
                styles: {
                  listStyleTypes: {
                    bulleted: ["disc", "circle", "square"],
                    numbered: [
                      "decimal",
                      "decimal-leading-zero",
                      "lower-roman",
                      "upper-roman",
                      "lower-latin",
                      "upper-latin",
                    ],
                  },
                },
              },
            },

            language: "vi",
            table: {
              contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },
            image: {
              resizeUnit: "%",
              toolbar: [
                "imageStyle:inline",
                "imageStyle:block",
                "imageStyle:side",
                "|",
                "toggleImageCaption",
                "imageTextAlternative",
                "resizeImage",
              ],
              resizeOptions: [
                {
                  name: "resizeImage:original",
                  label: "Original",
                  value: null,
                },
                {
                  name: "resizeImage:50",
                  label: "50%",
                  value: "50",
                },
                {
                  name: "resizeImage:75",
                  label: "75%",
                  value: "75",
                },
              ],
            },
          }}
        />
      ) : null}
    </div>
  );
}
