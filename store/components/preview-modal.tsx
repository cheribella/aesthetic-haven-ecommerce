"use client";

import usePreviewModal from "@/hooks/use-preview-modal";

import Gallery from "@/components/gallery";
import Information from "@/components/ui/information";
import Modal from "@/components/ui/modal";

const PreviewModal = ({}) => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if(!product) {
    return null;
  }

  return (
    <div>
      <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
        <div className="items-start grid w-full grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8">
            
            <div className="sm:col-span-4 lg:col-span-5">
                <Gallery images={product.images}/>
            </div>

            <div className='sm:col-span-8 lg:col-span-7'>
                <Information data={product}/>
            </div>

        </div>
      </Modal>
    </div>
  );
};

export default PreviewModal;
