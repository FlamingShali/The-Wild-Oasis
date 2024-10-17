import TableOperations from "./../../ui/TableOperations";
import Filter from "./../../ui/Filter";
const CabinTableOperations = () => {
  return (
    <div>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
    </div>
  );
};

export default CabinTableOperations;
