// Editor supports the following
/*
    1: Simple paragraphs
    2: Heading level 1 (#)
    3: Heading level 2 (##)
    4: Bullet Points   (-)

*/

import { useRef } from "react";
import styles from "./MarkdownEditor.module.css";
import Button from "../button/Button";

const MarkdownEditor = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textAreaSize = textareaRef.current;

    if (textAreaSize) {
      textAreaSize.style.height = "auto";
      textAreaSize.style.height = `${textAreaSize.scrollHeight}px`;
    }
  };

  return (
    <div>
      <h2>Editor</h2>
      <div>
        <Button buttonType="primary" onClick={() => {}}>
          Back to App
        </Button>
        <Button buttonType="secondary" onClick={() => {}}>
          Save
        </Button>
        <Button buttonType="alert" onClick={() => {}}>
          Help
        </Button>
        <Button buttonType="warning" onClick={() => {}}>
          Delete
        </Button>
      </div>
      <form>
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          className={styles.textarea}
        />
      </form>
    </div>
  );
};

export default MarkdownEditor;
