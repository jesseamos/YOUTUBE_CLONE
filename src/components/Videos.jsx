import React from "react";
import Loader from "../components/Loader";
import { Stack, Box } from "@mui/system";
import {VideoCard,ChannelCard} from "./";

const Videos = ({ Videos,direction }) => {
  if(!Videos?.length) return <Loader/>
  return (
    <Stack direction={direction ||"row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {Videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
