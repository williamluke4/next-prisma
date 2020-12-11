import { Heading, List } from '@chakra-ui/core';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default (props) => {
  const { data: tree } = useSWR('/api/tree', fetcher);
  return (
    <>
      <Heading mt={8} mb={4} fontWeight="800">
        My Songs
      </Heading>
      {tree && JSON.stringify(tree)}
      <List>{tree && tree.stdout}</List>
    </>
  );
};
