import { Box, Button, Typography, styled } from "@mui/material";
import { CommentsContext } from "contexts/CommentsProvider";
import { ChangeEvent, FC, useContext, useMemo, useState } from "react";

interface CommentsSectionProps {
  imageName?: string;
}

const CommentsSection: FC<CommentsSectionProps> = ({ imageName }) => {
  const { comments, addComment, removeComments } = useContext(CommentsContext);
  const [inputValue, setInputValue] = useState("");

  const currentComments = useMemo(
    () => comments.find((item) => item.imageName === imageName)?.comments,
    [imageName, comments]
  );

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setInputValue(e.target.value);

  const onAddPost = () => {
    !!imageName && !!inputValue && addComment(imageName, inputValue);
    setInputValue("");
  };

  const onRemoveComments = () => !!imageName && removeComments(imageName);

  return (
    <Box p={2} display="flex" flexDirection="column" gap={2}>
      <Typography>Add comment: </Typography>
      <TextArea value={inputValue} onChange={onChange} />
      <Box>
        <Button variant="contained" onClick={onAddPost} sx={{ mr: 2 }}>
          Add comment
        </Button>
        <Button variant="contained" onClick={onRemoveComments}>
          Clear all comments
        </Button>
      </Box>
      <Typography variant="h6" fontWeight="bold">
        {`Comments: (${currentComments?.length || 0})`}
      </Typography>
      {currentComments?.length &&
        currentComments.map((item) => (
          <Box key={item}>
            <Typography>Guest:</Typography>
            <Typography>{item}</Typography>
          </Box>
        ))}
    </Box>
  );
};

export default CommentsSection;

const TextArea = styled("textarea")({
  width: "100%",
  height: 100,
  padding: 15,
  boxSizing: "border-box",
});
