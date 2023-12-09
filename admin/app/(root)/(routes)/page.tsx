// The following line tells the computer that this file is for the part of the program that runs in the web browser.
"use client";

// Importing a custom hook for managing modal state.
import { useStoreModal } from "@/hooks/user-store-modal";
// Importing the useEffect hook from React.
import { useEffect } from "react";

// We're creating a special page called SetupPage.
const SetupPage = () => {
  // Here, we're using our modal tools to get information about whether a modal is open and a function to open it.
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  // Now, we're using another tool from React, useEffect. It helps us do things when our page is shown or when certain things change.
  useEffect(() => {
    // This part says, "If the modal is not open, let's open it."
    // The '!' means 'not', so !isOpen means 'if it's not open.'
    // If the modal is not open, we call the function onOpen to open it.
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  // This is the content we want to show on our page.
  // It's a simple box with some text saying "Root Page."
  return null;
};

// We're telling the computer that we want to use this SetupPage component in other parts of our program.
export default SetupPage;
