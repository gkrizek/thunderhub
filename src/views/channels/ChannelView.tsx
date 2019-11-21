import React from "react";
import { Channels } from "../../components/channels/channels/Channels";
import { PendingChannels } from "../../components/channels/pendingChannels/PendingChannels";

export const ChannelView = () => {
  return (
    <>
      <Channels />
      <PendingChannels />
    </>
  );
};
