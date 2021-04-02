import styled from "styled-components";
import { Colors } from "../styles";
import { useGuardianApiHook } from "./apiHook";

interface NewsFeedProps {
  feedQuery: string;
}

const FeedList = styled.ol`
  margin: 0;
  padding: 10px 0 10px;
  list-style: none;
`;

const FeedListItem = styled.li`
  counter-increment: feed-counter;
  ::before {
    content: counter(feed-counter);
    color: ${Colors.greyText};
    font-weight: bold;
    margin-right: 10px;
  }
  margin-left: 30px;
`;

export const NewsFeed = ({ feedQuery }: NewsFeedProps) => {
  const { loading, data, error } = useGuardianApiHook(feedQuery);
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Failed to fetch data</>;
  }

  return (
    <FeedList>
      {data?.map((data, index) => (
        <FeedListItem key={`feedItem_${index}`}>{data.webTitle}</FeedListItem>
      ))}
    </FeedList>
  );
};
