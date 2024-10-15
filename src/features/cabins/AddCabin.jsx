import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button size="medium" variation="primary">
          Add new Cabin
        </Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button size="medium" variation="primary">
          Show Table
        </Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button
//         variation="primary"
//         size="medium"
//         onClick={() => setIsOpenModal((show) => !show)}
//       >
//         Add new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={()=>setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
