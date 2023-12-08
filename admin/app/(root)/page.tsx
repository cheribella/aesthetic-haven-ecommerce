"USE CLIENT";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="Admin" description="description" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
