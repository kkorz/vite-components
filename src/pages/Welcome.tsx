import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { ReactEditor, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { emoji } from "@milkdown/plugin-emoji";

function Welcome() {
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, "# Milkdown Editor :heartpulse: Vite React");
      })
      .use(nord)
      .use(commonmark)
      .use(emoji)
  );
  return <ReactEditor editor={editor} />;
}

export default Welcome;
