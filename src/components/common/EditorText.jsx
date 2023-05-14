import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

const EditorText = (props) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  // console.log(content)
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    // placeholder: placeholder || "Start typings...",
    height: 300,
    limitChars: 2000, 
    limitCharsWarning: "You have entered more than the allowed number of characters.", 

  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      name={props.name}     
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
};

export default EditorText;
