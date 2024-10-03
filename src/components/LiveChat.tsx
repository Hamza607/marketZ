import Link from "next/link";
import Script from "next/script";
import liveChat from "./vendor/live_chat.js";
import { Suspense } from "react";

export default function LiveChatWidget() {
  return (
    <div>
      <Suspense fallback={<span>...Loading Chat</span>}>
        <Script id="live-chat-widget">{`${liveChat()}`}</Script>
      </Suspense>
    </div>
  );
}

export function LiveChatFallback() {
  return (
    <div>
      <p>
        Live chat is currently unavailable.&nbsp;
        <Link
          href="https://www.livechat.com/chat-with/12524322/"
          rel="nofollow"
          className="text-blue-500 underline"
        >
          Chat with us
        </Link>
        , powered by{" "}
        <Link
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
          className="text-blue-500 underline"
        >
          LiveChat
        </Link>
      </p>
    </div>
  );
}
