import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { TextField, Button, alert } from "@nativescript/core";
import { request } from "@nativescript/core/http";

export function LandingPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = () => {
    request({
      url: "http://10.0.2.2:3000/api/contact",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ name, email, message })
    }).then((response) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    }).catch((error) => {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    });
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-3xl font-bold mb-6">Welcome to Our Landing Page</label>
      <label className="text-xl mb-4">Contact Us</label>
      <TextField
        hint="Name"
        text={name}
        onTextChange={(args) => setName(args.object.text)}
        className="mb-4 w-full"
      />
      <TextField
        hint="Email"
        text={email}
        onTextChange={(args) => setEmail(args.object.text)}
        className="mb-4 w-full"
      />
      <TextField
        hint="Message"
        text={message}
        onTextChange={(args) => setMessage(args.object.text)}
        className="mb-4 w-full"
      />
      <Button text="Submit" onTap={handleSubmit} className="-primary" />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});