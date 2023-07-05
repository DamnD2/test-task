import { FC, ReactNode, createContext, useState } from "react";
import { CommentsItem } from "types";

export const CommentsContext = createContext<{
  comments: CommentsItem[];
  addComment: (imageName: string, comment: string) => void;
  removeComments: (imageName: string) => void;
}>({
  comments: [],
  addComment: () => undefined,
  removeComments: () => undefined,
});

const CommentsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [comments, setComments] = useState<CommentsItem[]>([]);

  const addComment = (imageName: string, comment: string) => {
    const newCommentsItem: CommentsItem = {
      imageName,
      comments:
        comments.find((item) => item.imageName === imageName)?.comments || [],
    };

    newCommentsItem.comments.push(comment);

    setComments((prev) => {
      const alreadyHasComments = prev.find(
        (item) => item.imageName === imageName
      );

      return alreadyHasComments
        ? prev.map((commentsItem) =>
            commentsItem.imageName === imageName
              ? newCommentsItem
              : commentsItem
          )
        : [...prev, newCommentsItem];
    });
  };

  const removeComments = (imageName: string) =>
    setComments((prev) => prev.filter((item) => item.imageName !== imageName));

  return (
    <CommentsContext.Provider value={{ comments, addComment, removeComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsContextProvider;
