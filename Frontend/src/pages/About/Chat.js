import React, { useEffect } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  toggleMsgLoader,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./ChatWidgetStyles.css";
const Chat = () => {
  useEffect(() => {
    // Initialize chat with a greeting message specific to ration support
    addResponseMessage(
      "Hello! Welcome to Ration Ease. How can we assist you with your ration needs today?"
    );
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);

    // Example response logic
    if (newMessage.toLowerCase().includes("ration")) {
      addResponseMessage(
        "Could you please provide more details about your ration issue?"
      );
    } else if (newMessage.toLowerCase().includes("distribute")) {
      addResponseMessage(
        "I can help with ration distribution queries. What specifically do you need assistance with?"
      );
    } else {
      addResponseMessage(
        "Thank you for your message. Our team will get back to you shortly."
      );
    }
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Ration Support Chat"
      subtitle="We're here to help with your ration needs!"
      className="bg-white shadow-lg rounded-lg border border-gray-200"
    />
  );
};

export default Chat;
